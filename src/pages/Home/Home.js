import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav.js';
import Project from '../../components/Project/Project.js';
import './landing.scss';

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
      <div id="projects-container">
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