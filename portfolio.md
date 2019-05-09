---
layout: default
title: Portfolio
permalink: /portfolio/
---
<div class="portfolio-container">
  <div class="landing-wrap section">
    <img class="my-face" src="/assets/images/face_small.jpg" alt="My Face"/>
    <h1 class="portfolio-description">Hi! I'm Alex & I Build Software.</h1>
    <p>Click or Scroll to view my projects.</p>
    <a class="btn btn-lg" href="#gallery">View Projects</a>
  </div>
  <div id="gallery">
    {% include_relative _includes/project.html 
      src='/assets/images/cover_codebin.jpg'
      alt='Online Webpage Editor | Full Stack Development'
      href='https://c0d3bin.herokuapp.com/'
      readhref='/post/codebin'
      text='Online Webpage Editor | Full Stack Development'
    %}
    {% include_relative _includes/project.html 
      src='/assets/images/cover_secretsanta.png'
      alt='Secret Santa Online | Full Stack Development'
      href='https://secret-santa-13.herokuapp.com'
      readhref='/post/secretsanta'
      text='Secret Santa Shop | Full Stack Development'
    %}
    {% include_relative _includes/project.html 
      src='/assets/images/cover_bearbnb.png'
      alt='Airbnb Clone | Front-End Development'
      href='https://bearbnb-06.herokuapp.com'
      readhref='/post/bearbnb'
      text='Airbnb Clone | Front-End Development'
    %}
    {% include_relative _includes/project.html 
      src='/assets/images/cover_freecodecamp.png'
      alt='FreeCodeCamp Portfolio | Full Stack Development'
      href='https://freecodecamp-portfolio.glitch.me/'
      readhref='/post/freecodecampportfolio'
      text='FreeCodeCamp Portfolio | Full Stack Development'
    %}
  </div>
  <div class="section" id="skills">
    <h1>Skills</h1>
    <p>I believe that technology should <i>solve problems</i> instead of complicating them.<br/><b>That's why I actively learn the tech needed to get the job done!</b><br/> With that said, I'm most familiar with <u>JavaScript, HTML, CSS, ReactJS, NodeJS, Express, and MongoDB.</u></p>
    <p>I write software mostly <b>every day</b> to stay on top of the new jazzy tech. <br/>It takes <b>hard work</b> and dedication to live up to my high standards for quality work.</p>
    <br/>
    <h3>Front-End</h3>
    <p>JavaScript, ReactJS, JQuery, HTML, CSS, Sass, Bootstrap, Mobile-First, Responsive Design</p>
    <h3>Back-End</h3>
    <p>RESTful apis, NodeJS, Express, MongoDB, Mongoose, Passport, C#/Java (Minimal)</p>
    <h3>Other</h3>
    <p>Git, Github, Heroku, mLab, Jekyll, Photoshop</p>
  </div>
  <div class="about-container">
  {% include_relative _includes/about.html %}
  </div>
  <div class="section" id="contact">
    <h1>Contact Me</h1>
    <p>Hi! Let's chat. Send me an email/message through any of the services below. I'm most active on LinkedIn and Github.</p>
    {% include_relative _includes/socialLinks.html %}
  </div>
</div>