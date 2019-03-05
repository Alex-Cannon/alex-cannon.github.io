import React, { Component } from 'react';
import './footer.scss';
import { FontAwesomeIcon as Fort } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
//import SocialLinks from '../../components/Social/Social.js';

export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div>
          <p>Made with <b><Fort icon={faHeart}/></b> by <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/">Alex</a>.</p>
          <p>&copy; Alexander Cannon 2019</p>
        </div>
      </footer>
    );
  }
}