---
layout: post
title: F.C.C. - Create Set Class
date:   2019-10-06 00:00:00 -0650
tags: development javascript
codeLanguage: language-javascript
---

Below is a quick solution to the Create Set Class challenge provided by **Free Code Camp**. It's a very simple challenge and I aim to learn more about _sets_ in the future.

_In the next few exercises, we will build a full featured Set from scratch._

_this.add function should return true if the value is successfully added and false otherwise_

### My Solution:

<pre>
    <code class="language-javascript">
        function Set() {
            // the var collection will hold our set
            var collection = [];
            // this method will check for the presence of an element and return true or false
            this.has = function(element) {
                return (collection.indexOf(element) !== -1);
            };
            // this method will return all the values in the set
            this.values = function() {
                return collection;
            };
            
            // This is the function that needed added
            // It's very simple!
            this.add = function(element) {
                if (!this.has(element)) {
                    collection.push(element);
                    return true;
                }
                return false;
            }
        }
    </code>
</pre>

Thanks for reading!