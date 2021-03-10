# Task options: Edit, Delete, Start task

* Status: Decided
* Deciders: majority opinion
* Date: 03-06-2021

## Context and Problem Statement

We need to determine which options are necessary for the tasks on a todo list. Since we've already determined that the estimated pomos cannot be changed, are there other potential options we need to decide against? Rather, which ones are strictly necessary?

## Decision Drivers

* The spirit of the app is to hold the user accountable
* We want to give as much structure as possible, but still be useful

## Considered Options

* Edit, y/n?
* Delete, y/n?
* Start task, y/n
* perhaps others?

## Decision Outcome

Chosen option: We chose to implement a delete task and a mark as completed feature on the right hand column. The "start task" idea was replaced by a select task feature implemented using radio buttons. 

### Positive Consequences

* Delete and Completed can be represented by very intuitive icons, meaning we don't need a popup menu

### Negative Consequences <!-- optional -->

* The select task feature might be a little confusing at first, but hopefully the help popup will counteract that