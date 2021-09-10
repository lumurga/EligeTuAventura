import React, { Component } from "react";

export default class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="boton" onClick={this.props.handleClick}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="B" className="boton" onClick={this.props.handleClick}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}


