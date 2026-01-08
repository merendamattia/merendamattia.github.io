---
layout: secondary
---

## 1-introML.pdf
Introduce i concetti fondamentali dell'apprendimento automatico (Machine Learning).

### **1. Panoramica e Tipologie di Apprendimento**
Il documento classifica l'apprendimento automatico classico in tre attività principali, distinte in base alla disponibilità di "dati di verità di base" (*ground truth*), ovvero la conoscenza preliminare dell'output corretto per un dato input:
*   **Apprendimento Supervisionato:** Mira ad apprendere una funzione che mappa gli input agli output desiderati basandosi su coppie di esempi etichettati.
*   **Apprendimento Semi-supervisionato:** Utilizza un piccolo insieme di dati etichettati per inferire le etichette su un grande insieme di dati non etichettati.
*   **Apprendimento Non Supervisionato:** Non dispone di etichette; l'obiettivo è dedurre la struttura naturale o i modelli intrinseci presenti nei dati.
*   **Apprendimento per Rinforzo:** Un ramo più recente che crea agenti autonomi che imparano a scegliere azioni per massimizzare un premio cumulativo interagendo con l'ambiente.

### **2. Apprendimento Supervisionato**
Questo approccio si divide generalmente in due contesti:
*   **Classificazione:** Mappa l'input a etichette di output discrete.
*   **Regressione:** Mappa l'input a un output continuo.
L'obiettivo è trovare strutture nei dati di input per produrre output corretti, sebbene le etichette di training possano contenere "rumore" o errori che riducono l'efficacia del modello. Tra gli algoritmi comuni citati vi sono la regressione logistica, il classificatore bayesiano naif, le macchine a vettori di supporto (SVM) e le foreste casuali.

### **3. Concetti Fondamentali di Modellazione**
Il documento approfondisce le sfide nella creazione dei modelli:
*   **Complessità e Overfitting:** La complessità del modello deve essere adeguata alla natura dei dati. Modelli troppo complessi su pochi dati portano all'*overfitting* (sovradattamento): il modello impara a replicare i dati di training (incluso il rumore) ma non generalizza su nuovi dati, fallendo nel catturare la tendenza effettiva.
*   **Trade-off Bias-Varianza:** Esiste un equilibrio tra *bias* (errore costante/distorsione) e *varianza* (quanto l'errore varia tra diversi set di dati). L'obiettivo è minimizzare l'errore totale creando un modello che catturi le regolarità del training set ma generalizzi bene. Dataset semplici richiedono bassa varianza, mentre dataset complessi necessitano di varianza più elevata per apprendere la struttura.

### **4. Apprendimento Semi-supervisionato**
Questo metodo è utile quando etichettare tutti i dati è troppo costoso (es. rilevamento di messaggi inappropriati sui social network). Per funzionare, si basa su tre ipotesi fondamentali sui dati:
1.  **Continuità:** Punti vicini hanno probabilmente la stessa etichetta.
2.  **Cluster:** I dati formano gruppi discreti e i punti nello stesso gruppo condividono l'etichetta.
3.  **Presupposto molteplice (Manifold):** I dati ad alta dimensione si trovano approssimativamente su uno spazio di dimensioni inferiori.

### **5. Apprendimento Non Supervisionato**
In assenza di etichette, non esiste un modo diretto per misurare le prestazioni. Le tecniche principali discusse sono:
*   **Clustering:** Una tecnica esplorativa per aggregare dati in gruppi (cluster) basandosi sulla similarità delle caratteristiche, senza conoscenza precedente dei gruppi.
*   **Riduzione della dimensionalità:** Utilizzata per eliminare il "rumore" (pre-elaborazione) o per visualizzare dati ad alta dimensionalità in spazi 2D o 3D. Sebbene possa ridurre le prestazioni predittive, rende lo spazio dei dati più compatto mantenendo le informazioni rilevanti.
Questi metodi sono essenziali per l'*analisi esplorativa dei dati* (EDA), permettendo di identificare automaticamente strutture o segmenti (es. consumatori) per poi formulare ipotesi da verificare.

---

## 2-classificazione-intro.pdf
Introduce i concetti chiave della classificazione nell'apprendimento supervisionato.

### **1. Concetti Fondamentali ed Esempi Introduttivi**
Il documento inizia illustrando il concetto di classificazione attraverso esempi pratici.
*   **Definizione di Classificazione:** È il processo decisionale che porta a "etichettare" (label) un dato osservato all'interno di una categoria astratta (classe) basandosi su caratteristiche osservabili.
*   **Feature (Caratteristica):** È un aspetto osservabile di un fenomeno per il quale si può registrare una misura quantitativa (numerica) o categoriale (es. colore, vero/falso).
*   **Esempio "Giocattolo" (Genere):** Viene usato l'esempio della distinzione tra maschio e femmina. In una società nudista, ci si baserebbe su feature "primarie" (organi). Nella società moderna, il classificatore (l'essere umano) usa feature "secondarie" (abiti, capelli, voce) per dedurre l'etichetta di genere.
*   **Formalizzazione:** Sia $P$ un insieme di dati (vettori di feature) e $L$ un insieme di etichette di classe. Un algoritmo di classificazione è una funzione $f: P \rightarrow L$ che assegna un'etichetta a ciascun dato.
*   **Hit e Miss:** Se l'etichetta assegnata coincide con quella reale, si ha un successo (*Hit*); altrimenti si ha un fallimento (*Miss*).

### **2. Esempi di Domini Applicativi**
Il testo presenta diversi scenari per spiegare la varietà dei problemi di classificazione:
*   **Pesci (Salmone vs Sea Bass):** Si classificano i pesci in base a feature come lunghezza e luminosità delle scaglie per distinguerne il valore commerciale.
*   **Studenti:** Si tenta di predire la classe di reddito futura (basso, medio, alto) basandosi su voti e censo familiare. Qui la classificazione è una forma di predizione statistica.
*   **Iris Dataset (Fisher, 1916):** Un classico dataset storico che classifica tre specie di fiori Iris basandosi su 4 misure di petali e sepali. È usato per capire se le feature sono sufficienti e indipendenti.
*   **Titanic:** Predizione della sopravvivenza dei passeggeri basandosi su classe di imbarco, sesso ed età.

### **3. Il Processo di Apprendimento (Training)**
La classificazione automatica simula il processo di apprendimento biologico (come un topo che impara ad evitare una mattonella rossa che causa dolore).
*   **Training Set (TS):** È un sottoinsieme dell'universo delle osservazioni, già classificato, usato per istruire l'algoritmo ed estrarre le "regole" di classificazione.
*   **Proprietà delle Regole:** Un buon insieme di regole deve essere semplice, corretto sul Training Set, ma soprattutto **generalizzabile** (valido su dati non ancora visti).

### **4. Problemi Critici: Overfitting, Rumore e Outliers**
*   **Overfitting (Sovradattamento):** Si verifica quando una regola di classificazione è troppo complessa perché cerca di adattarsi perfettamente al Training Set, includendo anche le anomalie. Questo riduce la capacità di generalizzare su nuovi dati. Nell'esempio dei pesci, una frontiera di decisione complessa che include tutti i salmoni del TS potrebbe sbagliare su nuovi dati, mentre una linea retta (più semplice) potrebbe funzionare meglio nel caso generale.
*   **Rumore:** Perturbazioni nei dati che rendono difficile la classificazione. Può essere:
    *   *Endogeno:* Il dato è anomalo per natura (es. un salmone con caratteristiche atipiche).
    *   *Esogeno:* Errore di misurazione o di etichettatura da parte dell'osservatore.
*   **Outliers:** Dati molto distanti dalla norma che possono confondere la fase di apprendimento.

### **5. Validazione e Costo degli Errori**
Per valutare un classificatore non basta il Training Set:
*   **Control Set / Test Set (CS):** Un insieme di dati etichettati diverso dal TS, usato solo per verificare le prestazioni e la capacità di generalizzazione.
*   **Asimmetria dei Costi:** Non tutti gli errori hanno lo stesso peso. Scambiare un pesce economico per uno costoso ha un danno economico; classificare un malato come sano ha conseguenze mediche gravi, mentre il contrario (falso positivo) causa solo spavento.
*   **Matrice di Confusione:** Una griglia che mostra quanti elementi di una classe reale sono stati assegnati a ciascuna classe predetta. Un classificatore perfetto avrebbe valori solo sulla diagonale principale.

### **6. Ciclo di Design di un Classificatore**
Il documento conclude descrivendo le fasi operative per costruire un classificatore:
1.  **Sensing:** Raccolta dati dal mondo fisico.
2.  **Segmentazione:** Isolamento delle informazioni rilevanti.
3.  **Estrazione delle Feature:** Misurazione delle caratteristiche. È cruciale scegliere feature **invarianti** (es. il peso è meglio del colore se la luce cambia) e rilevanti.
4.  **Classificazione:** Esecuzione dell'algoritmo decisionale.
5.  **Post-processing:** Valutazione dei costi e degli errori.
6.  **Decisione:** Utilizzo finale del sistema.

---

## 3-classificazione-validazione.pdf

### **1. Differenza tra Regressione e Classificazione**
Il documento inizia distinguendo i due compiti principali dell'apprendimento supervisionato:
*   **Regressione:** Mira a predire un valore numerico continuo dato un input.
*   **Classificazione:** Mira a predire la classe (etichetta) di un oggetto. Di conseguenza, richiede strumenti di valutazione diversi rispetto al semplice calcolo dell'errore numerico usato nella regressione.

### **2. Il Processo di Validazione**
Per valutare un modello, i dati vengono divisi in **Training Set** (per addestrare il modello) e **Test Set** (per valutarne le performance su dati non visti).
Oltre all'accuratezza, si considerano altri indici computazionali come la **robustezza** (gestione del rumore), la **velocità** (di training e predizione), la **scalabilità** e l'**interpretabilità**.

### **3. Matrice di Confusione e Metriche di Base**
La valutazione si basa sul confronto tra la classe reale e quella predetta. Per un problema binario (classi A e B), si definiscono quattro casistiche nella **Matrice di Confusione**:
*   **True Positive (TP):** Classificati correttamente come classe di interesse (A).
*   **True Negative (TN):** Classificati correttamente come classe opposta (B).
*   **False Positive (FP):** Classificati erroneamente come A (errore di tipo I).
*   **False Negative (FN):** Classificati erroneamente come B (errore di tipo II).

Da questi valori derivano gli indici di qualità fondamentali:
*   **Precision:** La frazione di elementi classificati come positivi che sono realmente positivi ($TP / (TP+FP)$).
*   **Recall (o Sensitività):** La frazione di elementi positivi reali che sono stati trovati ($TP / (TP+FN)$).
*   **F1-Score:** La media armonica tra Precision e Recall. È utile per avere un singolo indice di qualità, ma valori troppo vicini a 1 possono indicare *overfitting*.
*   **Specificity (TNR):** La capacità di identificare correttamente i negativi ($TN / (TN+FP)$).
*   **False Discovery Rate (FDR):** La percentuale di falsi positivi tra i positivi predetti.

### **4. Il Problema dell'Accuratezza**
L'**Accuratezza** (somma delle predizioni corrette diviso il totale) è una misura comune ma rischiosa in caso di **dataset sbilanciati** (es. 95% negativi e 5% positivi). In tali casi, un classificatore che predice sempre "negativo" avrebbe un'accuratezza del 95% pur essendo inutile.
Si preferisce quindi l'**Accuratezza Bilanciata**, definita come la media aritmetica tra Sensitività (TPR) e Specificità (TNR).

### **5. Curve ROC e AUC**
*   **Curva ROC:** Grafico che mostra la relazione tra il tasso di veri positivi (TPR) e falsi positivi (FPR) al variare dei parametri del classificatore.
*   **AUC (Area Under Curve):** Misura l'area sotto la curva ROC. Rappresenta la probabilità che il classificatore assegni un punteggio più alto a un positivo scelto a caso rispetto a un negativo scelto a caso.
    *   AUC = 0.5: Classificatore casuale (retta a 45 gradi).
    *   AUC = 1.0: Classificatore perfetto.

### **6. Valutazione Multi-classe**
Quando ci sono più di due classi, le metriche devono essere aggregate:
*   **Micro-average:** Aggrega i conteggi totali (TP, FP, FN) di tutte le classi e calcola l'indice. È influenzata dalla frequenza delle classi e può essere fuorviante se i dati sono sbilanciati.
*   **Macro-average:** Calcola l'indice per ogni singola classe e poi ne fa la media. È preferibile per dataset sbilanciati poiché pesa ogni classe ugualmente.
*   **AUC Multi-classe (Metodo Hand & Till):** Calcola la separabilità media tra tutte le coppie di classi $(i, j)$.

### **7. Strategie di Cross-Validazione**
Per validare la capacità di generalizzazione e evitare il **Selection Bias** (campionamento non rappresentativo), si usano tecniche di cross-validazione:
*   **Leave-p-out (Esaustiva):** Usa $p$ osservazioni come test e il resto per il training, ripetendo per tutte le combinazioni possibili. Molto costoso computazionalmente.
    *   **Leave-one-out:** Caso particolare con $p=1$, utile per dataset piccoli.
*   **k-fold Cross-validation (Non esaustiva):** Divide il dataset in $k$ parti. A turno, una parte è usata per il test e le altre $k-1$ per il training. È fondamentale mescolare i dati (stratificazione) per evitare bias nei singoli fold.

---

## 4-classificazione-algoritmi.pdf
Il documento analizza le principali famiglie di algoritmi per la classificazione, partendo dalla distinzione tra approcci **Eager** e **Lazy**, per poi approfondire alberi di decisione, metodi ensemble, SVM e classificatori probabilistici.

### 1. Approcci alla Classificazione: Eager vs Lazy
*   **Eager (Volenterosi):** Costruiscono un modello generale e indipendente dall'input durante la fase di addestramento (es. Alberi di decisione).
*   **Lazy (Pigri):** Memorizzano i dati di addestramento e rimandano il processo di classificazione al momento in cui arriva una nuova istanza.
    *   *Vantaggi/Svantaggi:* I metodi Lazy sono veloci nell'addestramento ma lenti nella classificazione. Usano uno spazio delle ipotesi più ricco (approssimazioni locali) rispetto ai metodi Eager (ipotesi globali).

### 2. Algoritmi Lazy: k-Nearest Neighbors (kNN)
*   **Funzionamento:** Rappresenta i dati in uno spazio n-dimensionale (solitamente euclideo). Assegna a una nuova istanza la classe maggioritaria tra i suoi **k** vicini più prossimi.
*   **Caratteristiche:** È un metodo non parametrico (non fa ipotesi sulla distribuzione dei dati).
*   **Il parametro k:**
    *   *k piccolo:* Il classificatore è "cieco" alla distribuzione globale, sensibile al rumore (overfitting).
    *   *k grande:* Riduce la varianza ma rischia di ignorare dettagli locali rilevanti.
    *   *Scelta:* Spesso si usa $k = \sqrt{N}$ (dove N è il numero di osservazioni) o la cross-validazione.
*   **Varianti:** Si possono pesare i voti dei vicini in base alla distanza o all'inverso della frequenza di classe (per dataset sbilanciati).

### 3. Alberi di Decisione
*   **Struttura:** Un albero dove i nodi interni sono test sugli attributi e le foglie rappresentano le classificazioni.
*   **Costruzione (Divide-et-impera):** Si parte da un nodo radice e si partizionano i dati ricorsivamente cercando di ottenere nodi "puri" (contenenti una sola classe). È un approccio *greedy*.
*   **Misure di Splitting (Bontà della divisione):**
    *   **Information Gain (ID3):** Basato sull'Entropia di Shannon. Sceglie l'attributo che riduce maggiormente l'incertezza (entropia). Tende a favorire attributi con molti valori.
    *   **Gain Ratio (C4.5):** Normalizza l'Information Gain usando la *SplitInfo* per penalizzare attributi con troppe partizioni.
    *   **Indice di Gini (CART):** Misura l'impurità di un insieme. L'algoritmo sceglie lo split che minimizza l'indice di Gini ponderato dei figli.
*   **Gestione dei dati:**
    *   *Continui:* Si cerca una soglia $Z$ che divide i dati in $A \le Z$ e $A > Z$.
    *   *Mancanti:* Si può assegnare il valore più comune o usare pesi probabilistici.
*   **Pruning (Potatura):** Tecnica per evitare l'**overfitting** (alberi troppo complessi che memorizzano il rumore).
    *   *Pre-pruning:* Si ferma la costruzione quando il guadagno è sotto una soglia.
    *   *Post-pruning (C4.5):* Si costruisce l'albero completo e poi si tagliano i rami non significativi (es. *Minimal Cost-Complexity Pruning* parametrizzato da $\alpha$).

### 4. Metodi Ensemble
Questi metodi combinano più modelli per migliorare accuratezza e stabilità.
*   **Bagging (Bootstrap Aggregation):**
    *   Estrae casualmente $B$ sottoinsiemi dal training set (con reimmissione).
    *   Addestra un classificatore per ogni sottoinsieme.
    *   Aggrega i risultati (media o voto di maggioranza) per ridurre la varianza.
*   **Random Forest (RF):**
    *   È un'evoluzione del Bagging applicata agli alberi di decisione.
    *   Per decorrelare gli alberi, ad ogni split considera solo un sottoinsieme casuale di $m$ feature (invece di tutte).
    *   Stima l'errore internamente usando i dati *Out-Of-Bag* (OOB).
*   **Boosting:**
    *   Addestra sequenzialmente una serie di classificatori.
    *   Assegna pesi maggiori alle tuple classificate erroneamente dal modello precedente, forzando il nuovo modello a concentrarsi sugli errori ("hard examples").
    *   Il voto finale è pesato in base all'accuratezza di ogni classificatore.

### 5. Support Vector Machines (SVM)
*   **Obiettivo:** Trovare l'iperpiano che separa le classi con il **massimo margine** possibile (distanza dai punti più vicini, detti *Support Vectors*).
*   **Soft Margin:** Se i dati non sono linearmente separabili, si introducono variabili di *slack* ($\xi$) e un parametro di costo $C$ per tollerare alcuni errori pur massimizzando il margine.
*   **Kernel Trick:** Per separazioni non lineari, mappa i dati in uno spazio a dimensionalità superiore dove diventano separabili linearmente.
*   **Multi-classe:** Si usano strategie come *One-Against-One* o *One-Against-All*.

6. Classificatori Probabilistici (Analisi Discriminante)
*   **Teorema di Bayes:** Usato per stimare la probabilità a posteriori che un dato appartenga a una classe.
*   **LDA (Linear Discriminant Analysis):** Assume che le classi seguano una distribuzione normale e abbiano la **stessa matrice di covarianza**. Produce frontiere di decisione lineari. È stabile e riduce la varianza.
*   **QDA (Quadratic Discriminant Analysis):** Assume che ogni classe abbia una **propria matrice di covarianza**. Produce frontiere non lineari (più flessibile della LDA ma richiede più dati).
*   **MDA (Mixture Discriminant Analysis):** Modella ogni classe come una miscela di gaussiane.


---

## 5-distribuzioni.pdf
Esplora il legame tra genomica, statistica e teoria dell'informazione.

### **1. Il Genoma come Informazione**
Il documento introduce il DNA non solo come macromolecola biologica, ma come un "nastro" di memoria scritto nel linguaggio dei nucleotidi ($A, C, G, T$).
*   **Forze strutturali ed evolutive:** Il genoma è soggetto a due forze contrapposte: regole organizzative rigide per mantenere la struttura funzionale e forze entropiche (mutazioni) che favoriscono l'adattabilità e l'esplorazione evolutiva.
*   **Elementi strutturali:** Se visto come stringa, il DNA contiene regioni trascrizionali (geni), regioni di regolazione e regioni dedicate alla topologia o all'evoluzione.
*   **Combinatoria:** Dato un alfabeto di 4 simboli, il numero di possibili stringhe di lunghezza $n$ è $4^n$, creando uno spazio di ricerca evolutivo immenso.

### **2. Teoria dell'Informazione e Cenni Storici**
Viene tracciato un parallelo tra crittografia e analisi genomica.
*   **Analisi delle frequenze:** Si cita Al-Kindi (che ruppe i cifrari a sostituzione come quello di Cesare analizzando la frequenza delle lettere) come precursore della teoria dell'informazione.
*   **Legge di Zipf:** Viene introdotto il concetto di rango e frequenza per l'analisi dei linguaggi naturali e genomici.
*   **Entropia (Shannon):** Misura l'informazione media di una sorgente. L'informazione associata a un evento è $I(x) = -\log_2(p(x))$ (eventi rari portano più informazione). L'entropia è massima quando la distribuzione è uniforme (proprietà di equipartizione).
*   **Legame con la Fisica:** Si discute la derivazione dell'entropia informazionale dall'entropia termodinamica di Clausius e Boltzmann (microstati e macrostati).

### **3. Analisi delle Stringhe (String Analysis)**
Vengono definite le proprietà formali delle sequenze genomiche:
*   **Definizioni base:** Fattori (sottostringhe), prefissi, suffissi e *k-meri* (sottostringhe di lunghezza $k$).
*   **Classificazione delle parole in base alla molteplicità:**
    *   **Hapax:** Parola che appare una sola volta nel genoma.
    *   **Repeat:** Parola che appare due o più volte.
    *   **Nullomero:** Parola possibile teoricamente ma assente nel genoma.

### **4. Tipologie di Distribuzioni**
Il documento classifica diversi modi di rappresentare quantitativamente i dati genomici:
*   **Distribuzione di molteplicità di parola:** Associa a ogni k-mero il numero delle sue occorrenze.
*   **Distribuzione del rango (Zipf):** Ordina i k-meri per frequenza decrescente.
*   **Distribuzione di co-molteplicità:** Conta quante parole diverse hanno la stessa molteplicità (es. quante parole appaiono esattamente 5 volte).
*   **Distribuzione della lunghezza di parola:** Conta il numero di k-meri, hapax o repeat al variare della lunghezza $k$.

### **5. Indici Statistici (Momenti)**
Vengono descritti i momenti statistici per analizzare le distribuzioni:
*   **1° Momento (Media):** Valore atteso ($E[X]$).
*   **2° Momento (Varianza):** Dispersione attorno alla media. La deviazione standard è la radice quadrata della varianza.
*   **3° Momento (Skewness):** Misura l'asimmetria della distribuzione (code a destra o sinistra).
*   **4° Momento (Kurtosis):** Misura l'appiattimento o l'allungamento della coda della distribuzione.

### **6. Indici di Diversità**
Mutuati dall'ecologia per misurare la "biodiversità" dei k-meri nel genoma:
*   **Indice di Simpson ($\lambda$):** Misura la probabilità che due entità prese a caso siano dello stesso tipo. Riflette ricchezza e dominanza.
*   **Indice di Shannon ($H$):** L'entropia applicata come indice di diversità.
*   **Numeri di Hill:** Una generalizzazione che include le misure precedenti a seconda dell'ordine $q$.

### **7. Misure di Similarità e Distanza**
Metodi per confrontare vettori, insiemi o stringhe:
*   **Jaccard:** Similitudine tra insiemi (intersezione su unione).
*   **Coseno:** Misura l'angolo tra due vettori (usato per spazi ad alta dimensionalità).
*   **Minkowski:** Generalizzazione che include la distanza Euclidea ($k=2$) e Manhattan ($k=1$).
*   **Hamming:** Numero di posizioni in cui due stringhe differiscono.
*   **Correlazioni:** Pearson (lineare), Spearman (basata sui ranghi) e Kendall (basata sulle inversioni di coppie).

### **8. Divergenze e Informazione Avanzata**
Misure per confrontare distribuzioni di probabilità:
*   **Divergenza di Kullback-Leibler (KL):** Misura il guadagno di informazione o la "sorpresa" nel passare da una distribuzione $Q$ a $P$. Non è simmetrica.
*   **Divergenza di Jensen-Shannon:** Versione simmetrica della KL.
*   **Divergenza di Hellinger:** Misura definita nell'intervallo.
*   **Informazione Mutua ($I(X,Y)$):** Quantifica la dipendenza tra due variabili aleatorie (quanto conoscere $X$ riduce l'incertezza su $Y$). È legata alla divergenza KL tra la distribuzione congiunta e il prodotto delle marginali.
*   **Cross-entropia:** Misura i bit necessari per identificare un evento di una distribuzione usando uno schema ottimizzato per un'altra.


---

## 6-clustering-algoritmi.pdf
Il documento copre in modo approfondito le tecniche di **Clustering** (raggruppamento), una forma di apprendimento non supervisionato utilizzata per scoprire strutture nascoste nei dati senza l'uso di etichette predefinite.

### 1. Fondamenti del Clustering
*   **Definizione:** Il clustering è il processo di raggruppamento di oggetti in modo che gli oggetti nello stesso gruppo (cluster) siano più simili tra loro rispetto a quelli in altri gruppi.
*   **Obiettivi di qualità:** Un buon clustering deve massimizzare la **similarità intra-classe** (coesione) e minimizzare la **similarità inter-classe** (separazione).
*   **Requisiti:** Gli algoritmi devono essere scalabili, gestire diversi tipi di attributi, scoprire cluster di forma arbitraria, gestire il rumore (outlier) e l'alta dimensionalità.
*   **Complessità:** Il problema di trovare il clustering ottimo è NP-hard. Il numero di possibili partizioni cresce esponenzialmente con il numero di dati (approssimato dai numeri di Bell o Stirling).

### 2. Principali Famiglie di Algoritmi
Il documento classifica gli algoritmi in tre categorie principali: **Partizionamento**, **Gerarchici** e **Basati sulla Densità**.

#### A. Algoritmi di Partizionamento
Questi metodi dividono i dati in $k$ gruppi cercando di ottimizzare una funzione obiettivo (solitamente basata sulla distanza).
*   **K-means:**
    *   Rappresenta ogni cluster con il suo **centroide** (media dei punti).
    *   È efficiente ($O(t \cdot k \cdot n)$) e semplice, ma tende a bloccarsi in ottimi locali e richiede di specificare $k$ a priori.
    *   Funziona bene solo per cluster di forma **sferica** o convessa e non è robusto agli outlier.
    *   **Algoritmo:**
        1. Inizializza casualmente $k$ centroidi.
        2. **Assegnamento:** Assegna ogni punto al centroide più vicino.
        3. **Aggiornamento:** Ricalcola i centroidi come media dei punti nel cluster.
        4. Ripeti finché i centroidi non cambiano più (convergenza).
*   **K-medoids (PAM & CLARA):**
    *   Rappresenta il cluster con un **medoide** (l'oggetto più centrale del cluster), rendendolo più robusto agli outlier rispetto al K-means.
    *   **PAM (Partitioning Around Medoids):** Preciso ma costoso computazionalmente ($O(k(n-k)^2)$).
        *   **Algoritmo PAM:**
            1. **BUILD:** Seleziona $k$ oggetti come medoidi iniziali.
            2. **SWAP:** Tenta di scambiare medoidi con non-medoidi per ridurre il costo totale.
            3. Ripeti finché non ci sono miglioramenti.
    *   **CLARA:** Usa il campionamento per applicare PAM su dataset più grandi.
        *   Estrae campioni casuali di dimensione fissa, applica PAM a ciascun campione e seleziona la soluzione con il costo minore sull'intero dataset.
*   **Fuzzy K-means (Soft Clustering):**
    *   Permette a un punto di appartenere a più cluster con diversi gradi di probabilità (membership). I centroidi sono calcolati come media pesata basata su queste probabilità.
    *   **Algoritmo:**
        1. Inizializza la matrice di membership con valori casuali (ogni punto ha una probabilità di appartenenza a ciascun cluster).
        2. **Aggiornamento centroidi:** Calcola i centroidi come media pesata dei punti (pesati dalle loro membership).
        3. **Aggiornamento membership:** Aggiorna le probabilità di appartenenza in base alla distanza dai centroidi.
        4. Ripeti finché la variazione è minima.
*   **Expectation-Maximization (EM):**
    *   Approccio probabilistico che assume che i dati siano generati da una mistura di distribuzioni (es. Gaussiane).
    *   Itera due fasi: **Expectation** (stima la probabilità di appartenenza) e **Maximization** (aggiorna i parametri della distribuzione). Può modellare cluster di forma ellissoidale.
    *   **Algoritmo:**
        1. Inizializza i parametri delle $k$ gaussiane (medie, covarianze e pesi).
        2. **E-step (Expectation):** Calcola la probabilità che ogni punto appartenga a ciascun cluster.
        3. **M-step (Maximization):** Aggiorna i parametri delle gaussiane basandosi sulle probabilità calcolate.
        4. Ripeti finché converge.

#### B. Algoritmi Gerarchici
Creano una decomposizione gerarchica dei dati, rappresentabile tramite un **dendrogramma**.
*   **Approcci:**
    *   *Agglomerativi (Bottom-up):* Si parte dai singoli punti e si uniscono iterativamente i più simili.
    *   *Divisivi (Top-down):* Si parte da un unico cluster e lo si divide ricorsivamente.
*   **Metriche di Linkage:** Definiscono la distanza tra cluster (Single, Complete, Average, Ward) influenzando la forma dei cluster risultanti.
*   **Algoritmi Specifici:**
    *   **BIRCH:** Progettato per grandi dataset, costruisce incrementalmente un **CF-Tree** (Cluster Feature Tree) per comprimere i dati. Utilizza le "Cluster Features" (statistiche riassuntive: Numero punti, Somma Lineare, Somma Quadrata) per rappresentare i sottocluster in modo compatto.
        *   **Algoritmo:**
            1. Costruisce il CF-Tree caricando i punti uno alla volta, inserendoli nella foglia più vicina o creando nuove foglie.
            2. Condensa il CF-Tree per ridurre la memoria (opzionale).
            3. Applica un algoritmo di clustering (es. K-means) sui centroidi delle foglie.
            4. Riassegna i punti originali ai cluster trovati (opzionale).
    *   **CURE:** Usa più punti rappresentativi per ogni cluster (invece di uno solo), "restringendoli" verso il centroide. Questo permette di trovare cluster di forma non sferica ed è robusto agli outlier.
        *   **Algoritmo:**
            1. Campiona casualmente punti dal dataset.
            2. Partiziona il campione e fa un clustering parziale su ciascuna partizione.
            3. Elimina gli outlier (cluster con pochi punti).
            4. Per ogni cluster, seleziona multipli punti rappresentativi dispersi e "restringili" verso il centroide.
            5. Fonde iterativamente i due cluster più vicini (usando i punti rappresentativi) finché si raggiunge il numero desiderato.
            6. Assegna i punti non campionati al cluster più vicino.
    *   **ROCK:** Specifico per **dati categoriali**. Usa il concetto di "Link" (numero di vicini comuni) invece della distanza euclidea.
        *   **Algoritmo:**
            1. Calcola la similarità tra tutte le coppie di punti (usando Jaccard).
            2. Definisci due punti come "vicini" se la loro similarità supera una soglia.
            3. Calcola il numero di **link** (vicini comuni) tra ogni coppia di punti.
            4. Fonde iterativamente i cluster con più link in comune.
            5. Continua finché si raggiunge il numero desiderato di cluster.
    *   **Chameleon:** Usa un grafo k-nearest-neighbor e modella dinamicamente la similarità basandosi su **Interconnettività Relativa** e **Vicinanza Relativa**. È molto efficace nel trovare cluster di forma arbitraria.
        *   **Algoritmo:**
            1. Costruisci un grafo k-nearest-neighbor (ogni punto connesso ai suoi $k$ vicini più prossimi).
            2. Usa un algoritmo di graph partitioning per dividere il grafo in molti piccoli sub-cluster.
            3. Fonde iterativamente le coppie di cluster più simili valutando:
                *   **Interconnettività Relativa:** quanto sono connessi i cluster tra loro rispetto alla connessione interna.
                *   **Vicinanza Relativa:** quanto sono vicini i cluster tra loro rispetto alla vicinanza interna.
            4. Continua finché si raggiunge il numero desiderato di cluster.
    *   **Dynamic Tree Cut:** Un metodo per tagliare il dendrogramma in modo adattivo (non a un'altezza fissa) per identificare cluster nidificati.

#### C. Algoritmi Basati sulla Densità
Definiscono i cluster come regioni ad alta densità separate da regioni a bassa densità.
*   **DBSCAN:**
    *   Concetti chiave: **Eps** (raggio di vicinato) e **MinPts** (numero minimo di punti).
    *   Classifica i punti in: **Core** (interni densi), **Border** (sul confine) e **Noise** (rumore/outlier).
    *   Vantaggi: Non richiede di specificare $k$, trova forme arbitrarie e gestisce il rumore.
    *   Svantaggi: Sensibile ai parametri e alla densità variabile.
    *   **Algoritmo:**
        1. Marca tutti i punti come non visitati.
        2. Per ogni punto non visitato:
            a. Marca il punto come visitato.
            b. Trova tutti i punti nel suo vicinato (entro raggio Eps).
            c. Se ha meno di MinPts vicini, marcalo come **Noise**.
            d. Altrimenti è un **Core point**: crea un nuovo cluster ed espandilo ricorsivamente visitando i vicini dei vicini (se anche loro sono core points).
        3. I punti non assegnati rimangono classificati come **Noise**.

### 3. Algoritmi e Concetti Avanzati
*   **BFR (Bradley-Fayyad-Reina):** Variante del K-means per dataset molto grandi che non stanno in memoria. Assume che i cluster siano distribuiti in modo Gaussiano e mantiene statistiche riassuntive (Discard Set, Compression Set, Retained Set).
*   **GRGPF:** Simile a BFR/BIRCH ma per metriche non Euclidee. Introduce i concetti di **Clusteroide** e **Rowsum** per gestire i cluster senza caricare tutti i punti in memoria.
*   **1-Mediana e Antipole:** Algoritmi per trovare rappresentanti o dividere i dati basandosi su tornei di triple o punti distanti (poli), utili per ridurre il numero di calcoli delle distanze.
*   **Clustering con Ostacoli:** Adatta la misura di distanza (es. usando un grafo di visibilità) per tenere conto di ostacoli fisici nel dominio dei dati.


---

## 7-clustering-valutazione.pdf
Il documento affronta la problematica della **validazione del clustering**, definita come la parte più difficile e frustrante dell'analisi dei cluster, ma essenziale per evitare che l'analisi rimanga un'"arte nera" basata solo sull'esperienza.

### 1. Obiettivi e Necessità della Validazione
L'obiettivo principale di un buon clustering è ottenere gruppi con **alta similarità intra-classe** (coesione) e **bassa similarità inter-classe** (separazione).
La validazione è necessaria per:
*   Evitare di trovare pattern in dati che sono in realtà rumore casuale.
*   Comparare algoritmi diversi o due insiemi di cluster.
*   Determinare la *clustering tendency* (se esiste una struttura non-random).
*   Determinare il numero corretto di cluster ($k$).

### 2. Tipologie di Indici di Validazione
Gli indici si dividono principalmente in due categorie:
*   **Indici Interni (Internal Index):** Valutano la qualità senza usare informazioni esterne (es. SSE).
*   **Indici Esterni (External Index):** Misurano quanto i cluster corrispondono a etichette di classe note a priori (es. Entropia).

### 3. Validazione Interna (Senza Ground Truth)
Questi metodi usano solo i dati stessi per valutare la bontà del raggruppamento.

*   **Matrici di Prossimità e Incidenza:** Si calcola la correlazione tra la matrice delle distanze (similarità) e una matrice di incidenza (dove 1 indica che due punti sono nello stesso cluster, 0 altrimenti). Un'alta correlazione indica che i punti nello stesso cluster sono vicini.
*   **SSE (Sum of Squared Error):** Misura l'errore quadratico medio rispetto ai centroidi. È utile per confrontare due clustering o singoli cluster.
*   **Coefficiente di Silhouette:** Combina coesione e separazione per ogni punto $i$.
    *   Calcola $a_i$ (distanza media dai punti del proprio cluster) e $b_i$ (distanza media dai punti del cluster vicino più prossimo).
    *   La formula è $s_i = (b_i - a_i) / \max(a_i, b_i)$.
    *   Il valore varia tra -1 e 1; valori vicini a 1 indicano un buon clustering.

#### Determinazione del numero ottimale di cluster ($k$)
*   **Metodo del Gomito (Elbow Method):** Si osserva il grafico dell'SSE (o altra metrica di distorsione) al variare di $k$. Il punto ottimale è dove la curva si appiattisce ("gomito"), indicando che aggiungere altri cluster non migliora significativamente il modello.
*   **Indice di Calinski-Harabasz:** Basato sul rapporto tra la dispersione tra i cluster e la dispersione interna. Un punteggio più alto indica prestazioni migliori.
*   **Indice di Davies-Bouldin (DB):** Misura il rapporto tra le distanze interne ai cluster e le distanze tra i cluster. A differenza di altre metriche, **valori più bassi** indicano un clustering migliore (il minimo è 0). È adatto per cluster convessi.

### 4. Validazione Gerarchica
Per i metodi gerarchici, si valuta quanto il dendrogramma rappresenti bene le distanze originali.
*   **CPCC (Cophenetic Correlation Coefficient):** Misura la correlazione tra la distanza originale dei dati e la *distanza cofenetica* (il livello nel dendrogramma in cui due oggetti vengono uniti per la prima volta). Valori vicini a 1 indicano un ottimo clustering.

### 5. Validazione Esterna (Con Ground Truth)
Questi metodi confrontano i cluster ottenuti con una classificazione reale preesistente ("classi").

*   **Misure basate sulla classificazione:**
    *   **Precision, Recall e F-measure:** Adattate al clustering, valutano la capacità di recuperare le classi reali all'interno dei cluster.
*   **Purezza (Purity):** Misura la probabilità che un membro di un cluster appartenga alla classe dominante di quel cluster. La purezza è 1 se il cluster contiene solo elementi di una sola classe.
*   **Entropia:** Misura il disordine. Un cluster con entropia 0 contiene elementi di una sola classe.
*   **Indice di Jaccard:** Calcolato su coppie di punti, confrontando quante coppie sono nello stesso cluster e nella stessa classe ($f_{11}$) rispetto al totale delle coppie non disgiunte.

### 6. Rilevamento degli Outlier
Il documento conclude trattando gli outlier, definiti come oggetti molto differenti dagli altri (es. frodi, errori medici).
*   **LOF (Local Outlier Factor):** Un metodo basato sulla densità locale. Confronta la densità di un oggetto con quella dei suoi vicini ($k$-distance).
    *   Se $LOF \approx 1$, il punto non è un outlier.
    *   Se $LOF$ ha un valore grande, il punto è un outlier (è isolato rispetto al suo intorno).

---

## 8-grafi.pdf
Il documento copre la teoria dei grafi partendo dalle origini storiche fino agli algoritmi moderni per l'analisi di reti complesse, con un focus particolare sul rilevamento delle comunità (Community Detection).

### 1. Cenni Storici e Definizioni Fondamentali
Il testo individua la nascita della teoria dei grafi nel 1736 con la soluzione di **Eulero** al problema dei **Sette Ponti di Königsberg**, dimostrando l'impossibilità di attraversare tutti i ponti una sola volta e tornare al punto di partenza (circuito euleriano) se i nodi hanno grado dispari.
Vengono introdotti altri problemi classici:
*   **Ciclo Hamiltoniano:** Il gioco dell'icosaedro di Hamilton richiede di visitare ogni vertice esattamente una volta.
*   **Problema del Commesso Viaggiatore (TSP):** Trovare il percorso più breve che visita ogni città in un grafo pesato completo. È un problema NP-hard fondamentale nell'ottimizzazione combinatoria.
*   **Small World e Gradi di Separazione:** Si citano l'esperimento di Milgram (6 gradi di separazione), il numero di Erdős per i matematici e il numero di Kevin Bacon per gli attori, evidenziando come le reti sociali abbiano percorsi brevi tra i nodi.

**Definizioni:** Un grafo $G=(V,E)$ è composto da vertici e lati. Il **Lemma delle strette di mano** stabilisce che la somma dei gradi è il doppio dei lati.

### 2. Modelli di Rete
Il documento distingue tra diverse tipologie di reti:
*   **Modelli Random (Erdős-Rényi):** I collegamenti sono casuali con probabilità uniforme. La distribuzione dei gradi segue una Poissoniana.
*   **Reti a Invarianza di Scala (Scale-Free):** La distribuzione dei gradi segue una **legge di potenza** ($P(k) \sim k^{-\gamma}$). In queste reti, non esiste un "nodo tipico": la maggior parte ha pochi collegamenti, ma esistono pochi **hub** con moltissime connessioni.
*   **Modello Barabási-Albert:** Spiega la formazione delle reti scale-free tramite l'**attacco preferenziale** ("rich get richer"): i nuovi nodi tendono a collegarsi ai nodi già molto connessi.

### 3. Misure di Centralità
Per identificare l'importanza topologica dei nodi, vengono definite diverse misure:
*   **Degree Centrality:** Basata sul numero di connessioni.
*   **Betweenness Centrality:** Basata sul numero di cammini minimi che passano attraverso un nodo (o un arco).
*   **Closeness Centrality:** Basata sulla distanza media dagli altri nodi.
*   **Coefficiente di Clustering:** Misura la probabilità che due vicini di un nodo siano a loro volta collegati (formando un triangolo).

### 4. Algoritmi di Flusso su Grafi
Si analizza il problema del **flusso massimo** (es. acqua in tubature o dati in reti), dove ogni arco ha una capacità massima.
*   **Cammini Migliorabili:** Un flusso può essere aumentato se esiste un percorso dalla sorgente al pozzo in cui i lati diretti non sono saturi e i lati inversi hanno flusso positivo.
*   **Teorema Max-Flow Min-Cut:** Il flusso totale massimo in una rete è uguale alla capacità della **sezione minimale** (il "collo di bottiglia" che separa sorgente e destinazione).

### 5. Random Walks e PageRank
Il documento introduce le **Catene di Markov** e i **Random Walks** (camminate casuali) sui grafi.
*   **Matrice di Transizione:** Descrive la probabilità di spostarsi da un nodo all'altro.
*   **PageRank (Google):** È l'algoritmo che ordina le pagine web. Simula un *random walker* che naviga tra le pagine. Include un fattore di "teletrasporto" (damping factor) per gestire i nodi senza uscite o i cicli, garantendo la convergenza verso una distribuzione stazionaria che rappresenta l'importanza della pagina.

### 6. Community Detection (Rilevamento di Comunità)
Gran parte del documento è dedicata alla scoperta di strutture di comunità (gruppi densamente connessi) nelle reti.

*   **Definizioni di Comunità:** Si basano sull'ipotesi che i nodi interni a una comunità abbiano più collegamenti tra loro ($k_{int}$) rispetto a quelli verso l'esterno ($k_{ext}$).
*   **Modularità ($Q$):** Una funzione obiettivo fondamentale che misura la qualità di una partizione confrontando la densità degli archi interni con quella attesa in un modello casuale. Massimizzare la modularità è una strategia chiave, ma ha un "limite di risoluzione" (non vede comunità piccole in reti grandi).

### **Principali Algoritmi trattati:**
1.  **Algoritmo di Girvan-Newman (Divisivo):** Rimuove iterativamente gli archi con la più alta *betweenness centrality*, poiché i ponti tra comunità sono attraversati da molti cammini minimi.
2.  **MCL (Markov Cluster Algorithm):** Simula flussi stocastici. Alterna fasi di *Expansion* (potenza della matrice) e *Inflation* (accentuazione delle differenze di probabilità) per separare i cluster.
3.  **Algoritmo di Louvain:** Metodo greedy veloce che ottimizza la modularità in due fasi ripetute: spostamento locale dei nodi e aggregazione della rete in meta-nodi. Tende però a trovare comunità disconnesse.
4.  **Algoritmo di Leiden:** Miglioramento di Louvain. Aggiunge una fase di **raffinamento** per garantire che le comunità siano ben connesse e accelera la convergenza.
5.  **Clique Percolation (CFinder):** Trova comunità sovrapposte basandosi sull'unione di k-clique (sottografi completi) adiacenti.
6.  **Label Propagation (LPA):** Ogni nodo adotta l'etichetta di maggioranza dei suoi vicini. È molto veloce e non richiede parametri a priori.
7.  **Approcci Gerarchici:** Usano matrici di similarità (es. sovrapposizione topologica) e tecniche di clustering gerarchico (single/complete linkage) per costruire dendrogrammi delle comunità.

---

## 11-ricerca.pdf
Tratta il tema del *Problem Solving* e degli Algoritmi di Ricerca nell'ambito dell'Intelligenza Artificiale.

### 1. Il Problem Solving e l'Approccio Razionale
Il documento definisce il **Problem Solving (PS)** come un processo intellettuale fondamentale che implica induzione, sussunzione e ragionamento.
Viene introdotta la distinzione tra:
*   **Hard Computing:** Basato sulla logica binaria, analisi numerica e istruzioni predefinite (approccio rigido).
*   **Soft Computing:** Basato sul modello della mente umana, utilizza ragionamento probabilistico e logica fuzzy (multivalore).

Esistono due approcci principali per costruire un *Problem Solver*:
1.  **Human oriented (Cognitivista):** Mira a *simulare* l'attività intelligente umana (es. *General Problem Solver* basato sull'Analisi Mezzi-Fini).
2.  **Machine oriented (Comportamentale):** Mira a *manifestare* attività intelligente, risolvendo il problema nel modo migliore possibile (approccio ingegneristico).

### 2. Formalizzazione come Ricerca nello Spazio degli Stati
Il *Problem Solving* viene formalizzato come una ricerca all'interno di uno "spazio degli stati". Un problema è definito da una 5-tupla $P = \langle X, SCS, x_0, g, t\rangle$ dove:
*   $X$: Spazio degli stati.
*   $SCS$: Strategia di ricerca (azioni/operatori possibili).
*   $x_0$: Stato iniziale.
*   $g$: Funzione di costo.
*   $t$: Stato terminale (goal).

Una sfida cruciale è l'**esplosione combinatoria**: la forza bruta non è sufficiente per problemi complessi (es. il gioco del 15, scacchi, commesso viaggiatore).

### 3. Strategie di Ricerca Non Informata (Blind Search)
Questi algoritmi esplorano lo spazio senza conoscenze specifiche sul dominio (euristiche).
*   **Ricerca in Ampiezza (Breadth First Search):** Usa una coda FIFO. È un algoritmo "difensivo" che esplora livello per livello. È **completa e ottimale** (se il costo dei passi è costante), ma ha un'alta complessità spaziale ($O(b^d)$) poiché deve memorizzare tutti i nodi di un livello.
*   **Ricerca in Profondità (Depth First Search):** Usa una pila LIFO. È un algoritmo "aggressivo". Non è né completa né ottimale, ma è efficiente in memoria ($O(bd)$). Rischia di finire in loop infiniti.
*   **Profondità Limitata e Iterative Deepening:** Varianti della ricerca in profondità per evitare loop e garantire completezza incrementando progressivamente il limite di profondità.
*   **Ricerca a Costo Uniforme:** Simile all'algoritmo di Dijkstra, espande il nodo con il costo di cammino $g(n)$ minore. È ottimale anche con costi degli operatori variabili.

### 4. Ricerca Euristica (Heuristic Search)
Per migliorare l'efficienza, si utilizzano **euristiche ($h(n)$)**, ovvero stime del costo rimanente per raggiungere l'obiettivo.
La funzione di valutazione diventa $f(n) = g(n) + h(n)$, dove $g(n)$ è il costo per arrivare al nodo corrente e $h(n)$ è il costo stimato per arrivare alla fine.

**Proprietà delle euristiche:**
*   **Ammissibilità:** Una euristica è ammissibile se non sovrastima mai il costo reale per raggiungere l'obiettivo ($h(n) \le h^*(n)$). Questa proprietà è fondamentale per garantire l'ottimalità in A*.
*   **Consistenza (o Monotonicità):** Il costo stimato non deve mai diminuire lungo un percorso più di quanto costi il passo stesso (disuguaglianza triangolare). Se un'euristica è monotona, è anche ammissibile.

**Algoritmi Euristici Principali:**
*   **Greedy Best-First:** Minimizza solo $h(n)$. Veloce ma non ottimale e incompleto (può bloccarsi in cicli o minimi locali).
*   **A\* (A-Star):** Minimizza $f(n) = g(n) + h(n)$. È **completo e ottimale** se l'euristica è ammissibile. È definito "ottimamente efficiente" (nessun altro algoritmo ottimale espande meno nodi).
*   **Weighted A\* (WA\*):** Introduce un peso $w$ per sbilanciare la ricerca verso l'euristica ($f(n) = g(n) + w \cdot h(n)$). Rende la ricerca più veloce ("greedy") ma sacrifica l'ottimalità garantita.

### 5. Gestione della Memoria e Varianti Avanzate
Dato che A* consuma molta memoria, sono state sviluppate varianti:
*   **IDA\* (Iterative Deepening A\*):** Usa la ricerca in profondità con una soglia di costo $f(n)$ che aumenta iterativamente. Ha complessità spaziale lineare $O(bd)$ ma ripete l'espansione dei nodi.
*   **SMA\* (Simplified Memory-Bounded A\*):** Funziona come A* finché c'è memoria; quando è piena, "dimentica" i nodi peggiori e ne fa il backup del valore nel genitore per rigenerarli se necessario.

### 6. Ricerca Bidirezionale
Consiste nell'avviare due ricerche simultanee: una dallo stato iniziale ($x_0$) in avanti e una dallo stato finale ($t$) all'indietro.
*   **BHPA\* (Front-to-end):** Le due ricerche mirano l'una verso l'altra. Tuttavia, l'ipotesi che le ricerche si "incrocino" come missili è spesso falsa; tendono a passare l'una attraverso l'altra senza toccarsi in modo efficiente.
*   **BIDA\* (Front-to-front):** Usa una ricerca in ampiezza per creare un perimetro attorno al target e poi usa euristiche per mirare a quel perimetro.

### 7. Ricerca Online e Real-Time
In scenari in cui l'agente non conosce l'intero spazio degli stati a priori ma lo scopre muovendosi (es. navigazione robotica):
*   L'agente deve alternare calcolo e azione fisica.
*   **Problemi:** Vicoli ciechi (*Dead Ends*) e irreversibilità delle azioni.
*   **LRTA\* (Learning Real-Time A\*):** Combina Hill Climbing e memoria. L'agente aggiorna la stima euristica $H[s]$ degli stati visitati basandosi sull'esperienza diretta, convergendo verso i valori ottimali nel tempo.

---

## 13-metaeuristiche.pdf
Tratta gli algoritmi di ottimizzazione basati su euristiche avanzate, ispirati spesso a fenomeni naturali.

### **1. Definizione e Caratteristiche Generali**
Le metaeuristiche sono procedure di alto livello progettate per risolvere problemi di ottimizzazione difficili, specialmente quando si hanno informazioni incomplete o capacità di calcolo limitate.
*   **Funzionamento:** Non tengono traccia dell'intero cammino ma solo dello stato corrente, spostandosi su stati adiacenti (concetto di vicinato).
*   **Obiettivo:** Trovare una soluzione "sufficientemente buona" (ottimo locale), poiché non garantiscono il raggiungimento dell'ottimo globale, ma sono molto efficienti.
*   **Concetti Chiave:**
    *   *Diversificazione:* Esplorare nuove regioni dello spazio di ricerca.
    *   *Intensificazione:* Esplorare in profondità le regioni promettenti.
*   **Classificazione:** Si dividono in metodi basati su **soluzione singola** (es. Simulated Annealing) e metodi basati su **popolazione** (es. Algoritmi Genetici).

### **2. Algoritmi Basati su Soluzione Singola**

*   **Hill Climbing (Scalata della collina):**
    *   Simula la scalata verso il picco più alto (massimizzazione della funzione obiettivo) esplorando i vicini.
    *   *Varianti:* Salita rapida (sceglie il vicino migliore), Stocastico (sceglie a caso tra quelli che migliorano), Prima scelta (il primo che migliora), Riavvio casuale (riparte da punti random per evitare ottimi locali).
    *   *Problemi:* Può bloccarsi in massimi locali, pianori (shoulders) o crinali.

*   **Simulated Annealing (Ricottura Simulata):**
    *   *Ispirazione:* Processo fisico di raffreddamento dei metalli per raggiungere uno stato cristallino a minima energia.
    *   *Meccanismo:* Permette di accettare mosse peggiorative per sfuggire agli ottimi locali. La probabilità di accettare una mossa peggiorativa dipende dalla differenza di energia e dalla **Temperatura ($T$)**, secondo il criterio di Metropolis ($P = e^{\frac{\Delta E}{T}}$).
    *   *Raffreddamento:* La temperatura decresce nel tempo ($T_{k+1} = \alpha T_k$), riducendo progressivamente la probabilità di accettare peggioramenti (fase di stabilità).

*   **Tabu Search (Ricerca Tabu):**
    *   *Concetto:* Migliora la ricerca locale proibendo di tornare immediatamente su stati o mosse visitati di recente (inseriti in una "Tabu list").
    *   *Strategia:* Ad ogni passo si sceglie la mossa migliore consentita, anche se peggiora la soluzione corrente.
    *   *Tipi di proibizione:* Fissa (tempo costante), Randomizzata, o Reattiva (la durata della proibizione varia dinamicamente in base alla qualità delle soluzioni trovate).

### **3. Algoritmi Basati su Popolazione (Algoritmi Evolutivi)**

*   **Local Beam Search:** Tiene traccia di $k$ stati invece di uno. Ad ogni passo genera i successori di tutti i $k$ stati e seleziona i migliori $k$ tra essi. Rischia però che tutti i successori convergano sullo stesso ottimo locale.

*   **Algoritmi Genetici (GA):**
    *   *Ispirazione:* Teoria darwiniana dell'evoluzione e selezione naturale.
    *   *Struttura:* Una popolazione di individui (cromosomi) evolve attraverso generazioni per massimizzare una funzione di **fitness** (adattamento all'ambiente).
    *   *Operatori Principali:*
        1.  **Selezione:** Sceglie i genitori per la riproduzione. Metodi: *Roulette Wheel* (probabilità proporzionale alla fitness), *Rank* (basato sulla classifica), *Torneo* (sfida tra sottoinsiemi), *Elitismo* (il migliore passa sempre).
        2.  **Crossover (Incrocio):** Combina il materiale genetico dei genitori. Metodi: a un punto, uniforme, o specifici per permutazioni come PMX (Partially Mapped), Order Crossover, Cycle Crossover.
        3.  **Mutazione:** Modifica casuale di geni per mantenere la diversità (es. inversione bit, scambio, dislocamento).
    *   *Codifica:* I cromosomi possono essere binari, reali, permutazioni o alberi.

### **4. Swarm Intelligence (Intelligenza di Sciame)**
Si ispirano al comportamento collettivo di animali (insetti, uccelli) che, pur semplici individualmente, risolvono problemi complessi cooperando.

*   **Ant Colony Optimization (ACO):**
    *   *Ispirazione:* Formiche che trovano percorsi ottimi usando feromoni.
    *   *Funzionamento:* Gli agenti costruiscono soluzioni probabilistiche basate su due fattori: il livello di **feromone** (traccia lasciata da altri) e un'informazione **euristica** locale. Utile per problemi su grafo come il TSP o la selezione di feature.

*   **Particle Swarm Optimization (PSO):**
    *   *Ispirazione:* Stormi di uccelli o banchi di pesci.
    *   *Funzionamento:* Le particelle si muovono nello spazio di ricerca. La loro velocità è aggiornata considerando l'inerzia, la migliore posizione trovata dalla particella stessa (**pbest**, componente cognitiva) e la migliore posizione trovata dallo sciame (**gbest**, componente sociale).

*   **Artificial Bee Colony (ABC):**
    *   *Ispirazione:* Api che cercano nettare.
    *   *Ruoli:*
        *   *Employed:* Associate a una fonte di cibo, danzano per reclutare altre api.
        *   *Onlooker:* Osservano la danza e scelgono le fonti migliori.
        *   *Scout:* Cercano nuove fonti casuali se una risorsa si esaurisce.

*   **Pigeon Inspired Optimization (PIO):**
    *   *Ispirazione:* Capacità di navigazione dei piccioni viaggiatori.
    *   *Operatori:*
        1.  *Map and Compass:* Usano campo magnetico e sole (aggiornamento posizione e velocità verso il gbest).
        2.  *Landmark:* Nelle fasi finali, si orientano verso il centro dello stormo (landmark).

---

## 14-giochi.pdf
Analizza l'applicazione dell'Intelligenza Artificiale alla Teoria dei Giochi, passando dagli algoritmi di ricerca classici alle moderne tecniche di Reinforcement Learning.

### **1. Introduzione e Classificazione dei Giochi**
Il documento introduce il *Game Playing* come un'estensione del *Problem Solving* in cui sono presenti agenti in competizione. Si fa riferimento alla "Teoria dei Giochi" (Von Neumann & Morgenstern, 1944) per analizzare comportamenti in cui le azioni di un individuo dipendono dalle scelte degli altri.
I giochi vengono classificati in base a:
*   **Informazione:**
    *   *Perfetta:* Lo stato è completamente visibile a tutti (es. Scacchi, Go, Dama).
    *   *Imperfetta:* Lo stato è parzialmente nascosto (es. Poker, Risiko).
*   **Effetti delle scelte:**
    *   *Deterministici:* Lo stato successivo è determinato solo dalle azioni.
    *   *Stocastici:* Intervengono fattori casuali (es. dadi).
*   **Somma zero:** Il guadagno di un giocatore corrisponde alla perdita dell'altro.

### **2. Giochi come Ricerca nello Spazio degli Stati**
Per i giochi deterministici a informazione perfetta, si utilizza un albero di ricerca dove due giocatori, **MAX** (l'agente) e **MIN** (l'avversario), si alternano.
*   **Algoritmo Minimax:** L'obiettivo di MAX è massimizzare la propria utilità, assumendo che MIN giochi in modo ottimale per minimizzarla. L'algoritmo esplora l'albero fino ai nodi terminali, applica una funzione di utilità e propaga i valori verso l'alto (MAX sceglie il massimo tra i figli, MIN il minimo).
*   **Limiti:** Il Minimax è completo e ottimale, ma ha una complessità temporale $O(b^m)$, impraticabile per giochi complessi come gli scacchi ($35^{100}$ stati).

### **3. Euristiche e Ottimizzazione (Alpha-Beta Pruning)**
Per gestire la complessità, si limita la ricerca a una certa profondità e si usano **funzioni di valutazione euristica** (es. peso dei pezzi negli scacchi) per stimare l'utilità dei nodi non terminali.
*   **Potatura Alfa-Beta (Alpha-Beta Pruning):** È una tecnica per ignorare (potare) rami dell'albero che non influenzeranno la decisione finale. Si usano due parametri:
    *   $\alpha$: Il miglior valore garantito per MAX finora.
    *   $\beta$: Il miglior valore garantito per MIN finora.
    Se un nodo mostra un valore peggiore delle alternative già trovate, il sotto-ramo viene tagliato. L'ordinamento delle mosse influenza l'efficacia del taglio.
*   **Problemi dell'Orizzonte e Quiescenza:** Tagliare la ricerca a una profondità fissa può nascondere pericoli imminenti (effetto orizzonte). Si applica la *ricerca di quiescenza* per estendere l'analisi nelle posizioni instabili (non "quiescenti").

### **4. Varianti: Giochi Stocastici e Multigiocatore**
*   **Expectimax:** Nei giochi con elementi casuali (es. Backgammon), i nodi di scelta casuale ("chance nodes") calcolano il valore atteso (media ponderata delle probabilità) invece del minimo o massimo.
*   **Giochi Multiplayer (MAXN):** Se ci sono $N$ giocatori, la funzione di valutazione restituisce una $n$-tupla di utilità. Ogni giocatore massimizza la propria componente della tupla.
*   **Approccio Paranoid:** Semplifica i giochi multiplayer assumendo che tutti gli altri giocatori si coalizzino contro il giocatore corrente (riducendolo a un gioco a 2 giocatori). È più veloce ma non garantisce l'ottimalità se gli avversari non collaborano tra loro.

### **5. Apprendimento per Rinforzo (Reinforcement Learning - RL)**
L'approccio si sposta dal fornire regole al far apprendere un agente tramite interazione con l'ambiente (trial and error) per massimizzare una ricompensa cumulativa.
*   **Modelli:** Si basano su Processi Decisionali di Markov (MDP). L'apprendimento può essere *model-based* (impara le regole del mondo) o *model-free* (impara direttamente la politica di azione).
*   **Monte Carlo:** Metodi che stimano il valore di uno stato facendo la media dei risultati di molte simulazioni casuali.

### **6. Monte Carlo Tree Search (MCTS)**
Una famiglia di algoritmi che combina la ricerca ad albero con le simulazioni casuali. È asimmetrica: esplora più a fondo le parti "promettenti" dell'albero.
Le 4 fasi di MCTS sono:
1.  **Selezione:** Si scende nell'albero usando una *Tree Policy*.
2.  **Espansione:** Si aggiunge un nuovo nodo foglia.
3.  **Simulazione (Rollout):** Si gioca una partita simulata (spesso casuale) fino alla fine.
4.  **Retropropagazione (Backpropagation):** Si aggiornano le statistiche dei nodi attraversati con il risultato.

*   **UCB (Upper Confidence Bound):** Per bilanciare *esplorazione* (provare mosse poco testate) e *sfruttamento* (usare mosse che sembrano vincenti), MCTS usa la formula UCB nella fase di selezione.

### **7. Caso di Studio: AlphaGo**
Il documento conclude citando AlphaGo, il sistema che ha battuto i campioni umani di Go.
*   AlphaGo combina MCTS con reti neurali profonde ("Deep Networks"):
    *   **Policy Network:** Suggerisce le mosse più probabili (riducendo l'ampiezza della ricerca).
    *   **Value Network:** Valuta la posizione corrente (riducendo la profondità della ricerca necessaria).
    *   Questo approccio permette simulazioni molto più realistiche rispetto ai rollout puramente casuali.
