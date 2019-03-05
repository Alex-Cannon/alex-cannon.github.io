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
import react from '../../assets/images/icons/react.png';
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
          <p className="subtitle"><i>"Hu? What about me?"</i></p>
          <p>Hi! I'm Alex, a 20 year-old, eager, hard-working self-starter who loves to add value in any way I can.</p>
          <p>I specialize in front-end development and the MERN stack (Mongo, Express, React, Node), but am willing to learn and work on what is needed to get the job done.</p>
          <p>I've built over 20 web apps, including 3 full-stack websites from scratch. Also, I've earned <a href="https://freecodecamp-portfolio.glitch.me">4 certifications</a> from FreeCodeCamp. Each certification requires 5 or more web app projects and over 100 unique challenges.</p>
          <p>I have a <a href="https://www.youtube.com/channel/UCLX0n9oWmGkjKmK8iuPf8wQ?view_as=subscriber">Youtube Channel</a> and <a href="http://devalexcannon.wordpress.com">blog</a> where I post new software development content! I try to post every week or two. I cover topics ranging from tutorials to project showcases.</p>
          <p>I've had the privilege of working with some great developers during 2 <a href="https://chingu.io/" target="_blank" rel="noreferrer noopener">Chingu Voyages</a>. Chingu connects learners into teams in order for motivated developers to learn and complete awesome projects together.</p>
          <p>I'm always looking for ways to get involved in the software develpment community. I attend monthly events/hackathons and love to build fun apps on the side (sometimes through Chingu)</p>
          <p>I love software. I also understand that <b>at the end of the day, businesses need to make money!</b> That is why I'm commited to learning what is necessary to help you reach your goals.</p>
          <h3 className="about-quote">"Lean just beyond your edge"<br/> - David Deida</h3>
          <p>Thanks for reading! Let's create an impact, together.</p>
          <div className="about-testimonials">
            <p>Alex and I worked on a two months remote full stack development project together. Alex was the team leader and was very organized and productive for the whole duration of the project. Because of Alex's focus and coding skills our group was able to finish the project in the allocated time and fulfill all of our goals. Alex is very knowledgable with the MERN stack and a great problem solver.<br/> <a href="https://www.linkedin.com/in/inna-leikina-1580542b/" target="_blank" rel="noopener noreferer">- Inna Leikina</a></p>
          </div>
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
          <p>Hello! Contact me via Email, Phone, Github, etc. by clicking an icon below!</p>
          <SocialLinks/>
        </div>
      </Section>
    );
  }
}