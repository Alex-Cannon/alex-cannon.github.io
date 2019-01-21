import React, {Component} from 'react';
import './button.scss';

export default class Button extends Component {
  render() {
    if (this.props.href) {
      return (
        <a href={this.props.href} className={this.props.className || 'btn'} target="_blank" rel="noreferrer noopener">
          {this.props.children}
        </a>
      );
    }

    return (
      <button className={this.props.className || 'btn'}>
        {this.props.children}
      </button>
    );
  }
}