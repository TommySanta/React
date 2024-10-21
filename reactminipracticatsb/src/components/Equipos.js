import React, { Component } from 'react'
import Jugador from './Jugador';
import axios from 'axios';

export default class Equipos extends Component {
    cajaJugador = React.createRef();
    selectEquipo = React.createRef();
    state = {
        jugadores: [],
        equipos: []
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

    loadEquipos = () => {
        var aux = "https://apiejemplos.azurewebsites.net";
        var request = "/api/Equipos"
        var request2 ="/api/Jugadores"
        var url = aux + request;
        var url2 = aux + request2;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                equipos: response.data
            });
        });
    }

    buscarJugadores = (e) => {
        e.preventDefault();
        var aux = "https://apiejemplos.azurewebsites.net";
        let idEquipo = this.selectEquipo.current.value;
        let request = "/api/Jugadores/JugadoresEquipos/" + idEquipo;
        var url = aux + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                jugadores: response.data
            });
        });
    }

    peticionForm = (e) => {
        e.preventDefault();
        const jugador = this.cajaJugador.current.value.toLowerCase();
        var aux = "https://apiejemplos.azurewebsites.net";
        let request = "/api/Jugadores/FindJugadores/" + jugador;
        var url = aux + request;
    
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                jugadores: response.data 
            });
        }).catch(error => {
            console.error("Error al buscar jugadores: ", error);
            this.setState({
                jugadores: []
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Mini Practica React</h1>
                <form onSubmit={this.peticionForm}>
                    <label>Nombre Jugador: </label>
                    <input type="text" ref={this.cajaJugador} />
                    <button>Buscar por Nombre</button>
                </form>
                <form>
                    <label>Seleccione un equipo</label>
                    <select ref={this.selectEquipo}>
                        {
                            this.state.equipos.length && this.state.equipos.map((equipo, index) => {
                                return (
                                    <option key={index} value={equipo.idEquipo}>
                                        {equipo.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.buscarJugadores}>Buscar Jugadores</button>  
                </form>
                <Jugador jugadores={this.state.jugadores} />  
            </div>
        )
    }
}