import React, {Component} from 'react';
import './project.scss';
import { FontAwesomeIcon as Fort } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt, faRssSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Icon from '../../components/Icon/Icon.js';

export default class Project extends Component {
  render() {
    return (
      <div className='project-popup-container'>
        <div className='project-popup' style={{backgroundImage: `url(${this.props.src})`}}>
          <div className='project-popup-overlay'>
            <div id='close-btn' onClick={this.props.togglePopup.bind(this)}>
              <Fort icon={faWindowClose}/>
            </div>
            <div className='project-popup-left'>
              <h2>{this.props.title}</h2>
              <h4>Overview:</h4>
              <p>{this.props.description}</p>
              <h4>Challenges:</h4>
              <p>{this.props.challenges}</p>
            </div>
            <div className='project-popup-right'>
              <h2>Technologies</h2>
              <p><b>Front-End</b></p>
              <div className='project-popup-icons'>
                {this.props.frontend.map((tech) => {
                  return <Icon src={tech} text={''}/>
                })}
              </div>
              <p><b>Back-End</b></p>
              <div className='project-popup-icons'>
                {this.props.backend.map((tech) => {
                  return <Icon src={tech} text={''}/>
                })}
              </div>
              <p><b>Other</b></p>
              <div className='project-popup-icons'>
                {this.props.other.map((tech) => {
                  return <Icon src={tech} text={''}/>
                })}
              </div>
            </div>
            <div className='project-popup-links'>
              <a className={this.props.readLink ? '' : 'dead-link'} href={this.props.readLink} title='Read More!' target='_blank' rel='noreferrer noopener'>
                <Fort icon={faRssSquare}/>
              </a>
              <a className={this.props.githubLink ? '' : 'dead-link'} href={this.props.githubLink} title='View Github!' target='_blank' rel='noreferrer noopener'>
                <Fort icon={faGithubSquare}/>
              </a>
              <a className={this.props.projectLink ? '' : 'dead-link'} href={this.props.projectLink} title='View Live!' target='_blank' rel='noreferrer noopener'>
                <Fort icon={faExternalLinkSquareAlt}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}