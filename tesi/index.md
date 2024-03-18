# Tesi

* Table of Content
{:toc}

# Introduzione
Ethereum [1] è una piattaforma blockchain che consente la creazione di un ambiente globale decentralizzato, in cui gli utenti possono sviluppare strumenti digitali sicuri utilizzando la valuta nativa Ether (ETH) per transazioni e servizi computazionali.

La rete Ethereum è costituita da nodi interconnessi che seguono regole definite nel protocollo Ethereum, supportando una vasta gamma di comunità, applicazioni, organizzazioni e attività digitali accessibili a chiunque abbia una connessione internet.

La caratteristica principale di Ethereum è la capacità di eseguire smart contract tramite la Ethereum Virtual Machine (EVM) [2], consentendo funzionalità avanzate al di là delle transazioni finanziarie di base (e.g. Bitcoin [3]). Gli smart contract sono programmi immutabili memorizzati sulla blockchain che eseguono azioni predefinite senza intervento umano.

Tuttavia, garantire la sicurezza e l'affidabilità degli smart contract è essenziale, poiché non possono essere modificati una volta deployati. La presenza di bug o vulnerabilità potrebbe causare gravi conseguenze, come perdite di fondi o azioni indesiderate.

Per garantire la qualità degli smart contract, vengono sviluppate tecniche di analisi e verifica del codice. L'analisi statica, ad esempio, identifica potenziali problemi di sicurezza senza eseguire effettivamente il codice. Tuttavia, nel contesto di Ethereum, la costruzione di un control flow graph (CFG) affidabile è complessa a causa delle destinazioni dinamiche dei salti (Jump Orfane) durante l'esecuzione del bytecode EVM.

In questo elaborato viene presentato EVMLiSA [4], un software in grado di costruire un CFG sound e affidabile (TODO si spera) di smart contract eseguibili su EVM.

TODO scrivere in breve di cosa tratteranno i capitoli

---

# Background
TODO

---

## Che cos'è la Blockchain
Il concetto di blockchain è stato introdotto per la prima volta nel 2008 da Satoshi Nakamoto con il whitepaper di Bitcoin [3] e successivamente implementato nel 2009 come tecnologia alla base di Bitcoin.

È importante sottolineare che Bitcoin e blockchain sono due entità separate: Bitcoin rappresenta solo una delle molteplici applicazioni costruite sulla tecnologia blockchain.

La blockchain è un registro digitale, decentralizzato e distribuito su una rete, strutturato come una catena di blocchi responsabili dell'archiviazione dei dati. Questi dati possono comprendere informazioni di valore economico o intere applicazioni digitali. È possibile aggiungere nuovi blocchi di informazioni, ma non è possibile modificare o rimuovere i blocchi precedentemente aggiunti alla catena.

In questo ambiente, la crittografia e i protocolli di consenso garantiscono sicurezza e immutabilità. Il risultato è un sistema aperto, neutrale, affidabile e sicuro, dove la nostra capacità di utilizzare e fidarci del sistema non dipende dalle intenzioni di nessun individuo o istituzione.

La blockchain può essere considerata parte della famiglia delle Distributed Ledger Technology (DLT): tutti i partecipanti alla rete hanno accesso al registro distribuito e al suo registro immutabile delle transazioni. Questo registro condiviso consente di registrare le transazioni una sola volta, eliminando la duplicazione degli sforzi tipica delle reti aziendali tradizionali. [5]

### Funzionamento
La blockchain è composta da una serie di blocchi, aggiunti uno dopo l'altro in modo sequenziale. Ogni blocco contiene una prova matematica, resa possibile dall'utilizzo della crittografia, che ne assicura la sequenzialità tramite un hash del blocco precedente.

Sebbene il concetto di catena di blocchi sia comune a quasi tutti i sistemi blockchain, la struttura e il contenuto dei blocchi possono variare a seconda dello scopo della blockchain stessa. Ad esempio, i blocchi della blockchain di Bitcoin possono essere diversi da quelli della blockchain di Ethereum.

I blocchi sono interconnessi tramite funzioni di hash crittografiche (e.g. SHA-256 [TODO forse andrebbe spiegato?]), creando un legame matematico tra di loro. Questo processo fornisce un modo conveniente per esprimere l'intero contenuto della blockchain in una singola stringa di lunghezza definita.

Ogni blocco contiene informazioni specifiche (e.g. le transazioni) e l'hash del blocco precedente (Fig. 1). Modificare qualsiasi informazione in un blocco altererebbe l'hash del blocco e, di conseguenza, tutti gli hash successivi, rendendo immediatamente evidente l'alterazione.

Ogni nuovo blocco rafforza la verifica dei blocchi precedenti, rendendo la blockchain a prova di manomissione e fornendo un registro affidabile delle transazioni su cui gli utenti possono fare affidamento. [5]

<figure>
    <img src="img/blockchain.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;" />
    <figcaption align="center">Fig. 1: Funzionamento della blockchain. [6]</figcaption>
</figure>

### Consenso
Il consenso è il processo mediante il quale i nodi della rete raggiungono un accordo su ciò che è avvenuto all'interno della blockchain. Questo accordo rappresenta l'unica verità sullo stato attuale della blockchain e viene ottenuto attraverso un accordo generale tra i partecipanti della rete. Il consenso non è un evento istantaneo, ma un processo continuo che coinvolge vari partecipanti con ruoli e responsabilità specifici. Si basa su principi matematici ed economici per incentivare tutti i membri a raggiungere un accordo su un unico dato. [5]

Nella pratica, il consenso richiede che i nuovi blocchi siano approvati dalla maggioranza dei nodi della rete, che sono distribuiti su una vasta rete di computer. Questo processo può avvenire attraverso due meccanismi principali: la Proof of Work (PoW) e la Proof of Stake (PoS). 

- Proof of Work (PoW): È il sistema di consenso utilizzato principalmente da Bitcoin. Qui, i nodi della rete, noti come "miner", competono per risolvere complessi problemi crittografici. Il primo nodo che risolve con successo il problema crittografico viene premiato con una quantità specifica di criptovaluta. La difficoltà di generare l'hash viene modificata man mano che la rete si espande, in modo che i nuovi blocchi vengano creati e approvati a un ritmo costante al variare della potenza di calcolo della rete. La difficoltà di generare blocchi nella blockchain di Bitcoin, ad esempio, viene regolata modificando il numero di zeri con cui devono iniziare, garantendo che un nuovo hash venga trovato solo una volta ogni dieci minuti circa dall'intera rete. Questi problemi sono progettati per richiedere una grande quantità di potenza di calcolo e l'energia utilizzata in questo processo è sia una caratteristica distintiva che un punto di vulnerabilità di PoW. Se da un lato rende la blockchain sicura, poiché sarebbe estremamente costoso e poco pratico per un singolo attaccante possedere la maggior parte della potenza di calcolo della rete, dall'altro richiede una notevole quantità di energia elettrica. [7]

- Proof of Stake (PoS): È un meccanismo di consenso in cui i nodi della rete, chiamati "validatori", competono per essere selezionati per convalidare il prossimo blocco. La probabilità di essere selezionati è proporzionale alla quantità di criptovaluta che il nodo ha depositato nella blockchain. Quando un validatore viene selezionato, "mette in gioco" (stake) i propri fondi (token). Se il validatore non adempie ai propri doveri o tenta di commettere una frode, rischia di perdere i suoi fondi. PoS non richiede una quantità significativa di energia elettrica come PoW, ma presenta un problema di monopolio della ricchezza, poiché coloro che possiedono più token hanno maggiori probabilità di essere selezionati per convalidare il blocco successivo e ricevere la ricompensa. Questo problema è mitigato con l'introduzione di Delegated Proof of Stake (DPoS), che prevede un sistema di voto per la selezione dei validatori, rendendo il processo più democratico. [7]

### Modelli di blockchain
Le blockchain possono essere categorizzate in vari tipi in base alla loro accessibilità e ai requisiti di utilizzo:
- Permissionless: Questo tipo di blockchain permette a chiunque di accedervi senza restrizioni, senza la necessità di identificarsi. Esempi notevoli sono Bitcoin ed Ethereum. Tuttavia, questa libertà può portare a problemi di dimensionamento e sicurezza, poiché ogni nodo della rete deve elaborare e convalidare l'intera blockchain, rendendo anche più probabile l'ingresso di attori malevoli. [8]

- Permissioned: Al contrario, nelle blockchain ad accesso limitato, l'accesso è controllato e richiede l'autenticazione da parte di un'autorità centrale. Questo approccio riduce i problemi di dimensionamento e sicurezza riscontrati nelle blockchain aperte. Tuttavia, l'intervento di un'autorità centrale compromette parzialmente il principio di decentralizzazione. [8]

Ulteriormente, le blockchain possono essere suddivise in base alle loro applicazioni e requisiti specifici:
- Public: Le blockchain pubbliche incoraggiano la partecipazione di tutti gli utenti, offrendo incentivi come ricompense in criptovaluta. Sono trasparenti e flessibili. Esempi ben noti includono Bitcoin ed Ethereum. [9]

- Private: Le blockchain private sono utilizzate all'interno di reti aziendali o organizzative, spesso per migliorare l'efficienza dei processi interni. Sono meno trasparenti rispetto alle blockchain pubbliche e richiedono solitamente un'autorizzazione per accedervi. [9]

- Consortium: Queste blockchain sono progettate per la collaborazione tra più entità, come aziende o istituzioni. La gestione dell'accesso è condivisa tra i partecipanti, garantendo un certo livello di decentralizzazione senza dipendenza da un'autorità centrale. [9]

### Chiave pubblica e chiave privata
TODO non so se metterlo o no

---

## Ethereum
Ethereum è una blockchain aperta (permissionless), accessibile a chiunque (pubblica) e con il codice sorgente disponibile liberamente (open-source). È stata ideata per la prima volta da Vitalik Buterin nel 2013 [10], con l'obiettivo di creare una blockchain in grado di eseguire una vasta gamma di programmi generici.

Dal punto di vista tecnico, Ethereum può essere considerato una sorta di enorme macchina virtuale globale e "infinita", che opera seguendo uno stato singolo accessibile da qualsiasi parte del mondo e una macchina virtuale che applica le modifiche a tale stato.

Tuttavia, in termini più pratici, Ethereum si presenta come un'infrastruttura informatica decentralizzata, aperta a tutti e basata su codice sorgente accessibile (https://github.com/ethereum/go-ethereum TODO footnote), che consente l'esecuzione di programmi denominati [Smart Contracts](#smart-contracts). Utilizza una blockchain per tenere traccia e registrare le variazioni di stato del sistema, utilizzando la criptovaluta nativa (chiamata Ether) per misurare e regolare i costi delle risorse di elaborazione.

Attraverso la piattaforma Ethereum, gli sviluppatori hanno la possibilità di creare applicazioni decentralizzate con funzioni economiche integrate, offrendo non solo elevata disponibilità, verificabilità, trasparenza e neutralità, ma anche la riduzione o l'eliminazione della censura e alcuni rischi associati alle controparti tradizionali. [2]

### Ethereum vs Bitcoin
Ethereum presenta numerose caratteristiche comuni con altre blockchain aperte: una rete peer-to-peer che collega gli utenti, un algoritmo di consenso per mantenere gli aggiornamenti di stato sincronizzati (inizialmente basato su un consenso proof-of-work, ma con l'avvento dell'aggiornamento "The Merge" [https://ethereum.org/it/roadmap/merge/ TODO footnote], il consenso è passato a proof-of-stake), l'uso di tecniche crittografiche come firme digitali e hash, e una valuta digitale denominata *ether*.

Tuttavia, sia lo scopo che la struttura di Ethereum si differenziano notevolmente da quelle delle blockchain precedenti, come Bitcoin.

Il principale obiettivo di Ethereum non è solo quello di fungere da sistema di pagamento digitale. Anche se l'*ether* è fondamentale per il funzionamento di Ethereum, essa viene considerata una "valuta di utilità" utilizzata per pagare l'utilizzo della piattaforma Ethereum come un computer globale.

A differenza di Bitcoin, che dispone di un linguaggio di scripting limitato, Ethereum è stato progettato per essere una blockchain programmabile per scopi generici, con una macchina virtuale [EVM](#EVM) in grado di eseguire codice di complessità arbitraria e illimitata. Mentre il linguaggio di scripting di Bitcoin si limita principalmente a valutazioni semplici (true/false) delle condizioni di spesa di un utente, il linguaggio di Ethereum (Solidity [11]) è quasi completo in termini di capacità computazionale (*Turing completeness*), consentendo ad Ethereum di funzionare come un computer per scopi generali. [2]

### Funzionamento



## EVM
## Smart Contracts
## Bytecode EVM
### Esempio esecuzione
## Alterazione flusso di esecuzione
### Jump e JumpI (funzionamento)
### Pushed Jumps vs Orphan Jumps
#### Esempi
## Vulnerabilità di rientranza
### Storia attacco The DAO

# Analisi statica
## Interpretazione astratta
## Perchè ci viene in aiuto

# EVMLiSA
## LiSA
## Come sono fatti i CFG

# Dominio: AbstractStack
## Stati interni (KIntegerSet, Memory, mu_i)
## Algoritmo per la costruzione del CFG
### Funzionamento con esempi
## Metodi principali
### SmallStepSemantics
### LUB
### Less or Equal
### Widening
### Assume
## Limiti di approssimazione

# Da AbstractStack ad AbstractStackSet
## Problemi risolti rispetto ad AbstractStack
## Benefici portati
## Nuovo algoritmo per la costruzione del CFG
## Nuovi metodi principali
### SmallStepSemantics
### LUB
### Less or Equal
### Widening
### Assume

# Checker semantico
## Funzionamento di JumpChecker
## Spiegazione jumps (Sound, Precisely, Unreachable, ecc.)

# Valutazione sperimentale
## Benchmark vs risultati vecchio dominio (SymbolicStack di Davide)
## Benchmark vs EtherSolve
## Benchmark su 5000 smart contracts
## Considerazioni finali
## Lavori correlati

# Conclusione

# References
1. Ethereum: https://cryptodeep.ru/doc/paper.pdf
2. Mastering Ethereum: https://books.google.it/books?id=SedSMQAACAAJ
3. Bitcoin: https://bitcoin.org/bitcoin.pdf
4. EVMLiSA: https://github.com/lisa-analyzer/evm-lisa
5. Blockchain. Tecnologia e Applicazioni per il business: https://www.hoeplieditore.it/hoepli-catalogo/articolo/blockchain-gianluca-chiap/9788820389253/1522
6. IG: https://www.ig.com/ae/trading-strategies/what-is-blockchain-technology--200710
7. Tesi di Davide Tarpini
8. Permission.io: https://www.permission.io/blog/permissioned-vs-permissionless-blockchains-explained
9. Blockchain Council: https://www.blockchain-council.org/blockchain/types-of-blockchains-explained-public-vs-private-vs-consortium/
10. Ethereum Whitepaper: https://ethereum.org/it/whitepaper/
11. Solidity: https://docs.soliditylang.org/en/latest/