---
layout: post
title: JS Algorithm - Insertion Sort
date:   2019-10-06 00:00:00 -0650
tags: development javascript algorithms interview
codeLanguage: language-javascript
---

Below is a quick JS Algorithm problem provided by **Free Code Camp** called "Impement Insertion Sort" and solved by me:

_The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases._

_**Instructions:** Write a function insertionSortwhich takes an array of integers as input and returns an array of these integers in sorted order from least to greatest._

_**Note:** We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging arrayto see your sorting algorithm in action!_

### My Solution:

```
function insertionSort(array) {
  // Avoid mutation that leads to side-effects
  let sorted = [...array];

  // We are swapping our current number (sorted[i]) with numbers
  // behind it if it is less than that number.
  // For example, given [2, 3, 1] the array is modified like so:
  // 1.  [2, 3, 1] Can't compare 2 to nothing. Nothing happens
  // 2.  [2, 3, 1] 3 < 2 ? No. Nothing happens
  // 3a. [2, 1, 3] 1 < 3 ? Yes. Swap values
  // 3b. [1, 2, 3] 1 < 2 ? Yes. Swap values
  // 4.  [1, 2, 3] Loop ends.
  for (let i = 0; i < sorted.length; i++) {
    let num = sorted[i];
    let numIndex = i;
    for (let k = i - 1; k >= 0; k--) {
      if (sorted[numIndex] < sorted[k]) {
        sorted[numIndex] = sorted[k];
        sorted[k] = num;
        numIndex = k;
      }
    }
  }

  return sorted;
}

// Expected to output [1, 2, 3, 4]
console.log(insertionSort([2, 4, 1, 3]));
```

Going through these challenges, it is interesting all the different ways you can solve one problem: sorting an array. Of course, you could use JavaScripts built-in sort method, but in other languages you may not be able to do so, so it's good to know.

Thanks for reading!