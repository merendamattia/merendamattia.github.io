# Modifiche
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
In questo modo, se siamo arrivati a questo punto, l'unica condizione che rimane da verificare e' appunto quella della memoria. Andiamo a sfruttare i metodi gia' definiti nella classe Memory.
