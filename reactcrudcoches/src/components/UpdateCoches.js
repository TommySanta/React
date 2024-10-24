import React, { Component } from 'react';
import axios from 'axios'; 
import { Navigate, NavLink } from 'react-router-dom';
import Global from './Global';

export default class UpdateCoches extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();

    state = {
        status: false
    }

    ModificarCoche = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor
        };

        let request = "api/Coches/UpdateCoche";
        let url = Global.apiUrlCoches + request;
        axios.put(url, coche).then(response => {
            console.log("Update....");
            this.setState({
                status: true
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.status === true && <Navigate to="/" />
                }
                <h1>Update Coche</h1>
                <NavLink to="/">Back to index</NavLink>
                <ul>
                    <li>
                        ID Coche: {this.props.id}
                    </li>
                    <li>
                        Marca: {this.props.marca}
                    </li>
                    <li>
                        Modelo: {this.props.modelo}
                    </li>
                    <li>
                        Conductor: {this.props.conductor}
                    </li>
                    <li>
                        <img src={this.props.imagen} alt={this.props.modelo} style={{ width: '200px' }} />
                    </li>
                </ul>
                <form>
                    <label>ID Coche</label>
                    <input type='text' ref={this.cajaId} className='form-control' value={this.props.id} disabled />
                    
                    <label>Marca</label>
                    <input type='text' ref={this.cajaMarca} className='form-control' defaultValue={this.props.marca} />
                    
                    <label>Modelo</label>
                    <input type='text' ref={this.cajaModelo} className='form-control' defaultValue={this.props.modelo} />

                    <label>Conductor</label>
                    <input type='text' ref={this.cajaConductor} className='form-control' defaultValue={this.props.conductor} />
                    
                    <button className='btn btn-info' onClick={this.ModificarCoche}>
                        Actualizar coche
                    </button>
                </form>
            </div>
        );
    }
}
