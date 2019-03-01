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
        <div id="projects" style={this.state.galleryOpen ? {height: 'auto'} : {}}>
          <Project
            title="Bearbnb"
            tag="Front End Development"
            description="Bearbnb is a fully-functional clone of Airbnb. Host or schedule a bearbnb with your friendly neighborhood bears. Protip: don't bring honey."
            projectLink="http://bearbnb-06.herokuapp.com"
            readLink="https://devalexcannon.wordpress.com/2019/01/27/project-bearbnb-airbnb-clone/"
            src={bearbnb}
            alt="Bearbnb clone"
          />
          <Project
            title="Secret Santa"
            tag="Full Stack Development"
            description="Your favorite christmas gift exchange--online. Host or join online secret santa events. Invite your friends!"
            projectLink="http://secret-santa-13.herokuapp.com"
            readLink="https://devalexcannon.wordpress.com/2019/01/27/project-secret-santa-website/"
            src={secretSanta}
            alt="Secret Santa"
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