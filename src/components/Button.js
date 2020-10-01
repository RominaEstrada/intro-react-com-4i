import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, text, color } = this.props;
    return (
      <button type={type} className={color === 'success' ? 'bg-success' : 'bg-warning'}>
        {text}
      </button>
    )
  }

}

export default Button;