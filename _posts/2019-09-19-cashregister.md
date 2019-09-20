---
layout: post
title: JS Algorithm - Get Change Algorithm
date:   2019-09-19 00:00:00 -0650
tags: development javascript algorithms interview
codeLanguage: language-javascript
---

Hi! Welcome to another algorithm tutorial. Recently, I had a technical interview where I was tasked with creating a "get change" algorithm. **This is a real algorithm I was asked to solve in a technical interview!**

Below are a few test cases:

* getChange(56) returns [25, 25, 5, 1].
* getChange(9) returns [5, 1, 1, 1, 1].
* getChange(11) return [10, 1].

Often, these algorithms are simpler than they appear. The first thing I'll do is create a function called getChange and add an array of US coins:

```
// Accepts an integer amount, returns array of US Coins for change
const getChange = (amount) => {
  const US_COINS = [25, 10, 5, 1];
}
```

Great. At this point, I'm not sure how everything is going to work together, but _I know I'm going to loop the US_COINS array and perform an action for each coin_. Let's do it:

```
// Accepts an integer amount, returns array of US Coins for change
const getChange = (amount) => {
  const US_COINS = [25, 10, 5, 1];
  let myAmount = amount; // Avoid mutation
  let amountInCoins = [];

  for (let i = 0; i < US_COINS.length; i++) {
    // Try to add to amountInCoins for each US COIN
  }
}
```

We went from _nowhere_ to _now here_. For each coin, we need to...

1. Check if it can divide into myAmount
2. If so, push it into amountInCoins[]
3. Subtract COIN from myAmount
4. Repeat step #2 and #3 until #1 is not true

```
// Accepts an integer amount, returns array of US Coins for change
const getChange = (amount) => {
  const US_COINS = [25, 10, 5, 1];
  let myAmount = amount; // Avoid mutation
  let amountInCoins = [];

  for (let i = 0; i < US_COINS.length; i++) {
    while (myAmount / US_COINS[i] >= 1) {
      myAmount -= US_COINS[i];
      amountInCoins.push(US_COINS[i]);
    }
  }

  return amountInCoins;
}
```

Great! Copy and paste this code into a text editor to try it out. All the test cases above should pass.

Thanks for reading and I hope this was helpful!