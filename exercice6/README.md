# Exercice 6

Create types with Semigroups.

## Description

An introduction to concatenating items via the formal Semi-group interface. Semi-groups are simply a type with a concat method that are associative. We'll define three semigroup instances and see them in action.

# Goal

Create some Semigroups which exposes a concat method and that are associative.

## Examples:

 - "a".concat("b").concat("c") -> "abc"
 - "a".concat("b".concat("c")) -> "abc"
 - [1,2].concat([3]).concat([4,5]) -> [1,2,3,4,5]
 - true && false -> false
 - true && true && true -> true
