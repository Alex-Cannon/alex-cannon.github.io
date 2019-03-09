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
              We needed a daily CRON job to run some tasks. We chose to use cron-jobs.org to send an HTTP request to our server once a day to solve this issue.
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
            description="Portfolio showcasing my FreeCodeCamp education. FreeCodeCamp is an e-learning platform where you develop web applications. 1800+ hours of learning, 100s of challenges, and 30+ web app projects are offered. I have completed 4 certifications (1000+ hours)."
            challenges={<>I needed a way to store 100s of my freeCodeCamp challenges. I decided using a database was overkill for some lightweight challenges. Instead, I stored them directly on the repo and used NodeJS's File System module to pull the files.<br/><br/>
              I used Bootstrap and JQuery to increase development speed and finish 4 days ahead of schedule.
            </>}
            githubLink="https://github.com/Alex-Cannon/freeCodeCampPortfolio"
            projectLink="https://freecodecamp-portfolio.glitch.me/"
            src={fccPortfolio}
            frontend={[html, css, javascript, jquery, bootstrap, sass]}
            backend={[node, express]}
            other={[git, github]}
          />
          <Project
            title="Out of Date Tracker"
            tag="Full Stack Development"
            description="Out-of-Date tracker created for a dairy manager. Add, edit, delete, search, and sort through your inventory!"
            challenges={<>I needed a way to query through items in the database. After some research, I used Mongo's text search API. The issue with this API is that it returns only direct matches. That means if you misspell 'butter', it will not display all butter items. Regardless, for this small project I decided to stick with the Mongo API.<br/><br/>
              I used Bootstrap to cut down on the required styling and make the site mobile-responsive. This cut down nearly 23% of styling time.
            </>}
            projectLink="https://out-of-date-tracker.glitch.me"
            githubLink="https://github.com/Alex-Cannon/out-of-date-tracker"
            readLink="https://devalexcannon.wordpress.com/2019/01/27/project-out-of-date-tracker/"
            src={ood}
            frontend={[html, css, javascript, react, reactrouter, bootstrap, sass]}
            backend={[node, express, mongoose, mongo, passport]}
            other={[git, github, mlab]}
          />
          <Project
            title="Memory Machine"
            tag="Front End Development"
            description="Simon Says clone developed with HTML, CSS, and JQuery. Can you break my record of 17?"
            challenges={<>This project challenged my knowledge of JQuery. I had to manage the App state like 'isOn', 'isStrict', 'pattern', etc. In hindsight, I can see that this project may have been better suited for ReactJS, where the state would have been more easily managed.<br/><br/>
              
            </>}
            projectLink="https://codepen.io/Alex_Cannon/pen/NgMdgo"
            src={simon}
            frontend={[html, css, javascript, jquery, sass]}
            backend={[]}
            other={[]}
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