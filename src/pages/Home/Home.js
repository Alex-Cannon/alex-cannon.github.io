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
          description="Bearbnb is a clone of Airbnb. Host or schedule a bearbnb with your friendly neighborhood bears. Protip: don't bring honey."
          projectLink="#"
          src={bearbnb}
          alt="Bearbnb clone"
        />
        <Project
          title="Secret Santa"
          tag="Full Stack Development"
          description="Your favorite christmas gift exchange--online. Host or join online secret santa events. Invite your friends!"
          projectLink="#"
          src={secretSanta}
          alt="Secret Santa"
        />
        <Project
          title="Game of Life"
          tag="Front End Development"
          description="Conway's game of life created with ReactJS. This was a fun one!"
          projectLink="#"
          src={gameLife}
          alt="Conway's game of life"
        />
        <Project
          title="Tic Tac Toe"
          tag="Front End Development"
          description="A simple game of tic-tac-toe created with JQuery. Play with a friend, or test your skills against a computer."
          projectLink="#"
          src={ticTac}
          alt="Conway's game of life"
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
          <p>I've had the privilege of working with some great developers during 2 <a href="https://chingu.io/" target="_blank">Chingu Voyages</a>. Chingu connects learners into teams in order for motivated developers to learn and complete awesome projects together.</p>
          <p>On my first voyage, we built <a href="#">Bearbnb</a>. I learned how git worked, advanced styling and ReactJS, and how to collaborate in a team. On my second voyage, as the project manager for a team of 3, we lost a teammate early-on. Regardless, we finished 5 days early!</p>
          <p>I've earned the Front End Development certification from freecodecamp in the past. Now that they have updated their curriculum, I need to renew this certification. I am currently working on 4 additional certifications.</p>
          <p>I also have a <a href="https://devalexcannon.wordpress.com/" target="_blank" noreferer noopener>blog</a>! I try to write at least once a month. I cover topics ranging from project showcases to tutorials to life updates.</p>
          <p>Below is a quick introduction to the guy who wrote all this. Wait, that's me. Right.</p>
          <p>Video Link/Intro</p>
          <p>Many Developers, only care about their paycheck. They will do the minimum to get by, take their paycheck, and go, cheating you out of the best of them. I understand that <b>at the end of the day, businesses need to make money!</b> That is why I'm commited to learning what is necessary in order to both help you achieve your goals and mine.</p>
          <h3 className="about-quote">"Lean just beyond your edge"<br/> - David Deida</h3>
          <p>Thanks for reading! Let's create an impact, together.</p>
        </div>
        <div className="about-testimonials">
          <p>Add testimonial Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
          <p>Add testimonial Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
          <p>Add testimonial Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
          <p>Add testimonial Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
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