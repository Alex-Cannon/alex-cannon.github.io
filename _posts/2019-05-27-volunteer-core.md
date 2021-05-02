---
layout: post
title: 'Project: Volunteer Core'
date:   2019-5-27 00:00:00 -0600
tags: project
---
<a href="https://vmt-rsvplarimer.herokuapp.com/">View Live</a>
<a href="https://github.com/CodeForFoco/volunteercore">View Github</a>

Hi! Welcome to another project showcase. Today I'm going to talk about a project I worked on for Volunteers of America, called Volunteer Core.

## > Background
Volunteers of America's Fort Collins office approached Code For FoCo (A non-profit that builds software for people) with a big problem they had: Tracking opportunities. VOA had software for tracking opportunities but it was not great. The software they used was very outdated to the point where they could not cross-match opportunities. For example, when a volunteer called and wanted to work with kids, there was no way for them to query their database for opportunities related to kids.

Steven Abadie and I worked together to build them a solution. When I joined the project, the Python backend was mostly finished by Steven, but there was no front-end for VOA to access. I started work on this using React.

As of writing this, we've deployed a demo (Link above) for VOA and waiting review. We hope that after this office accepts the product that other VOA offices in the US will use our software.

**In summary, VOA needed CRM-like software to track their opportunities, partners, etc. so we built it!**

## > Scope
We kept our MVP small. For our first prototype, we wanted VOA to be able to CRUD opportunities, partners, tags, and users. They also needed to restrict certain endpoint to an admin. We included this as well.

## > Challenges
### Building Software Someone Actually Uses
My previous projects have been fun and a great challenge to learn and test my skills but this project has made me realize that writing software for real people is different than side projects.

When you write software for real people, you need a list of user stories, requirements, etc. Rather than build something for fun and adding features because it would be really nice, on this project *I didn't want to waste time on something people weren't going to use!*

This is why we invited Andrew, the Fort Collins VOA office Manager, to a meeting where we collected a list of user stories. So we didn't waste time building something VOA didn't use!

It was a fun meeting. Andrew was very excited about our progress (I was proud of a front-end I knocked out in 2 weeks). We got some great feedback on what was needed and some details we needed to figure out.

### Git Good
Although I was fairly competent with git, I think this project really helped me understand how the whole fork workflow happened. I feel like I have a significantly greater understanding of how development/open source project work.

Reading instructions:
1. Fork this repo
2. git clone
3. Other setup steps
4. Make your changes
5. push your branch
6. make a pr
7. Get a review

These steps make sense if you read them aloud. However, **Reading instructions and troubleshooting issues are 2 different things!** This project helped me greatly understand how to troubleshoot issues with git.

For example, I accidentally branched off of a local branch we'll call *alex-cannon-big-changes-A* that I wanted to scrap. Instead, I wanted to push *alex-cannon-big-changes-B*.

**The issue was that branch B branched from branch A, *not* master!** In order to fix this, I used *$ git log* to view my local commits. Then I used *$ git revert* to remove the commit from *alex-cannon-big-changes-A*, while keeping *alex-cannon-big-changes-B* commits.

Things like this you just learn by doing! I learned a lot more about git and issues, prs, forks, etc. in this project.

### Dashboard/Project Structure
I realized that most of our endpoints just required a form. I used 1 component to handle all POST requests, 1 for PUT requests, etc. Problems started popping up when pages/endpoints needed to be more unique.

I ended up using a "meta" file for data on endpoints. For example, meta data for an opportunities endpoint might look like so:
```
{
  endpoint: '/api/opportunities'
  fields: [{
      name: 'tags'
      component: SpecialTagComponent
    }, {
      name: 'partner_name'
      component: DefaultInputComponent
    }]
  }
}
```

By allowing us to set a component, this solved issues I had where I needed more control over what was viewed. 

## > Close
There were other interesting problems I encountered in this project but I think it's about time I close. Thanks for reading!

I’m out!
