import React, { Component } from 'react'

export default class Jugador extends Component {
    render() {
        return (
            <div>
                <h1>Jugador</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Posición</th>
                            <th>País</th>
                            <th>Fecha nacimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.jugadores.length ? this.props.jugadores.map((jugador, index) => (
                                <tr key={index}>
                                    <td><img src={jugador.imagen} alt={jugador.nombre} width="50"/></td>
                                    <td>{jugador.nombre}</td>
                                    <td>{jugador.posicion}</td>
                                    <td>{jugador.pais}</td>
                                    <td>{jugador.fechaNacimiento}</td>
                                </tr>
                            )) : <tr><td colSpan="5">No hay jugadores</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
