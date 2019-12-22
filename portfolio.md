---
layout: default
title: Portfolio
showResumeInNav: true
permalink: /portfolio/
---
<div class="portfolio-container">
  <div class="landing-wrap">
    <div class="landing-wrap-content">
      <img class="my-face" src="/assets/images/face_small.jpg" alt="My Face"/>
      <h1 class="portfolio-description">
        I'm Alexander, content creator and developer. 
        <i class="far fa-grin"></i>
      </h1>
      <div class="btn-group">
        <a class="btn" href="/assets/alexander_cannon_resume.pdf" download>
          Resume <i class="far fa-file"></i>
        </a>
        <a class="btn btn-primary" href="#gallery">View Work</a>
      </div>
    </div>
  </div>

  <div id="gallery" class="section">
    <h1>Select Projects</h1>
    <p>Click a project below to read more. View my <a href="https://github.com/Alex-Cannon" target="_blank" rel="noopener noreferrer">github</a> or <a href="https://codepen.io/Alex_Cannon/" target="_blank" rel="noopener noreferrer">codepen</a> to see more projects.
    </p>
    {% include_relative _includes/projectSection.html %}
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
