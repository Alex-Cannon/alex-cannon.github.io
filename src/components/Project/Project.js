import React, {Component} from 'react';
import './project.scss';

export default class Project extends Component {
  render() {
    return(
      <div className="project-container">
        <img className="project-img" src={this.props.src} alt={this.props.alt}/>
        <div className="project-description">
          <h1>Bearbnb</h1>
          <span>Front End Development</span>
          <p>Bearbnb is a clone of Airbnb. I worked on the client-side 
            javascript and css/sass for this project. 
          </p>
        </div>
      </div>
    );
  }
}