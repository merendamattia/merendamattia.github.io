# TODO

* Table of Content
{:toc}

## Opcodes da implementare

### SSTORE e SLOAD
Abbiamo visto che lo storage e' la memoria persistente dello smart contract e che non possiamo accedervi dall'esterno, quindi possiamo gestirla nel seguente modo. E' sempre una mappa chiave-valore, proprio come la classe `Memory`, quindi creiamo una nuova struttura `Memory storage`, e nel momento in cui viene fatto un `SLOAD` in cui la chiave passata non e' presente, ritorniamo un `Interval.TOP`, altrimenti il valore corrispondente. `SSTORE` invece lo gestiamo esattamente come `MSTORE`. Ovviamente poi andrebbero riadattati i costruttori, lub, widening ecc.

### GAS
- `GAS` creiamo un intero e lo andiamo a sommare con il gas usato da ogni istruzione, sul libro e' presente una tabellina che ci dice il gas per ogni istruzione.

> Fonte: [Medium](https://veridelisi.medium.com/learn-opcodes-7bd28d5f0d1b).

### CALL
<u>Creates a new sub context and execute the code of the given account, then resumes the current one.</u> Note that an account with no code will return success as true.

If the size of the return data is not known, it can also be retrieved after the call with the instructions `RETURNDATASIZE` and `RETURNDATACOPY` (since the Byzantium fork).

From the Tangerine Whistle fork, gas is capped at all but one 64th (remaining_gas / 64) of the remaining gas of the current context. If a call tries to send more, the gas is changed to match the maximum allowed.

If the caller doesn't have enough balance to send the value, the call fails but the current context is not reverted.

> Index 1 is top of the stack.

#### Stack input
1. gas: amount of gas to send to the sub context to execute. The gas that is not used by the sub context is returned to this one.
2. address: the account which context to execute.
3. value: value in wei to send to the account.
4. argsOffset: byte offset in the memory in bytes, the calldata of the sub context.
5. argsSize: byte size to copy (size of the calldata).
6. retOffset: byte offset in the memory in bytes, where to store the return data of the sub context.
7. retSize: byte size to copy (size of the return data).

#### Stack output
1. success: return 0 if the sub context reverted, 1 otherwise.

#### Example
[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27breate%20aYontracWthatYreateVaQexceptioQif%20firsWword%20ofj%20isq_17qx67Z035Z757FE5BZ052Z86018F3gzMSTORE~17~15gzCREATEy%20parameterskqgggX6vynqjkVsuccessgg~32X7v%27~_1%20z%5Cnyzzball%20with%20nov_2qxFFFFzCALLq%200k%2C%20returnjYalldatag~0b%2F%2F%20C_zPUSHZ600Y%20cXggzDUPWt%20Vs%20Qn%20%01QVWXYZ_bgjkqvyz~_).

#### Error cases
The state changes done by the current context are reverted in those cases:
- Not enough gas.
- Not enough values on the stack.
- The current execution context is from a `STATICCALL` and the value (stack index 2) is not 0 (since Byzantium fork).

> Fonte: [evm.codes](https://www.evm.codes/).
