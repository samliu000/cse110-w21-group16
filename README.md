# CSE 110 Winter 2021 Group 16 - Team Skynet
**Pomodoro Timer Website**: https://samliu000.github.io/cse110-w21-group16/ 

**Code Coverage**: https://samliu000.github.io/cse110-w21-group16/coverage/lcov-report/index.html

Group Members: Aven Huang, Fengdi Liu, Joshue Aguirre, Kevin Stubbings, Matias Lin, Lara Daneshgaran Bajastani, Shuhua Xie, Samuel Liu, Yuru Zhou

---

# Pomodoro Timer
Pomodoro Timer is a tomato timer meaning that it is a fruit not a vegetable. 

## Features
- Default timer will be 25 min focus sessions followed by 5 min breaks
- Every fourth completed pomo session will reward user with a longer break
- Completely customizable focus/break/longbreak times
- Optional Todo List with estimated/actual number of pomodoro sesions for each task
- Reset button for when user loses focus and needs to start over
- Beautiful alarm sound when timer finishes

### Code Quality/Testing
- ESLint (both on VSCode IDE and automated through Github Actions)
- Codefactor.io (examines code on pull request)
- JSDoc
- Cypress/Jest testing
- Cypress cross browser testing

**Combined Code Coverage** - https://samliu000.github.io/cse110-w21-group16/coverage/lcov-report/index.html

### App Walkthough

### Libraries Used

- [Cypress](https://github.com/codepath/CPAsyncHttpClient) - For unit/integration/browser testing and coverage report
- [Jest](https://github.com/bumptech/glide) - For unit testing and coverage report
- [Merge-Cypress-Jest-Coverage](https://www.npmjs.com/package/merge-cypress-jest-coverage) - Merges cypress and jest coverage reports
