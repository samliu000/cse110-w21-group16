# Pomos and tasks: pick a task each pomo

* Status: accepted
* Deciders: majority vote by entire group
* Date: 02-06-20201

## Context and Problem Statement

After the break, does the next pomodoro start immediately, assuming that the selected task continues? Or do we allow the user the choice to select another task?

## Decision Drivers

* we don't want the usr to lose focus
* but we also need to consider that a user might get stuck and want to change their task.

## Considered Options

- pomo until you finish: forces the user to finish the task before moving on
  - pro: forces them to finish their task
  - con: doesn't let user change task midway
- pick a task per pomo: gives flexability
  - pro: allows user to change subjects if necessary
  - con: user might take long task
- idea 3: set active task
  - implementation unclear?

## Decision Outcome

Chosen option: "pick a task per pomo", because it allows enough flexability but forces the user to concentrate on one task at a time.