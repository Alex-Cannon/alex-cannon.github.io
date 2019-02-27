import React, { Component } from 'react';
import './section.scss';

export default class Section extends Component {
  render() {
    return (
      <section className='section' id={this.props.id}>
        {this.props.children}
      </section>
    );
  }
}