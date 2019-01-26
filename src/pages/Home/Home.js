import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav.js';
import Project from '../../components/Project/Project.js';
import SocialLinks from '../../components/Social/Social.js';
import Button from '../../objects/Button/Button.js';
import './landing.scss';
import './about.scss';

// images
import face from '../../assets/images/face_zoom.jpg';
import bearbnb from '../../assets/images/bearbnb.jpg';
import secretSanta from '../../assets/images/secret-santa.jpg';
import gameLife from '../../assets/images/game_of_life.jpeg';
import ticTac from '../../assets/images/tic_tac.jpg';
import simon from '../../assets/images/simon_says.jpeg';
import ood from '../../assets/images/ood.jpg';

/*
  To-Do:
  1) Add testimonials
  2) Add intro video
  3) Add Social navbar on right side of screen
  4) Add "All Projects" section, where my Codepen is linked
  5) Add cursor "arrow", where users can skip to the next project
*/


export default class Home extends Component {
  render () {
    return (
      <div>
        <Landing/>
        <ProjectList/>
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
        <Nav/>
        <img src={face} alt="Alex Cannon" className="landing-face"/>
        <p className="landing-text">Hi! :) I'm Alex Cannon &amp; I build websites.</p>
        <div id="landing-button" onClick={this.scrollToProjects.bind(this)}>
          Click here to view my portfolio.
          <div className="landing-arrow">
            <span></span>
            <span></span>    
          </div>
        </div>
      </div>
    );
  }
}

class ProjectList extends Component {
  render() {
    return (
      <div id="project-container">
        <Project
          title="Bearbnb"
          tag="Front End Development"
          description="Bearbnb is a fully-functional clone of Airbnb. Host or schedule a bearbnb with your friendly neighborhood bears. Protip: don't bring honey."
          projectLink="http://bearbnb-06.herokuapp.com"
          src={bearbnb}
          alt="Bearbnb clone"
        />
        <Project
          title="Secret Santa"
          tag="Full Stack Development"
          description="Your favorite christmas gift exchange--online. Host or join online secret santa events. Invite your friends!"
          projectLink="http://secret-santa-13.herokuapp.com"
          src={secretSanta}
          alt="Secret Santa"
        />
        <Project
          title="Out of Date Tracker"
          tag="Full Stack Development"
          description="Out-of-Date tracker created for a dairy manager. Add, edit, delete, search, and sort through your inventory!"
          projectLink="https://out-of-date-tracker.glitch.me"
          src={ood}
          alt="Out-of-Date Tracker"
        />
        <Project
          title="Game of Life"
          tag="Front End Development"
          description="Conway's game of life created with ReactJS. This was a fun one!"
          projectLink="https://codepen.io/Alex_Cannon/pen/gxpLJB"
          src={gameLife}
          alt="Conway's game of life"
        />
        <Project
          title="Tic Tac Toe"
          tag="Front End Development"
          description="A simple game of tic-tac-toe created with JQuery. Play with a friend, or test your skills against a computer."
          projectLink="https://codepen.io/Alex_Cannon/pen/NgMdgo"
          src={ticTac}
          alt="Tic Tac Toe"
        />
        <Project
          title="Memory Machine"
          tag="Front End Development"
          description="Simon Says clone developed with HTML, CSS, and JQuery. Can you break my record of 17?"
          projectLink="https://codepen.io/Alex_Cannon/pen/NgMdgo"
          src={simon}
          alt="Simon Says Clone"
        />
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
          <p>I've earned the Front End Development certification from freecodecamp in the past. Now that they have updated their curriculum, I need to renew this certification. I am currently working on 4 additional certifications.</p>
          <p>I also have a <a href="https://devalexcannon.wordpress.com/" target="_blank" rel="noreferrer noopener">blog</a>! I try to write at least once a month. I cover topics ranging from project showcases to tutorials to life updates.</p>
          {/*<p>Below is a quick introduction to the guy who wrote all this. Wait, that's me. Right.</p>
          <p>Video Link/Intro</p>*/}
          <p>Many Developers, only care about their paycheck. They will do the minimum to get by, take their paycheck, and go, cheating you out of the best of them. I understand that <b>at the end of the day, businesses need to make money!</b> That is why I'm commited to learning what is necessary in order to both help you achieve your goals and mine.</p>
          <h3 className="about-quote">"Lean just beyond your edge"<br/> - David Deida</h3>
          <p>Thanks for reading! Let's create an impact, together.</p>
        </div>
        <div className="about-testimonials">
          <p>Alex and I worked on a two months remote full stack development project together. Alex was the team leader and was very organized and productive for the whole duration of the project. Because of Alex's focus and coding skills our group was able to finish the project in the allocated time and fulfill all of our goals. Alex is very knowledgable with the MERN stack and a great problem solver.<br/> <a href="https://www.linkedin.com/in/inna-leikina-1580542b/" target="_blank" rel="noopener noreferer">- Inna Leikina</a></p>
        </div>
        <div className="about-contact">
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