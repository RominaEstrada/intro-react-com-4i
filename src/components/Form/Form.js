import React, { Component } from 'react';
import Button from '../Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      age: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log({
      name: this.state.name,
      lastname: this.state.lastname,
      age: this.state.age
    })
  }

  render() {
    const { name, age, lastname } = this.state;

    return(
      <div>
        <h1>Formulario</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>Nombre</label>
            <input
              name="name"
              value={name}
              type="text"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              name="lastname"
              value={lastname}
              type="text"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>Edad</label>
            <input
              name="age"
              value={age}
              type="text"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <Button text="Enviar datos" type="submit" color="success" />
        </form>
        <div>
          <h3>Nombre: {name}</h3>
          <h3>Apellido: {lastname}</h3>
          <h3>Edad: {age}</h3>
        </div>
      </div>
    )
  }

}

export default Form;