import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Trabajadores extends Component {
    state = {
        trabajadores: [],
        mensaje: ""
    }
    loadTrabajadores = () => {
        //RECUPERAR TODOS LOS IDS DE HOSPITA 
        let idsHospitales = this.props.idhospitales;
        if (idsHospitales.length != 0) {
            //idhospital=17&idhospital=22&idhospital=14 
            let data = "";
            for (var id of idsHospitales) {
                data += "idhospital=" + id + "&";
            }
            //ELIMINAMOS EL ULTIMO CARACTER DEL STRING 
            //idhospital=25&idhospital=22& 
            data = data.substring(0, data.length - 1);
            this.setState({
                mensaje: data
            })
            //PODEMOS REALIZAR LA PETICION AL SERVICIO 
            let request = "api/trabajadores/trabajadoreshospitales?" + data;
            let url = Global.urlEjemplos + request;
            axios.get(url).then(response => {
                console.log("leyendo Trabajadores");
                this.setState({
                    trabajadores: response.data
                })
            })
        }
    }
    componentDidMount = () => {
        this.loadTrabajadores();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales) {
            this.loadTrabajadores();
        }
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "fuchsia" }}>Trabajadores</h1>
                <ul className='list-group'>
                    {
                        this.state.trabajadores.map((trabajador, index) => {
                            return (<li key={index} className='list-group-item'>
                                {trabajador.apellido}, {trabajador.idHospital}, {trabajador.salario}
                            </li>)
                        })
                    }
                </ul>
                <h5 style={{ color: "blue" }}>
                    {this.state.mensaje}
                </h5>
            </div>
        )
    }
}

