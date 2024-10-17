import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class BuscadorDepartEmpleados extends Component {
    selectDepartamento = React.createRef();
    state = {
        empleados: [],
        departamentos: []
    }
    componentDidMount= ()=>{
        this.loadDepartamentos();
    }
    loadDepartamentos = () =>{
        var url = Global.urlApiDepartamentos;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                departamentos: response.data
            })
        })
    }
    buscarEmpleados = (e) =>{
        e.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "/api/Empleados/EmpleadosDepartamento/"+idDepartamento;
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados : response.data
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Buscar empleado por departamentos</h1>
                <form>
                    <label>Seleccione un departamento</label>
                    <select ref={this.selectDepartamento}>
                        {
                            this.state.departamentos.map((departamento, index)=>{
                                return(<option key={index} value={departamento.Numero}>
                                    {departamento.Nombre}
                                    </option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>
                        Buscar empleados
                    </button>
                    <ul>
                        {
                            this.state.empleados.map((empleado, index)=>{
                                return (
                                <li key={index}>
                                    {empleado.apellido} - {empleado.oficio}
                                </li>)
                            })
                        }
                    </ul>
                </form>
            </div>
        )
    }
}
