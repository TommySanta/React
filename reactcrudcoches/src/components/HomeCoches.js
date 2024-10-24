import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Global from './Global'; 
import loadingImage from '../assets/images/loading_cube.gif'; 

export default class HomeCoches extends Component {
    
    state = {
        status: false,
        coches: [] 
    }

    loadCoches = () => {
        let request = "/api/Coches"; 
        let url = Global.apiUrlCoches + request;
        axios.get(url).then(response => {
            console.log("Leyendo coches");
            this.setState({
                coches: response.data, 
                status: true
            });
        });
    }

    deleteCoches = (idCoche) => { 
        let request = "api/Coches/DeleteCoche/" + idCoche; 
        let url = Global.apiUrlCoches + request;
        axios.delete(url).then(response => {
            console.log("Delete....");
            this.loadCoches();
        });
    }

    componentDidMount = () => {
        this.loadCoches();
    }
    
    render() {
        if (this.state.status === false) {
            return (<img src={loadingImage} alt="Loading..." />);
        } else {
            return (
                <div>
                    <h1>Home Coches</h1>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID Coche</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Detalle</th>
                                <th>Update</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.coches.map((coche, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{coche.idCoche}</td>
                                        <td>{coche.marca}</td>
                                        <td>{coche.modelo}</td>
                                        <td>
                                            <NavLink to={"/detalle/"+coche.idCoche}>
                                                Detalles
                                            </NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/update/"+coche.idCoche+"/"+coche.marca+"/"+coche.modelo+"/"+coche.conductor}>
                                                Update
                                            </NavLink>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deleteCoches(coche.idCoche)}>Eliminar</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
