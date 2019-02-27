import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery.js';
import SocialLinks from '../../components/Social/Social.js';
import Button from '../../objects/Button/Button.js';
import './landing.scss';
import './about.scss';
import face from '../../assets/images/face_zoom.jpg';


export default class Home extends Component {
  render () {
    return (
      <div>
        <Landing/>
        <Gallery/>
        <About/>
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

class About extends Component {
  render() {
    return(
      <div id="about-container">
        <h1>About Me</h1>
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
          <p>Many Developers, only care about their paycheck. They will do the minimum to get by, take their paycheck, and leave. I understand that <b>at the end of the day, businesses need to make money!</b> That is why I'm commited to learning what is necessary in order to both help you achieve your goals and mine.</p>
          <h3 className="about-quote">"Lean just beyond your edge"<br/> - David Deida</h3>
          <p>Thanks for reading! Let's create an impact, together.</p>
        </div>
        <div className="about-testimonials">
          <p>Alex and I worked on a two months remote full stack development project together. Alex was the team leader and was very organized and productive for the whole duration of the project. Because of Alex's focus and coding skills our group was able to finish the project in the allocated time and fulfill all of our goals. Alex is very knowledgable with the MERN stack and a great problem solver.<br/> <a href="https://www.linkedin.com/in/inna-leikina-1580542b/" target="_blank" rel="noopener noreferer">- Inna Leikina</a></p>
        </div>
        <div id="contact" className="about-contact">
          <h1>Contact Me</h1>
          <div className="about-contact-methods">
            <Button className="about-contact-email-btn btn" href="mailto:alexcannon2018@gmail.com">Email Me</Button>
            <SocialLinks/>
          </div>
        </div>
      </div>
    );
  }
}