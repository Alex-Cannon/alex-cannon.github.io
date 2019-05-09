---
layout: post
title: 'Project: Secret Santa'
date:   2019-05-09 00:00:00 -0600
tags: project, portfolio
---
<a class="btn btn-danger" href="https://secret-santa-13.herokuapp.com">View Live</a>
<a class="btn" href="https://github.com/chingu-voyage7/Bears-Team-13">View Github</a>

Howdy. I'm back again with another project showcase. Today I'd like to tell you about a Secret Santa Website I built.

As my second Chingu Voyage team project, we chose to create a Secret Santa website. This would be the same a gift exchange IRL, except you can buy items online. For this voyage, I was a full-stack developer and the project manager! So I learned plenty.

## > Scope
We lost a team member on the second week of this project, :( so I knew we needed to keep the MVP small. I chose the bare essential features for this site like hosting an event, inviting friends via email, and purchasing items.

## > Challenges
### Project Setup
The first challenge I had to wrestle with was project setup. I knew roughly how to setup a full-stack MERN application, but this was my first time doing it myself. In my previous Chingu Voyage, my project manager setup a full MERN application with webpack by herself, which was very impressive!

I however, did not have the know-how or time, so I used Create React App, an amazing tool that automates your ReactJS workflow. I also had to learn how to proxy a RESTful API in my new workflow.

Now I knew how to quickly setup a workflow with CRA with a API server!

### .env files and Mac vs Windows
One issue I ran into while working on our project was that two of us used windows and inna, our third teammate used mac. Long story short, my .env files were working, hers were not.

After some headaches, research, and testing, I found a solution by using a config.js file to load our .env files when the server starts.

### Learning how to send emails
I know how to send emails, alright! I just didn’t know how to tell my server to send an email.

I tried using Nodemailer.js and send-email.js but neither worked. What I learned from their API was essentially that they helped you send an email on behalf of someone. For example, they could make my gmail send out emails for the site.

This was not what I wanted. I did not want to have to create a whole new gmail just for one project.

Then, I found Sendgrid. Sendgrid is not only a JavaScript library, it is also an online service. Following their documentation, I was able to send emails to all our users. Mwhahahahaha!

### Learning how to run CRON jobs
I could now send emails to our users, but I had no way of running this “task” once a day. The issue was that events had certain functions that needed to be ran once a day. For example, if it was time to start an event, a function must be run in order for a list of secret santas to be generated.

My solution was a CRON job. But, I ran into another snag! We were deploying to heroku and heroku required a credit card in order to use it’s daily CRON service. Instead, I used a website called cron-jobs.org to send a Request to our server at 12:00am every day, telling it to run it’s daily tasks on all our events.

## > Close
I ran into many other snags during this project, but all in all, I learned a ton. They do some great work over there at Chingu and I highly recommend attending a voyage to sharpen your skills as a developer.

Alex out.