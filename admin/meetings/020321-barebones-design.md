## Meeting 2.1

#### Wednesday 1/23/21, 2:00-2:50 pm on Zoom, Team 16/Skynet  
  - Attendees: Joshue Aguirre, Matias Lin, Lara Daneshgaran Bajastani, Shuhua Xie, Samuel Liu

#### Purpose: 
  - Go over the first design and discuss the next steps.
  - Establish workflow and communication paths

#### Things discussed    
What would the BREAK button do?
  - Just reset the timer, otherwise line between stop and pause is too thin.
  - Don't want someone to think it's a pause button and accidentally click it. 

So basically it's a reset button
  - extra feature, no incentive to click on it but it's available for use if it's there. 
  - pros: allows us to count the number of failed pomos
  - cons: maybe nobody would ever click it
  - seomthing to consider: if todo list items can only be marked as completed after an completed pomo, if user keeps resetting, they may never get to mark off their tasks
    - possible solutions: ---?
  - decision to be finalized later

**Questions to Consider:** 
How much control does the user get? Is being 'locked' into the timer acceptable?
Is a button that allows the user to stop giving the user an incentive to press it?

How to do the log then? How to quantify number of pomos per task, especially if reset is allowed?
  - Maybe have list of completed pomos and incomplete ones
  - log partial pomos as fractions

Components to look at:
  - timer
  - buttons
  - desktop to mobile

Idea:
  - once timer starts, center the timer, make everything else disappear
    - is this difficult with javascript?

#### Next Steps:
  - delegate next tasks: HTML, CSS
  - CI Pipeline