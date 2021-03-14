---
title: 'Onboard documentation'
disqus: hackmd
---

Welcome to the Team - Onboarding
===

## Table of Contents

[TOC]

## Setup Guide

To install all the necessary components, do the following

1. Install ESLint: Install ESLint on VSCode via extensions tab
2. Install Cypress: npm install cypress --save-dev
3. Coverage Reports: Follow this guide https://github.com/bahmutov/cypress-and-jest
(Refer to [here](https://hackmd.io/cTRqONMrSfC_oeD6cMwgdA#Cypress-Coverage) for how to get cypress coverage)

Github Guide
---

1. Create new feature branch with following format: 
```gherkin  
git checkout -b "[name]-[featureName]"
```
2. Pull code from main:
```gherkin  
git pull origin main
```
3. Code up feature
4. Pull code from main:
```gherkin  
git pull origin main
```
4. Push code:
```gherkin  
git add [files]
git commit -m "Feature info"
git push origin [branch]
```
5. Create pull request and assign reviewers
6. Good job! Repeat :)

Cypress Coverage
---
To get cypress coverage, it is a little more complicated. 
1. Instrument your code
```gherkin
npx nyc instrument --compact=false source source/instrumented
```
2. Make sure your index.html is using the instrumented javascript files
3. Run cypress using npx
```
npx cypress run --spec cypress/integration/unit_tests/*.js
```
4. Done! Check your cypress-coverage folder

Reference: 
https://docs.cypress.io/guides/tooling/code-coverage.html
