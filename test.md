#Podstawowe definicje

##Zmienna losowa

$(\Omega, \mathcal{F})$ - p. mierzalna    

Zmienna losowa to funkcja mierzalna

##Rozkład prawdopodobieństwa

Funkcja $\mathbb{P}_X :
        \mathcal{B}(\mathbb{R}) \rightarrow \mathbb{R}$
określona wzorem
$\mathbb{P}_X(B) = \mathbb{P}(X^{-1}(B))$
$\mathbb{P}_X(B) = \mathbb{P}(X \in B)$

##Dystrybuanta
Funkcja rzerzywista F t, że:

1. F jest niemalejąca
2. F jest prawostronnie ciągła
3. $\lim_{x->-\infty}F(x) = 0$ oraz $\lim_{x->\infty}F(x) = 1$

##Dystrybuanta zmiennej losowej X
$F_X(x) = \mathbb{P}_X((-\infty, x])=\\
= \mathbb{P}(X \leq x)$


#Typy rozkładów Prawdopodobieństwa

##Typ dyskretny

F jest typy dyskretnego jeśli $\exists$ zbiór przeliczalny $A \in \mathcal{B}(\mathbb{R})$ t, że $\mathbb{Q}(A) = 1$ gdzie $\mathbb{Q} \sim F$

##Rozkład dyskretny

Ciąg par (miejsce_skoku, skok) dla dystrybuanty typu dyskretnego

********
#Akapit
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#akapit
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

*******

##Miary absolutnie ciągłe
$(\Omega, \mathcal{F})$,\; $\mu, \nu$ miary na $\mathcal{F}$

$\nu$ jest absolutnie ciągła względem $\mu$ jeśli
$\forall A \in \mathcal{F} \mu(A) = 0 \Rightarrow \nu(A) = 0$

##Miara prob. absolutnie ciągła
Ciągła względem miary Lebesgue'a na borelowskich


#Ważne przykłady rozkładów ciągłych

##Rozkład normalny

$f(x) = \frac{1}{\sqrt{2\pi}\sigma}\exp(\frac{(x - \mu)^2}{2\sigma^2})$
Oznaczenie $N(\mu, \sigma^2), \sigma^2 > 0, \mu \in \mathbb{R}$

##Rozkład wykładniczy

$f(x) = \lambda \exp(-\lambda x)I_{[0, \infty)}(x)$
oznaczenie $EXP(\lambda)$

##Rozkład gammma
$f(x) = \frac{a^p x^{p-1} e^{-ax}}{\Gamma (p)}I_{(0, \infty)}(x)$

$\Gamma (p) = \int_0^{\infty}x^{p-1}e^{-x}dx$

Oznaczenie $G(p, a)$

##Rozkład Beta (pierwszego rodzaju)

$f(x) = C x^{a-1}(1-x)^{b-1}I_{(0,1)}(x)$, $a,b > 0$
