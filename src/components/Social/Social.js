import React, { Component } from 'react';
import './social.scss';
import { FontAwesomeIcon as Fort } from '@fortawesome/react-fontawesome';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


export default class SocialLinks extends Component {
  render () {
    return (
      <div className="social-links">
        <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/" target="_blank" noreferer noopener>
          <Fort icon={faLinkedin}/>
        </a>
        <a href="https://devalexcannon.wordpress.com/" target="_blank" noreferer noopener>
          <Fort icon={faRssSquare}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100002448335736" target="_blank" noreferer noopener>
          <Fort icon={faFacebookSquare}/>
        </a>
      </div>
    );
  }
}