import React, { Component } from 'react';
import './social.scss';
import { FontAwesomeIcon as Fort } from '@fortawesome/react-fontawesome';
import { faRssSquare, faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faGithubSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


export default class SocialLinks extends Component {
  render () {
    return (
      <div className="social-links">
        <div>
          <a href="mailto:alexcannon2018@gmail.com"  className="icon"  title='Email Me!'>
            <Fort icon={faEnvelopeSquare}/>
          </a>
          <i onClick={() => { alert('Call me at 970-812-2131 :)'); }} className="icon"  title='Call Me!'>
            <Fort icon={faPhoneSquare}/>
          </i>
          <a href="https://github.com/alex-cannon" target='_blank' rel="noreferrer noopener" className="icon"  title='Github Me!'>
            <Fort icon={faGithubSquare}/>
          </a>
          <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/" target='_blank' rel="noreferrer noopener" className="icon" title='Connect With Me!'>
            <Fort icon={faLinkedin}/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100002448335736" target="_blank" rel="noreferrer noopener" className="icon" title='Messenger Me!'>
            <Fort icon={faFacebookSquare}/>
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UCLX0n9oWmGkjKmK8iuPf8wQ?view_as=subscriber" target="_blank" rel="noreferrer noopener" className="icon"  title='Checkout My Channel!'>
            <Fort icon={faYoutubeSquare}/>
          </a>
          <a href="https://devalexcannon.wordpress.com/" target="_blank" rel="noreferrer noopener" className="icon" title='Checkout My Blog!'>
            <Fort icon={faRssSquare}/>
          </a>
        </div>
      </div>
    );
  }
}