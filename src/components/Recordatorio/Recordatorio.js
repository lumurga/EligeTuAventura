import React, { Component } from "react";

export default class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Última elección: {this.props.opcionPrevia}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.elecciones}</ul>
      </div>
    );
  }
}


