import { Component } from "react";
import HijoDeportes from "./hijoDeportes";

class PadreDeportes extends Component{
    deportes = ["Petanca","Curling","Poker", "Padel","Futbol"];
    mostrarFavorito =(deportesSeleccionado)=>{
        //Modificamos el favorito de state
        this.setState({
            favorito: deportesSeleccionado
        })
    }
    //Creamos una variable state para mostarr el deporte seleccionado
    state={
        favorito: ""
    }
    render() {
        return (<div>
            <h1 style={{ color: "red"}}>Padre deportes</h1>
            <h4 style={{backgroundColor:"yellow"}}>Su deporte favorito es: {this.state.favorito}</h4>
            {
                this.deportes.map((deporte, index)=>{
                    return(<HijoDeportes key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>)
                })
            }
        </div>)
    }
}
export default PadreDeportes;