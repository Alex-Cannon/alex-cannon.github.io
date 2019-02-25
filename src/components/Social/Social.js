import React, { Component } from 'react';
import './social.scss';
import { FontAwesomeIcon as Fort } from '@fortawesome/react-fontawesome';
import { faBlog, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default class SocialLinks extends Component {
  render () {
    return (
      <div className="social-links">
        <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/" target="_blank" rel="noreferrer noopener" className="icon">
          <Fort icon={faLinkedinIn}/>
        </a>
        <a href="https://github.com/Alex-Cannon" target="_blank" rel="noreferrer noopener" className="icon">
          <Fort icon={faGithub}/>
        </a>
        <a href="https://www.youtube.com/channel/UCLX0n9oWmGkjKmK8iuPf8wQ?view_as=subscriber" target="_blank" rel="noreferrer noopener" className="icon">
          <Fort icon={faYoutube}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100002448335736" target="_blank" rel="noreferrer noopener" className="icon">
          <Fort icon={faFacebook}/>
        </a>
        <a href="https://devalexcannon.wordpress.com/" target="_blank" rel="noreferrer noopener" className="icon">
          <Fort icon={faBlog}/>
        </a>

        <div className="phone-box icon">
          <Fort icon={faPhoneSquare}/>
          <i>970-812-2131</i>
        </div>
      </div>
    );
  }
}