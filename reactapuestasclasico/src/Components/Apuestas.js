import axios from 'axios'; 
import React, { Component } from 'react';
import Global from './Global';

export default class Apuestas extends Component {

    cajaIdApuesta = React.createRef();
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    state = {
        apuestas: []
    }

    loadApuestas = () => {
        console.log("Cargando apuestas");
        let request = "/api/Apuestas";
        let url = Global.apiUrl + request;
        axios.get(url).then(response => {
            this.setState({
                apuestas: response.data
            });
        });
    }

    createApuesta = (e) => {
        e.preventDefault();

        let idApuesta = parseInt(this.cajaIdApuesta.current.value);
        let usuario = this.cajaUsuario.current.value;
        let resultado = this.cajaResultado.current.value;
        let fecha = this.cajaFecha.current.value;

        let nuevaApuesta = {
            idApuesta: idApuesta,
            usuario: usuario,
            resultado: resultado,
            fecha: fecha
        };

        let request = "/api/Apuestas";
        let url = Global.apiUrl + request;
        axios.post(url, nuevaApuesta).then(response => {
            console.log("Apuesta creada");
            this.loadApuestas();  

            this.cajaIdApuesta.current.value = "";
            this.cajaUsuario.current.value = "";
            this.cajaResultado.current.value = "";
            this.cajaFecha.current.value = "";
        }).catch(error => {
            console.error("Error creando la apuesta", error);
        });
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        const { apuestas } = this.state;

        return (
            <div>
                <h1>Apuestas</h1>

                <h2>Crear nueva apuesta</h2>
                <form onSubmit={this.createApuesta}>
                    <div className="form-group">
                        <label>ID Apuesta</label>
                        <input 
                            type="number" 
                            ref={this.cajaIdApuesta} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input 
                            type="text" 
                            ref={this.cajaUsuario} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Resultado</label>
                        <input 
                            type="text" 
                            ref={this.cajaResultado} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha</label>
                        <input 
                            type="date" 
                            ref={this.cajaFecha} 
                            className="form-control"
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Crear Apuesta</button>
                </form>
                
                {apuestas.length > 0 ? (
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>ID Apuesta</th>
                                <th>Usuario</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apuestas.map((apuesta, index) => (
                                <tr key={index}>
                                    <td>{apuesta.idApuesta}</td>
                                    <td>{apuesta.usuario}</td>
                                    <td>{apuesta.resultado}</td>
                                    <td>{apuesta.fecha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay apuestas disponibles.</p>
                )}
            </div>
        );
    }
}
