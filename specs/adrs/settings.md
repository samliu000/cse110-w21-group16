# Settings: Allow separate setting of breaks and 0 minute setting

* Status: accepted 
* Deciders: Matias and Samuel 
* Date: 03-03-2021

## Context and Problem Statement

How much flexibility does the user get with the settings menu?

## Decision Drivers

* Forcing the user to focus
* Allow for easier debugging

## Considered Options

* Allow setting of minutes and seconds
* Minimum minutes, maximum minutes
* Let user set breaks or calculate them independently

## Decision Outcome

Chosen option:

- let user set integer minutes

- let user set break times seperately, but give suggestions on break lengths

- allow 0 as a minimum, no need to set maximum

Reasoning: We allow integer minutes because that much precision is unnecessary. Zero is our minimum because that allows for easier and faster testing/debugging. For the same reason, we let the break times to be set separately, but for the user, we will have suggestions for the break times that depends on the session length inputted.