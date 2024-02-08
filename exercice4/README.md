# Exercice 4

Use chain for composable error handling with nested Eithers.

## Description

We refactor a function that uses try/catch to a single composed expression using Either. We then introduce the chain function to deal with nested Eithers resulting from two try/catch calls.

## Goal

The goal here is to:
 - read a JSON config file
 - find the port value
 - return either the configured port value or a default one
