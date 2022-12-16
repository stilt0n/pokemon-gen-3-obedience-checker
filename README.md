# Pokemon Generation 3 Obedience Probability Checker

## References

[This checker is based on my wife's project here, if you're here you should check it out](https://github.com/acromyrmetica/obedienceChecker)

Also see:

- [Bulbapedia article on obedience](https://bulbapedia.bulbagarden.net/wiki/Obedience)

## About

This is a very simple React app to calculate the probability a Pokemon will obey your commands.

### How it works

When pokemon are traded and overleveled they
don't uniformly disobey orders. Instead, disobedience depends on the formula:

Given:

- A randomly generated integer (R) between 0 and 255
- The pokemon's level (L)
- The obedience cap for your highest badge (C)

Disobey when:

```
R(L + C) / 256 >= C
```

Probability of disobedience depends on the randomly generated integer R, so we'll need to do some algebra to get R by itself first:

```
divide both sides by C:
R(L + C) / 256C >= 1

divide both sides by R:
(L + C) / 256C >= 1 / R

take recipricol:
256C / (L + C) >= R
```

To find the probability of disobedience from this, we need to know how many values R can take (between 0 and 255) that satisfy this constraint and divide it by the total number of values. When we do this we get P(disobey)

```
R' = 256C / (L + C)
P(disobey | L, C) = (255 - R') / 256
```

If we want the probability a Pokemon obeys, we just need to use the law of total probability:

```
P(obey | L, C) = 1 - P(disobey | L, C)
```
