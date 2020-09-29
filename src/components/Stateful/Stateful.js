import React, { Component } from 'react';
import './Stateful.css'

class Stateful extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: 'Hola mundo desde el estado'
    }
  }

  render() {
    const isTrue = false;
    const { text } = this.state
    return(
      <div className="text-white">
        <h1 className="pepito">{text}</h1>
        {
          isTrue ? <p>Soy verdaero</p> : <p>Soy falso</p>
        }
        {
          isTrue && <p>Renderizate</p>
        }
      </div>
    )
  }

}

export default Stateful