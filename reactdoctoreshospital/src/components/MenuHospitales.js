import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { NavLink } from 'react-router-dom'

export default class MenuHospitales extends Component {
    state = {
        hospitales: []
    }
    loadHospitales = () => {
        var request = "/webresources/hospitales";
        var url = Global.apiHospitales + request;
        axios.get(url).then(response => {
            console.log("Leyendo servicio ...")
            this.setState({
                hospitales: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadHospitales();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Expand at sm</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">New hospital</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/hospitales">Hospitales</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</NavLink>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.hospitales.map((hospital, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink to={"/doctores/"+hospital.idhospital}
                                                        className="dropdown-item">
                                                            {hospital.nombre}
                                                        </NavLink></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown VP"</a>
                                    <ul className="dropdown-menu">
                                        {/* {
                                            this.state.hospitales.map((hospital, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink to={"/doctoresv2/"+hospital.idhospital}
                                                        className="dropdown-item">
                                                            {hospital.nombre}
                                                        </NavLink></li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
