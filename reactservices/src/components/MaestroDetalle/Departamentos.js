import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export default class Departamentos extends Component {
    selectDepartamentos = React.createRef();
    
    state = {
        departamentos: [],
        idDepartamento: 0
    }
    componentDidMount = () =>{
        this.loadDepartamentos();
    }

    loadDepartamentos= () =>{
        var url = Global.urlApiDepartamentos;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                departamentos: response.data
            })
        })
    }
    buscarEmpleados = (e) => {
        e.preventDefault();
        let idDepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento: idDepartamento
        })
    }
    render() {
        return (
            <div>
                <h1>Departamentos component</h1>
                <form>
                    <select ref={this.selectDepartamentos}>
                        {
                            this.state.departamentos.map((departamento, index) => {
                                return ( <option key={index} value={departamento.Numero}>
                                    {departamento.Nombre}
                                </option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>
                        Buscar empleados
                    </button>
                </form>
                <h2 style={{color:"blue"}}>Id departamento {this.state.idDepartamento}</h2>
                {
                    this.state.idDepartamento != 0 &&(
                        <Empleados iddepartamento={this.state.idDepartamento}/>
                    )
                }
            </div>
        )
    }
}
