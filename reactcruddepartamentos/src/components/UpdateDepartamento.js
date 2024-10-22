import React, { Component } from 'react'
import axios from 'axios' 
import { Navigate, NavLink } from 'react-router-dom'
import Global from './Global';

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    state = {
        status : false
    }

    ModificarDepartamento = (e)=>{
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.put(url, departamento).then(response => {
            console.log("Updaye....")
            this.setState({
                status: true
            })
        })
        
    }
    render() {
        return (
            <div>
                {
                    this.state.status == true && <Navigate to="/"/>
                }
                <h1>UpdateDepartamento</h1>
                <NavLink to="/">Back to index</NavLink>
                <ul>
                    <li>
                        ID : {this.props.id}
                    </li>
                    <li>
                        Nombre : {this.props.nombre}
                    </li>
                    <li>
                        Localidad : {this.props.localidad}
                    </li>
                </ul>
                <form>
                    <label>Id departamento</label>
                    <input type='text' ref={this.cajaId} className='form-control' value={this.props.id} disabled/>
                    <label>Nombre</label>
                    <input type='text' ref={this.cajaNombre} className='form-control' defaultValue={this.props.nombre}/>
                    <label>Localidad</label>
                    <input type='text' ref={this.cajaLocalidad} className='form-control' defaultValue={this.props.localidad}/>
                    <button className='btn btn-info' onClick={this.ModificarDepartamento}>
                        Insertar departamento
                    </button>
                </form>
            </div>
        )
    }
}
