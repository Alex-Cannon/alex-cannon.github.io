import React, { Component } from 'react';
import './nav.scss';
import { FontAwesomeIcon as Fort } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      width: window.innerWidth
    }
  }

  toggle() {
    var other = !this.state.collapsed;
    this.setState({collapsed: other});
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({width: window.innerWidth});
      console.log(window.innerWidth);
    });
  }

  render() {
    return(
      <nav>
        <div id="nav-header">
          {this.state.width < 950 ? 
          <MobileNavLeft/> : <DesktopNavLeft/>}
          {this.state.width < 950 ?
          <MobileNavRight toggle={this.toggle.bind(this)}/> : <DesktopNavRight/>}
        </div>
 
        {!this.state.collapsed && this.state.width < 950 ? (
          <div id="nav-menu">
            <a href="#gallery">Gallery</a>
            <a href="#technologies">Tech</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div id="contact-types">
              <a href="mailto:alexcannon2018@gmail.com">
                <Fort icon={faEnvelopeSquare}/>
              </a>
              <i onClick={() => { alert('Call me at 970-812-2131 :)'); }}>
                <Fort icon={faPhoneSquare}/>
              </i>
              <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/" target='_blank' rel="noreferrer noopener">
                <Fort icon={faLinkedin}/>
              </a>
            </div>
          </div>
        ) : ''}
      </nav>
    );
  }
}

class MobileNavLeft extends Component {
  render() {
    return (
      <a className="nav-left" href="#landing-container">    
        <i id="site-title">Alex Cannon &#123; Portfolio &#125;</i>
      </a>
    );
  }
}

class DesktopNavLeft extends Component {
  render() {
    return (
      <div className='nav-left'>
        <a id="site-title" href="#landing-container">Alex Cannon &#123; Portfolio &#125;</a>
        <a href="#gallery">Gallery</a>
        <a href="#technologies">Tech</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

class MobileNavRight extends Component {
  render() {
    return (
      <div className="nav-right">
        <div id="hamburger" onClick={this.props.toggle.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

class DesktopNavRight extends Component {
  render () {
    return (
      <div id="contact-types" className='nav-right'>
        <a href="mailto:alexcannon2018@gmail.com">
          <Fort icon={faEnvelopeSquare}/>
        </a>
        <i onClick={() => { alert('Call me at 970-812-2131 :)'); }}>
          <Fort icon={faPhoneSquare}/>
        </i>
        <a href="https://www.linkedin.com/in/alexander-cannon-2a5b0513b/" target='_blank' rel="noreferrer noopener">
          <Fort icon={faLinkedin}/>
        </a>
      </div>
    );
  }
}