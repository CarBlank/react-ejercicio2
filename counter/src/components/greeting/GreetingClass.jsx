import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Hola Alfonsina" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h2>Componente Greeting</h2>
        <p> MensajeClass: {this.state.name} </p>
      </div>
    );
  }
}
