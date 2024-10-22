import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from './Global';

export default class DeleteDepartamento extends Component {
    state = {
        redirect: false
    }

    deleteDepartamento = () => {
        const idDepartamento = this.props.id;
        
        // Mostrar confirmación
        if (window.confirm(`¿Estás seguro de que deseas eliminar el departamento con ID: ${idDepartamento}?`)) {
            let request = "api/departamentos/" + idDepartamento;
            let url = Global.apiUrlDepartamentos + request;

            axios.delete(url).then(response => {
                console.log("Departamento eliminado");
                // Establecer estado para redirigir después de eliminar
                this.setState({ redirect: true });
            }).catch(error => {
                console.error("Error al eliminar el departamento:", error);
            });
        }
    }

    render() {
        // Redirigir a la página de inicio después de eliminar
        if (this.state.redirect) {
            return <Navigate to="/" />;
        }

        return (
            <div>
                <h1>Eliminar Departamento</h1>
                <button className="btn btn-danger" onClick={this.deleteDepartamento}>
                    Confirmar Eliminación
                </button>
            </div>
        );
    }
}
