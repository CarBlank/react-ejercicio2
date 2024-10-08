import React, { Component } from 'react'

export default class HeaderClass extends Component {
    render() {
        const { dishes } = this.props;
        return (
          <div>
            <h1>HeaderClass</h1>
            <h2>Lista de Platos</h2>
            <ul>
              {dishes.map((props) => (
                <li key={props.id}>
                  <h3>{props.name}</h3>
                  <p>{props.description}</p>
                  <p>Precio: ${props.price}</p>
                </li>
              ))}
            </ul>
          </div>
    )
  }
}