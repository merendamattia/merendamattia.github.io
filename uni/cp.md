---
layout: secondary
---

Questi documenti offrono una panoramica tecnica approfondita sulla **programmazione a vincoli (CP)**, analizzandone i fondamenti teorici, le metodologie di risoluzione e le numerose applicazioni pratiche. I testi esaminano strategie algoritmiche come la **propagazione dei vincoli**, la ricerca **backtracking** e l'uso di tecniche di **local search** per ottimizzare problemi complessi. Viene dato ampio spazio a estensioni avanzate, tra cui i **vincoli soft** per gestire l'incertezza e i **vincoli globali** per modellare strutture specifiche come il problema delle quattro regine o la pianificazione dei percorsi. Gli autori esplorano inoltre l'integrazione della CP in vari linguaggi di programmazione e la sua efficacia in settori critici quali la **bioinformatica**, la **logistica dei trasporti** e la configurazione industriale. In sintesi, le fonti fungono da guida esaustiva per comprendere come i sistemi computazionali possano risolvere problemi decisionali rispettando una serie di **limitazioni logiche e matematiche**.

## Cos'è la Constraint Programming (CP)?
La CP è un paradigma di programmazione dichiarativo che affonda le sue radici nell'Intelligenza Artificiale, ideale per modellare e risolvere problemi combinatori complessi.

### Caratteristiche principali:
*   **Separazione netta:** La modellazione del problema è separata dalla ricerca della soluzione.
*   **Leggibilità:** Il codice è tipicamente molto leggibile e facile da modificare.
*   **Flessibilità:** Non ci sono restrizioni sul tipo di vincoli utilizzabili.
*   **Parallelismo:** La ricerca della soluzione è naturalmente parallelizzabile.
*   **Euristiche:** Le euristiche di ricerca sono cruciali e facili da aggiungere.

---

# Il Futuro della xAI (Explainable AI)
> CP_2025_01B.pdf

## 1. Il Cambiamento Esponenziale e il Fattore Umano
Il documento introduce il contesto tecnologico attuale caratterizzato da una crescita esponenziale.
*   **Legge di Moore:** I progressi delle CPU seguono la legge di Moore (raddoppio ogni 1,5 anni circa).
*   **Risorse di calcolo:** L'aumento delle risorse computazionali ha incrementato esponenzialmente la capacità di apprendimento dell'IA.
*   **Il problema umano:** L'evoluzione umana non è adatta ad adattarsi a fenomeni esponenziali. Sorge quindi la domanda fondamentale: siamo in grado di capire, controllare e prevedere l'IA?.

## 2. Regolamentazione: EU AI ACT
Viene presentata la normativa europea come una pietra miliare per la gestione dell'IA.
*   **Timeline:** Evoluzione dal 2018 al 2023, con piena applicazione dal 2024. È la prima legge mondiale a regolare l'IA con un ambito completo,.
*   **Punti chiave dell'AI ACT:**
    1.  **Definizione di IA:** Stabilisce cosa si intende giuridicamente per Intelligenza Artificiale.
    2.  **Attività proibite:**
        *   Social scoring (punteggio sociale).
        *   Biometria remota.
        *   Metodi subliminali o rivolti a persone fragili.
    3.  **Classificazione basata sul rischio (Risk Based):**
        *   **Alto Rischio:** Applicazioni mediche, legali, e sistemi di scoring (valutazione studenti, finanziaria, CV).

## 3. Intelligenza Artificiale Generativa (Generative AI)
Il documento sottolinea che l'IA Generativa (come ChatGPT, Dall-E, Midjourney) non era esplicitamente inclusa nell'AI Act originale, sollevando nuove problematiche.
*   **Nuovi problemi emersi:**
    *   **Copyright:** Citato il caso di Adobe Firefly (maggio 2023).
    *   **Recupero dati di massa (Bulk data retrieval):** Problemi legati all'addestramento su enormi moli di dati.
    *   **Responsabilità legale:** Chi è responsabile per l'output generato?.
    *   **Embedding:** L'integrazione in altri servizi tramite API (es. GPT4 in Bing).

## 4. Rischi dell'IA Generativa
Vengono analizzati i rischi specifici legati ai modelli generativi:
*   **Bias (Pregiudizi):** L'IA apprende da dataset sbilanciati che riflettono le discriminazioni della nostra società.
    *   *Esempio ChatGPT:* È stato mostrato come ChatGPT fornisca suggerimenti di carriera diversi e stereotipati se l'utente si identifica come uomo (es. Imprenditore, Ingegneria, Finanza) o donna (es. Insegnante, Assistenza e cura, Risorse Umane).
*   **Blackbox (Scatola Nera):**
    *   Gli algoritmi e i dataset di addestramento spesso non sono disponibili (proprietari).
    *   Anche se fossero disponibili, è impossibile analizzare reti addestrate con trilioni di parametri.
*   **Uso improprio:** Utilizzo dell'IA per compiti non regolamentati, come la generazione di Fake News.

## 5. Explainable AI (xAI) - Intelligenza Artificiale Spiegabile
Questa sezione è il cuore teorico del documento e discute la necessità di andare oltre la semplice accuratezza dei modelli.
*   **Il problema dell'accuratezza:** L'alta accuratezza non basta (può andare bene per le immagini, ma per il testo o decisioni critiche no).
*   **Principi Etici:** Per includere l'IA nella catena decisionale umana servono:
    *   Fiducia nel sistema.
    *   Controllo dei Bias.
*   **Metodologie per la xAI:**
    *   **Explainability (Spiegabilità):** Permettere di capire *come/perché* si è ottenuta una certa risposta.
    *   **Transparency & Interpretability (Trasparenza e Interpretabilità):** Possibilità di accedere e comprendere algoritmi e dati.
    *   **Prova Logica:** Su quali basi si ottiene una risposta?.
*   **Direttive:** Necessità di conformità agli standard e miglioramento incrementale.

### Il dilemma della "Native Explainability"
Si pone un quesito fondamentale sulla ricerca futura:
*   Creare una nuova IA per spiegare cosa fa un'altra IA (Blackbox per spiegare Blackbox) riduce l'accuratezza ed è un obiettivo difficilmente realizzabile.
*   **Nuova direzione di ricerca:** Citazione di Cynthia Rudin (2019): *"Smettere di spiegare modelli black box per decisioni ad alto rischio e utilizzare invece modelli interpretabili"* (Native explainability).

## 6. Due percorsi che si uniscono? (Machine Learning vs Symbolic AI)
Il documento conclude confrontando due approcci che potrebbero convergere per risolvere i problemi di spiegabilità:

| Machine Learning (es. ChatGPT) | Symbolic AI (IA Simbolica) |
| :--- | :--- |
| Livello **Sintattico** | Livello **Semantico** |
| Basato sulla probabilità del prossimo token | Relazioni tra oggetti |
| Pattern tipici del linguaggio naturale | Simile alle deduzioni umane |
| Cattura una certa semantica (ma quale?) | **Domanda chiave:** Può spiegare il ML? |

L'IA simbolica (basata su logica e relazioni) potrebbe essere la chiave per fornire la spiegazione e la "prova logica" che manca al Machine Learning puro.

---

# Constraint Optimization Problems (COP)
> CP_2025_02.pdf

## 1. Introduzione ed Esempi Preliminari
Il documento introduce i concetti attraverso esempi classici di problemi combinatori.

*   **Esempio delle 4 Regine (4-Queens):** Il problema consiste nel posizionare 4 regine su una scacchiera $4 \times 4$ in modo tale che nessuna regina possa attaccare le altre (ovvero non devono condividere la stessa riga, colonna o diagonale).

## 2. Definizione di COP (Constraint Optimization Problem)
Un COP è un'estensione del problema di soddisfacimento dei vincoli (CSP) che introduce una funzione obiettivo da ottimizzare.

### Formalizzazione
Un COP è definito da:
1.  Un insieme di **Variabili** $V = \{V_1, \dots, V_n\}$.
2.  Un insieme di **Domini** $D = \{D_1, \dots, D_n\}$, dove ogni variabile $V_i$ assume valori in $D_i$.
3.  Un insieme di **Vincoli** $C$ sulle variabili $V$.
4.  Una **Funzione Obiettivo** $f: D^n \rightarrow A$.

### Obiettivo
L'obiettivo è trovare un assegnamento $\sigma$ (o tutti gli assegnamenti) che sia:
*   Una **soluzione ammissibile** del CSP (soddisfa tutti i vincoli in $C$).
*   Tale da **minimizzare** (o equivalentemente massimizzare) il valore della funzione $f$.

**Nota Importante:** Non ci sono restrizioni teoriche sulla tipologia dei domini, sul tipo di vincoli o sulla natura della funzione $f$.

## 3. Spazio di Ricerca (Search Space)
Dato un problema $\langle X_1 \in D_1, \dots, X_n \in D_n; C \rangle$, lo **spazio di ricerca** è definito come l'insieme di tutte le n-uple di elementi dei domini. È l'insieme di tutte le possibili combinazioni di assegnamenti, all'interno del quale si cercano le soluzioni ammissibili.

## 4. Risoluzione di un COP tramite CSP
È possibile risolvere un problema di ottimizzazione (COP) utilizzando un risolutore progettato per problemi di soddisfacimento (CSP), trasformando l'ottimizzazione in una sequenza di problemi di decisione.

### La tecnica della Bisezione
Supponendo di avere un risolutore "black box" per i CSP, si può modellare un COP come un CSP parametrico $P'$:
$P' = \langle X_1 \in D_1, \dots, X_n \in D_n; C, f(X_1, \dots, X_n) \le k \rangle$

Dove $k$ è un valore target. La procedura è la seguente:
1.  Si stabilisce un **Upper Bound** (limite superiore) $M$ del valore atteso della funzione obiettivo (spesso facile da stimare).
2.  Si utilizza la **bisezione** (ricerca binaria) per trovare il valore minimo.
3.  Il numero di chiamate al risolutore CSP è limitato da $\log_2 M$.

### Esempio Pratico di Bisezione
Supponiamo che il minimo reale sia **15** (valore ignoto a priori) e che il limite superiore sia $M = 205$. La ricerca procede risolvendo una serie di CSP con vincolo $f(X) \le k$:

1.  **$k=205$:** Risolvibile? SÌ.
2.  **$k=102$:** Risolvibile? SÌ.
3.  **$k=51$:** Risolvibile? SÌ.
4.  **$k=25$:** Risolvibile? SÌ.
5.  **$k=12$:** Risolvibile? NO (il vincolo è troppo stretto).

*Deduzione:* Il minimo si trova nell'intervallo. Si prosegue la bisezione in questo intervallo:
6.  Si prova $12 + 6 = 18$ (SÌ).
7.  Si prova $12 + 3 = 15$ (SÌ).
8.  Si prova $12 + 1 = 13$ (NO).

A questo punto il dubbio rimane tra 14 e 15. Una chiamata finale con $k=14$ risolverà l'ambiguità determinando il minimo esatto.

---

# SAT, Local Search e Fondamenti di Propagazione
> CP_2025_03.pdf

## 1. Modellazione Alternativa e NP-Hardness
Il documento inizia discutendo formalizzazioni alternative per problemi classici e la loro complessità.

### Esempio: 4-Regine (Modellazione Booleana)
Oltre alla modellazione standard ($X_i = j$ indica che la regina della colonna $i$ è nella riga $j$), viene proposta una modellazione basata su variabili booleane:
*   **Variabili:** $X_{i,j} \in \{0,1\}$. Se $1$, c'è una regina nella cella $(i,j)$, altrimenti no.
*   **Vantaggio/Svantaggio:** Questa rappresentazione aumenta il numero di variabili e vincoli, rendendo il modello più "verboso" ma utile per introdurre il concetto di SAT.

### NP-Completezza
I CSP (Constraint Satisfaction Problems) possono codificare problemi NP-Hard.
*   **3-Coloring Problem:** Dato un grafo, colorare i nodi con 3 colori in modo che nodi adiacenti abbiano colori diversi. Questo è un classico CSP dove i domini sono $D_i = \{red, green, black\}$ e i vincoli sono disuguaglianze ($X_i \neq X_j$) per ogni arco $(i,j)$.
*   **Sudoku:** Viene presentato come un CSP con vincoli `alldifferent` su righe, colonne e riquadri $3 \times 3$.

## 2. Il Problema SAT (Boolean Satisfiability)
Il corso introduce SAT come un caso specifico di CSP con domini booleani.

### Definizione
Dato un insieme di variabili booleane $X_1, \dots, X_n$ e una formula proposizionale $\Phi$ in **CNF** (Forma Normale Congiuntiva), il problema consiste nel trovare un assegnamento di verità che soddisfi $\Phi$.
*   **CNF:** La formula è una congiunzione ($\wedge$) di clausole.
*   **Clausola:** Una disgiunzione ($\vee$) di letterali.
*   **Letterale:** Una variabile ($X_i$) o la sua negazione ($\neg X_i$).

### Codifica dei Vincoli in SAT
Ogni vincolo CSP può essere tradotto in clausole SAT.
*   **Esempio di traduzione:** Un vincolo come $A \vee \neg B$ (equivalente a $B \rightarrow A$) può essere visto aritmeticamente come $A + (1-B) \ge 1$.
*   **At-least-one (Almeno uno):** Per imporre che almeno una variabile tra $Z_1, \dots, Z_4$ sia vera, si scrive la clausola: $Z_1 \vee Z_2 \vee Z_3 \vee Z_4$.
*   **Mutual Exclusion (Al più uno):** Per imporre che non ci siano due variabili vere contemporaneamente (es. due regine sulla stessa riga), si usano clausole di negazione a coppie: $\neg Z_i \vee \neg Z_j$ per ogni coppia $i \neq j$.

### Formato DIMACS
È lo standard per i file di input dei risolutori SAT:
*   Variabili rappresentate da interi positivi (es. 1, 2, ...).
*   Clausole terminate da `0`.
*   Numeri negativi rappresentano la negazione.

### Algoritmo DPLL
Per risolvere SAT si utilizza l'algoritmo di Davis-Putnam-Logemann-Loveland (DPLL).
*   Si basa su ricerca depth-first (backtracking) assegnando valori di verità.
*   **Unit Propagation (Propagazione Unitaria):** È la forma base di ragionamento. Se esiste una clausola con un solo letterale non assegnato (es. $A \vee \neg B \vee C$, con $A=false, B=true$), l'ultimo letterale ($C$) deve essere forzatamente vero.

## 3. Ricerca Locale (Local Search)
A differenza degli approcci costruttivi (che costruiscono la soluzione passo dopo passo), la ricerca locale parte da un assegnamento completo (spesso casuale e errato) e cerca di ripararlo.

### Funzionamento
1.  Si parte da una configurazione completa.
2.  Si valuta una funzione di costo (es. numero di vincoli violati).
3.  Si effettuano modifiche locali (**swap** o cambio valore) per migliorare la soluzione (es. scambiare due regine per ridurre gli attacchi).

### Problema dei Minimi Locali
L'algoritmo può bloccarsi in un "minimo locale", una configurazione non ottimale dove nessun movimento locale migliora la situazione, ma la soluzione non è stata trovata.

### Meta-euristiche
Per uscire dai minimi locali si usano strategie avanzate:
*   **Monte Carlo / Random Walk:** Introduce mosse casuali.
*   **Simulated Annealing:** Accetta mosse peggiorative con una certa probabilità (che diminuisce nel tempo, analogamente al raffreddamento dei metalli) per sfuggire ai minimi locali.
*   **Tabu Search:** Utilizza una memoria ("Tabu list") per impedire di tornare a configurazioni visitate recentemente ed evitare cicli.

## 4. Constraint Propagation (Propagazione dei Vincoli)
Questa sezione introduce i concetti formali per la riduzione dello spazio di ricerca.

### Constraint Solver
Un risolutore è una procedura che trasforma un CSP $P$ in un CSP equivalente $P'$ più semplice.
*   **Completo:** Trasforma il problema in una forma risolta o prova l'insoddisfacibilità.
*   **Incompleto:** Semplifica il problema ma non garantisce la soluzione diretta; richiede ricerca successiva.

### Regole di Consistenza
Gli algoritmi di propagazione applicano ripetutamente regole di inferenza per rimuovere valori inconsistenti dai domini.
1.  **Node Consistency (Consistenza di Nodo):** Verifica i vincoli unari (che coinvolgono una sola variabile). Ogni valore nel dominio $D_i$ deve soddisfare i vincoli unari su $X_i$. Complessità: $O(cd)$.
2.  **Arc Consistency (Consistenza d'Arco):** Riguarda i vincoli binari. Un arco $(X_i, X_j)$ è consistente se per ogni valore $x \in D_i$ esiste almeno un valore $y \in D_j$ che soddisfa il vincolo binario tra loro.
    *   La complessità standard è $O(ncd^3)$ (dove $n$ variabili, $c$ vincoli, $d$ dimensione dominio).
    *   La propagazione continua finché non si raggiunge un "punto fisso" (fixpoint) in cui non si possono rimuovere altri valori.

### Riepilogo Complessità
*   **Node Consistency:** $O(cd)$
*   **Arc Consistency:** $O(ncd^3)$ (ottimizzabile con algoritmi come AC-4, AC-5, ecc.)

---

# Local Search, Formalizzazione CSP e Constraint Solving
> CP_2025_04.pdf

## 1. Ricerca Locale (Local Search)
Il documento riprende il concetto di Ricerca Locale applicato ai CSP, utilizzando il problema delle 4 Regine come caso di studio principale.

### Meccanismo di base
*   **Approccio:** Si parte da una configurazione completa (assegnamento di tutte le variabili) e si effettuano modifiche locali per migliorare la soluzione.
*   **Esempio 4-Regine:**
    *   Si osserva una scacchiera con 4 regine.
    *   Si calcola il numero di conflitti (coppie di regine che si attaccano).
    *   Si esegue una mossa "swap" (scambio) tra due righe o colonne (es. `swap(1,2)`) per ridurre il numero di attacchi.
    *   **Problema:** Non ogni scelta migliora la situazione (riduce le violazioni). È possibile rimanere bloccati in **minimi locali** dove nessuna mossa vicina migliora la funzione obiettivo.

### Meta-euristiche Principali
Per superare i minimi locali e i cicli, vengono utilizzate strategie avanzate:
1.  **Monte Carlo:** Descritto come una sorta di *Simulated Annealing* con temperatura fissa e parametro $F = 0.5$. Il nome deriva dai lavori degli anni '40 di Ulam, Fermi e Von Neumann a Los Alamos,.
2.  **Tabu Search:** Simile al Simulated Annealing, ma utilizza una memoria esplicita (**Tabu list**) che memorizza le ultime $k$ soluzioni visitate per evitare di tornare su configurazioni recenti e creare cicli,.

## 2. Formalizzazione del CSP (Constraint Satisfaction Problem)
Questa sezione fornisce le definizioni formali necessarie per trattare i vincoli in modo rigoroso, indipendentemente dalla sintassi specifica.

### Definizioni
*   **Variabili e Domini:** Un insieme di variabili $V = \{V_1, \dots, V_n\}$ con domini $D = \{D_1, \dots, D_n\}$.
*   **Vincoli:** Un insieme $C$ di vincoli. Un vincolo $c \in C$ su un sottoinsieme di variabili $V_{i_1}, \dots, V_{i_m}$ è una relazione, ovvero un sottoinsieme del prodotto cartesiano dei domini coinvolti ($c \subseteq D_{i_1} \times \dots \times D_{i_m}$).
*   **Soluzione:** Un assegnamento $\sigma: V \to D_1 \cup \dots \cup D_n$ tale che per ogni $i$, $\sigma(V_i) \in D_i$ e per ogni vincolo $c$, la tupla di valori assegnati appartiene alla relazione del vincolo.

### Esempio Estensionale (4-Regine)
Il documento mostra come i vincoli possano essere rappresentati come insiemi di tuple ammissibili.
*   Per le 4 regine, i vincoli di non attacco (diagonale e riga/colonna) escludono specifiche coppie. Ad esempio, se $i=2$ e $j=4$, le coppie $(2,2)$ e $(2,4)$ non sono ammesse.

## 3. Constraint Solving (Risoluzione dei Vincoli)
Viene introdotto il concetto teorico di "Risolutore".

### Cos'è un Constraint Solver?
È una procedura che trasforma un CSP $P$ in un CSP equivalente $P'$ (che ha le stesse soluzioni sui variabili originali).
*   **Solver Completo:** Trasforma $P$ in una forma risolta (disgiunzione finita di CSP semplici) o prova che è insoddisfacibile (restituisce *false*),.
*   **Solver Incompleto:** Trasforma $P$ in un CSP più semplice ma non garantisce che la soluzione sia esplicita; spesso richiede ulteriore ricerca.

### Regole di Prova (Proof Rules)
I solver si basano sull'applicazione ripetuta di regole di trasformazione nella forma:
$ \phi \to \psi $.
Dove $\phi$ e $\psi$ sono CSP. La regola preserva l'equivalenza, cioè $Sol(\phi) = Sol(\psi)|_{vars(\phi)}$ (le soluzioni sono identiche se ristrette alle variabili originali, poiché $\psi$ potrebbe introdurre nuove variabili ausiliarie),.

## 4. Propagazione dei Vincoli (Constraint Propagation)
Questa è la parte centrale per l'efficienza dei risolutori moderni.

### Regole di Riduzione del Dominio
Le regole sfruttano i vincoli per rimuovere valori dai domini che non possono far parte di una soluzione. Hanno la forma:
$\langle C; D_{in} \rangle \to \langle C^\prime; D^\prime_{in} \rangle$
Dove $D^\prime_{in}$ implica che i nuovi domini sono sottoinsiemi dei precedenti ($D^\prime_i \subseteq D_i$).

### Regole di Trasformazione
A volte è necessario trasformare la struttura del problema introducendo nuove variabili.
*   **Esempio:** Un vincolo di disuguaglianza $e_1 \neq e_2$ può essere trasformato introducendo una variabile $X$:
    $ \langle e_1 \neq e_2; D \rangle \to \langle X = e_1, X \neq e_2; D, X \in Z \rangle $
    Questo spiega perché l'equivalenza è definita rispetto alle variabili originali.

## 5. Complessità degli Algoritmi di Consistenza
Il documento conclude con un riepilogo delle complessità computazionali per gli algoritmi di consistenza base (fondamentali per l'esame).
Siano $n$ le variabili, $c$ i vincoli, e $d$ la dimensione massima del dominio.

*   **Node Consistency (Consistenza di Nodo):** Verifica i vincoli unari. Complessità: **$O(cd)$**.
*   **Arc Consistency (Consistenza d'Arco):** Verifica i vincoli binari. Complessità standard: **$O(ncd^3)$**.

**Nota finale:** Le regole di consistenza d'arco riducono solo i domini; l'ordine di applicazione non importa per il risultato finale (si raggiunge un unico *fixpoint*). Esistono algoritmi ottimizzati come AC-4, AC-5, ecc., che migliorano queste prestazioni.

---

# Propagazione Avanzata e Consistenza
> CP_2025_05.pdf

## 1. Hyper Arc Consistency (HAC)
L'Hyper Arc Consistency è la generalizzazione della consistenza d'arco per vincoli non binari (ovvero vincoli che coinvolgono più di due variabili).

### Definizione e Regole
Un CSP è Hyper Arc Consistent se, per ogni vincolo $C$ sulle variabili $X_1, \dots, X_m$, e per ogni variabile $X_i$ nel suo scopo, ogni valore nel dominio $D_i$ può essere esteso a una tupla completa che soddisfa $C$.

La consistenza viene ottenuta applicando ripetutamente le regole $HAC_i$ (per $i = 1, \dots, m$):
$ \langle C; D_1, \dots, D_i, \dots, D_m \rangle \to \langle C; D_1, \dots, D^\prime_i, \dots, D_m \rangle $

Dove il nuovo dominio $D^\prime_i$ è definito come:
$ D^\prime_i = \{ a_i \in D_i : (\exists a_1 \in D_1) \dots (\exists a_{i-1} \in D_{i-1}) (\exists a_{i+1} \in D_{i+1}) \dots (\exists a_m \in D_m) (\langle a_1, \dots, a_m \rangle \in C) \} $
In pratica, si rimuovono dal dominio $D_i$ i valori che non fanno parte di nessuna soluzione valida locale per il vincolo $C$.

## 2. Path Consistency (Consistenza di Cammino)
La Path Consistency è una forma di inferenza più forte della consistenza d'arco, che lavora su triangoli di variabili per inferire nuovi vincoli o restringere quelli esistenti.

### Normalizzazione del CSP
Prima di applicare la Path Consistency, è utile normalizzare il CSP.
*   **Intersezione:** Se esistono due vincoli $C_1$ e $C_2$ sullo stesso insieme di variabili (stesso schema), essi possono essere sostituiti da un unico vincolo $C' = C_1 \cap C_2$.
*   **Standardizzazione:** Un CSP può essere reso "standard" aggiungendo il vincolo universale (prodotto cartesiano dei domini) su tutte le coppie di variabili che non hanno un vincolo esplicito. Questo permette di trattare uniformemente tutte le coppie di variabili.

**Nota sulla soddisfacibilità:** Durante la fase di riscrittura e normalizzazione, è possibile rilevare l'insoddisfacibilità del problema forzando la consistenza d'arco.

### Operazioni su Relazioni
Per definire le regole di Path Consistency, si utilizzano operazioni sulle relazioni binarie:
*   **Trasposta ($R^T$):** $\{(b, a) : (a, b) \in R\}$.
*   **Composizione ($RS$):** $\{(a, b) : \exists c ((a, c) \in R \land (c, b) \in S)\}$. La composizione permette di dedurre una relazione diretta tra due variabili passando per una terza variabile intermedia.

### Regole di Prova (Proof Rules) per Path Consistency
La Path Consistency applica regole di triangolazione su terne di variabili $X, Y, Z$. Le regole aggiornano i vincoli diretti tra le coppie basandosi sui percorsi alternativi.
Le regole principali sono:

1.  **PC1 (Aggiornamento $X,Y$):**
    $ C^\prime(X, Y) = C(X, Y) \cap (C(X, Z) \cdot C(Y, Z)^T) $
    Il vincolo tra $X$ e $Y$ viene ristretto intersecandolo con la composizione dei vincoli che passano per $Z$.

2.  **PC2 (Aggiornamento $X,Z$):**
    $ C^\prime(X, Z) = C(X, Z) \cap (C(X, Y) \cdot C(Y, Z)) $

3.  **PC3 (Aggiornamento $Y,Z$):**
    $ C^\prime(Y, Z) = C(Y, Z) \cap (C(X, Y)^T \cdot C(X, Z)) $

### Complessità
La complessità computazionale per applicare la Path Consistency su un grafo con $v$ variabili e dimensione massima del dominio $d$ è:
$ O(v^4 d^5) $
Questo costo è significativamente più alto rispetto alla consistenza d'arco ($O(ncd^3)$), il che ne limita l'uso pratico su problemi di grandi dimensioni.

## 3. k-Consistency
Il documento introduce il concetto di **k-consistenza** come generalizzazione delle nozioni precedenti:
*   **1-consistency:** Node Consistency.
*   **2-consistency:** Arc Consistency.
*   **3-consistency:** Path Consistency.
*   **k-consistency:** Un problema è k-consistente se qualsiasi assegnamento consistente di $k-1$ variabili può essere esteso a una $k$-esima variabile.

## 4. Algoritmi di Ricerca e Storia (DPLL)
Il documento fa riferimento alla storia degli algoritmi di risoluzione per problemi logici e SAT, fondamentali per capire i moderni risolutori.

### L'algoritmo di Davis-Putnam (DP) vs DPLL
*   **DP (1960):** Martin Davis e Hilary Putnam proposero una procedura di calcolo per la teoria della quantificazione. Inizialmente basata sulla risoluzione e sull'espansione delle clausole.
*   **DPLL (1962):** Davis, Logemann e Loveland migliorarono l'approccio.
    *   **Problema di memoria:** L'approccio originale saturava rapidamente la memoria disponibile (all'epoca 32K parole di 36 bit su un IBM 704).
    *   **Innovazione (Splitting Rule):** Logemann suggerì di sostituire la regola di espansione con una **regola di splitting** (divisione). Questo portò alla ricerca **Depth-First Search (DFS)**. Invece di aggiungere clausole, l'algoritmo assegna un valore, salva lo stato (ambiente) e, in caso di fallimento, effettua il **backtracking** recuperando l'ambiente.

### Unit Propagation (Propagazione Unitaria)
Una componente chiave del DPLL è la *Unit Propagation*.
*   Se una clausola è unitaria (ha un solo letterale non assegnato, es. $X_1 \lor \neg X_2 \lor X_3$ con $X_1=0, X_2=1$), l'ultimo letterale ($X_3$) deve essere forzatamente vero.
*   Questo permette di inferire valori in modo deterministico e ridurre lo spazio di ricerca.

### Esempio di Traccia di Esecuzione
Il documento contiene tracce di esecuzione di algoritmi di ricerca (probabilmente Branch and Bound o DPLL su CSP), mostrando nodi di decisione (es. $W=1, C=1$) e nodi di fallimento ("fail node") dove i vincoli non sono soddisfatti o il bound non è rispettato (es. $26 < 28$).

---

# Modellazione e Risoluzione con MiniZinc
> CP_2025_06.pdf

## 1. Panoramica su MiniZinc
MiniZinc è un linguaggio di modellazione di alto livello per problemi di vincoli, sviluppato e mantenuto dalle Università di Monash e Melbourne.

*   **Scopo:** Permette di definire modelli di Constraint Programming in modo indipendente dal risolutore sottostante.
*   **Risorse:** Il software è scaricabile dal sito ufficiale minizinc.org.
*   **Competizioni:** Dal 2008 viene organizzata annualmente la "MiniZinc Challenge" per confrontare le prestazioni dei vari risolutori e tecniche.

## 2. Il Processo di Risoluzione (Pipeline)
Il flusso di lavoro standard per risolvere un problema scritto in MiniZinc prevede diversi passaggi di traduzione:

1.  **Modello MiniZinc (`.mzn`):** Il codice sorgente scritto dall'utente.
2.  **Traduzione a FlatZinc:** Il modello viene compilato tramite il tool `mzn2fzn` (o `minizinc -c`).
3.  **FlatZinc (`.fzn`):** È una versione "srotolata" (unfolded) del modello MiniZinc. Consiste fondamentalmente in una sequenza di vincoli semplici (piatti), privi di costrutti di alto livello come cicli o array complessi.
4.  **Risolutore:** I moderni risolutori di vincoli leggono in input il file FlatZinc per trovare le soluzioni.

## 3. Strategie di Ricerca (Search Strategies)
Una parte fondamentale per l'efficienza della risoluzione è la definizione di **annotazioni di ricerca**. MiniZinc permette di specificare come esplorare l'albero di ricerca attraverso due scelte principali: quale variabile istanziare e quale valore assegnare/escludere,.

### A. Scelta della Variabile (`varchoice`)
Queste euristiche determinano l'ordine in cui le variabili vengono selezionate per l'assegnamento,:

*   **input_order:** Cerca le variabili nell'ordine in cui sono dichiarate/fornite.
*   **occurrence:** Sceglie la variabile con il maggior numero di vincoli collegati.
*   **first_fail:** Sceglie la variabile con il dominio più piccolo (euristica standard per fallire prima possibile e ridurre l'albero).
*   **anti_first_fail:** Sceglie la variabile con il dominio più grande.
*   **most_constrained:** Sceglie la variabile con il dominio più piccolo; in caso di parità, usa il numero di vincoli collegati (rompe i pareggi usando `occurrence`).
*   **dom_w_deg:** Sceglie la variabile con il dominio più grande, diviso per il numero di vincoli collegati pesati in base a quanto spesso hanno causato un fallimento (euristica moderna molto efficace).
*   **impact:** Sceglie la variabile con il più alto impatto registrato finora durante la ricerca.
*   **max_regret:** Sceglie la variabile con la più grande differenza tra i due valori più piccoli nel suo dominio (regret).
*   **smallest / largest:** Sceglie la variabile che contiene il valore più piccolo (o più grande) nel suo dominio.

### B. Scelta del Valore (`constrainchoice`)
Una volta selezionata la variabile, queste euristiche decidono come assegnare o restringere il dominio,,:

*   **indomain:** Assegna i valori in ordine ascendente.
*   **indomain_interval:** Se il dominio consiste in più intervalli contigui, lo riduce al primo intervallo.
*   **indomain_reverse_split:** Bisezione del dominio, escludendo prima la metà inferiore.
*   **indomain_split:** Bisezione del dominio, escludendo prima la metà superiore.
*   **indomain_split_random:** Bisezione del dominio, selezionando casualmente quale metà escludere per prima.
*   **outdomain_max:** Esclude il valore più grande dal dominio (prova gli altri).
*   **outdomain_median:** Esclude il valore mediano dal dominio.
*   **outdomain_min:** Esclude il valore più piccolo dal dominio.
*   **outdomain_random:** Esclude un valore casuale dal dominio.

> **Nota per l'esame:** È importante ricordare che le strategie possono essere combinate. A volte si hanno opzioni aggiuntive, come specificare che il dominio è `all_different`.

## 4. Sintassi e Modellazione
Il documento accenna ad alcuni elementi sintattici chiave:

*   **Tipizzazione:** Variabili e parametri (costanti) sono tipizzati.
*   **Predicati:** È possibile definire predicati personalizzati con la sintassi:
    `predicate foo(int: x,...) = ... ;` dove `x` è un parametro,.

## 5. Esempi di Problemi Noti
Il corso utilizza diversi problemi classici per illustrare la modellazione in MiniZinc. È probabile che all'esame venga chiesto di riconoscere o scrivere parti di questi modelli,:

1.  **N-Queens:** Posizionare N regine senza che si attacchino.
2.  **Send More Money:** Un classico problema di crittoaritmetica.
3.  **WrongWrongRight:** Probabilmente un puzzle logico o di soddisfacimento.
4.  **Latin Square:** Griglia n x n dove ogni simbolo appare una volta per riga e colonna.
5.  **Magic Square:** Quadrato magico (somme di righe, colonne e diagonali uguali).
6.  **Sudoku:** Variazione del Latin Square con vincoli aggiuntivi sui sottogruppi 3x3.

---

# Strategie di Ricerca e Sintassi in MiniZinc
>  CP_2025_08.pdf (Ottimizzazione del processo di risoluzione e modellazione avanzata)

## 1. Strategie di Ricerca (Search Annotations)
In MiniZinc, è possibile guidare il solver su come esplorare l'albero di ricerca specificando l'ordine di scelta delle variabili e dei valori. Questo è cruciale per l'efficienza della risoluzione.

### A. Scelta della Variabile (`varchoice`)
Queste annotazioni determinano quale variabile deve essere istanziata per prima durante la ricerca:

*   **input_order:** Seleziona le variabili nell'ordine esatto in cui sono state dichiarate o fornite nel modello.
*   **occurrence:** Sceglie la variabile che ha il maggior numero di vincoli collegati ad essa.
*   **first_fail:** Sceglie la variabile con il dominio più piccolo. È una delle strategie più comuni per provocare fallimenti (e quindi pruning dell'albero) il prima possibile.
*   **anti_first_fail:** Sceglie la variabile con il dominio più grande.
*   **most_constrained:** Sceglie la variabile con il dominio più piccolo; in caso di parità (stessa dimensione del dominio), rompe la parità scegliendo quella con più vincoli collegati.
*   **dom_w_deg:** Sceglie la variabile basandosi sul rapporto tra la dimensione del dominio e il "peso" dei vincoli. Nello specifico, il documento indica che sceglie la variabile con il dominio più grande diviso per il numero di vincoli collegati, pesati in base a quanto spesso hanno causato un fallimento.
*   **impact:** Sceglie la variabile che ha registrato il più alto impatto durante la ricerca fino a quel momento.
*   **max_regret:** Sceglie la variabile con la più grande differenza tra i due valori più piccoli presenti nel suo dominio (regret).
*   **smallest / largest:** Sceglie la variabile che contiene, rispettivamente, il valore più piccolo o più grande nel suo dominio corrente.

### B. Scelta del Valore (`constrainchoice`)
Una volta selezionata una variabile, queste annotazioni determinano quale valore assegnare o come restringere il dominio:

*   **indomain_reverse_split:** Divide il dominio (bisezione) ed esclude prima la metà inferiore.
*   **indomain_split:** Divide il dominio ed esclude prima la metà superiore.
*   **indomain_split_random:** Divide il dominio e sceglie casualmente quale delle due metà escludere per prima.
*   **outdomain_max:** Esclude dal dominio il valore massimo (prova prima gli altri).
*   **outdomain_median:** Esclude dal dominio il valore mediano.
*   **outdomain_min:** Esclude dal dominio il valore minimo.
*   **outdomain_random:** Esclude dal dominio un valore casuale.

## 2. Sintassi MiniZinc
Il documento fornisce dettagli sulla definizione di predicati personalizzati, utili per incapsulare logica di modellazione riutilizzabile.

*   **Definizione di Predicato:**
    La sintassi per definire un predicato è la seguente:
    ```minizinc
    predicate foo(int: x, ...) = ... ;
    ```
    Dove `foo` è il nome del predicato e `x` rappresenta un parametro tipizzato (in questo esempio un intero),.

## 3. Esempi di Codifiche (Encodings)
Il documento elenca specifici problemi classici che sono stati o saranno trattati come esempi di modellazione in MiniZinc. È fondamentale conoscere questi modelli per l'esame:

1.  **Send More Money:** Problema di crittoaritmetica.
2.  **WrongWrongRight:** Probabile puzzle logico.
3.  **Latin Square:** Griglia $n \times n$ con simboli unici per riga e colonna.
4.  **Magic Square:** Quadrato magico (somme costanti su righe, colonne e diagonali).
5.  **Sudoku:** Esercizio di gruppo citato nel documento.

---

# Modellazione CSP dei Codici di Hamming
> CP_2025_10.pdf

## 1. Introduzione ai Codici di Hamming
Il documento introduce i codici di Hamming come concetto fondamentale per la correzione degli errori nelle trasmissioni digitali.

*   **Il Problema della Trasmissione:** Quando si comunicano dati (ad esempio parole da 8 bit/Bytes), è possibile che avvengano errori nella trasmissione dei bit.
    *   Se cambia anche solo un bit, il ricevitore ottiene un'informazione errata (es. il carattere 'A' diventa 'C' o 'B').
*   **Parity Check (Controllo di Parità):** È un metodo ingenuo per rilevare errori.
    *   Permette di rilevare un singolo errore.
    *   **Limiti:** Non è in grado di correggere l'errore e fallisce se ci sono due errori (l'errore non viene rilevato).

## 2. Il Problema CSP: Hamming Codes
L'obiettivo è modellare la generazione di codici robusti come un Problema di Soddisfacimento di Vincoli (CSP).

### Definizione del Problema
Dati tre numeri interi $n$, $k$ e $d$, il problema consiste nel trovare un insieme di parole (un codice) con le seguenti caratteristiche:
1.  **Dimensione del codice:** Il codice deve contenere $k$ parole distinte.
2.  **Struttura delle parole:** Ogni parola è un vettore di bit di lunghezza $n$.
3.  **Vincolo di Distanza:** La **distanza di Hamming** minima tra una qualsiasi coppia di parole nel codice deve essere almeno $d$.

*Nota per lo studio:* La distanza di Hamming tra due stringhe di uguale lunghezza è il numero di posizioni nelle quali i simboli corrispondenti sono diversi. In un CSP, questo si traduce nel vincolare che due vettori differiscano in almeno $d$ elementi.

### Esempio Applicativo
Il documento cita un esempio pratico di utilizzo di questi codici in ambito industriale, specificamente nelle acciaierie ("steel plants"), dove è necessario leggere codici visivi (come sensori o marcatori) in ambienti difficili, richiedendo quindi una forte capacità di correzione degli errori per identificare correttamente i numeri (es. il numero 5 mostrato nella slide).

## 3. Elementi per la Modellazione (MiniZinc)
Sebbene il codice specifico non sia presente nell'estratto, per l'esame è utile prepararsi a come tradurre la definizione formale sopra in un modello MiniZinc:
*   **Parametri:** `int: n;`, `int: k;`, `int: d;`.
*   **Variabili:** Un array bidimensionale di variabili decisionali booleane (o 0..1), ad esempio `array[1..k, 1..n] of var 0..1: code;`.
*   **Vincoli:** Un vincolo su ogni coppia di righe $i$ e $j$ (con $i < j$) tale per cui la somma delle differenze assolute (o XOR) tra gli elementi sia $\ge d$.

---

## Predizione della Struttura delle Proteine
> CP_2025_11.pdf e CP_2025_12.pdf

*   **Definizione del Problema (HIP):** Il problema dell'*Haplotype Inference by Pure Parsimony* consiste nel trovare un insieme $H$ di aplotipi che spieghi un dato insieme $G$ di genotipi osservati.
*   **Obiettivo:** Trovare l'insieme $H$ di cardinalità minima ($\vert H \vert = k$) che soddisfi la condizione.

*   **Contesto Biologico:** Il problema nasce dallo studio degli organismi diploidi (come gli animali), che possiedono coppie di cromosomi quasi identici, uno ereditato dal padre e uno dalla madre.
*   **Definizioni:**
    *   Un **aplotipo** è una sequenza di DNA ereditata da un singolo genitore.
    *   Un **genotipo** è costituito dalla coppia di due aplotipi corrispondenti.
*   **Il Problema:** Mentre è economico e facile ottenere la sequenza del genotipo, è necessario utilizzare metodi computazionali per indovinare gli aplotipi originali. Questo processo è chiamato *Haplotype Inference* ed è fondamentale per investigare le variazioni genetiche in una popolazione e l'ereditarietà.
*   **Single Nucleotide Polymorphism (SNP):** L'analisi si concentra spesso su posizioni specifiche del genoma dove le basi sono soggette a mutazioni (SNP).
    *   Per modellare il problema, le basi vengono codificate numericamente (es. A $\to$ 0, C $\to$ 0, G $\to$ 1, T $\to$ 1).
    *   Se in una coppia di aplotipi le basi sono uguali (0-0 o 1-1), il genotipo risultante è rispettivamente 0 o 1. Se c'è una discrepanza (0-1 o 1-0), il genotipo viene indicato con 2.
*   **Obiettivo del CSP:** Dato un insieme di genotipi, l'obiettivo è trovare un insieme di aplotipi che possa spiegare tali genotipi. Poiché i genotipi sono introdotti durante l'evoluzione, è ragionevole cercare l'insieme **minimale** di aplotipi necessario a spiegare i dati osservati (principio della *Pure Parsimony*).
*   **Complessità:** Il problema di trovare tale insieme minimale (Haplotype Inference by Pure Parsimony - HIP) è **NP-completo**.

### A. Il Dogma Centrale della Biologia Molecolare
Il documento introduce i concetti biologici fondamentali necessari per modellare il problema:
*   **Flusso dell'informazione:** DNA $\to$ (trascrizione) $\to$ mRNA $\to$ (traduzione) $\to$ Proteina.
*   **Traduzione:** L'mRNA viene letto a triplette (codoni) per produrre una catena di amminoacidi.
*   **Amminoacidi:** Esistono 20 tipi di amminoacidi comuni (rappresentati dalle lettere $A, \dots, Z$ eccetto $B,J,O,U,X,Z$). La sequenza lineare di questi amminoacidi costituisce la **Struttura Primaria** della proteina,.

### B. Il Problema del Protein Folding (Ripiegamento)
Le proteine non rimangono catene lineari, ma si ripiegano in strutture 3D complesse che ne determinano la funzione.
*   **Struttura Terziaria:** È la posizione spaziale esatta di ogni amminoacido.
*   **Fatto fondamentale:** Una stessa proteina si ripiega sempre nello stesso modo (struttura nativa).
*   **Gradi di libertà:** Ogni amminoacido ha 2 gradi di libertà (angoli $\phi$ e $\psi$). Una proteina con $n$ amminoacidi ha $2n$ gradi di libertà, rendendo lo spazio di ricerca enorme.

### C. Definizione del Problema (PSP - Protein Structure Prediction)
*   **Input:** La struttura primaria (sequenza di amminoacidi, es: `A L F W ...`).
*   **Output:** La struttura terziaria (coordinate spaziali 3D per ogni amminoacido).
*   **Approccio:** Trovare la configurazione che minimizza l'energia libera (stato stabile).

### D. Modellazione Semplificata: Modello HP su Reticolo
Per rendere il problema trattabile computazionalmente, si utilizzano modelli discreti semplificati.
1.  **Semplificazione della Proteina:** Si considerano solo due classi di amminoacidi:
    *   **H (Idrofobici):** Odiano l'acqua, tendono a raggrupparsi all'interno della proteina (core).
    *   **P (Polari):** Amano l'acqua, tendono a stare sulla superficie.
2.  **Semplificazione Spaziale:** Si usa un reticolo 2D (o 3D) quadrato invece dello spazio continuo.

### E. Il Modello CSP (Constraint Satisfaction Problem)
Il problema viene formalizzato come la ricerca di un "folding" $\omega$ su una griglia:
*   **Input:** Una sequenza $S = s_1, \dots, s_n$ dove ogni $s_i \in \{H, P\}$.
*   **Variabili:** Ogni amminoacido $i$ ha una posizione $\omega(i)$ sulla griglia (coordinate intere).
*   **Vincoli:**
    1.  **Self-Avoiding Walk (Cammino auto-evitante):** Due amminoacidi non possono occupare la stessa posizione ($\omega(i) \neq \omega(j)$ per $i \neq j$).
    2.  **Connettività:** Amminoacidi adiacenti nella sequenza devono essere adiacenti nella griglia (distanza di Manhattan = 1).
*   **Funzione Obiettivo (Energia):** Si vuole massimizzare il numero di contatti tra amminoacidi idrofobici (H-H) che *non* sono adiacenti nella sequenza primaria.
    *   Ogni contatto H-H contribuisce con -1 all'energia (si minimizza l'energia totale).

### F. Complessità
Anche con queste enormi semplificazioni (modello HP su reticolo 2D), stabilire se esiste un folding con energia $< k$ è un problema **NP-completo**.

---

# I Vincoli Globali (Global Constraints)
> CP_2025_13.pdf

Questa sezione rappresenta il passaggio dai vincoli elementari (binari/ternari) a componenti di modellazione complessi che incapsulano algoritmi di propagazione specializzati.

## 1. Cosa sono i Vincoli Globali?
I vincoli globali sono vincoli definiti su un **insieme di variabili** (anziché solo su una o due).
*   **Motivazione:** Spesso un vincolo globale può essere riscritto come una combinazione di vincoli semplici (binari o ternari). Tuttavia, la propagazione ottenuta da questi vincoli semplici è **piuttosto scarsa** rispetto a quella ottenuta considerando il vincolo nel suo insieme.
*   **Vantaggio:** I vincoli globali permettono di utilizzare algoritmi di filtraggio (filtering algorithms) intelligenti e specifici per quella struttura, migliorando drasticamente l'efficienza della ricerca.
*   **Il più famoso:** L'esempio classico è il vincolo `alldifferent`.

## 2. Il Catalogo dei Vincoli Globali
Esiste una risorsa di riferimento fondamentale citata nel corso: il **Global Constraint Catalog** (disponibile su *sofdem.github.io/gccat/*).
*   Contiene la lista dei vincoli globali più studiati.
*   Per ogni vincolo esistono diversi studi e algoritmi intelligenti.
*   **Nota sulla Complessità:** A volte ottenere la **GAC** (Generalized Arc Consistency) per un vincolo globale è un problema **NP-hard**; in questi casi, i risolutori implementano algoritmi di filtraggio approssimati.

## 3. Vincoli Globali in MiniZinc
Il documento elenca i principali vincoli globali disponibili nella libreria standard di MiniZinc. È fondamentale conoscerli per la modellazione,:

*   **`alldifferent` / `alldifferent_except_0`:** Le variabili devono assumere valori distinti.
*   **`circuit`:** Impone che le variabili formino un Circuito Hamiltoniano (fondamentale per il TSP, vedi sotto).
*   **`cumulative`:** Gestisce risorse limitate nel tempo (fondamentale per lo Scheduling, vedi sotto).
*   **`element`:** Indicizza un array con una variabile (es. `array[y] = z`).
*   **`maximum` / `minimum`:** Vincola una variabile ad essere il massimo/minimo di un insieme.
*   **`table`:** Definisce un vincolo estensionale (elenco di tuple ammissibili).
*   **`bin_packing`:** Per problemi di riempimento contenitori.
*   **`global_cardinality`:** Controlla quante volte certi valori appaiono in un insieme di variabili.
*   **`inverse`:** Lega due array in modo che uno sia la funzione inversa dell'altro.
*   **`lex_greater` / `lex_less`:** Ordinamento lessicografico tra vettori (utile per rompere le simmetrie).

## 4. Approfondimento su due Vincoli Chiave

Il documento utilizza due problemi classici per illustrare la necessità di specifici vincoli globali al posto di vincoli semplici.

### A. Il vincolo `circuit` (per il TSP)
Nel Traveling Salesman Problem (TSP), non basta usare `alldifferent` per dire che ogni città viene visitata una sola volta.
*   **Problema dei sottocicli:** Se usiamo solo `alldifferent` sui successori, il solver potrebbe trovare soluzioni con più cicli disgiunti (es. A->B->A e C->D->C), che non sono valide per il TSP.
*   **Soluzione:** Si deve usare il vincolo globale **`circuit(x)`**. Questo vincolo impone che gli elementi dell'array `x` formino un **unico** circuito hamiltoniano che copre tutti i nodi, dove `x[i] = j` significa che `j` è il successore di `i`.

### B. Il vincolo `cumulative` (per lo Scheduling)
Per problemi di pianificazione (Scheduling) in cui le attività consumano risorse limitate (es. macchinari, elettricità, personale), si usa il vincolo `cumulative`.
*   **Sintassi:** `cumulative(start_times, durations, resource_requirements, capacity)`.
*   **Funzionamento:** Richiede che, in qualsiasi istante di tempo, la somma delle risorse richieste dalle attività attive in quel momento non superi mai il limite globale `capacity` (chiamato `b` o bound nel documento).
*   **Sanity Check:** Il vincolo abortisce l'esecuzione se le durate o le richieste di risorse non hanno insiemi di indici identici.