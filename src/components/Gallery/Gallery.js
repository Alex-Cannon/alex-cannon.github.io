import React, { Component } from 'react';
import Section from '../Section/Section.js';
import Project from '../Project/Project.js';
import './gallery.scss';

// images
import bearbnb from '../../assets/images/bearbnb.jpg';
import secretSanta from '../../assets/images/secret-santa.jpg';
import fccPortfolio from '../../assets/images/fcc_portfolio.png';
import simon from '../../assets/images/simon_says.jpeg';
import ood from '../../assets/images/ood.jpg';

// Icons
import html from '../../assets/images/icons/html.png';
import css from '../../assets/images/icons/css.png';
import javascript from '../../assets/images/icons/javascript.png';
import bootstrap from '../../assets/images/icons/bootstrap.png';
import jquery from '../../assets/images/icons/jquery.png';
import react from '../../assets/images/icons/react.png';
import reactrouter from '../../assets/images/icons/reactrouter.png';
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

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryOpen: false
    }
  }

  toggleGallery() {
    var other = !this.state.galleryOpen;
    this.setState({galleryOpen: other});
  }

  render() {
    return (
      <Section id="gallery">
        <h1>Gallery</h1>

        <p>Click a Project to read more! :)</p>
        <div id="projects" style={this.state.galleryOpen ? {height: 'auto'} : {}}>
          <Project
            title="Bearbnb"
            tag="Front End Development"
            description="Bearbnb is a fully-functional clone of Airbnb. Host or schedule a bearbnb with your friendly neighborhood bears. My team and I created this website during Chingu Voyage 3!"
            challenges={<>Bearbnb was my first team project, so I needed to learn Version Control! I learned Git through trial by fire and this helped tremendously.<br/><br/>
            I also had to learn how to get along with other developers and communicate my ideas! :)
            </>}
            projectLink="http://bearbnb-06.herokuapp.com"
            githubLink="https://github.com/chingu-voyage3/bears-06"
            readLink="https://devalexcannon.wordpress.com/2019/01/27/project-bearbnb-airbnb-clone/"
            src={bearbnb}
            frontend={[html, css, javascript, react, reactrouter, sass]}
            backend={[node, express, mongoose, mongo, passport]}
            other={[git, github, heroku, mlab]}
          />
          <Project
            title="Secret Santa"
            tag="Full Stack Development"
            description="Your favorite christmas gift exchange--online. Host or join online secret santa events. Invite your friends!"
            challenges={<>As the Project Manager, I chose to use Create React App to streamline the development process and play to our strengths. This is because setting up a MERN workflow can be tough!<br/><br/>
              I also had to learn how to get along with other developers and communicate my ideas! :)
              </>}  
            projectLink="http://secret-santa-13.herokuapp.com"
            githubLink="https://github.com/chingu-voyage7/Bears-Team-13"
            readLink="https://devalexcannon.wordpress.com/2019/01/27/project-secret-santa-website/"
            src={secretSanta}
            frontend={[html, css, javascript, react, reactrouter, sass]}
            backend={[node, express, mongoose, mongo, passport]}
            other={[git, github, heroku, mlab]}
          />
          <Project
            title="FreeCodeCamp Portfolio"
            tag="Full Stack Development"
            description="See 23+ Web Apps, 100s of challenges, and 3+ certificates on my FreeCodeCamp Portfolio. :)"
            projectLink="https://freecodecamp-portfolio.glitch.me/"
            src={fccPortfolio}
            alt="FreeCodeCamp Portfolio"
          />
          <Project
            title="Out of Date Tracker"
            tag="Full Stack Development"
            description="Out-of-Date tracker created for a dairy manager. Add, edit, delete, search, and sort through your inventory!"
            projectLink="https://out-of-date-tracker.glitch.me"
            readLink="https://devalexcannon.wordpress.com/2019/01/27/project-out-of-date-tracker/"
            src={ood}
            alt="Out-of-Date Tracker"
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
        <div className="gallery-btn-container">
          {this.state.galleryOpen ? (<p>See 20+ Web Apps on <a href="https://codepen.io/Alex_Cannon/" target="_blank" rel="noreferrer noopener">Codepen</a></p>) : ''}
          <button className="btn gallery-btn" onClick={this.toggleGallery.bind(this)}>
            {this.state.galleryOpen ? 'Hide Gallery' : 'Show Gallery'}
          </button>
        </div>
      </Section>
    );
  }
}