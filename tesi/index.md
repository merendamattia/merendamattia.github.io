# Tesi

* Table of Content
{:toc}

# Background
## Che cos'è la Blockchain
### Funzionamento
### Consenso
### Vantaggi e svantaggi
### Chiave pubblica e chiave privata
## Ethereum
### Storia
### Funzionamento
### Ethereum vs Bitcoin
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