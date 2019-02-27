import React, { Component } from 'react';
import './icon.scss';

export default class Icon extends Component {
  render() {
    return (
      <div className='icon'>
        <img src={this.props.src} alt={this.props.text}/>
        <span>{this.props.text}</span>
      </div>
    );
  }
}