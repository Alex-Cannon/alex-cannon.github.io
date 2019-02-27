import React, {Component} from 'react';
import './project.scss';

export default class Project extends Component {
  render() {
    return(
      <div className="project-thumb-container">
        <img className="project-thumb-img" src={this.props.src} alt={this.props.alt}/>
        <p className="project-thumb-text"><b>{this.props.description}</b></p>
        <div className="project-thumb-cover">
        </div>
      </div>
    );
  }
}