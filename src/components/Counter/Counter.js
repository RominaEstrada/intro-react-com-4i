import React, { Component } from 'react';

class Counter extends Component {
  
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return(
      <div>
        <p>Contador: {counter}</p>
        <button onClick={() => this.handleClick()} type="button">Click para aumentar</button>
      </div>
    )
  }

}

export default Counter

//Eventos
/* onChange
onBlur
onDoubleClick
onFocus 
onKeyDown
onSubmit */

