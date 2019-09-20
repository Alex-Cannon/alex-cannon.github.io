---
layout: post
title: JS Algorithm - Get Numbers between
date:   2019-09-20 00:00:00 -0650
tags: development javascript algorithms interview
codeLanguage: language-javascript
---
Hello! Welcome to another quick tutorial on another JavaScript algorithm. I hope this blog post will help you understand algorithms better and help you in those tough technical interviews.

Today, I'm going to go over how to solve a basic algorithm. We will create a function called _getNumsBetween(arr)_. Below are the expected results:

1. getNumsBetween([1, 2, 5, 10]) returns [2, 4]
2. getNumsBetween([1, 2, 3]) returns []
3. parameter will always be from least greatest to greatest

Ok, great. Now, when you solve these algorithms, it is a good idea to try to wrap your head around the issue and try to recoginze any patterns you can implement.

In this case, notice that _5 - 2 **- 1** = 2_ and _10 - 5 **- 1** = 4_. Now, we have a _mathmatical_ way to create our results.

Ok. Now what? I like to think of how I would perform algorithms _manually_ before I program them. Let's go through how a _human_ would solve this algorithm _manually_:

1. Subtract each pair of numbers in the array.
2. If there is a difference greater than 1, add the difference minus 1 to our results array.
3. If there is not a difference greater than 1, do nothing.
4. Repeat 1 - 3 until there are no more values to compare.

Ok, now we have a roadmap to create a solution. Let's do it:

```
const getNumsBetween = (arr) => {
  // No need to create a copy of param arr to avoid mutation. We are only reading it, so we do not need to worry about mutation.
  let numsBetween = [];

  for (let i = 0; i < arr.length  - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      numsBetween.push(arr[i + 1] - arr[i] - 1);
    }
  }

  return numsBetween;
}
```

Great! We're finished. I hope this post was helpful. Thanks for reading!