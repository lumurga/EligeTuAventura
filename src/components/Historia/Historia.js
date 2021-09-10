import data from "../data";
import React, { Component } from "react";
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";
import Swal from "sweetalert2";

const elecciones = [];


export default class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      opcionPrevia: ""
    };
  }

  componentDidMount() {
    Swal.fire({
      title: "Hola! Querés armar tu propia aventura?",
      buttons: "Ok",
      confirmButtonColor: "#83CEE4"
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      elecciones.push(this.state.opcionPrevia);
    }
  }

  componentWillUnmount() {
    
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      Swal.fire({
        title: "The End...",
        text: "Llegaste al final de tu historia!",
        
        showCancelButton: true,
        confirmButtonText: "Volver al comienzo",
        confirmButtonColor:"#F7BA96",
        cancelButtonText: "Ir a GitHub",
        cancelButtonColor: "#83CEE4"
    }).then((result) => {
      if (result.isConfirmed) {
        this.componentWillUnmount();
      } else {window.location = "https://github.com/lumurga/elige-tu-aventura"
      }
    });
      
    } else if (id === "A" && this.state.opcionPrevia !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        opcionPrevia: "A"
      });
    } else if (id === "A" && this.state.opcionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 2
      });
    } else if (id === "B" && this.state.opcionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 3,
        opcionPrevia: "B"
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        opcionPrevia: "B"
      });
    }
    console.log(elecciones);
  };



  render() {
    return (
      <div className="principal">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio
          opcionPrevia={this.state.opcionPrevia}
          elecciones={elecciones.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}
