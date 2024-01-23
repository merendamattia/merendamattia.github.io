# Modifiche

* Table of Content
{:toc}

## Tipi di ritorno
Modificati tutti i tipi di ritorno cambiando il costruttore.
Prima:
```java
return new SymbolicStack(result);
```
Dopo:
```java
return new SymbolicStack(result, memory, mu_i);
```

---

##  Metodo representation()
Aggiunta la stampa nel CFG anche della `memory` e di `mu_i`.
```java
@Override
public DomainRepresentation representation() {
	if (isBottom())
		return Lattice.bottomRepresentation();
	else if (isTop())
		return Lattice.topRepresentation();
	
	// TODO to create a more optimized version
	return new StringRepresentation(stack + ", memory: " + memory + ", mu_i: " + mu_i);
}
```

---

## Metodi lub() e widening()
Modificati per entrambi i casi i tipi di ritorno rispettivamente con:
```java
return new SymbolicStack(widenedStack, memory.lub(other.memory), mu_i.lub(other.mu_i));
```
```java
return new SymbolicStack(widenedStack, memory.widening(other.memory), mu_i.widening(other.mu_i));
```

---

## Metodi equals() e lessOrEqual()
Sostituito il `return true` per entrambi rispettivamente con:
```java
return memory.equals(other.memory) && mu_i.equals(other.mu_i);
```
```java
return memory.lessOrEqual(other.memory) && mu_i.lessOrEqual(other.mu_i);
```
In questo modo, se siamo arrivati a questo punto, l'unica condizione che rimane da verificare è appunto quella della memoria. Andiamo a sfruttare i metodi già definiti nella classe `Memory`.

---

## Dominio SymbolicStack (old)
È stato "diviso" in 2 il dominio `SymbolicStack`, da una parte è stata creata la classe `Stack` mentre dall'altra è stato creato il dominio `EVMAbsDomain`. 
In questo modo rendiamo l'oggetto `Stack` (proprio come `Memory`) indipendente dal dominio.

### Classe Stack
```java
public class Stack implements ValueDomain<Stack> {
	private static final Stack TOP = new Stack();
	private static final Stack BOTTOM = new Stack(null);
	private final boolean isTop;
	
	private final ArrayDeque<Interval> stack; 
	
	/**
	 * Default constructor, builds a TOP symbolic stack.
	 */
	public Stack() {
		this(true);
	}
	
	public Stack(ArrayDeque<Interval> stack) {
		this.stack = stack;
		this.isTop = false;
	}
	
	/**
	 * Private "helper" constructor.
	 * Builds an empty symbolic stack and sets the isTop flag.
	 * 
	 * @param isTop true if the stack is TOP, false if it is BOTTOM.
	 */
	private Stack(boolean isTop) {
		this.isTop = isTop;
		this.stack = new ArrayDeque<Interval>();
	}

// ...

}

```

### Dominio EVMAbsDomain
Dobbiamo fare particolare attenzione a questo dominio: oltre a modificare i vari costruttori, sono stati modificati (forzatamente) alcuni altri metodi per garantire il corretto funzionamento.
Inoltre, oltre ad aver aggiornato e testato tutti i test già esistenti con il nuovo dominio, è stato creato il test specifico `EVMAbsDomainTest` situato in `src/test/java/it/unipr/analysis/unit`.

#### Costruttori
```java
public class EVMAbsDomain implements ValueDomain<EVMAbsDomain>{
	private static final EVMAbsDomain TOP = new EVMAbsDomain();
	private static final EVMAbsDomain BOTTOM = new EVMAbsDomain(null, null, null);
	private final boolean isTop;
	
	private final Stack stack;
	private final Memory memory;
	private final Interval mu_i; // TODO Give a better name
	
	public EVMAbsDomain() {
		this(true);
	}
	
	private EVMAbsDomain(boolean isTop) {
		this.isTop = isTop;
		this.stack = new Stack();
		this.memory = new Memory();
		this.mu_i = new Interval(0,0);
	}
	
	public EVMAbsDomain(Stack stack, Memory memory, Interval mu_i) {
		this.isTop = false;
		this.stack = stack;
		this.memory = memory;
		this.mu_i = mu_i;
	}

// ...

}
```

#### Getter
```java
public Stack getStack() {
	if(stack == null)
		return null;
	return stack.clone();
}

public Memory getMemory() {
	if(memory == null)
		return null;
	return memory.clone();
}

public Interval getMu_i() {
	if(mu_i == null)
		return null;
	return new Interval(mu_i.interval);
}
```

#### Metodo smallStepSemantics
Il metodo `smallStepSemantics()` è lo stesso presente nel vecchio dominio `SymbolicStack`. Infatti è stato riportato così com'è. Le uniche modifiche che sono state fatte sono in fase di clone dell'oggetto `Stack`, e del tipo di ritorno.  

Prima:
```java
ArrayDeque<Interval> result = stack.clone();
// ... 
return new SymbolicStack(result, memory, mu_i);
```

Dopo:
```java
Stack result = stack.clone();
// ... 
return new EVMAbsDomain(result, memory, mu_i);
```

#### Metodo representation
```java
@Override
public DomainRepresentation representation() {
	if (isBottom())
		return Lattice.bottomRepresentation();
	else if (isTop())
		return Lattice.topRepresentation();
	
	// TODO to create a more optimized version
	return new StringRepresentation("{ stack: " + stack + ", memory: " + memory + ", mu_i: " + mu_i + " }");
}
```

#### Metodi lessOrEqual, lub & widening
```java
@Override
public boolean lessOrEqual(EVMAbsDomain other) throws SemanticException {
	if (other == null)
		return false;

	if (this == other || this.isBottom() || other.isTop() || this.equals(other))
		return true;

	if (this.isTop() || other.isBottom())
		return false;
	
	return stack.lessOrEqual(other.getStack()) &&
			memory.lessOrEqual(other.getMemory()) && 
			mu_i.lessOrEqual(other.getMu_i());
}

@Override
public EVMAbsDomain lub(EVMAbsDomain other) throws SemanticException {
	if (other == null || other.isBottom() || this.isTop() || this == other || this.equals(other))
		return this;

	if (this.isBottom() || other.isTop())
		return other;

	if (lessOrEqual(other))
		return other;
	else if (other.lessOrEqual(this))
		return this;
	
	return new EVMAbsDomain(stack.lub(other.getStack()),
			memory.lub(other.getMemory()),
			mu_i.lub(other.getMu_i()));
}

@Override
public EVMAbsDomain widening(EVMAbsDomain other) throws SemanticException {
	if (other == null || other.isBottom() || this.isTop() || this == other || this.equals(other)) {
		return this;
	}

	if (this.isBottom() || other.isTop()) {
		return other;
	}
	
	return new EVMAbsDomain(stack.widening(other.getStack()),
			memory.widening(other.getMemory()),
			mu_i.widening(other.getMu_i()));
}
```

#### Metodi isBottom & equals
```java
@Override
public boolean isBottom() {
	return stack == null && 
		memory == null && 
		mu_i == null;
}

@Override
public boolean equals(Object obj) {
	// EVMAbsDomain check
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;

	EVMAbsDomain other = (EVMAbsDomain) obj;
	// isTop check
	if (this.isTop != other.isTop)
		return false;
	// If both are top, there is no need to check the stack
	if (this.isTop)
		return true;
	
	if(stack == null && other.getStack() != null)
		return false;
	if(memory == null && other.getMemory() != null)
		return false;
	if(mu_i == null && other.getMu_i() != null)
		return false;
	
	if(this.isBottom() == false && other.isBottom() == false)
		return stack.equals(other.getStack()) &&
				memory.equals(other.getMemory()) &&
				mu_i.equals(other.getMu_i());
		
	return this.isBottom() == other.isBottom(); // TODO check if it is correct
}
```

---

## Correzione semantica opcodes 
### AND, OR, XOR
La semantica degli operatori `AND`, `OR` e `XOR` è stata corretta nel seguente modo. Nell'implementazione precedente, i limiti del nuovo intervallo da inserire nello stack venivano calcolati come segue:

```java
low = new MathNumber(opnd1.interval.getLow().toByte() & opnd2.interval.getLow().toByte());
high = new MathNumber(opnd1.interval.getHigh().toByte() & opnd2.interval.getHigh().toByte());
```

Tuttavia, questo approccio comportava la "riduzione" di tutti i valori alla dimensione di un byte, anche quando essi erano rappresentati su più di un byte.

#### Esempio di esecuzione
Consideriamo la seguente sequenza di istruzioni:

```
PUSH4 0xFFFFFFFF
PUSH2 0x0C35
AND
```

In questo caso, ci aspettiamo di ottenere il risultato `0x0C35` (rappresentato su 2 byte). Tuttavia, la versione precedente della `smallStepSemantics` restituiva `0x35` (rappresentato su un solo byte).

La soluzione proposta per risolvere questo problema consiste nell'utilizzare il metodo `toLong()` anziché `toByte()` e nell'eseguire l'operazione `&` con due valori di tipo `Long`:

```java
low = new MathNumber(opnd1.interval.getLow().toLong() & opnd2.interval.getLow().toLong());
high = new MathNumber(opnd1.interval.getHigh().toLong() & opnd2.interval.getHigh().toLong());
```

Questa soluzione ([commit Github](https://github.com/lisa-analyzer/evm-lisa/commit/1217879190f51bdc3b654ad201a63d89efbe37e6)) è stata testata e confermata come corretta. Con questa modifica, non si verificano più problemi di riduzione dei valori a un byte.

> L'esempio fornito riguarda l'operatore AND, ma lo stesso principio si applica anche agli altri operatori.

### NOT
Per lo stesso problema sopracitato, anche l'operatore `NOT` è stato modificato:
```java
private static final BigDecimal MAX = new BigDecimal(Math.pow(2, 256));

// ...

try {						
	if(opnd1.interval.getLow().toLong() >= 0)
		low = new MathNumber(MAX.subtract(new BigDecimal(opnd1.interval.getLow().toLong() + 1)));
	else 
		low = new MathNumber(~opnd1.interval.getLow().toLong());
	
	if(opnd1.interval.getHigh().toLong() >= 0)
		high = new MathNumber(MAX.subtract(new BigDecimal(opnd1.interval.getHigh().toLong() + 1)));
	else 
		high = new MathNumber(~opnd1.interval.getHigh().toLong());
	
} catch (MathNumberConversionException e) {
	result.push(Interval.TOP);
	return new EVMAbsDomain(result, memory, mu_i);
}

// ...
```

### SHL, SHR, SAR
Questi tre operatori sono risultati molto complessi. Infatti, per ognuno di loro, è stato realizzato un metodo ad hoc che va a lavorare su un array di byte.  
Tutti e tre gli operatori presentano la seguente sintassi, l'unica cosa che cambia è il nome della funzione di shift utilizzata.
> In questo caso viene mostrato l'opcode `SHR` con la funzione `shiftRight`. Per gli altri due operatori basterà modificare la funzione con `shiftLeft` e `shiftArithmeticRight`.

```java
Stack result = stack.clone();
Interval opnd1 = result.pop();
Interval opnd2 = result.pop();

try {
	String op2LowString = opnd2.interval.getLow().toString();
	String op2HighString = opnd2.interval.getHigh().toString();
	
	BigInteger op2LowBigInteger = new BigInteger(op2LowString);
	byte[] op2LowBytes = op2LowBigInteger.toByteArray();
	byte[] resultShiftRightLow = shiftRight(op2LowBytes, opnd1.interval.getLow().toInt());
	
	BigInteger op2HighBigInteger = new BigInteger(op2HighString);
	byte[] op2HighBytes = op2HighBigInteger.toByteArray();
	byte[] resultShiftRightHigh = shiftRight(op2HighBytes, opnd1.interval.getHigh().toInt());
	
	result.push(new Interval(new MathNumber(new BigDecimal(new BigInteger(resultShiftRightLow))), 
				new MathNumber(new BigDecimal(new BigInteger(resultShiftRightHigh)))));
	
} catch (MathNumberConversionException e) {
	result.push(Interval.TOP);
	return new EVMAbsDomain(result, memory, mu_i);
}

return new EVMAbsDomain(result, memory, mu_i);

```

#### shiftRight
```java
/**
 * Shifts the elements of a byte array to the right by a specified number of bits.
 *
 * @param byteArray      The byte array to be shifted.
 * @param shiftBitCount  The number of bits by which the array elements should be shifted to the right.
 * @return               The byte array after the right shift operation.
 * 
 * <p>This method performs a bitwise right shift on the input byte array, where each element is treated as
 * a single byte. The shift operation is performed in-place, and the original array is modified.</p>
 *
 * <p>If the {@code shiftBitCount} is zero, the array remains unchanged.</p>
 *
 * <p>The method uses a circular shift approach, with consideration for byte boundaries and a carry mechanism.</p>
 *
 * @throws IllegalArgumentException If the {@code byteArray} is {@code null}.
*/
public static byte[] shiftRight(byte[] byteArray, int shiftBitCount) {
	final int shiftMod = shiftBitCount % 8;
	final byte carryMask = (byte) (0xFF << (8 - shiftMod));
	final int offsetBytes = (shiftBitCount / 8);

	int sourceIndex;
	for (int i = byteArray.length - 1; i >= 0; i--) {
		sourceIndex = i - offsetBytes;
		if (sourceIndex < 0) {
			byteArray[i] = 0;
		} else {
			byte src = byteArray[sourceIndex];
			byte dst = (byte) ((0xff & src) >>> shiftMod);
			if (sourceIndex - 1 >= 0) {
				dst |= byteArray[(sourceIndex - 1)] << (8 - shiftMod) & carryMask;
			}
			byteArray[i] = dst;
		}
	}
	return byteArray;
}
```

#### shiftLeft
```java
/**
 * Shifts the given byte array to the left by the specified number of bits.
 *
 * @param byteArray The byte array to be left-shifted.
 * @param shiftBitCount The number of bits by which to shift the byte array to the left.
 * @return The resulting byte array after left-shifting by the specified bit count.
 * 
 * <p>This method performs a left shift on the provided byte array, where each byte is shifted to the left
 * by the given number of bits. The shift operation is performed in a bitwise manner, and the bits shifted
 * beyond the byte boundary are wrapped around to the opposite end. The shift is done in place, and the
 * modified byte array is returned as the result.</p>
 * 
 * <p>The {@code shiftBitCount} parameter determines the number of bits to shift. </p>
 * 
 * @throws IllegalArgumentException If the input {@code byteArray} is {@code null}.
*/
public static byte[] shiftLeft(byte[] byteArray, int shiftBitCount) {
	final int shiftMod = shiftBitCount % 8;
	final byte carryMask = (byte) ((1 << shiftMod) - 1);
	final int offsetBytes = (shiftBitCount / 8);

	int start;
	
	if(byteArray.length > 32)
		start = 1;
	else
		start = 0;
	
	int sourceIndex;
	for (int i = start; i < byteArray.length; i++) {
		sourceIndex = i + offsetBytes;
		if (sourceIndex >= byteArray.length) {
			byteArray[i] = 0;
		} else {
			byte src = byteArray[sourceIndex];
			byte dst = (byte) (src << shiftMod);
			if (sourceIndex + 1 < byteArray.length) {
				dst |= byteArray[sourceIndex + 1] >>> (8 - shiftMod) & carryMask;
			}
			byteArray[i] = dst;
		}
	}
	return byteArray;
}
```

#### shiftArithmeticRight
```java
/**
 * Shifts the bits of the given byte array towards the least significant bit (SAR - Shift Arithmetic Right).
 * The bits moved before the first one are discarded, and the new bits are set to 0 if the previous most
 * significant bit was 0; otherwise, the new bits are set to 1.
 *
 * @param byteArray The byte array to be right-shifted.
 * @param shiftBitCount The number of bits by which to shift the byte array to the right.
 * @return The resulting byte array after right-shifting by the specified bit count.
 *
 * <p>This method performs a right shift on the provided byte array (SAR operation), where each byte is
 * shifted to the right by the given number of bits. The shift operation is performed in a bitwise manner,
 * and the bits shifted beyond the byte boundary are discarded. The new bits introduced during the shift
 * are set based on the value of the previous most significant bit (0 or 1).</p>
 *
 * <p>The {@code shiftBitCount} parameter determines the number of bits to shift.</p>
 *
 * @throws IllegalArgumentException If the input {@code byteArray} is {@code null}.
*/
public static byte[] shiftArithmeticRight(byte[] byteArray, int shiftBitCount) {
	final int shiftMod = shiftBitCount % 8;
	final byte carryMask = (byte) (0xFF << (8 - shiftMod));
	final int offsetBytes = (shiftBitCount / 8);

	int sourceIndex;
	int start;
	
	if(byteArray.length > 32)
		start = 1;
	else
		start = 0;
	for (int i = start; i < byteArray.length; i++) {
		sourceIndex = i + offsetBytes;
		if (sourceIndex >= byteArray.length) {
			byteArray[i] = (byte) (byteArray[i] < 0 ? 0xFF : 0);
		} else {
			byte src = byteArray[sourceIndex];
			byte dst = (byte) (src >>> shiftMod);
			if (sourceIndex + 1 < byteArray.length) {
				dst |= byteArray[sourceIndex + 1] << (8 - shiftMod) & carryMask;
			}
			byteArray[i] = dst;
		}
	}
	return byteArray;
}

```
