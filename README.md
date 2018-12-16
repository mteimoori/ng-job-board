# Angular Job board
This project is a responsive job board in Angular which makes a HTTP call to get a json file containing job items. First panel, consists of a list of all active job items.
Once the user clicks on a job item from the list, detailed information of the selected job will be shown on the second panel.
This app is tested both with Karma and Protractor. See the demo <a target="_blank" href="http://who.mohammad.is/github/ng-job-board">here</a>

## Dependencies
* Angular 7
* Angular Material
* Angular Flex Layout

## Install

* Run `cd job-board && npm install` to install the dependencies for the app.

## Build

* Run `cd job-board && ng build` to build the project.
* The build artifacts will be stored in the `dist` directory.

## Run

* Run `cd job-board && ng serve` to run the dev server.
* Navigate to <a target="_blank" href="http://localhost:4200/">http://localhost:4200/</a>. 
* The app will automatically reload if you change any of the source files.

## Test

* Run `cd job-board && ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `cd job-board && ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Nice to have

* Router for job list and job details
* OnClick Animations for job item and job details  
* Pagination for job items

