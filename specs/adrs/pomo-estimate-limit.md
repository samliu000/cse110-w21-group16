# Pomodoro estimate limit: None

* Status: accepted
* Deciders: Matias
* Date: 02-24-2021

## Context and Problem Statement

When the user inputs a pomodoro estimate, do we want to limit the number they can estimate?

## Decision Drivers

* How long the user might potentially work on a task

## Considered Options

* Cap it at a certain number
* Cap it depending on the timier length
* Do not cap it

## Decision Outcome

Chosen option: "Do not cap." SInce the tasks remain in localStorage, it is possible that the user will use the timer for many days and the pomodoro estimate time need not be limited.