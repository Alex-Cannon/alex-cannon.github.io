import React, { Component } from 'react';
import Section from '../../components/Section/Section.js';
import Gallery from '../../components/Gallery/Gallery.js';
import SocialLinks from '../../components/Social/Social.js';
import Icon from '../../components/Icon/Icon.js';
import Button from '../../objects/Button/Button.js';
import './landing.scss';
import './about.scss';

// Images
import face from '../../assets/images/face_zoom.jpg';

// Icons
import html from '../../assets/images/icons/html.png';
import css from '../../assets/images/icons/css.png';
import js from '../../assets/images/icons/javascript.png';
import bs from '../../assets/images/icons/bootstrap.png';
import jq from '../../assets/images/icons/jquery.png';
import d3 from '../../assets/images/icons/d3.js.png';
import react from '../../assets/images/icons/react.png';
import redux from '../../assets/images/icons/redux.png';
import rr from '../../assets/images/icons/reactrouter.png';
import sass from '../../assets/images/icons/sass.png';
// Backend
import node from '../../assets/images/icons/node.js.png';
import express from '../../assets/images/icons/express.png';
import mongo from '../../assets/images/icons/mongodb.png';
import mongoose from '../../assets/images/icons/mongoose.png';
import passport from '../../assets/images/icons/passport.png';
import handlebars from '../../assets/images/icons/handlebars.png';
// Other
import git from '../../assets/images/icons/git.png';
import github from '../../assets/images/icons/github.png';
import heroku from '../../assets/images/icons/heroku.png';
import mlab from '../../assets/images/icons/mlab.png';



export default class Home extends Component {
  render () {
    return (
      <div>
        <Landing/>
        <Gallery/>
        <Tech/>
        <About/>
        <Contact/>
      </div>
    );
  }
}

class Landing extends Component {

  scrollToProjects() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div id="landing-container">
        <div id="landing-content">
          <img src={face} alt="Alex Cannon" className="landing-face"/>
          <p className="landing-text">Hi! :) I'm Alex Cannon &amp; I build websites.</p>
        </div>
        <div id="landing-button" onClick={this.scrollToProjects.bind(this)}>
          <b>Click or Scroll to read more!</b>
          <div className="landing-arrow">
            <span></span>
            <span></span>    
          </div>
        </div>
      </div>
    );
  }
}

class Tech extends Component {
  render() {
    return (
      <Section id="technologies">
        <h1>Tech I Use</h1>
        <div className='tech-content'>
          <p>I use these technologies but I'm willing to learn what is necessary to get the job done!</p>
          <h3><i>Front-End</i></h3>
          <div className='tech-list'>
            <Icon src={html} text='HTML'/>
            <Icon src={css} text='CSS'/>
            <Icon src={js} text='JavaScript'/>
            <Icon src={bs} text='Bootstrap'/>
            <Icon src={jq} text='jQuery'/>
            <Icon src={react} text='React'/>
            <Icon src={rr} text='React Router'/>
            <Icon src={sass} text='Sass'/>
          </div>
          <h3><i>Back-End</i></h3>
          <div className='tech-list'>
            <Icon src={node} text='Node.js'/>
            <Icon src={express} text='Express'/>
            <Icon src={mongo} text='MongoDB'/>
            <Icon src={mongoose} text='Mongoose'/>
            <Icon src={passport} text='Passport'/>
            <Icon src={handlebars} text='Handlebars'/>
          </div>
          <h3><i>Other</i></h3>
          <div className='tech-list'>
            <Icon src={git} text='Git'/>
            <Icon src={github} text='Github'/>
            <Icon src={heroku} text='Heroku'/>
            <Icon src={mlab} text='mLab'/>
          </div>
        </div>
      </Section>
    );
  }
}

class About extends Component {
  render() {
    return(
      <Section id="about">
        <h1>About</h1>
        <div className="about-text">
          <img className="about-face" src={face} alt="Alex Cannon Face"/>
          <p><i>"Hu? What about me?"</i></p>
          <p>Hi! I'm Alex, a 19 year-old, lankey, avid reader, blogger, and big planner that loves to add value in any way I can. <b>I also love puns</b>. Lots of puns &amp; hilarious references.</p>
          <p>I've had the privilege of working with some great developers during 2 <a href="https://chingu.io/" target="_blank" rel="noreferrer noopener">Chingu Voyages</a>. Chingu connects learners into teams in order for motivated developers to learn and complete awesome projects together.</p>
          <p>On my first voyage, we built <a href="http://bearbnb-06.herokuapp.com" target="_blank" rel="noreferrer noopener">Bearbnb</a>. I learned how git worked, advanced styling and ReactJS, and how to collaborate in a team. On my second voyage, as the project manager for a team of 3, we lost a teammate early-on. Regardless, we finished 5 days early!</p>
          <p>I've earned <a href="https://freecodecamp-portfolio.glitch.me">3 certifications</a> from FreeCodeCamp, an e-learning platform for web developers.</p>
          <p>I also post Web Development videos on my <a href="https://www.youtube.com/channel/UCLX0n9oWmGkjKmK8iuPf8wQ?view_as=subscriber">Youtube Channel</a> and write for <a href="http://devalexcannon.wordpress.com">my blog</a>! I try to post every week or two. I mostly cover topics ranging from tutorials to project showcases.</p>
          {/*<p>Below is a quick introduction to the guy who wrote all this. Wait, that's me. Right.</p>
          <p>Video Link/Intro</p>*/}
          <p>Many Developers only care about their paycheck. They will do the minimum to get by, take their paycheck, and leave. I understand that <b>at the end of the day, businesses need to make money!</b> That is why I'm commited to learning what is necessary in order to both help you achieve your goals and mine.</p>
          <h3 className="about-quote">"Lean just beyond your edge"<br/> - David Deida</h3>
          <p>Thanks for reading! Let's create an impact, together.</p>
        </div>
        <div className="about-testimonials">
          <p>Alex and I worked on a two months remote full stack development project together. Alex was the team leader and was very organized and productive for the whole duration of the project. Because of Alex's focus and coding skills our group was able to finish the project in the allocated time and fulfill all of our goals. Alex is very knowledgable with the MERN stack and a great problem solver.<br/> <a href="https://www.linkedin.com/in/inna-leikina-1580542b/" target="_blank" rel="noopener noreferer">- Inna Leikina</a></p>
        </div>
      </Section>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <Section id="contact">
        <h1>Contact</h1>
        <div className="about-contact-methods">
          <Button className="about-contact-email-btn btn" href="mailto:alexcannon2018@gmail.com">Email Me</Button>
          <SocialLinks/>
        </div>
      </Section>
    );
  }
}