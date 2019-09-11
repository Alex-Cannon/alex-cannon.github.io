---
layout: post
title: 'How React and Redux work together'
date:   2019-09-11 00:00:00 -0650
tags: development react redux 
---
Hi! Welcome to another blog post. Today I'm going to give a brief overview of how React and Redux work together.

Recently, I had the opportunity to begin learning Redux, so I thought "why not share some of m knowledge?"

## What is React?
In one sentence, **react is state management for JavaScript**. It abstracts state management for UI components in a web application, 
allowing developers to focus on other, more important parts of the application.

React is also commonly used to create SPAs or Single Page Applications and it is incredibly fast. Traditionally, users interacted with websites like so:

1) User requests /home

2) Server responds with home.html

3) User requests /signin

4) Server responds with signin.html

Every time a user requests a different page, HTTP requests are sent between the server and user. This means that the user's computer must 
talk with the server every time a user requests a different page.

Then, some very smart developers thought: _"How can we make sites perform faster?"_

Businesses loved this idea. It is common knowledge that the faster your site loads, the less likely users are to backclick and choose another site. 

More users = More Money.

Facebook solved this problem by developing ReactJS. Now, users didn't have to send HTTP requests to the server every time they requested a new page. 
Instead of sending a HTTP request to a server, JavaScript is used to render the page. In practice, this means users can navigate a site as fast 
as they could navigate a desktop application:

Now, this doesn't mean there are _zero_ HTTP requests to the server. For example, if a user needs to sign in, typically an HTTP request is sent 
to the server to attempt to login. Or a site might load 10 new posts from a blog, which is another HTTP request.

So, you may think, what's the point of React if you still have to send HTTP requests? It's simple: React is FAST (and provides state managment)! Users have a better experience if they 
never have to see that pesky white screen every time they click a link. They are much happier if the page immediately loads, then loads necessary data.

Now, our user to server interaction looks like so:

1) User requests /home

2) Server responds with generic.html (small .html file with LITTLE content. React handles all content)

3) User's React renders /home.html with JavaScript

4) User requests /signin

5) User's React renders /signin

6) User enters credentials and hits "sign in" button.

7) HTTP request sent to server with credentials.

8) If Server processes the request successfully, sends a 200 status back.

9) React redirects user to another part of the site

## What is Redux?
The problem developers run into when they work with React is that the application's state can be scattershot. You might have login credentials 
in component A, but component B also needs those credentials. Redux offers a single store where the entire application's state is held.

This offers several benefits:

1) Components have less "inheritance-like" relationships (which makes the codebase rigid).
2) State changes are clearly defined as "actions," which makes code more readable, and thus more maintainable. 
3) Reducers allow developers to know exactly what is happening when a specific action is triggered.

Thanks for reading! I hope this post made React and Redux make more sense to you.




