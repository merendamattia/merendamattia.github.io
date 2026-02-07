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
