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