import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CicloDeVida.css';

class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: [],
      user: {
        name: 'Luis'
      }
    }
    console.log('1 - Soy el constructor y me estoy renderizando')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5 - Me estoy actualizando');
    console.log({ prevProps: prevProps, prevState: prevState })
    console.log({ props: this.props, state: this.state });
  }

  componentDidMount() {
    console.log('3 - ComponentDidMount')
    this.timeoutId = setTimeout(() => {
      this.setState({
        alumnos: [
          {
            id: 1,
            name: 'Giselle'
          },
          {
            id: 2,
            name: 'Romina'
          },
          {
            id: 3,
            name: 'Ivo'
          },
          {
            id: 4,
            name:'Diego'
          }
        ]
      })
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2 - Método render ')

    const { alumnos } = this.state;

    return (
      <div>
        <h1>Lista de alumnos</h1>
        <ul>
          {
            alumnos.length > 0 ? (
              this.state.alumnos.map((alumno, index) => {
                return (
                  <li key={alumno.id}>{alumno.name}</li>
                )
              })
            ) : null
          }
        </ul>
        <Link to="/productos">Botón</Link>
      </div>
    )
  }
}

export default CicloDeVida