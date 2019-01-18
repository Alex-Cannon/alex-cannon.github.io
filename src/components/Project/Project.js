import React, {Component} from 'react';
import './project.scss';
import Button from '../../objects/Button/Button.js';

export default class Project extends Component {
  render() {
    return(
      <div className="project-container">
        <div className="project-description">
          <i className="tag text-mute">{this.props.tag}</i>
          <h1 className="title">{this.props.title}</h1>
          <p className="description text-mute">{this.props.description}
          </p>
          <Button href={this.props.projectLink}>View Project</Button>
        </div>
        <img className="project-img" src={this.props.src} alt={this.props.alt}/>
      </div>
    );
  }
}