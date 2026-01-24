---
layout: secondary
---

Questi materiali didattici approfondiscono l'intersezione tra **biologia computazionale** e tecniche avanzate di **machine learning**. Una parte centrale è dedicata alla **trascrittomica spaziale**, spiegando come l'analisi dei dati genetici permetta di mappare l'attività cellulare all'interno dei tessuti tumorali. Ampio spazio è riservato al funzionamento delle **Random Forests** e delle **Isolation Forests**, strumenti essenziali per la classificazione e l'identificazione di anomalie nei dataset complessi. Vengono inoltre esaminate metodologie di **riduzione della dimensionalità**, come la PCA e la t-SNE, fondamentali per visualizzare informazioni multidimensionali. Infine, i testi illustrano strategie algoritmiche come la **programmazione dinamica** e le **mappe di Kohonen** per ottimizzare la risoluzione di problemi computazionali e biologici.

---

# Preprocessamento dei Dati
> 3-preprocessing.pdf

Questo modulo copre le fasi essenziali del trattamento dei dati prima dell'addestramento di un modello di Intelligenza Artificiale, concentrandosi sulla pulizia, trasformazione e riduzione della dimensionalità.

## 1. Il Workflow del Machine Learning
Il processo tipico per la costruzione di un modello segue un flusso iterativo composto da cinque fasi principali:
1.  **Get Data**: Acquisizione dei dati.
2.  **Clean, Prepare & Manipulate Data**: Pulizia e preparazione.
3.  **Train Model**: Addestramento.
4.  **Test Data**: Verifica.
5.  **Improve**: Miglioramento.

Le attività principali di preprocessamento includono:
*   **Data Cleaning**: Riduzione del rumore e gestione dei valori mancanti.
*   **Feature Selection**: Rimozione dei dati non rilevanti.
*   **Data Transformation**: Generalizzazione e normalizzazione.

## 2. Tipologie di Dato
È fondamentale distinguere il tipo di variabili trattate per applicare le tecniche corrette:
*   **Variabili binarie**: Valori, o presenza/assenza.
*   **Nominali**: Categorie senza ordine intrinseco (es. rosso, giallo, blu).
*   **Ordinali**: Categorie con un ordine (es. cattivo, buono, eccellente).
*   **Interval-scaled variables**: Misurazioni continue su scala lineare (es. peso, altezza, temperatura).
*   **Variabili di rapporto (Ratio)**.
*   **Tipi misti**.

## 3. Normalizzazione dei Dati
L'unità di misura può influenzare drasticamente gli algoritmi (es. il clustering cambia se si usano kg o libbre). Per evitare che alcune feature dominino su altre solo per la loro scala, è necessario normalizzare o standardizzare i dati.

### Tecniche Principali
*   **Normalizzazione Min-Max**:
    Riscala i valori in un intervallo, tipicamente. Rimuove il problema dei valori negativi.
    $x\prime = \frac{x - \min(X)}{\max(X) - \min(X)}$. *Criticità*: È molto sensibile ai valori minimi e massimi di $X$; se nel test set compaiono valori fuori dal range osservato nel training, la mappatura cambia.

*   **Normalizzazione Min-Max sulla media**:
    Riscala i valori in un range [-1, 1] centrando la media a 0.

## 4. Feature Selection
L'obiettivo è selezionare le caratteristiche più importanti utilizzando misure statistiche di correlazione tra le variabili di input e output.

**Analisi da svolgere sui dataset:**
*   Identificare feature con varianza più alta.
*   Analizzare la dipendenza tra le feature (anche tra tipologie diverse, es. categoriale vs numerica).

## 5. Riduzione della Dimensionalità (Dimensionality Reduction)
Ridurre il numero di dimensioni è cruciale quando si hanno dati di addestramento limitati. Le tecniche si dividono in metodi lineari e non lineari, supervisionati e non supervisionati.

### A. Tecniche Lineari
1.  **Principal Component Analysis (PCA)** o Trasformata di KL:
    *   **Tipo**: Non supervisionato.
    *   **Obiettivo**: Esegue un mapping lineare che massimizza la varianza dei dati per preservare l'informazione dei pattern.
2.  **Linear Discriminant Analysis (LDA)**:
    *   **Tipo**: Supervisionato.
    *   **Obiettivo**: Trova discriminanti lineari che massimizzano la separazione tra le classi (varianza tra categorie) e minimizzano la varianza interna alla classe.
3.  **Random Projection**:
    *   Proietta i dati usando una matrice casuale preservando la proporzionalità delle distanze.

### B. Tecniche Non Lineari (Manifold Learning)
Queste tecniche sono spesso usate per la visualizzazione (riduzione a 2 o 3 dimensioni) preservando la struttura locale dei dati.

1.  **t-SNE (t-distributed Stochastic Neighbor Embedding)**:
    *   **Funzionamento**: Definisce una distribuzione di probabilità $P_{ij}$ basata sulle distanze nello spazio ad alta dimensione e cerca di riprodurla ($Q_{ij}$) nello spazio a bassa dimensione minimizzando la divergenza entropica tra le due.
    *   **Caratteristica**: Usa la **Student’s t-distribution** (invece della Gaussiana) nello spazio di destinazione per gestire il "crowding problem" (sovraffollamento) e code più pesanti.
    *   **Obiettivo**: Preservare le vicinanze locali (i vicini rimangono vicini).

2.  **UMAP (Uniform Manifold Approximation and Projection)**:
    *   Tecnica più recente (2018/2020) basata sulla costruzione di un grafo di similarità.
    *   **Vantaggi rispetto a t-SNE**: Più veloce, preserva meglio la struttura globale dei dati ed è reversibile (utile per il clustering).

3.  **Altri metodi citati**:
    *   **TriMAP** e **PaCMAP** (tecniche recenti).
    *   **SOM (Self-Organizing Maps)**: Tecnica non supervisionata che produce una rappresentazione a bassa dimensione preservando la topologia (struttura) dei dati.

### C. Distribuzioni Statistiche di Riferimento
Per comprendere algoritmi come t-SNE, è necessario conoscere le distribuzioni di probabilità:
*   **Distribuzione Gaussiana (Normale)**: Definita da media ($\mu$) e deviazione standard ($\sigma$).
*   **Distribuzione t di Student**: Usata quando la dimensione del campione è piccola e $\sigma$ non è nota. Ha code più alte rispetto alla normale, il che la rende utile nel t-SNE per modellare le similarità nello spazio a bassa dimensione.

---

# Gestione dello Sbilanciamento tra le Classi (Class Imbalance)
> 4-imbalance.pdf

Questo modulo affronta le problematiche e le soluzioni relative all'addestramento di modelli di machine learning su dataset in cui le classi non sono rappresentate equamente.

## 1. Definizione del Problema
Il problema dello sbilanciamento sorge quando si deve classificare una **classe rara**, ovvero una classe per la quale si hanno a disposizione pochi campioni rispetto alle altre.
Questo scenario è comune in molte applicazioni reali, tra cui:
*   Rilevamento di frodi (fraud detection).
*   Rilevamento di anomalie.
*   Diagnosi di malattie rare.
*   Fuoriuscite di petrolio.
*   Rilevamento facciale.

### Conseguenze dello sbilanciamento
1.  **Bias verso la classe maggioritaria**: L'algoritmo tende a favorire la classe con più esempi per minimizzare la funzione di costo globale, sovra-adattandosi (overfitting) ad essa.
2.  **Mancato apprendimento dei pattern**: Il modello non riesce a capire cosa renda "diversa" la classe minoritaria e quali siano i pattern distintivi.
3.  **Metrica ingannevole**: L'uso dell'**accuratezza** (accuracy) come misura di qualità non è adeguato in questi contesti, poiché un modello che predice sempre la classe maggioritaria otterrebbe comunque un punteggio elevato.

## 2. Soluzione A: Il Ri-campionamento (Resampling)
Una delle strategie principali consiste nel modificare il dataset originale per bilanciare la distribuzione delle classi. Esistono due approcci principali: **Sotto-campionamento (Undersampling)** e **Sovra-campionamento (Oversampling)**.

### A. Sotto-campionamento (Undersampling)
Consiste nel ridurre il numero di campioni della classe maggioritaria per renderla comparabile alla classe minoritaria.
*   **Metodo**: Solitamente si effettua un campionamento casuale uniforme.
*   **Nota**: Non è obbligatorio ottenere un'esatta parità numerica; mantenere una certa tolleranza può favorire la generalizzazione del classificatore.
*   **Rischi**: Si rischia di eliminare dati importanti, alterando la stima della frontiera di decisione e perdendo pattern fondamentali per la classificazione. È cruciale valutare se i punti rimossi sono istanze "sicure", casi limite (borderline) o outlier.

#### Tomek Links
Per migliorare la pulizia dei dati, si utilizzano i **Tomek Links**.
*   **Definizione**: Una coppia di punti $(x_i, x_j)$ appartenenti a classi diverse è un Tomek Link se $x_i$ è il vicino più prossimo di $x_j$ e viceversa.
*   **Utilizzo**: Identificano punti di confine o rumorosi che possono essere rimossi per definire meglio la separazione tra classi.

### B. Sovra-campionamento (Oversampling)
Consiste nell'aumentare artificialmente i campioni della classe minoritaria.

#### SMOTE (Synthetic Minority Over-sampling Technique)
Invece di duplicare semplicemente i dati esistenti, SMOTE genera nuovi dati sintetici.
*   **Procedimento**:
    1.  Prende un esempio $x_i$ della classe minoritaria.
    2.  Individua i suoi $k$ vicini più prossimi (k-NN) della stessa classe.
    3.  Seleziona casualmente uno o più vicini.
    4.  Genera un punto sintetico lungo il segmento che unisce $x_i$ al vicino selezionato.
*   **Formula**: $r_1 = X_1 + gap \times diff$, dove $diff$ è la differenza tra i vettori delle feature e $gap$ è un numero casuale tra 0 e 1.

#### Limiti di SMOTE e Tecniche Avanzate
SMOTE opera "ciecamente", senza considerare la classe maggioritaria, rischiando di generare dati in zone di sovrapposizione o miste, specialmente in distribuzioni asimmetriche. Per mitigare questo rischio si usano tecniche ibride:

1.  **SMOTE + Tomek Links**: Dopo aver applicato SMOTE, si rimuovono i Tomek Links per pulire i confini tra le classi.
2.  **SMOTE + ENN (Edited Nearest Neighbor)**:
    *   **ENN**: Rimuove un esempio se la sua classe differisce da quella di almeno due dei suoi vicini.
    *   **Effetto**: Rispetto ai Tomek link, ENN rimuove più esempi da entrambe le classi, pulendo maggiormente il dataset.
3.  **ADASYN (Adaptive Synthetic Sampling)**:
    *   Modifica SMOTE per concentrarsi sui dati **borderline** (quelli più difficili da classificare), calcolando l'impurità del vicinato.
    *   Ignora gli outlier (punti circondati interamente dalla classe maggioritaria) per evitare di rafforzare il rumore.

### Validazione del Ri-campionamento
Per verificare l'efficacia di un metodo, una tecnica utile consiste nel prendere un dataset bilanciato noto, applicare un sotto-campionamento artificiale per sbilanciarlo, e vedere quanto bene il metodo riesce a ricostruire la distribuzione originale.

## 3. Soluzione B: Cost-Sensitive Learning
Questa alternativa al ri-campionamento non modifica i dati, ma agisce sull'algoritmo di apprendimento assegnando **costi diversi** ai vari tipi di errore.

*   **Principio**: Assegnare un peso (costo) maggiore agli errori commessi sulla classe minoritaria rispetto a quelli sulla classe maggioritaria.
*   **Implementazione**:
    *   Si minimizza il rischio condizionale (Bayes): $\sum P(j\vert x)C(i,j)$, dove $C(i,j)$ è il costo di classificare erroneamente la classe $i$ come $j$.
    *   Si possono utilizzare *ensemble* di modelli, dove ogni modello è specifico per una classe.

## Punti Chiave per l'Esame
*   Saper spiegare perché l'accuratezza non funziona con classi sbilanciate.
*   Distinguere tra undersampling e oversampling e i relativi rischi (perdita di info vs overfitting/rumore).
*   Descrivere l'algoritmo **SMOTE** (generazione geometrica lungo i segmenti).
*   Definire cosa sono i **Tomek Links** e come si usano per la pulizia dei dati.
*   Capire la differenza tra **SMOTE+Tomek**, **SMOTE+ENN** e **ADASYN**.
*   Comprendere il concetto di **Cost-Sensitive Learning** come alternativa alla modifica del dataset.

---

# Benchmarking e Analisi Comparativa
> 5-benchmarking.pdf

Questo modulo introduce i concetti fondamentali, le sfide e le linee guida per la valutazione comparativa (benchmarking) di sistemi e algoritmi, con particolare attenzione all'ambito scientifico e informatico.

## 1. Definizioni Fondamentali
È necessario distinguere tra l'attività di confronto e lo standard utilizzato:

*   **Benchmarking (Analisi Comparativa)**: È l'atto di valutare la qualità di un oggetto (sistema, algoritmo, progetto) mettendolo in relazione con altri simili. Esempi includono il confronto di una rivista IT rispetto ad altre o la valutazione di progetti rispetto a obiettivi target.
*   **Benchmark**: È l'oggetto misurabile utilizzato come **standard** di riferimento per il confronto.

## 2. Tipologie di Dataset per il Benchmark
Un benchmark può essere costituito da due tipologie principali di dati, ognuna con pro e contro:

1.  **Dati Reali**:
    *   *Origine*: Acquisiti tramite la misurazione di eventi realmente accaduti.
    *   *Vantaggi*: Rappresentano il mondo reale in modo altamente veritiero.
    *   *Svantaggi*: Soggetti a potenziali errori di misurazione.
2.  **Dati Sintetici (In silico)**:
    *   *Origine*: Costruiti artificialmente seguendo regole specifiche.
    *   *Vantaggi*: Controllo totale sulle caratteristiche dei dati.
    *   *Svantaggi*: Possono risultare molto distanti dalla realtà, riducendo la validità del test.

## 3. Sfide e Limitazioni
L'uso di benchmark standardizzati presenta diverse criticità per ricercatori e sviluppatori:

*   **Rappresentatività limitata**: I benchmark rappresentano solo un *campione* dello spazio comportamentale (o dei fenomeni) dell'applicazione; non coprono tutte le casistiche possibili.
*   **Rigidità**: Misurano le prestazioni per un singolo punto dello spazio comportamentale, rischiando di non essere generalizzabili.
*   **Obsolescenza e Costi**: Sviluppare e mantenere suite di benchmark è costoso. Un problema noto è il rischio di *"progettare i microprocessori di domani usando i benchmark di oggi costruiti sui programmi di ieri"*.
*   **Open vs Proprietario**: Spesso i benchmark standard sono open-source, mentre le applicazioni reali di interesse industriale possono essere proprietarie, creando un divario nel test.

## 4. Caratteristiche Chiave di un Benchmark
Affinché un benchmark sia efficace, deve soddisfare cinque caratteristiche fondamentali,:

1.  **Rilevanza**: Il comportamento del benchmark deve corrispondere strettamente ai comportamenti che interessano agli utenti finali.
2.  **Riproducibilità**: Deve produrre risultati costanti quando eseguito con la stessa configurazione.
3.  **Correttezza (Fairness)**: Deve permettere a diverse configurazioni di competere sui loro meriti reali, senza limitazioni artificiali.
4.  **Verificabilità**: Deve fornire garanzie sull'accuratezza dei risultati ottenuti.
5.  **Usabilità**: Deve essere eseguibile dagli utenti nei propri ambienti operativi.

## 5. Linee Guida per il Benchmarking Computazionale
Il materiale fa riferimento a *Weber et al. (Genome Biology, 2019)* per definire le "regole d'oro" per un benchmarking di alta qualità in biologia computazionale e scienze affini.

Le 10 raccomandazioni principali sono:
1.  **Definire scopo e ambito**: Chiarire l'obiettivo del confronto.
2.  **Includere metodi rilevanti**: Selezionare tutti gli algoritmi o metodi pertinenti per il confronto.
3.  **Selezione dei dataset**: Scegliere dataset rappresentativi (o progettarne di sintetici adeguati).
4.  **Parametri e versioni**: Specificare chiaramente le versioni del software e i valori dei parametri utilizzati.
5.  **Valutazione quantitativa**: Valutare i metodi secondo metriche di prestazione chiave (es. accuratezza, velocità).
6.  **Valutazione secondaria**: Considerare misure come i requisiti computazionali, l'usabilità, la facilità di installazione e la qualità della documentazione.
7.  **Interpretazione dei risultati**: Fornire raccomandazioni utili sia per gli utenti che per gli sviluppatori dei metodi.
8.  **Pubblicazione accessibile**: Rendere i risultati disponibili in formati accessibili.
9.  **Design estensibile**: Progettare il benchmark in modo che possa essere esteso in futuro.
10. **Riproducibilità**: Seguire le migliori pratiche rendendo pubblico il codice e i dati utilizzati.

---

# Regressione e Analisi delle Serie Temporali
> 8-serie-temporali.pdf

Questo modulo copre i concetti fondamentali della regressione (lineare e non lineare) e approfondisce l'analisi, la trasformazione e la previsione di serie temporali (Time Series Analysis).

## 1. Regressione
A differenza della classificazione (etichette discrete), la regressione mira ad apprendere un mapping dallo spazio dei pattern a quello continuo delle etichette.

### Regressione Lineare
*   **Modello base**: $y = \alpha + \beta x + \epsilon$, dove $\alpha$ è l'intercetta e $\beta$ la pendenza.
*   **Regressione Multipla**: Se la variabile indipendente è un vettore (più feature), si generalizza a un iperpiano. Si utilizza una matrice $X$ ($n \times d+1$) per includere il termine noto.

### Metriche di Valutazione dell'Errore
Per valutare la bontà del modello si usano diverse metriche:
*   **MAE (Mean Absolute Error)**: $\frac{1}{N} \sum \vert \hat{y}_i - y_i\vert$. È robusta agli outlier e mantiene l'unità di misura originale.
*   **MAPE (Mean Absolute Percentage Error)**: Variante del MAE che considera lo scostamento percentuale $\frac{1}{N} \sum \vert\frac{\hat{y}_i - y_i}{y_i}\vert$.
*   **$R^2$ (Coefficiente di determinazione)**: Indica quanto il modello "fitta" i dati (spiega la varianza). Varia tra 0 e 1. **Nota**: Non è valido per modelli non lineari.

### Regressione Non Lineare
*   Quando la dipendenza non è lineare, spesso non esiste una soluzione in forma chiusa (least square).
*   **Soluzioni**:
    *   Tecniche iterative di ottimizzazione (es. **Gradient Descent** o **Gauss-Newton**) se la dipendenza funzionale è nota.
    *   Utilizzo di varianti di classificatori per la regressione, come **Random Forest Regressor** o **SVR (Support Vector Regressor)**, se la dipendenza non è nota.

## 2. Serie Storiche (Time Series)
Una serie storica è un insieme di variabili casuali ordinate rispetto al tempo, usata per interpretare fenomeni (trend, ciclicità) o prevedere andamenti futuri.

### Approcci all'analisi
1.  **Classico**: $Y_t = f(t) + u_t$. Scompone il fenomeno in una parte deterministica sistematica (trend, cicli) e una parte stocastica residua.
2.  **Moderno**: Si concentra sulla parte stocastica, assumendo che il processo sia generato da un modello probabilistico parametrico (es. regressione lineare multipla).

### Componenti di una Serie Temporale
Una serie è caratterizzata da quattro componenti principali:
1.  **Trend (Tendenziale)**: Andamento di lungo periodo (crescente, decrescente, costante).
2.  **Ciclica**: Fluttuazioni periodiche o non periodiche di durata pluriennale (fasi: prosperità, recessione, crisi, ripresa).
3.  **Stagionale (Seasonality)**: Variazioni che si ripetono negli stessi periodi (es. mesi) in anni successivi.
4.  **Casuale/Irregolare**: Oscillazioni dovute a eventi casuali o imprevisti (es. scioperi, picchi improvvisi).

## 3. Stazionarietà
Un concetto cruciale per l'analisi è la **stazionarietà**. Un processo è stazionario se la sua distribuzione di probabilità congiunta (e parametri come media e varianza) non cambia se traslata nel tempo.

*   **Test Statistici**: Per verificare la stazionarietà si usano test come **Augmented Dickey-Fuller (ADF)** (ipotesi nulla: non stazionaria) e **KPSS**.
*   **Trasformazioni per rendere stazionaria una serie**:
    1.  **Detrending**: Rimozione del trend per analizzare solo le differenze.
    2.  **Differencing**: Calcolo della differenza tra osservazioni consecutive ($Y_t - Y_{t-1}$) per stabilizzare la media.
    3.  **Transformation**: Trasformazioni matematiche (Log, Radice Quadrata) per stabilizzare la varianza.

## 4. Smoothing e Medie Mobili (Moving Averages)
Le medie mobili sono usate per filtrare il rumore e identificare trend.

1.  **SMA (Simple Moving Average)**: Media non ponderata dei precedenti $M$ punti. Aumentare $M$ aumenta lo "smussamento" ma riduce l'accuratezza locale.
    *   *Python*: `pandas.DataFrame.rolling.mean()`
2.  **CMA (Cumulative Moving Average)**: Media di tutti i valori passati fino al tempo corrente.
    *   *Python*: `pandas.DataFrame.expanding.mean()`
3.  **EMA (Exponential Moving Average)**: Dà un peso maggiore ai dati recenti tramite un fattore di smoothing $\alpha$ (0-1). Reagisce più velocemente ai cambiamenti rispetto alla SMA.
    *   *Formula*: $EMA_t = \alpha x_t + (1-\alpha)EMA_{t-1}$
    *   *Python*: `pandas.DataFrame.ewm.mean()`

## 5. Analisi di Autocorrelazione
Strumenti per identificare pattern ripetitivi e l'influenza dei valori passati:
*   **ACF (Auto-Correlation Function)**: Misura la similarità tra la serie e una sua versione ritardata (lagged).
*   **PACF (Partial Auto-Correlation Function)**: Mostra la correlazione diretta con un ritardo specifico, rimuovendo gli effetti intermedi.

## 6. Modelli Predittivi (Forecasting)

### Modelli Statistici (AR, MA, ARIMA)
Questi modelli richiedono generalmente che la serie sia stazionaria (o resa tale).
1.  **AR (Auto-Regressive)**: Prevede il futuro basandosi sui valori passati (regressione lineare su variabili ritardate).
    *   Formula: $Y_t = C + b_1 Y_{t-1} + \dots + E_t$
2.  **MA (Moving Average)**: Usa gli errori passati per prevedere il futuro.
3.  **ARMA**: Combinazione di AR e MA per serie stazionarie.
4.  **ARIMA (Auto-Regressive Integrated Moving Average)**: Estende ARMA includendo la **differenziazione (I)** per gestire serie **non stazionarie**.

### Recurrent Neural Networks (RNN)
Architettura di Deep Learning adatta per serie temporali grazie alla capacità di mantenere una "memoria".
*   **Struttura**: Composta da Input ($x_t$), Strato Nascosto ($h_t$) e Output ($y_t$). Lo stato nascosto al tempo $t$ dipende dall'input corrente e dallo stato nascosto precedente ($h_{t-1}$).
*   **Vantaggi**: Ottime per modellare relazioni complesse e non lineari; veloci in previsione; gestiscono bene i valori mancanti.
*   **Svantaggi**: Costo computazionale elevato in fase di addestramento (training).

---

# Programmazione Dinamica e Allineamento di Sequenze
> 9-programmazione-dinamica.pdf

Questo modulo esplora l'uso della programmazione dinamica per risolvere problemi di ottimizzazione, con un focus specifico sull'analisi di serie temporali (DTW, SAX) e l'allineamento di sequenze biologiche.

## 1. Analisi di Serie Temporali: Dynamic Time Warping (DTW)
Il **Dynamic Time Warping** è un algoritmo progettato per misurare la similarità tra due o più serie temporali, permettendo il loro allineamento anche quando le sequenze variano in velocità o tempo.

### Caratteristiche Principali
*   **Utilità**: È efficace quando la semplice compressione o espansione lineare non funziona. Un esempio classico è il riconoscimento vocale, dove la velocità del parlato varia rispetto al campione di riferimento.
*   **Applicazioni**: Ampiamente usato in IoT (Internet of Things) per analizzare stream di dati da sensori, video o audio, specialmente con alte frequenze di campionamento (es. automotive).
*   **Vincoli**: La mappatura degli indici deve essere **monotonicamente crescente** e gli indici di inizio e fine delle due serie devono coincidere.

### Algoritmo
1.  **Matrice**: Si utilizza una matrice $n \times m$. La cella $$ è inizializzata a 0, mentre la prima riga e la prima colonna a infinito.
2.  **Calcolo**: Per ogni cella, si calcola la distanza (es. Euclidea) tra i punti delle due serie. A questa si aggiunge il minimo costo proveniente dalle celle adiacenti:
    *   *Precedente riga*: Cancellazione.
    *   *Precedente colonna*: Inserimento.
    *   *Diagonale*: Corrispondenza (Match).
3.  **Warping Path**: Una volta completata la matrice, si ricostruisce il percorso a ritroso partendo dall'ultima cella fino a $$, seguendo i valori minimi. Uno spostamento orizzontale nel percorso indica un'accelerazione della seconda serie.

## 2. Programmazione Dinamica (DP)
La programmazione dinamica è un metodo per risolvere efficientemente problemi di ottimizzazione combinando soluzioni di **sottoproblemi sovrapposti**.

### Concetti Fondamentali
*   **Differenza con Divide-et-Impera**: Mentre il divide-et-impera ricalcola i sottoproblemi più volte, la DP risolve ogni sottoproblema comune una sola volta, memorizzando il risultato (Memoization).
*   **Condizioni di applicabilità**:
    1.  **Sottostruttura ottima**: La soluzione ottima del problema contiene le soluzioni ottime dei sottoproblemi.
    2.  **Sottoproblemi sovrapposti**: Lo stesso sottoproblema viene richiamato più volte.

### Esempi Classici
1.  **Serie di Fibonacci**:
    *   L'approccio ricorsivo semplice ha complessità esponenziale $O(2^n)$ a causa del ricalcolo continuo degli stessi valori.
    *   L'approccio DP (bottom-up o memoization) riduce la complessità a $O(n)$ calcolando i valori una sola volta e riutilizzandoli.
2.  **Assembly Line Scheduling (Catena di montaggio)**:
    *   *Problema*: Trovare il percorso più veloce per un telaio attraverso $n$ stazioni su due linee, considerando tempi di lavorazione ($a$) e tempi di trasferimento tra linee ($t$).
    *   *Soluzione DP*: Il tempo minimo per arrivare alla stazione $j$ sulla linea 1 è il minimo tra arrivare dalla stazione $j-1$ della stessa linea o trasferirsi dalla stazione $j-1$ dell'altra linea.
    *   *Complessità*: Riduce il problema da $2^n$ (forza bruta) a $\Theta(n)$.

## 3. Symbolic Aggregate approXimation (SAX)
SAX è un metodo non supervisionato per semplificare le serie storiche trasformandole in sequenze di simboli, effettuando di fatto una riduzione della dimensionalità.

*   **P.A.A. (Piecewise Aggregate Approximation)**: La serie viene divisa in finestre temporali di dimensione $w$. Per ogni finestra si calcola la media, riducendo la serie a $n/w$ punti.
*   **Conversione in stringhe**: I valori numerici ridimensionati vengono mappati su etichette (simboli) basate su livelli predefiniti, creando la "SAX String".

## 4. Allineamento di Sequenze Biologiche
L'obiettivo è misurare la similarità tra sequenze (DNA o proteine) massimizzando i match e minimizzando gap e mismatch.

### Matrici di Sostituzione
Per valutare la similarità tra aminoacidi si usano matrici come **PAM250** o **BLOSUM45**, che assegnano punteggi basati su caratteristiche chimico-fisiche (es. idrofobicità, carica).

### Punteggio (Scoring)
Lo score totale considera penalità per i gap:
$Score = \sum S(a_i, b_i) - \sum (\gamma + \delta \times (len-1))$
Dove $\gamma$ è il costo di apertura del gap e $\delta$ il costo di estensione (gap affine).

### A. Allineamento Globale (Needleman & Wunsch)
Allinea le sequenze per la loro intera lunghezza.
*   **Logica**: Si riempie una matrice sommando allo score corrente il massimo tra le celle precedenti (diagonale, alto, sinistra).
*   **Traceback**: Si parte dalla cella in basso a destra e si risale fino all'inizio.
*   **Nota**: L'algoritmo di **Hirschberg** è una variante che ottimizza lo spazio di memoria.

### B. Allineamento Locale (Smith-Waterman)
Cerca le sottosequenze più simili all'interno di sequenze più lunghe (es. domini proteici conservati).
*   **Differenza chiave**: Nella formula ricorsiva, se il punteggio diventa negativo, viene resettato a **0**. Questo permette di "dimenticare" allineamenti poveri precedenti e iniziarne di nuovi.
*   **Traceback**: Si parte dalla cella con il **valore massimo assoluto** nella matrice (non necessariamente l'ultima) e ci si ferma quando si incontra uno 0.

### C. BLAST (Basic Local Alignment Search Tool)
Metodo euristico (più veloce della DP pura) per cercare similarità in grandi database.
1.  Trova "seed" (parole corte) con punteggio alto.
2.  Scansiona il database per trovare corrispondenze.
3.  Estende l'allineamento dai seed.
*   **Significatività statistica**: Usa la distribuzione del valore estremo (EVD) per calcolare il valore atteso $E$ (numero di hit casuali previsti con quel punteggio) e il $p$-value.

### D. Allineamento Multiplo (MSA) e Clustal
Allineare $N$ sequenze contemporaneamente con la DP avrebbe complessità esponenziale $O(L^N)$.
**Clustal** usa un approccio euristico progressivo:
1.  Calcola tutti gli allineamenti a coppie ($N(N-1)/2$).
2.  Costruisce un **albero guida** basato sulla similarità (usando algoritmi come Neighbor-Joining).
3.  Allinea progressivamente le sequenze seguendo l'albero, convertendo le similarità in distanze lineari (metodo Feng-Doolittle).

---

# Subgraph Isomorphism (SubGI) e Algoritmi Correlati
> 10-SubGI.pdf

Il documento ripercorre circa 15 anni di ricerca sul problema dell'Isomorfismo di Sottografi (Subgraph Isomorphism - SubGI), con un focus particolare sulle applicazioni in ambito biologico e sulle ottimizzazioni algoritmiche.

## 1. Introduzione e Contesto Storico
Il problema dell'Isomorfismo di Sottografi consiste nel determinare se un grafo "pattern" (o query) è contenuto all'interno di un grafo "target" più grande. Questo problema è computazionalmente complesso (NP-completo) e ha una lunga storia di approcci risolutivi.

### Cronologia delle Tecniche Classiche
Le tecniche storiche si dividono in tre categorie principali:
1.  **Tree Search (Ricerca ad Albero)**: Algoritmi classici come *Bron (1973)*, *Ullmann (1976)*, *Cordella (VF2, 1998-2001)*.
2.  **Altre Tecniche**: Inclusi approcci basati su *clique* o programmazione vincolata (*McKay 1981*, *Messmer 1995*).
3.  **Grafi Speciali**: Algoritmi ottimizzati per classi specifiche di grafi (*Hopcroft 1974*).

## 2. Evoluzione degli Algoritmi (Timeline della Ricerca)
Il documento traccia l'evoluzione degli strumenti sviluppati dal gruppo di ricerca (University of Verona/Parma/Catania/NYU), passando da approcci sequenziali a paralleli, fino all'uso di GPU e strutture dati avanzate.

### A. Indexing e Matching Approssimato (2010-2016)
*   **RelaxGrep (2010)**: Approccio per la ricerca approssimata nei grafi tramite "query relaxation" (rilassamento della query).
*   **Suffix Tree Indexing (2010)**: Miglioramento dell'indicizzazione dei database a grafo utilizzando strutture ad albero dei suffissi,.
*   **GRAPES (2013)**: Software per la ricerca parallela su grafi biologici, progettato per architetture multi-core.
*   **NetMatchStar (2015)**: Un plugin per *Cytoscape* che estende le capacità di querying delle reti biologiche.
*   **APPAGATO (2016)**: Strumento per il querying approssimato, parallelo e stocastico su reti biologiche.

### B. Ottimizzazione e Parallelismo (2017-2019)
*   **Variable Ordering (2017)**: Studio sull'importanza dell'ordinamento delle variabili (nodi) negli algoritmi di isomorfismo per migliorare le prestazioni.
*   **GPU Computing (2018)**:
    *   Implementazione efficiente di algoritmi SubGI su GPU.
    *   **cuRnet**: Pacchetto R per l'attraversamento di grafi su GPU.
*   **Euristiche (2019)**: Sviluppo di strategie di matching veloci basate su euristiche che analizzano solo il pattern (query) per reti molto grandi,.

### C. Tecniche Avanzate Recenti (2021-2025)
*   **GRAPES-DD (2021)**: Sfrutta i diagrammi decisionali (**Decision Diagrams**) per una ricerca guidata dall'indice nei database biologici. Utilizza euristiche basate sull'entropia per ottimizzare tali diagrammi.
*   **ArcMatch (2024)**: Algoritmo ad alte prestazioni per grafi etichettati che sfrutta i "domini degli archi".
*   **Machine Learning su Codice (2024)**: Applicazione di approcci di ML per la similarità del codice sorgente utilizzando feature basate su grafi.
*   **MultiGraphMatch (2025)**: Algoritmo di matching specificamente progettato per *multigrafi* (grafi dove possono esistere più archi tra due nodi).

## 3. Focus Tecnico: Strategie di Ricerca

### RI e RI-DS (One-to-One)
Queste sono strategie di ricerca per risolvere l'isomorfismo esatto. Si basano su due principi fondamentali per massimizzare l'efficienza:
1.  **Maximizing Pruning Power**: Massimizzare la capacità di tagliare rami dell'albero di ricerca che non portano a soluzioni (potatura).
2.  **Riduzione dello spazio di ricerca**: Minimizzare i tentativi necessari per trovare il match.

### GRAPES-DD e MTMDD
Questa tecnica rappresenta un'evoluzione significativa basata su rappresentazioni simboliche:
*   **MTMDD (Multi-Terminal Multi-Valued Decision Diagrams)**: Strutture dati usate per rappresentare in modo compatto sistemi probabilistici o grandi spazi di stati.
*   **Funzionamento**:
    1.  Dato un grafo query, viene costruito il suo MTMDD.
    2.  Questo viene "moltiplicato" per l'MTMDD dei grafi target (database).
    3.  L'operazione permette di ottenere la lista dei vertici nel target che sono punti di partenza di cammini etichettati presenti nella query.
    4.  L'obiettivo è identificare i "backbones" (ossature) dei match approssimati.

## 4. Applicazioni
Sebbene le tecniche siano algoritmiche, il dominio applicativo principale è la **Bioinformatica** e l'analisi di reti biologiche (es. interazioni proteina-proteina, reti biochimiche),,.
Tuttavia, vengono citate anche nuove applicazioni come:
*   **Analisi del codice sorgente**: Rilevamento di similarità tra codici (utile per plagio o refactoring).
*   **Querying di database NoSQL basati su grafi**.

## Punti Chiave per l'Esame
*   **Evoluzione**: Saper descrivere il passaggio da algoritmi sequenziali esatti a quelli paralleli, approssimati e basati su GPU.
*   **Strumenti**: Ricordare i nomi chiave (**GRAPES**, **RI**, **NetMatchStar**) e il loro scopo.
*   **Index-Driven Search**: Capire il concetto dietro **GRAPES-DD**, ovvero l'uso di diagrammi decisionali (MTMDD) per filtrare e indicizzare i grafi prima del matching puntuale.
*   **Euristiche**: L'importanza dell'ordinamento delle variabili (nodi) e delle euristiche *pattern-only* per velocizzare la ricerca su grafi grandi.

---

# Modelli Computazionali e Machine Learning per la Trascrittomica Spaziale
> 11-Presentazione_SimoneAvesani.pdf

Il documento copre i fondamenti biologici, la tecnologia di trascrittomica spaziale e le metodologie di analisi computazionale applicate.

## 1. Fondamenti Biologici
Per comprendere l'analisi computazionale, è necessario partire dalle basi molecolari della vita.

### DNA e Proteine
*   **DNA (Acido Desossiribonucleico):** È il contenitore dell'informazione biologica. Ha una struttura a doppia elica antiparallela composta da quattro nucleotidi: Adenina, Timina, Citosina, Guanina. Codifica i geni e tramanda i dati genetici.
*   **Proteine:** Sono le unità funzionali delle cellule, responsabili della struttura e della regolazione dei processi cellulari. Sono composte da catene di amminoacidi e possiedono una struttura complessa su 4 livelli (primaria, secondaria, terziaria, quaternaria).
*   **Il Dogma Centrale:** Il flusso dell'informazione biologica procede dal **DNA** all'**RNA** (tramite *Trascrizione*) e dall'RNA alla **Proteina** (tramite *Traduzione*). La proteina rappresenta l'esecutore delle istruzioni.

### La Cellula
*   **Teoria Cellulare:** Tutti gli organismi sono composti da cellule; la cellula è l'unità base della vita; le cellule nascono da cellule preesistenti.
*   **Diversità:** Sebbene tutte le cellule di un organismo abbiano lo stesso DNA, esse non sono tutte uguali. Sono classificate in base a funzione, posizione e struttura (es. neuroni, cellule immunitarie, muscolari).

## 2. La Trascrittomica Spaziale (Spatial Transcriptomics)

Questa tecnologia rappresenta un'evoluzione rispetto al sequenziamento tradizionale, permettendo di mantenere l'informazione sulla posizione fisica delle cellule nel tessuto.

### Concetto Chiave
La trascrittomica spaziale permette di studiare il **profilo di espressione genica** nel contesto di un tessuto organizzato spazialmente.
Per ogni unità (cellula o spot) si ottengono due informazioni cruciali:
1.  Il profilo di espressione (quali geni sono attivi e quanto).
2.  La posizione in un sistema di coordinate X e Y.

### Tecnologia 10x Visium
È una delle piattaforme tecnologiche principali descritte nel documento:
*   **Chip:** Il tessuto viene posizionato su un vetrino contenente migliaia di fori (spot).
*   **Cattura:** Il tessuto viene denaturato, facendo cadere le cellule nei fori. Qui l'RNA viene estratto e legato a un'etichetta specifica (barcode spaziale).
*   **Sequenziamento:** I frammenti di RNA vengono raggruppati e sequenziati. Grazie ai barcode, è possibile risalire alla posizione originale di ogni frammento.

### Struttura dei Dati
L'output di un esperimento di trascrittomica spaziale comprende:
1.  **Immagine del Tessuto:** La fotografia istologica del campione.
2.  **Coordinate:** Una tabella con le posizioni (x, y) di ogni spot/cellula.
3.  **Matrice di Espressione Genica:** Una matrice dove le righe rappresentano i geni (features) e le colonne rappresentano le cellule (barcodes). I valori indicano il livello di espressione.

## 3. Analisi Computazionale dei Dati

L'obiettivo è rispondere a domande biologiche complesse partendo dai dati grezzi, specialmente in contesti patologici come i tumori.

### Domande Biologiche (Biological Questions)
L'analisi mira a capire:
*   Dove sono localizzate le cellule tumorali?
*   Cosa differenzia il loro profilo di espressione dalle cellule sane?
*   Con quali cellule comunicano?
*   Come si evolvono e differenziano le cellule?

### Pipeline di Analisi
Il flusso di lavoro tipico include:
1.  **Filtering:** Identificazione ed eliminazione di cellule sequenziate male o di bassa qualità.
2.  **Clustering:** Raggruppamento delle cellule in base alla similarità del loro profilo genico per identificare i tipi cellulari presenti.
3.  **Ligand-Receptor Analysis:** Studio della comunicazione tra cellule.
4.  **Trajectory:** Analisi della differenziazione ed evoluzione cellulare (velocità sub-cellulare).

### Sfide Specifiche: Sparsità e Rumore
*   **Sparsità (Sparsity):** La matrice di espressione genica contiene moltissimi valori uguali a 0. Questo è dovuto ai limiti tecnologici nella cattura dell'RNA (non tutto l'RNA presente viene rilevato).
*   **Rumore:** La sparsità rende i dati rumorosi. È fondamentale identificare i **geni importanti** (feature selection) per ridurre il rumore e studiare le vere differenze biologiche.

### Geni Spazialmente Variabili (SVGs) e Autocorrelazione
Per identificare i geni rilevanti nello spazio si usano concetti statistici:
*   **Geni Spazialmente Variabili (SVG):** Geni la cui espressione non è casuale ma segue pattern spaziali specifici (es. domini tumorali). Questi guidano l'identificazione di domini spaziali.
*   **Autocorrelazione Spaziale Positiva:** Valori simili di espressione si trovano vicini nello spazio (indica stabilità e pattern biologici).
*   **Autocorrelazione Spaziale Negativa:** Valori dissimili si trovano vicini nello spazio.

---

# Metodi di AI per la Caratterizzazione delle Molecole Inquinanti
> 12-Presentazione_EvaViesi.pdf

Questo seminario, tenuto da Eva Viesi, esplora l'applicazione della **Chemoinformatica** e del **Machine Learning** per analizzare le molecole inquinanti (inquinamento atmosferico) e predirne le implicazioni sulla salute umana, sopperendo alla mancanza di dati sperimentali.

## 1. Introduzione alla Chemoinformatica
La chemoinformatica è una disciplina che combina informatica e chimica per recuperare, rappresentare e analizzare informazioni chimiche.
*   **Obiettivo:** Predire proprietà fisico-chimiche, attività biologiche, tossicologiche e supportare la scoperta di farmaci (Drug Discovery).
*   **Fondamento Teorico:** Si basa sulla meccanica quantistica (equazione di Schrödinger) per descrivere la reattività e la stabilità molecolare a livello atomico.

## 2. Rappresentazione delle Molecole
Per essere elaborate da algoritmi, le molecole devono essere trasformate in dati digitali.

### Formati e Strutture
*   **SMILES:** Stringhe di testo che rappresentano la struttura chimica (es. `C=C(Cl)Cl`).
*   **Grafi:** Le molecole sono rappresentate come grafi dove gli atomi sono nodi e i legami sono archi.

### Descrittori Molecolari
Sono valori numerici che descrivono le proprietà della molecola.
1.  **Fingerprints (Impronte):** Rappresentazioni binarie (vettori di bit) che indicano la presenza o assenza di specifiche sottostrutture o sequenze di legami.
2.  **Proprietà Quantomeccaniche (QM):** Calcolate tramite software come *Jaguar* (es. livelli energetici HOMO/LUMO, momento di dipolo).
3.  **Descrittori 1D, 2D, 3D:** Calcolati tramite software come *PaDEL-Descriptor* (es. peso molecolare, conteggio atomi, logP).

## 3. Il Database APDB (Air Pollutants DataBase)
Il progetto descritto si basa sulla creazione di un database specifico per gli inquinanti atmosferici.
*   **Fonti Dati:** EPA (Environmental Protection Agency) e PubChem.
*   **Pipeline di Creazione:**
    1.  Raccolta dati grezzi (circa 1830 molecole).
    2.  Preprocessing e riduzione della dimensionalità.
    3.  Calcolo delle **Matrici di Similarità** basate su diverse features (Fingerprints, Descrittori, Proprietà Quantistiche).
    4.  Creazione di **Network di Similarità**.
    5.  **Node Embedding (node2vec):** Trasformazione dei nodi del grafo in vettori numerici (embedding) catturando le relazioni topologiche.

## 4. Bioactivity Signatures e Chemical Checker (CC)
Un concetto chiave è il **Principio di Similarità**: molecole con strutture simili tendono ad avere attività biologiche simili.
Tuttavia, per gli inquinanti mancano spesso dati sperimentali diretti. Si utilizza quindi il **Chemical Checker (CC)** come risorsa di riferimento.

### Struttura del Chemical Checker
Il CC organizza la conoscenza bioattiva in 5 livelli di complessità crescente (A-E), ciascuno diviso in 5 spazi:
*   **A - Chemistry:** Fingerprints, scaffold.
*   **B - Targets:** Interazioni con proteine, meccanismi d'azione.
*   **C - Networks:** Pathway metabolici.
*   **D - Cells:** Espressione genica, morfologia cellulare.
*   **E - Clinics:** Effetti collaterali, indicazioni terapeutiche.

### Signaturizers (Inferenza di Bioattività)
Poiché i dati sperimentali coprono solo una frazione delle molecole, si utilizzano modelli di Deep Learning chiamati **Signaturizers** (basati su *Siamese Neural Networks*).
*   **Funzione:** Prendono in input la struttura chimica (SMILES) e predicono le "Bioactivity Signatures" (vettori 128D) anche per molecole senza dati sperimentali, trasferendo la conoscenza dai farmaci noti agli inquinanti.

## 5. Metodologia APBIO (Studio presentato)
Lo studio APBIO mira a profilare gli inquinanti atmosferici e predirne nuove interazioni con target biologici.

### Processo di Analisi
1.  **Input:** 1830 molecole inquinanti.
2.  **Calcolo Descrittori:** Vengono generati vettori basati su Fingerprints e Descrittori APDB mappati sugli spazi del Chemical Checker.
3.  **Target Features:** Vengono estratte le sequenze proteiche (da UniProt) dei target biologici e calcolati i relativi descrittori con *iFeature* (es. composizione amminoacidica).
4.  **Predizione Interazioni:** Si addestrano modelli di Machine Learning per predire se un inquinante interagisce con una proteina specifica.

### Strategia di Machine Learning
*   **Sbilanciamento:** Le interazioni note (positives) sono molto meno di quelle non esistenti (negatives). Rapporto 1:10.
*   **Negative Sampling (OCSVM):** Invece di scegliere campioni negativi a caso, si usa una **One-Class Support Vector Machine (OCSVM)**. Questa apprende i pattern dei dati positivi e seleziona come negativi i campioni più distanti dall'iperpiano (outlier/anomalie), migliorando la robustezza del training.
*   **Modelli Testati:** Random Forest (RF), K-Nearest Neighbors (KNN), Multi-Layer Perceptron (MLP).

## 6. Risultati e Validazione
Il sistema è stato validato predicendo interazioni note in database esterni come il **CTD (Comparative Toxicogenomics Database)**.

*   **Target Specifici:** Sono state studiate con successo le interazioni con enzimi della famiglia **CYP450** (coinvolti nel metabolismo) e l'Anidrasi Carbonica.
*   **Performance:** I modelli hanno mostrato performance robuste (alto Recall e AUC), dimostrando che le *signatures* inferite catturano efficacemente le proprietà biologiche degli inquinanti.

## Punti Chiave per l'Esame
1.  **Definizione di Chemoinformatica:** Uso di metodi informatici per risolvere problemi chimici.
2.  **Rappresentazione:** Differenza tra descrittori classici (PaDEL) e Bioactivity Signatures (Chemical Checker/Signaturizer).
3.  **Chemical Checker:** Struttura a 5 livelli (dalla chimica alla clinica) per descrivere la bioattività.
4.  **Node2vec:** Algoritmo per creare embedding dai grafi di similarità.
5.  **Strategia di Sampling:** Uso di **OCSVM** per selezionare campioni negativi "affidabili" nel training dei modelli di interazione.
6.  **Applicazione:** Predizione di tossicità e interazioni proteina-ligando per inquinanti atmosferici privi di dati sperimentali.

---

# Gastronomia Computazionale ed Evoluzione del Cibo
> 14-Computational Gastronomy, Corso AI, UNIPR 2025_ITA.pdf

Questo modulo esplora l'intersezione tra la scienza dei dati, le reti complesse (Network Science) e la cultura culinaria, analizzando come gli ingredienti vengono combinati e come l'AI può generare o analizzare ricette.

## 1. Fondamenti Storici e Filosofici
Il corso inizia definendo il contesto culturale del cibo:
*   **Etimologia:** *Gastronomia* deriva dal greco *gaster* (stomaco) e *nomos* (legge/regola).
*   **Archestrato (IV sec a.C.):** Poeta greco, considerato uno dei padri della gastronomia, legava la conoscenza del cibo alla conoscenza del mondo (ingredienti, geografia, tecniche).
*   **Cucinare come atto umano:**
    *   **Ludwig Feuerbach:** "L'uomo è ciò che mangia". L'alimentazione unisce natura (bisogno biologico) e cultura (abitudini, riti).
    *   **Claude Lévi-Strauss:** Ne *"Il crudo e il cotto"*, identifica la cottura come il simbolo del passaggio dalla natura alla cultura. È un codice simbolico che struttura la mente umana.
    *   **Friedrich Engels:** Sostiene che la cottura del cibo è l'elemento che ha separato l'uomo dal mondo animale.

## 2. Gastronomia Computazionale: Definizione e Strumenti
La Gastronomia Computazionale è lo studio dei fenomeni gastronomici attraverso l'informatica e l'analisi dei dati. È una scienza interdisciplinare che coinvolge:
*   Data Mining e Informatica.
*   Scienza delle Reti (Network Science).
*   Scienze degli Alimenti e Fisica.
*   Antropologia e Sociologia Culturale.

**Applicazioni pratiche:** Esistono numerose app e sistemi AI (es. Chef Watson di IBM, Vivino, Plant Jammer) che suggeriscono abbinamenti e ricette.

## 3. Teorie dell'Abbinamento (Pairing)

### A. Food Pairing (Ipotesi della similarità)
Introdotta da **Heston Blumenthal (2008)**, l'ipotesi suggerisce che **ingredienti che condividono composti aromatici (molecole di sapore) tendono ad essere combinati insieme nelle ricette**.

**Analisi Scientifica (Ahn et al., 2011):**
Attraverso la costruzione di un *Flavor Network* (Rete degli Aromi), è emersa una distinzione geografica netta:
*   **Cucina Nord Americana / Europea Occidentale:** Segue il principio del food pairing (alta sovrapposizione di composti, $\Delta N_s > 0$).
*   **Cucina dell'Est Asiatico:** Tende a evitare l'abbinamento di ingredienti con composti simili (food pairing negativo, $\Delta N_s < 0$).

### B. Food Bridging (Ingredienti Ponte)
Introdotto da **Simas et al. (2013)**. Se due ingredienti non hanno molecole in comune (non sono connessi direttamente), possono essere abbinati efficacemente se esiste un **ingrediente ponte** che condivide molecole con entrambi.
*   **Esempio:** L'aglio (Garlic) e la Fragola (Strawberry) non hanno legami forti diretti, ma possono essere connessi tramite ingredienti intermedi nella rete.
*   **Distanza semi-metrica:** Il food bridging utilizza percorsi minimi su una rete pesata per calcolare la distanza tra ingredienti.

## 4. Analisi delle Reti (Network Science) Applicata

### Costruzione del Flavor Network (Rete degli Aromi)
*   **Nodi:** Ingredienti.
*   **Archi (Links):** Presenza di molecole aromatiche in comune.
*   **Peso dei Links ($w$):** Definito dalla formula di Jaccard/Overlap normalizzata:
    $w = \frac{1}{2} \left( \frac{\vert N_A \cap N_B\vert}{\vert N_A\vert} + \frac{\vert N_A \cap N_B\vert}{\vert N_B\vert} \right)$. Dove $\vert N_A\vert$ è il numero di molecole dell'ingrediente A e $\vert N_A \cap N_B\vert$ è il numero di molecole condivise. Più alta è l'intersezione, maggiore è la similarità.

### Costruzione del Recipe Network (Rete delle Ricette)
*   **Nodi:** Ricette.
*   **Archi:** Condivisione di ingredienti.
*   **Analisi:** Permette di identificare comunità di ricette simili e la struttura "scheletrica" di una cucina,.
*   **Tecniche:**
    *   **Clique Detection:** Identificazione di sottografi completi (gruppi di ricette fortemente connesse).
    *   **Ricette Caratterizzanti:** Identificazione delle ricette "Manifesto" (es. nella cucina Catalana o nel ristorante *El Celler de Can Roca*),.

## 5. Data Mining: FoodMine
Uno dei problemi principali è la mancanza di dati chimici completi nei database standard.
*   **FoodMine:** È uno strumento che utilizza il **Natural Language Processing (NLP)** per estrarre informazioni sulla composizione chimica degli alimenti direttamente dalla letteratura scientifica (es. PubMed).
*   **Risultato:** Ha rivelato che circa il 70% delle sostanze chimiche menzionate nei paper non è presente nelle banche dati standard (come USDA o FooDB), includendo composti rilevanti per la salute come metalli e tossine.

## 6. Intelligenza Artificiale Generativa: Turing Test for Chefs
L'obiettivo è capire se una macchina può "pensare" come uno chef.
*   **Esperimento (TTChef):** Confronto tra ricette reali (culturali) e ricette generate dal computer.
*   **Valutazione:** 24 chef hanno valutato circa 1500 ricette.
*   **Matrice di Confusione:** Utilizzata per valutare le performance del classificatore (umano o macchina) nel distinguere vero dal falso.
    *   *Precisione, Richiamo (Recall) e F1-Score*.
*   **Risultato:** Un **F1-score del 69.88%** suggerisce che le ricette generate sono sufficientemente credibili da mettere in difficoltà gli esperti, quasi superando il test di Turing.

## Punti Chiave per l'Esame
1.  **Definizioni:** Saper definire Gastronomia Computazionale, Food Pairing e Food Bridging.
2.  **Differenze Culturali:** Ricordare la differenza tra cucina Occidentale (pairing positivo) e Asiatica (pairing negativo).
3.  **Metrica di Similarità:** Capire il concetto dietro la formula del peso dei link (intersezione delle molecole).
4.  **Network Analysis:** Saper spiegare cosa rappresentano i nodi e gli archi nel *Flavor Network* vs *Recipe Network*.
5.  **FoodMine:** Il ruolo del data mining nel recupero di dati chimici mancanti.
6.  **AI Generativa:** Il concetto di Turing Test applicato alle ricette e l'uso della matrice di confusione per valutarne i risultati.

---

# Modelli Random Forest per l’Identificazione di Anomalie
> 15-Seminario0312_V2.pdf

Questo seminario esplora l'utilizzo delle **Random Forests (RF)** per il task di **Anomaly Detection (AD)**, partendo dai concetti base fino a estensioni recenti e problematiche aperte come la stabilità.

## 1. Introduzione e Contesto
L'Anomaly Detection si inserisce nel contesto più ampio dell'Intelligenza Artificiale, intersecandosi con il Pattern Recognition, il Machine Learning e il Data Mining.

### Tipologie di Apprendimento
*   **Supervisionato:** Sfrutta le etichette (classi) note degli oggetti per costruire il modello.
*   **Non supervisionato:** Non utilizza classi note (spesso perché non disponibili).
*   **Semi-supervisionato:** Sfrutta le classi note solo per una parte degli oggetti.

### Task Principali
1.  **Classificazione:** Categorizzazione in classi note (supervisionato/semi-supervisionato).
2.  **Clustering:** Raggruppamento in classi non note a priori basato sulla similarità (non supervisionato).
3.  **Anomaly Detection (AD):** Identificazione di oggetti "anomali" o *outliers* (risolvibile sia con tecniche supervisionate che non).

## 2. Anomaly Detection (Rilevamento Anomalie)

### Definizione di Outlier
Un outlier è definito come *"un’osservazione che devia talmente tanto dal resto dei dati, da far sospettare che sia stata generata da un meccanismo diverso"* (Hawkins, 1980).

### Importanza e Applicazioni
L'AD è un task cruciale che richiede accuratezza e velocità per evitare danni. Trova applicazione in numerosi campi che richiedono approcci specifici:
*   Medical Imaging ed ECG Monitoring.
*   Analisi del traffico di rete e urbano.
*   Fraud Detection (frodi).
*   Fault Detection (guasti).
*   Fake News Detection.

## 3. Dagli Alberi di Decisione alle Random Forests

Per comprendere le tecniche di AD basate su foreste, è necessario partire dai classificatori base.

### Alberi di Decisione (Decision Trees)
*   Sono modelli semplici, interpretabili e capaci di modellare classi complesse.
*   Funzionano tramite una serie di regole di split (es. "Peso $\ge$ 7Kg?") che dividono i dati fino a una foglia che produce la predizione finale.
*   **Svantaggio principale:** Alto rischio di **overfitting** (sovra-adattamento), ovvero una scarsa capacità di generalizzazione su nuovi dati.

### Random Forests (RF)
*   La soluzione all'overfitting degli alberi singoli è l'uso delle **Random Forests**.
*   Si tratta di un metodo di *ensemble* (insieme) che aggrega le predizioni di molti alberi decisionali per ottenere un risultato più robusto e stabile.

## 4. Random Forests per Anomaly Detection

L'applicazione più nota delle RF per l'identificazione di anomalie è l'algoritmo **Isolation Forest**.

### 4.1 Isolation Forest (iForest)
*   **Concetto chiave:** Le anomalie sono "poche e diverse". Pertanto, sono più facili da "isolare" rispetto ai punti normali (inliers).
*   **Funzionamento:** In un albero costruito casualmente, le anomalie tendono a finire in foglie più vicine alla radice (percorsi più brevi), mentre i dati normali richiedono più tagli per essere isolati (percorsi più lunghi).
*   **Anomaly Score:** La capacità di isolamento di un oggetto viene misurata calcolando la media dell'anomaly score (basato sulla profondità) su tutti gli alberi della foresta.

### 4.2 Focus 1: Proximity Isolation Forests (PIF)
Le Isolation Forest standard lavorano su dati vettoriali. Cosa fare con **dati non vettoriali** (es. sequenze, grafi)?
*   **Soluzione:** Modificare il test di split nel nodo.
*   **Metodo:**
    1.  Si sceglie un oggetto **prototipo $P$** e una soglia $\theta$.
    2.  Si valuta la **distanza** di ogni oggetto rispetto a $P$.
    3.  Lo split avviene in base alla regola: $d(x, P) \ge \theta$.
*   **Criteri di Isolamento:** Per decidere come separare i dati, si possono usare criteri basati su:
    *   *Scatter-based:* Varianza, impurità.
    *   *Separation-based:* Distanza di Hausdorff, separazione massima.
    *   *Information Theoretic:* Divergenza di Rényi.

### 4.3 Focus 2: Enhanced Anomaly Scores
Lo score originale di Isolation Forest ha dei limiti: sfrutta solo la profondità della foglia e usa la media aritmetica semplice, subendo l'impatto di alberi poco informativi.

**Miglioramenti proposti (Mensi et al., 2021):**
1.  **Pesatura dei nodi:** Invece di contare solo la profondità, si pesa ogni nodo nel percorso, ad esempio sfruttando il numero di oggetti usati per costruire quel nodo.
2.  **Nuova regola di aggregazione:** Sfruttando la teoria degli ensemble, si sostituisce la media aritmetica con la **media geometrica** per aggregare i risultati degli alberi.

### 4.4 Focus 3: Stabilità delle Isolation Forest
Essendo basate su una forte componente casuale (randomicità), ripetere lo stesso esperimento con una iForest può portare a risultati diversi (es. AUC diverse). Questo è un problema di **stabilità**.

**Soluzioni per la stabilità:**
1.  **Ripetizione:** Eseguire l'esperimento più volte e calcolare la media/mediana delle metriche di performance.
2.  **Aumento degli alberi:** Aumentare il numero di alberi nella foresta riduce la varianza, ma non è sempre fattibile (es. in sistemi embedded con risorse limitate).

## 5. Conclusioni
*   L'Anomaly Detection è un problema reale e critico che richiede interventi rapidi.
*   I modelli Random Forest sono strumenti **flessibili, scalabili, accurati e interpretabili** per l'AD.
*   Un grande vantaggio delle RF è che funzionano bene anche con **pochi dati**.
*   **Sviluppi futuri:** Studi sulla stabilità dei modelli e sviluppo di metriche di distanza *ad hoc* per le RF in ambito AD.
