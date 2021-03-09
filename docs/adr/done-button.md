# Done button: hide during a session with no selected task

* Status: accepted
* Deciders: Majority vote
* Date: 03-06-2021

## Context and Problem Statement

When the user has a task selected, during the pomodoro sessino they may click "done" to indicate that the task has been completed and the timer will automatically move to the break session and mark the task as done. When the user does not select a task, do we still want to provide a done button?

## Decision Drivers

* Again, our goal is to guide the user to be more productive
* We don't want to give the user too many options to slack off

## Considered Options

* Yes, allow the user to indicate they are done
* No, do not add a done button when they do not have a task selected

## Decision Outcome

Chosen option: "No, don't add a done button." Ourreasoning is that if the user wanted to work on a specific task, the task list is there for them to use. If they chose not to use it, we assume that they simply want to focus for 25 minutes (or however long the session is). To this end, we don't want to give them the option to stop halfway, so we will not show them the done button. If they really really want to stop, a possible (but hopefully unintuitive enougth that they won't think of it) option is for them to refresh the page.