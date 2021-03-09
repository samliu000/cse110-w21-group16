# Estimate and actual are equal: no popup

* Status: accepted 
* Deciders: majority vote
* Date: 03-06-2021

## Context and Problem Statement

When the estimate and number of pomodoros match, do we want to alert the user?

## Decision Drivers

* The spirit of our app
* How useful would this be?
* Why would the user need to know that they are equal, does this give them some action to take?
* Ease of implementation

## Considered Options

* Prompt the user, ask them if they've finished the task
* Do not prompt the user, let them rememeber to mark the tasks as complete themselves

## Decision Outcome

Chosen option: "Do not prompt the user." This is more straightforward to implement. Furthermore, our goal is to encourage the user to both do their best work and to accurately monitor themselves. If we were to prompt the user, we would be reminding them that they  have reached their estimate. Then, it is possible that they would try to rush through the rest of their task, both decreasing the quality of their work and creating inaccurate counts of the number of pomodoros they use.