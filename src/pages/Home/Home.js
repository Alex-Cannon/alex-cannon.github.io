import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav.js';
import Project from '../../components/Project/Project.js';
import face from '../../assets/images/face_zoom.jpg';
import bearbnb from '../../assets/images/bearbnb.jpg';
import './landing.scss';

export default class Home extends Component {

  scrollToProjects() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <div>
        <div id="landing-container">
          <Nav/>
          <img src={face} alt="Alex Cannon" className="landing-face"/>
          <p className="landing-text">Hi! :) I'm Alex Cannon & I build websites.</p>
          <div id="landing-button" onClick={this.scrollToProjects.bind(this)}>
            Click here to view my portfolio.
            <div className="landing-arrow">
              <span></span>
              <span></span>    
            </div>
          </div>
        </div>
        <div id="projects-container">
          <Project src={bearbnb} alt="Bearbnb clone"/>
        </div>
      </div>
    );
  }
}