---
layout: post
title: Reverse an array in JavaScript
date:   2019-09-17 00:00:00 -0650
tags: development javascript algorithms 
---

Hello! How's it going? It's common for interviewers to ask programmers how to reverse an array. You would be surprised with the number of programmers unable to do this! 
If you're not familiar with the algorithm or would like some more insight, here you go!

If you'd like to get better at these types of problems, I recommend completing [Free Code Camp's](https://www.freecodecamp.org/) JavaScript Algorithms and Data Structures certificate as well as 
completing 1 algorithm a day.

When interviewers ask you to reverse an array, this is one solution for what they're looking for:
```
const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
     let firstElem = arr[i];
     arr[i] = arr[arr.length - i - 1];
     arr[arr.length - i - 1] = firstElem;
  }
}
```

Given an array [1, 2, 3], our first loop of the function will look like so:

```
// Passing in [1, 2, 3]
const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) { // arr.length / 2 = 1.5, loops twice.
     let firstElem = arr[i]; // 1
     arr[i] = arr[arr.length - i - 1]; // arr[0] = 3
     arr[arr.length - i - 1] = firstElem; // arr[2] = 1
  }
}
```

This solution avoids creating a new array, which is great for performance. It also **mutates** the given array. 
In functional programming, we want to _avoid_ mutation aka side effects. Below are a few reasons to avoid mutation:

* Harder to read code
* Difficult to test
* Confusing logic
* Reduced performance
* Increased memory usage

If we want to avoid mutation, do this:

```
const reverseArray = (oldArr) => {
  let arr = [...oldArr]; // Create a NEW instance of arr with ES6.
  for (let i = 0; i < arr.length / 2; i++) {
     let firstElem = arr[i];
     arr[i] = arr[arr.length - i - 1];
     arr[arr.length - i - 1] = firstElem;
  }
  
  return arr;
}
```

Notice how we have a return value in the second function? That is because we are creating a NEW instance of arr to _avoid_ mutation. 

Thanks for reading!
