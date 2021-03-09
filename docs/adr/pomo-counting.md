# Counting pomodoros: Just count session numbers

* Status:  accepted 
* Deciders: Matias
* Date: 02-24-2021

## Context and Problem Statement

How to increment pomodoros when the length of a session is changed?

## Decision Drivers

* Ease of implementation
* Ease of inpterpretation for the user

## Considered Options

* Scale pomodoro counts based on the  length set
* Convert sessions to minutes for display
* Count all pomodoro sessions as 1, regardless of the time elapsed

## Decision Outcome

Chosen option: "Count all pomodoro sessions as 1" because this encourages the user to pay attention to the number of times they were focused. 