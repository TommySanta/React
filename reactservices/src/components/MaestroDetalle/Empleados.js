import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class Empleados extends Component {
    state = {
        empledos: []
    }
    loadEmpleados = () =>{
        let idDepartamento =this.props.iddepartamento;
        var request = "api/Empleados/EmpleadosDepartamento/"+idDepartamento;
        var url = Global.urlEmpleados+request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empledos: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadEmpleados();
    }
    render() {
        return (
            <div>
                <h1>Empleados</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Opellido</th>
                            <th>Dpellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empledos.map((empledo, index) => {
                                return(<tr key={index}>
                                    <td>{empledo.apellido}</td>
                                    <td>{empledo.oficio}</td>
                                    <td>{empledo.departamento}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
