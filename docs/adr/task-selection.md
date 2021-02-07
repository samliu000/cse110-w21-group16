# Task selection: select task first, then start timer

* Status: tentatively accepted
* Deciders: majority vote by entire team
* Date: 02-06-2021

## Context and Problem Statement

Since we want to assign a task to each pomodoro, should we select the task 

## Decision Drivers <!-- optional -->

* we want to be able to count the number of pomodoros a user spends on each task
* we should remember that the goal of this app is to keep the user focused

## Considered Options

* select a task before starting the timer
* select a task after starting the timer (pop-up)
* select a task after the timer finishes

## Decision Outcome

Chosen option: "select a task before starting the timer", because this way the user is reminded which task they are working on during their pomodoro. We chose to pick the task before the timer starts so that we can make a note of it on the screen while the user works on the pomodoro.
