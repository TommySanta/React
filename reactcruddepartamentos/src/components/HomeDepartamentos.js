import React, { Component } from 'react'
import loadingImage from './../assets/images/loading_cube.gif'
import Global from './Global';
import axios from 'axios' 
import { NavLink } from 'react-router-dom'
export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }
    loadDepartamentos = () => {
        let request = "/api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(reponse => {
            console.log("Leyendo departamentos")
            this.setState({
                departamentos: reponse.data,
                status: true
            })
        })
    }

    deleteDepartamento = (idDepartamento)=>{
        let request = "api/departamentos/"+ idDepartamento;
        let url = Global.apiUrlDepartamentos + request;
        axios.delete(url).then(response => {
            console.log("Delete....");
            this.loadDepartamentos();
        })
    }
    componentDidMount = () => {
        this.loadDepartamentos();
    }
    
    render() {

        if (this.state.status == false) {
            return (<img src={loadingImage} />)
        }else{
            return (
                <div>
                    <h1>Home Departamentos</h1>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>Enlace</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dpto, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{dpto.numero}</td>
                                        <td>{dpto.nombre}</td>
                                        <td>{dpto.localidad}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                this.deleteDepartamento(dpto.numero);
                                            }}>Eliminar </button>
                                            <NavLink to={"/detalle/"+dpto.numero}>
                                                Detalles
                                            </NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/update/"+dpto.numero+"/"+dpto.nombre+"/"+dpto.localidad}>
                                                Update
                                            </NavLink>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
