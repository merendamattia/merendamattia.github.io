---
layout: secondary
---

# MCES — Algoritmi inclusi nel progetto

Algoritmi trattati:
- brute_force (brute_force.py)
- brute_force_arcmatch (brute_force_arcmatch.py)
- connected_mces (connected_mces.py)
- greedy_path_mces (greedy_path_mces.py)

---

## Naïve Brute-Force

Descrizione:
Algoritmo che enumera tutte le permutazioni iniettive dei nodi di `graph1` su `graph2`, calcola il numero di archi preservati per ciascuna mappatura e tiene la migliore. Estremamente semplice ma esplode combinatorialmente.

> Nota sulla "mappatura": nel contesto di questi algoritmi, una *mappatura* è una funzione iniettiva che associa ciascun nodo di `graph1` a un nodo distinto di `graph2`. Serve a confrontare le strutture dei due grafi e a valutare quanti archi vengono preservati sotto tale associazione, cioè quanti archi di `graph1` trovano corrispondenza in `graph2` secondo la mappatura scelta.

Pseudocodice:
```
# Pseudocode: Naïve Brute-Force
Input: graph1, graph2
if |V1| > |V2|:
    return empty_solution
best_mapping = {}
best_preserved = 0
for perm in permutations(V2, len(V1)):
    mapping = zip(V1, perm)
    preserved = 0
    for (u, v) in E1:
        if (mapping[u], mapping[v]) in E2:
            preserved += 1
    if preserved > best_preserved:
        best_mapping = mapping
        best_preserved = preserved
return result_with_stats
```

Complessità:
- Tempo: $O(P(\lvert V_2 \rvert,\lvert V_1 \rvert) \cdot \lvert E_1 \rvert)$ dove $P$ indica le permutazioni: in pratica $O\left(\frac{\lvert V_2 \rvert!}{(\lvert V_2 \rvert-\lvert V_1 \rvert)!} \cdot \lvert E_1 \rvert\right)$
- Memoria: $O(\lvert V_1 \rvert)$ per la mappatura temporanea

Pro:
- Semplice, garantisce soluzione ottimale.

Contro:
- Impraticabile su grafi con più di ~8–10 nodi.

---

## Brute-Force con ArcMatch (backtracking + pruning)

Descrizione:
Backtracking che costruisce mappature nodo per nodo; applica pruning basato su controlli di coerenza d'estremità (endpoint-consistency) e una stima ottimistica di quanti archi possono ancora essere preservati (ArcMatch). Tiene statistiche sulle chiamate ricorsive e rami potati.

Pseudocodice:
```
# Pseudocode: Brute-Force con ArcMatch (backtracking + pruning)
Input: graph1, graph2
sort V1, V2
if |V1| > |V2|:
  return empty_solution
best = empty_result
used_targets = set()
current_mapping = {}

function backtrack(i):
  if i == len(V1):
    preserved = preserved_edges(current_mapping)
    update best if preserved >= best.preserved
    return
  node = V1[i]
  for target in V2:
    if target in used_targets: continue
    current_mapping[node] = target
    used_targets.add(target)
    if partial_mapping_consistent(current_mapping) and
       optimistic_upper_bound(current_mapping) > best.preserved:
      backtrack(i+1)
    else:
      increment pruned_branches
    used_targets.remove(target)
    remove current_mapping[node]

backtrack(0)
return best + statistics

function preserved_edges(graph1, graph2, mapping):
  preserved = []
  for (u, v) in graph1.edges:
    if u in mapping and v in mapping:
      mu = mapping[u]
      mv = mapping[v]
      if (mu, mv) in graph2.edges or (mv, mu) in graph2.edges:
        preserved.append((u, v))
  return preserved

function partial_mapping_consistent(mapping, graph1, graph2):
  for (u, v) in graph1.edges:
    if u in mapping and v in mapping:
      mu = mapping[u]
      mv = mapping[v]
      if not ((mu, mv) in graph2.edges or (mv, mu) in graph2.edges):
        return False
  return True

function optimistic_upper_bound(current_mapping, graph1, graph2):
  already_preserved = 0
  potentially_preservable = 0
  mapped = set(current_mapping.keys())
  for (u, v) in graph1.edges:
    if u in mapped and v in mapped:
      mu, mv = current_mapping[u], current_mapping[v]
      if (mu, mv) in graph2.edges or (mv, mu) in graph2.edges:
        already_preserved += 1
    else:
      potentially_preservable += 1
  return already_preserved + potentially_preservable
```

Complessità:
- Peggior caso ancora fattoriale, ma in molti casi vengono tagliati molti rami.

Pro:
- Spesso molto più veloce della enumerazione totale grazie al pruning.
- Mantiene ottimalità (quando esplora tutto lo spazio residuo) per grafi piccoli.

Contro:
- Ancora esponenziale nel peggior caso.
- Overhead di controllo e stima può essere significativo su istanze dove il pruning è debole.

---

## Connected MCES (Backtracking con vincolo di connettività)

Descrizione:
Variante di backtracking che richiede che il sottoinsieme di archi preservati in `graph1` induca un unico componente connesso. Applica pruning simile ad ArcMatch ma, alla soluzione completa, accetta solo quelle con sotto-grafo preservato connesso.

Pseudocodice:
```
# Pseudocode: Connected MCES (backtracking con vincolo di connettività)
Input: graph1, graph2
if |V1| > |V2|:
  return empty_solution

# Backtracking come ArcMatch
function backtrack(i):
  if i == len(V1):
    preserved = preserved_edges(current_mapping)
    if is_connected(subgraph_of(preserved)) and
       len(preserved) >= best.preserved:
      best = current_mapping copy
    return
  node = V1[i]
  for target in V2 not used:
    assign and mark used
    if optimistic_upper_bound(current_mapping) > best.preserved:
      backtrack(i+1)
    else:
      increment pruned_branches
    undo assignment

backtrack(0)
return best + statistics


function preserved_edges(graph1, graph2, mapping):
  preserved = []
  for (u, v) in graph1.edges:
    if u in mapping and v in mapping:
      mu = mapping[u]
      mv = mapping[v]
      if (mu, mv) in graph2.edges or (mv, mu) in graph2.edges:
        preserved.append((u, v))
  return preserved


# is_connected(preserved_edges)
function is_connected(preserved_edges):
  if preserved_edges is empty: return False
  adj = dict()
  for (u, v) in preserved_edges:
    adj.setdefault(u, []).append(v)
    adj.setdefault(v, []).append(u)
  start = preserved_edges[0][0]
  seen = {start}
  stack = [start]
  while stack:
    n = stack.pop()
    for nb in adj.get(n, []):
      if nb not in seen:
        seen.add(nb)
        stack.append(nb)
  nodes_in_preserved = {n for e in preserved_edges for n in e}
  return seen >= nodes_in_preserved


function optimistic_upper_bound(current_mapping, graph1, graph2):
  already_preserved = 0
  potentially_preservable = 0
  mapped = set(current_mapping.keys())
  for (u, v) in graph1.edges:
    if u in mapped and v in mapped:
      mu, mv = current_mapping[u], current_mapping[v]
      if (mu, mv) in graph2.edges or (mv, mu) in graph2.edges:
        already_preserved += 1
    else:
      potentially_preservable += 1
  return already_preserved + potentially_preservable
```

Complessità:
- Analoga al backtracking con pruning, ma il test di connettività aggiunge costo (lineare in dimensione del sotto-grafo preservato).

Pro:
- Utile quando si cerca un sottografo preservato connesso (domini applicativi specifici).
- Riduce lo spazio di soluzioni accettabili (filtra molte soluzioni non connesse).

Contro:
- Potrebbe scartare soluzioni con più archi ma non connesse (se la connettività è un vincolo indesiderato).
- Ancora esponenziale.

---

## Greedy Path-Based Heuristic

Descrizione:
Approccio euristico: cerca cammini semplici corti in `graph1` (lunghezza massima configurabile), prova ad assegnare questi cammini a bersagli disponibili in `graph2` esplorando permutazioni limitate, e applica greedily l'estensione che massimizza il guadagno in archi preservati. Non garantisce ottimalità ma è scalabile.

Pseudocodice:
```
# Pseudocode: Greedy Path-Based Heuristic
Input: graph1, graph2, max_path_len
mapping = {}
preserved_edges = []
available_targets = set(V2)

while there are unmapped nodes:
  best_gain = 0
  best_extension = None
  for start_node in unmapped_nodes:
    paths = enumerate_simple_paths(start_node, max_path_len)
    for path in paths:
      path_nodes = [n for n in path if n not in mapping]
      if len(available_targets) < len(path_nodes): continue
      for perm in limited_permutations(available_targets, len(path_nodes)):
        ext = zip(path_nodes, perm)
        gain = evaluate_new_preserved(ext, mapping)
        if gain > best_gain:
          best_gain = gain
          best_extension = ext
      if early_exit_condition: break
  if best_gain <= 0: break
  apply best_extension to mapping and update preserved_edges

return mapping, preserved_edges, statistics


function enumerate_simple_paths(start_node, max_len, graph1):
  paths = []
  function dfs(path):
    if 1 <= len(path) <= max_len:
      paths.append(copy(path))
    if len(path) == max_len:
      return
    last = path[-1]
    for (u, v) in graph1.edges:
      nb = None
      if u == last and v not in path: nb = v
      if v == last and u not in path: nb = u
      if nb is not None:
        path.append(nb)
        dfs(path)
        path.pop()
  dfs([start_node])
  return paths


# limited_permutations(available_targets, k, max_perms)
function limited_permutations(available_targets, k, max_perms=2000):
  perms = permutations(sorted(available_targets), k)
  return islice(perms, max_perms)


# evaluate_new_preserved(ext_mapping, mapping, graph1, graph2)
function evaluate_new_preserved(ext_mapping, mapping, graph1, graph2):
  combined = mapping.copy()
  combined.update(ext_mapping)
  new_preserved = []
  for (u, v) in graph1.edges:
    if u in combined and v in combined:
      mu, mv = combined[u], combined[v]
      if (mu, mv) in graph2.edges or (mv, mu) in graph2.edges:
        new_preserved.append((u, v))
  return len(new_preserved), new_preserved
```

Complessità:
- Dipende molto da `max_path_len`, dalla soglia di permutazioni campionate e dalla struttura dei grafi; tipicamente polinomiale/parametrica e molto più gestibile di una ricerca esaustiva.

Pro:
- Veloce e scalabile su grafi più grandi.
- Buona scelta pratica quando serve una soluzione rapida da presentare.

Contro:
- Non garantisce ottimalità.
- Qualità dipende da scelta di parametri (lunghezza cammini, numero di permutazioni esplorate).

---

## ILP-R2 (Integer Linear Programming)

Descrizione:
Algoritmo basato sulla programmazione lineare intera (ILP) per risolvere il problema del massimo sottografo comune di archi (MCES). Utilizza una formulazione R2 per massimizzare il numero di archi comuni tra due grafi.

> Nota: L'algoritmo garantisce una soluzione ottimale, ma può essere computazionalmente intensivo su grafi di grandi dimensioni.

Pseudocodice:
```
# Pseudocode: ILP-R2
Input: graph1, graph2
Define ILP problem to maximize preserved edges:
  Variables:
    x[u, v] -> Binary (1 if node u in graph1 maps to node v in graph2)
    z[u1, v2] -> Binary (1 if edge (u1, v2) is preserved)
  Objective:
    Maximize sum of z[u1, v2] / 2
  Constraints:
    - Each node in graph1 maps to at most one node in graph2
    - Each node in graph2 receives at most one node from graph1
    - Topological consistency: neighbors in graph1 map to neighbors in graph2
Solve ILP problem and extract solution:
  Mapping: {u -> v for x[u, v] == 1}
  Preserved edges: [(u, v) for (u, v) in graph1.edges if (mapping[u], mapping[v]) in graph2.edges]
Return mapping, preserved edges, statistics
```

Complessità:
- Tempo: Dipende dalla dimensione del problema ILP e dal solver utilizzato.
- Memoria: Dipende dal numero di variabili e vincoli nel problema ILP.

Pro:
- Garantisce soluzione ottimale.
- Applicabile a grafi di dimensioni moderate.

Contro:
- Computazionalmente intensivo su grafi grandi.
- Richiede un solver ILP efficiente.

---

## Confronto generale — differenze, pro e contro

- Ottimalità:
  - `brute_force`: ottimale (esplora tutte le mappature)
  - `brute_force_arcmatch`: ottimale per grafi piccoli, applica pruning ma non sacrifica correttezza
  - `connected_mces`: ottimale rispetto al sottoinsieme connesso (vincola la soluzione)
  - `greedy_path_mces`: euristica, non ottimale
  - `ilp_r2`: ottimale (utilizza un approccio basato su ILP per garantire la soluzione migliore)

- Scalabilità:
  - peggior: `brute_force` ≈ fattoriale
  - migliore pratica: `greedy_path_mces` (parametrico)
  - intermedio: `brute_force_arcmatch`, `connected_mces` (pruning aiuta ma non elimina l’esponenzialità)
  - dipendente dal solver: `ilp_r2` (scalabilità limitata da dimensione del problema ILP)

- Quando usare quale:
  - Uso didattico o su grafi molto piccoli (≤8–10 nodi): `brute_force` per dimostrare optimalità.
  - Quando si vuole ancora optimalità ma si cerca pruning efficace: `brute_force_arcmatch`.
  - Se serve che il sottografo conservato sia connesso per motivi applicativi: `connected_mces`.
  - Per dataset più grandi o demo interattive in tempo reale: `greedy_path_mces`.
  - Per ottenere una soluzione ottimale su grafi di dimensioni moderate: `ilp_r2`.

- Pro/Contro riassuntivi:
  - `brute_force`: + corretto e semplice, - esplosione combinatoria
  - `brute_force_arcmatch`: + molto meno esplosivo in molti casi, + statistiche utili, - overhead di controllo
  - `connected_mces`: + vincolo di connettività selettivo, - potrebbe escludere soluzioni migliori non connesse
  - `greedy_path_mces`: + veloce, adattabile, - soluzione non garantita e sensibile ai parametri
  - `ilp_r2`: + garantisce soluzione ottimale, - computazionalmente intensivo e dipendente dal solver

---

## Tabella pro e contro

| Algoritmo | Ottimalità | Pro | Contro |
|---|---:|---|---|
| `brute_force` | Sì | Semplice; garantisce soluzione ottimale | Esplosione combinatoria; non scalabile |
| `brute_force_arcmatch` | Sì (per grafi piccoli) | Pruning efficace; statistiche utili | Ancora esponenziale nel peggior caso; overhead di controllo |
| `connected_mces` | Sì (con vincolo di connettività) | Restituisce sottografi connessi; utile per applicazioni specifiche | Può escludere soluzioni migliori non connesse |
| `greedy_path_mces` | No | Scalabile e veloce; parametrizzabile | Non garantisce ottimalità; qualità dipende dai parametri |
| `ilp_r2` | Sì | Garantisce soluzione ottimale; applicabile a grafi di dimensioni moderate | Computazionalmente intensivo su grafi grandi; richiede un solver ILP efficiente |

## Confronto sull'ottimalità

| Algoritmo | Garantito ottimale? | Note |
|---|---:|---|
| `brute_force` | Sì | Esplora tutte le mappature; sempre ottimale |
| `brute_force_arcmatch` | Sì (se esplorato completamente) | Il pruning non rimuove soluzioni ottime; la garanzia dipende dall'esplorazione completa dello spazio residuo |
| `connected_mces` | Sì (entro il vincolo di connettività) | Ottimo rispetto al criterio connettività: può però escludere soluzioni globalmente migliori che non sono connesse |
| `greedy_path_mces` | No | Heuristica: può restituire soluzioni subottimali; utile per scalabilità |
| `ilp_r2` | Sì | Garantisce soluzione ottimale; dipende dalla capacità del solver ILP e dalla dimensione del problema |
