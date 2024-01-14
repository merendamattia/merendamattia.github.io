# TODO

* Table of Content
{:toc}

## SSTORE e SLOAD
Abbiamo visto che lo storage e' la memoria persistente dello smart contract e che non possiamo accedervi dall'esterno, quindi possiamo gestirla nel seguente modo. E' sempre una mappa chiave-valore, proprio come la classe `Memory`, quindi creiamo una nuova struttura `Memory storage`, e nel momento in cui viene fatto un `SLOAD` in cui la chiave passata non e' presente, ritorniamo un `Interval.TOP`, altrimenti il valore corrispondente. `SSTORE` invece lo gestiamo esattamente come `MSTORE`. Ovviamente poi andrebbero riadattati i costruttori, lub, widening ecc.

## MSIZE e GAS
- `MSIZE` lo si implementa facilmente, basta pushare sullo stack `32 x mu_i`.
- `GAS` invece, creiamo un intero e lo andiamo a sommare con il gas usato da ogni istruzione, sul libro e' presente una tabellina che ci dice il gas per ogni istruzione.

> Fonte: [Medium](https://veridelisi.medium.com/learn-opcodes-7bd28d5f0d1b).

## Eclipse
- Gestire in `MLOAD`:
    ```java
    if(mu_i.compareTo(new Interval(1,1)) == -1) {
        // This is an error. We cannot read from memory if there is no active words saved
        // TODO to handle this error
    }
    ```

    ```java
    if(offset.interval.isSingleton()) {
        // ...
    } else {
        // TODO to handle else-condition
        result.push(Interval.TOP);
    }
    ```

- Gestire in `MSTORE`:
    ```java
    if(offset.interval.isSingleton()) {
        // ...
    } else {
        // TODO to handle else-condition
        // If value is not singleton, how would we handle the `mod 256` operation?
        memoryResult = memory.putState(offsetBigDecimal, new Interval());
    }
    ```