---
layout: default
title: Portfolio
permalink: /portfolio/
---
<div class="landing-wrap section">
  <img class="my-face" src="/assets/images/face_small.jpg" alt="My Face"/>
  <h2 class="portfolio-description">Hi! I'm Alex & I Build Software.</h2>
  <p>Click or Scroll to view my projects.</p>
  <a class="btn btn-lg" href="#gallery">View Projects</a>
</div>
<div id="gallery">
  {% include_relative _includes/project.html 
    src='/assets/images/cover_codebin.jpg'
    alt='Codepen Clone | Full Stack Development'
    href='#'
    text='Codepen Clone | Full Stack Development'
  %}
  {% include_relative _includes/project.html 
    src='/assets/images/cover_secretsanta.png'
    alt='Secret Santa Online | Full Stack Development'
    href='#' 
    text='Secret Santa Online | Full Stack Development'
  %}
  {% include_relative _includes/project.html 
    src='/assets/images/cover_bearbnb.png'
    alt='Airbnb Clone | Front-End Development'
    href='#'
    text='Airbnb Clone | Front-End Development'
  %}
  {% include_relative _includes/project.html 
    src='/assets/images/cover_freecodecamp.png'
    alt='FreeCodeCamp Portfolio | Full Stack Development'
    href='#'
    text='FreeCodeCamp Portfolio | Full Stack Development'
  %}
</div>
<div class="section" id="tech">
  <h1>Technologies</h1>
  <p>I believe in technology and solutions that <i>solve problems</i> instead of complicating them. <b>That's why I'll learn the tech needed to get the job done!</b> With that said, I'm most familiar with <u>JavaScript, HTML, CSS, ReactJS, NodeJS, Express, and MongoDB.</u></p>
  <p>I write software mostly <b>every day</b> to stay on top of new and emerging technologies. It takes <b>hard work</b> and <b>dedication</b> to live up to my high standards for quality work.</p>
  <br/>
  <h3>Front-End</h3>
  <p>JavaScript, ReactJS, JQuery, HTML, CSS, Sass, Bootstrap</p>
  <h3>Back-End</h3>
  <p>NodeJS, Express, MongoDB, Mongoose, Passport</p>
  <h3>Other</h3>
  <p>Git, Github, Heroku, mLab</p>
</div>
<div class="section" id="about">
  <h1>About Me</h1>
</div>