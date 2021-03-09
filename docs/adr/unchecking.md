# Unchecking completed tasks: Do not allow

* Status:  accepted 
* Deciders: Majority vote
* Date: 03-06-2021

## Context and Problem Statement

If a user marks a task as complete and later finds out that they actually have more to do, do we allow them to uncheck the task?

## Decision Drivers

* We want the pomodoro count to be as accurate as possible
* Easy of use for the user

## Considered Options

* Allow unchecking
* Do not allow unchecking

## Decision Outcome

Chosen option: "Do not allow unchecking". This encourages the user to think carefully about if they've actually finished a task before checking it off. As for the pomodoro estimate accuracy, if the user later finds that they have more to do, it is unlikely that their original estimate would have included this change anyway. Therefore, since the original estimate cannot be edited, the user is encouraged to add this as another task. This lets them accurately track their pomodoros. Input from someone that actually used pomodoros revealed that that was what they frequently did. 