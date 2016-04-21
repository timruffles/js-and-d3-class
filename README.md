# JS for visualisation

[![Build Status](https://travis-ci.org/timruffles/js-and-d3-class.svg?branch=master)](https://travis-ci.org/timruffles/js-and-d3-class)

## Install

```sh
cd path/to/this/repo
npm install
```

## Weclome

Today we're going to look at getting the best from JS & D3.

The class is exercise driven, so it's worth having a glance over the below to learn how to run the exercises.

## Structure

```sh
# here are the slides, in HTML format, yours to take home and enjoy! simply open slides/index.html in your favourite brower
./js-slides 
./d3-slides 

# whenever we're working on an exercise together, I'll point you to an exercise subfolder
./exercises
```

## Exercises

Each exercise is a subfolder. You check your work by navigating to the folder in your terminal and running `npm run verify`.

The JS exercises have an `exercise.js` file. Some have a `start-here.js` file where we right tests - this is for learning about TDD (test-driven development).

So, for instance, to run the first exercise:

```sh
cd path/where/you/downloaded/this/repo
cd exercises/modules

node verify.js
```

The D3 exercises all run in the browser. You'll mostly be editing the `viz.js` file in each d3 exercise folder.

