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

## Confronto generale — differenze, pro e contro

- Ottimalità:
  - `brute_force`: ottimale (esplora tutte le mappature)
  - `brute_force_arcmatch`: ottimale per grafi piccoli, applica pruning ma non sacrifica correttezza
  - `connected_mces`: ottimale rispetto al sottoinsieme connesso (vincola la soluzione)
  - `greedy_path_mces`: euristica, non ottimale

- Scalabilità:
  - peggior: `brute_force` ≈ fattoriale
  - migliore pratica: `greedy_path_mces` (parametrico)
  - intermedio: `brute_force_arcmatch`, `connected_mces` (pruning aiuta ma non elimina l’esponenzialità)

- Quando usare quale:
  - Uso didattico o su grafi molto piccoli (≤8–10 nodi): `brute_force` per dimostrare optimalità.
  - Quando si vuole ancora optimalità ma si cerca pruning efficace: `brute_force_arcmatch`.
  - Se serve che il sottografo conservato sia connesso per motivi applicativi: `connected_mces`.
  - Per dataset più grandi o demo interattive in tempo reale: `greedy_path_mces`.

- Pro/Contro riassuntivi:
  - `brute_force`: + corretto e semplice, - esplosione combinatoria
  - `brute_force_arcmatch`: + molto meno esplosivo in molti casi, + statistiche utili, - overhead di controllo
  - `connected_mces`: + vincolo di connettività selettivo, - potrebbe escludere soluzioni migliori non connesse
  - `greedy_path_mces`: + veloce, adattabile, - soluzione non garantita e sensibile ai parametri

---

## Tabella pro e contro

| Algoritmo | Ottimalità | Pro | Contro |
|---|---:|---|---|
| `brute_force` | Sì | Semplice; garantisce soluzione ottimale | Esplosione combinatoria; non scalabile |
| `brute_force_arcmatch` | Sì (per grafi piccoli) | Pruning efficace; statistiche utili | Ancora esponenziale nel peggior caso; overhead di controllo |
| `connected_mces` | Sì (con vincolo di connettività) | Restituisce sottografi connessi; utile per applicazioni specifiche | Può escludere soluzioni migliori non connesse |
| `greedy_path_mces` | No | Scalabile e veloce; parametrizzabile | Non garantisce ottimalità; qualità dipende dai parametri |

## Confronto sull'ottimalità

| Algoritmo | Garantito ottimale? | Note |
|---|---:|---|
| `brute_force` | Sì | Esplora tutte le mappature; sempre ottimale |
| `brute_force_arcmatch` | Sì (se esplorato completamente) | Il pruning non rimuove soluzioni ottime; la garanzia dipende dall'esplorazione completa dello spazio residuo |
| `connected_mces` | Sì (entro il vincolo di connettività) | Ottimo rispetto al criterio connettività: può però escludere soluzioni globalmente migliori che non sono connesse |
| `greedy_path_mces` | No | Heuristica: può restituire soluzioni subottimali; utile per scalabilità |
