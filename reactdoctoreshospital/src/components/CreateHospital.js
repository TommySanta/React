import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    state = {
        mensaje: "",
        status: false
    }

    insertHospital = (e) => {
        e.preventDefault();
        let request = "webresources/hospitales/post";
        let url = Global.apiHospitales + request;
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let direccion = this.cajaDireccion.current.value;
        let telefono = this.cajaTelefono.current.value;
        let camas = this.cajaCamas.current.value;
        let hospital = {
            idhospital: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        };
        axios.post(url, hospital).then(response => {
            console.log(response);
            this.setState({
                mensaje: "Hospital insertado: " + nombre,
                status: true
            })
        })
        

    }
    render() {
        return (
            <div>
                {
                    this.state.status == true && (<Navigate to="/hospitales"/>)
                }
                <h1>CreateHospital</h1>
                <h3 style={{color:"blue"}}>{this.state.mensaje}</h3>
                <form>
                    <label>ID hospita</label>
                    <input type="text" ref={this.cajaId} className='form-control'/>
                    <label>Nombre</label>
                    <input type="text" ref={this.cajaNombre} className='form-control'/>
                    <label>Dirección</label>
                    <input type="text" ref={this.cajaDireccion} className='form-control'/>
                    <label>Telefono</label>
                    <input type="text" ref={this.cajaTelefono} className='form-control'/>
                    <label>Camas</label>
                    <input type="text" ref={this.cajaCamas} className='form-control'/>
                    <button onClick={this.insertHospital} className='btn btn-warning'>
                        Insert
                    </button>
                </form>
            </div>
        )
    }
}
