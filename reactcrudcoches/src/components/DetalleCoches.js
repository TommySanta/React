import React, { Component } from 'react';
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import loadingImage from '../assets/images/loading_cube.gif'; 

export default class DetalleCoches extends Component {
    state = {
        coche: null 
    }

    findCoche = () => {
        let request = "api/Coches/FindCoche/" + this.props.id;
        let url = Global.apiUrlCoches + request;
        axios.get(url).then(response => {
            console.log("Detalles coche");
            this.setState({
                coche: response.data 
            });
        });
    }

    componentDidMount = () => {
        this.findCoche();
    }

    render() {
        return (
            <div>
                <NavLink to="/">Back to list</NavLink>
                {
                    this.state.coche ? 
                    (
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                ID Coche: {this.state.coche.idCoche}
                            </li>
                            <li className='list-group-item'>
                                Marca: {this.state.coche.marca} 
                            </li>
                            <li className='list-group-item'>
                                Modelo: {this.state.coche.modelo} 
                            </li>
                            <li className='list-group-item'>
                                Conductor: {this.state.coche.conductor}
                            </li>
                            <li className='list-group-item'>
                                <img src={this.state.coche.imagen} alt={this.state.coche.modelo} style={{ width: '100px' }} /> 
                            </li>
                        </ul>
                    ) : (
                        <img src={loadingImage} alt="Loading..." /> 
                    )
                }
            </div>
        );
    }
}
