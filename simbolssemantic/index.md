# Symbols' semantic
* Table of Content
{:toc}

Sources:
- [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
- [Medium](https://jeancvllr.medium.com/ethereum-yellow-paper-symbols-summary-112e753960a8)

## Main symbols

| Symbol     | Meaning in the yellow paper                                         | Something else                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\Upsilon$ | The Ethereum state transition function                              | Allows components to carry out arbitrary computation                                                                                                                                                                         |
| $\delta$   | Number of items on the stack required for a given operation         |                                                                                                                                                                                                                              |
| $\alpha$   | Number of items added in the stack                                  |                                                                                                                                                                                                                              |
| $o$        | The byte sequence given as the output data of a message call        |                                                                                                                                                                                                                              |
| $\sigma$   | World State                                                         | Allows components to store arbitrary state between transactions                                                                                                                                                              |
| $\mu$      | Machine state                                                       | Machine state $\mu$ is defined as the tuple $(g, pc, m, i, s)$ which are the gas available, the program counter $pc ∈ \mathbb{N}_{256}$ , the memory contents, the active number of words in memory, and the stack contents. | 
| $\mu_{s}$  | Machine’s stack                                                     | $\mu_{s}[0]$ denotes the first item on the machine’s stack                                                                                                                                                                   |
| $\mu_{m}$  | Machine's memory                                                    |                                                                                                                                                                                                                              |
| $\mu_{pc}$ | Program Counter                                                     |                                                                                                                                                                                                                              |
| $\mu_{g}$  | Gas avaiable                                                        | The remaining gas                                                                                                                                                                                                            |
| $\mu_{i}$  | The active number of words in memory                                | Counting continuously from position 0                                                                                                                                                                                        |
| $\mu_{o}$  | The output data from the previous call from the current environment |                                                                                                                                                                                                                              |

---

## Important information used in the execution environment
These are contained in the tuple $I$:

| Symbol | Meaning                                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $I_a$  | The address of the account which owns the code that is executing                                                                                                   |
| $I_b$  | The byte array that is the machine code to be executed                                                                                                             |
| $I_d$  | The byte array that is the input data to this execution; if the execution agent is a transaction, this would be the transaction data                               |
| $I_e$  | The depth of the present message-call or contract-creation (i.e. the number of CALLs or CREATE(2)s being executed at present)                                      |
| $I_H$  | The block header of the present block                                                                                                                              |
| $I_o$  | The sender address of the transaction that originated this execution                                                                                               |
| $I_p$  | The price of gas paid by the signer of the transaction that originated this execution                                                                              |
| $I_s$  | The address of the account which caused the code to be executing; if the execution agent is a transaction, this would be the transaction sender.                   |
| $I_v$  | The value, in Wei, passed to this account as part of the same procedure as execution; if the execution agent is a transaction, this would be the transaction value |
| $I_w$  | The permission to make modifications to the state                                                                                                                  |

---
## Opcodes in EVM-LiSA
### Not handled

| Value | Mnemonic                   | $\delta$ | $\alpha$ | $\mu$     | $I$       | Description                                                                                                               |
| ----- | -------------------------- | -------- | -------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| 0x00  | STOP                       | 0        | 0        |           |           | Halts execution                                                                                                           |
| 0x0b  | SIGNEXTEND                 | 2        | 1        | s         |           | Extend length of two’s complement signed integer                                                                          |
| 0x20  | KECCAK256                  | 2        | 1        | s,i       |           | Compute Keccak-256 hash                                                                                                   |
| 0x30  | ADDRESS                    | 0        | 1        | s         | a         | Get address of currently executing account                                                                                |
| 0x31  | BALANCE                    | 1        | 1        | s         |           | Get balance of the given account                                                                                          |
| 0x32  | ORIGIN                     | 0        | 1        | s         | o         | Get execution origination address                                                                                         |
| 0x33  | CALLER                     | 0        | 1        | s         | s         | Get caller address                                                                                                        |
| 0x34  | CALLVALUE                  | 0        | 1        | s         | v         | Get deposited value by the instruction/transaction responsible for this execution                                         |
| 0x35  | CALLDATALOAD               | 1        | 1        | s         | d         | Get input data of current environment                                                                                     |
| 0x36  | CALLDATASIZE               | 0        | 1        | s         | d         | Get size of input data in current environment                                                                             |
| 0x37  | CALLDATACOPY               | 3        | 0        | s,m,i     | d         | Copy input data in current environment to memory                                                                          |
| 0x38  | CODESIZE                   | 0        | 1        | s         | b         | Get size of code running in current environment                                                                           |
| 0x39  | CODECOPY                   | 3        | 0        | s,m,i     | b         | Copy code running in current environment to memory                                                                        |
| 0x3a  | GASPRICE                   | 0        | 1        | s         | p         | Get price of gas in current environment                                                                                   |
| 0x3b  | EXTCODESIZE                | 1        | 1        | s         |           | Get size of an account’s code                                                                                             |
| 0x3c  | EXTCODECOPY                | 4        | 0        | s,m,i     |           | Copy an account’s code to memory                                                                                          |
| 0x3d  | RETURNDATASIZE             | 0        | 1        | s,o       |           | Get size of output data from the previous call from the current environment                                               |
| 0x3e  | RETURNDATACOPY             | 3        | 0        | s,m,i,o   |           | Copy output data from the previous call to memory                                                                         |
| 0x3f  | EXTCODEHASH                | 1        | 1        | s         |           | Get hash of an account’s code                                                                                             |
| 0x40  | BLOCKHASH                  | 1        | 1        | s         | H         | Get the hash of one of the 256 most recent complete blocks                                                                |
| 0x41  | COINBASE                   | 0        | 1        | s         | H         | Get the current block’s beneficiary address                                                                               |
| 0x42  | TIMESTAMP                  | 0        | 1        | s         | H         | Get the current block’s timestamp                                                                                         |
| 0x43  | NUMBER                     | 0        | 1        | s         | H         | Get the current block’s number                                                                                            |
| 0x44  | PREVRANDAO (ex DIFFICULTY) | 0        | 1        | s         | H         | Get the latest RANDAO mix of the post beacon state of the previous block. (ex Get the current block’s difficulty)         |
| 0x45  | GASLIMIT                   | 0        | 1        | s         | H         | Get the current block’s gas limit                                                                                         |
| 0x46  | CHAINID                    | 0        | 1        | s         |           | Get the chain ID                                                                                                          |
| 0x47  | SELFBALANCE                | 0        | 1        | s         | a         | Get balance of currently executing account                                                                                |
| 0x48  | BASEFEE                    | 0        | 1        | s         | H         | Get the current block’s base fee                                                                                          |
| 0x54  | SLOAD                      | 1        | 1        | s         | a         | Load word from storage                                                                                                    |
| 0x55  | SSTORE                     | 2        | 0        | s         | a         | Save word to storage                                                                                                      |
| 0x58  | PC                         | 0        | 2        | s,pc      |           | Get the value of the program counter prior to the increment corresponding to this instruction                             |
| 0x59  | MSIZE                      | 0        | 1        | s,i       |           | Get the size of active memory in bytes                                                                                    |
| 0x5a  | GAS                        | 0        | 1        | s,g       |           | Get the amount of available gas, including the corresponding reduction for the cost of this instruction                   |
| 0xa0  | LOG$x$                     | $x + 2$  | 0        | s         |           | Append log record with $x$ topics                                                                                         |
| 0xf0  | CREATE                     | 3        | 1        | s,g,i,m,o | a,e,w,p,o | Create a new account with associated code                                                                                 |
| 0xf1  | CALL                       | 7        | 1        | s,g,i,m,o | a,e,w,p,o | Message-call into an account                                                                                              |
| 0xf2  | CALLCODE                   | 7        | 1        | s         | a,e,w,o   | Message-call into this account with an alternative account’s cod                                                          |
| 0xf3  | RETURN                     | 2        | 0        | s,m,i     |           | Halt execution returning output data                                                                                      |
| 0xf4  | DELEGATECALL               | 6        | 1        | s         | a,e,w,o,p | Message-call into this account with an alternative account’s code, but persisting the current values for sender and value |
| 0xf5  | CREATE2                    | 4        | 1        | s         |           | Create a new account with associated code                                                                                 |
| 0xfa  | STATICCALL                 | 6        | 1        | s         |           | Static message-call into an account                                                                                       |
| 0xfd  | REVERT                     | 2        | 0        | s,m,i     |           | Halt execution reverting state changes but returning data and remaining gas                                               |
| 0xff  | SELFDESTRUCT               | 1        | 0        |           | a         | Halt execution and register account for later deletion                                                                    |

### Implemented

| Value | Mnemonic | $\delta$ | $\alpha$ | $\mu$ | Description                                                                                        |
| ----- | -------- | -------- | -------- | ----- | -------------------------------------------------------------------------------------------------- |
| 0x01  | ADD      | 2        | 1        | s     | Addition operation                                                                                 |
| 0x02  | MUL      | 2        | 1        | s     | Multiplication operation                                                                           |
| 0x03  | SUB      | 2        | 1        | s     | Subtraction operation                                                                              |
| 0x04  | DIV      | 2        | 1        | s     | Integer division operation                                                                         |
| 0x05  | SDIV     | 2        | 1        | s     | Signed integer division operation (truncated)                                                      |
| 0x06  | MOD      | 2        | 1        | s     | Modulo remainder operation                                                                         |
| 0x07  | SMOD     | 2        | 1        | s     | Signed modulo remainder operation                                                                  |
| 0x08  | ADDMOD   | 3        | 1        | s     | Modulo addition operation                                                                          |
| 0x09  | MULMOD   | 3        | 1        | s     | Modulo multiplication operation                                                                    |
| 0x0a  | EXP      | 2        | 1        | s     | Exponential operation                                                                              |
| 0x10  | LT       | 2        | 1        | s     | Less-than comparison                                                                               |
| 0x11  | GT       | 2        | 1        | s     | Greater-than comparison                                                                            |
| 0x12  | SLT      | 2        | 1        | s     | Signed less-than comparison                                                                        |
| 0x13  | SGT      | 2        | 1        | s     | Signed greater-than comparison                                                                     |
| 0x14  | EQ       | 2        | 1        | s     | Equality comparison                                                                                |
| 0x15  | ISZERO   | 1        | 1        | s     | Simple not operator                                                                                |
| 0x16  | AND      | 2        | 1        | s     | Bitwise AND operation                                                                              |
| 0x17  | OR       | 2        | 1        | s     | Bitwise OR operation                                                                               |
| 0x18  | XOR      | 2        | 1        | s     | Bitwise XOR operation                                                                              |
| 0x19  | NOT      | 2        | 1        | s     | Bitwise NOT operation                                                                              |
| 0x1a  | BYTE     | 2        | 1        | s     | Retrieve single byte from word                                                                     |
| 0x1b  | SHL      | 2        | 1        | s     | Left shift operation                                                                               |
| 0x1c  | SHR      | 2        | 1        | s     | Logical right shift operation                                                                      |
| 0x1d  | SAR      | 2        | 1        | s     | Arithmetic (signed) right shift operation                                                          |
| 0x50  | POP      | 1        | 0        | s     | Remove item from stack                                                                             |
| 0x51  | MLOAD    | 1        | 1        | s,m,i | Load word from memory                                                                              |
| 0x52  | MSTORE   | 2        | 0        | s,m,i | Save word to memory                                                                                |
| 0x53  | MSTORE8  | 2        | 0        | s,m,i | Save byte to memory                                                                                |
| 0x56  | JUMP     | 1        | 0        | s,pc  | Alter the program counter                                                                          |
| 0x57  | JUMPI    | 2        | 0        | s,pc  | Conditionally alter the program counter                                                            |
| 0x5b  | JUMPDEST | 0        | 0        |       | Mark a valid destination for jumps. This operation has no effect on machine state during execution |
| 0x60  | PUSH $x$ | 0        | 1        | s,pc  | Place $x$ byte item on stack                                                                       |
| 0x80  | DUP $x$  | $x$      | $x + 1$  | s     | Duplicate $x$-th stack it                                                                          |
| 0x90  | SWAP $x$ | $x + 1$  | $x + 1$  | s     | Exchange 1st and $x + 1$ stack item                                                                |
| 0xfe  | INVALID  |          |          |       | Designated invalid instruction                                                                     |
