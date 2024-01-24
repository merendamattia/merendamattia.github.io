# Aggiunte

* Table of Content
{:toc}

## Classe Memory
```java
package it.unipr.analysis;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import it.unive.lisa.analysis.lattices.FunctionalLattice;
import it.unive.lisa.analysis.numeric.Interval;

public class Memory extends FunctionalLattice<Memory, BigDecimal, Interval> {

	// ----------- Costruttori
	public Memory() {
		this(new Interval());
	}
	
	public Memory(Interval lattice) {
		this(lattice, new HashMap<BigDecimal, Interval>());
	}
	
	public Memory(Interval lattice, Map<BigDecimal, Interval> function) {
		super(lattice, function);
	}
	// ----------- ! Costruttori

	// Implementazione dei metodi astratti della classe FunctionalLattice
	@Override
	public Memory top() {
		return isTop() ? this : new Memory(lattice.top(), null);
	}

	@Override
	public Memory bottom() {
		return isBottom() ? this : new Memory(lattice.bottom(), null);
	}

	@Override
	public Memory mk(Interval lattice, Map<BigDecimal, Interval> function) {
		return new Memory(lattice, function);
	}
	
	/**
	 * Yields the lattice inside this memory.
	 * @return the lattice inside this memory
	 */
	public Interval getLattice() {
		return this.lattice;
	}
	
} // ! Memory
```

---

## Nuove variabili locali e nuovo costruttore
```java
private Memory memory;
private Interval mu_i; // TODO Give a better name
```

```java
/**
 * Builds a symbolic stack with the given stack, memory and mu_i.
 * The built symbolic stack is not TOP.
 * 
 * @param stack the stack to be used.
 * @param memory the memory to be used.
 * @param mu_i the mu_i to be used.
 */
public SymbolicStack(ArrayDeque<Interval> stack, 
					 Memory memory, 
					 Interval mu_i) {
	this.stack = stack;
	this.isTop = false;
	this.memory = memory;
	this.mu_i = mu_i;
}
```

## visitProgram() di EVMCFGGenerator
```java
for (Statement node : cfg.getNodes())
	for (Entry<Statement, BigInteger> entry : map.entrySet())
		if (((ProgramCounterLocation) node.getLocation()).getPc() == entry.getValue().intValue())
			cfg.addEdge(new TrueEdge(entry.getKey(), node));
```