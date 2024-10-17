import { Component } from "react";

class HijoDeportes extends Component{
    seleccionarFavorito= () =>{
        var deporte= this.props.nombre;
        this.props.mostrarFavorito(deporte)
    }
    state = {
        mensaje: ""
    }
    render() {
        return (<div>
            <h1>Hijo deportes</h1>
            <h2> {this.props.nombre}</h2>
            <button onClick={this.seleccionarFavorito}>
                Seleccionar favorito 
            </button>
           <p>{this.state.mensaje}</p>
        </div>)
    }
}
export default HijoDeportes;
