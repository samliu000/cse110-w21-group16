# Long breaks aftetr reset: keep track of short breaks taken even after reset

* Status: accepted
* Deciders: no objections from entire group meeting
* Date: 02-06-2021

## Context and Problem Statement

After the reset button is hit, do we also reset the counter until the next long break?

## Decision Drivers

* ease of programming
* don't want to frustrate the user

## Considered Options

* yes, start over
* no, don't start over

## Decision Outcome

Chosen option: "no, don't start over", because it should be relatively simple to implement and is likely what the user expects.
