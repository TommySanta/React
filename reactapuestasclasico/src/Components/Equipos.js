import axios from 'axios';
import React, { Component } from 'react';
import Global from './Global';

export default class Equipos extends Component {
    state = {
        equipo: null
    }

    loadEquipo = () => {
        console.log("Cargando equipo");
        let id = this.props.id;
        let request = "/api/Equipos/" + id;
        let url = Global.apiUrl + request;
        axios.get(url).then(response => {
            console.log("Detalles equipo");
            this.setState({
                equipo: response.data
            });
        });
    }

    componentDidMount = () => {
        this.loadEquipo();
    }
    componentDidUpdate = (oldProps) => {
        if (this.props.id != oldProps.id) {
            this.loadEquipo();
        }
    }
    render() {
        const { equipo } = this.state;

        return (
            <div>
                <h1>Detalles del Equipo</h1>
                {equipo ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Champions</th>
                                <th>Web</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{equipo.nombre}</td>
                                <td>
                                    <img src={equipo.imagen} alt={equipo.nombre} style={{ width: '100px' }} />
                                </td>
                                <td>{equipo.champions}</td>
                                <td>
                                    <a href={equipo.web} target="_blank" rel="noopener noreferrer">Visitar web</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>Cargando detalles del equipo...</p>
                )}
            </div>
        );
    }
}
