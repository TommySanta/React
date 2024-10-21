import React, { Component } from 'react';
import Global from './Global';
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor'; // Importamos el nuevo componente

export default class Doctores extends Component {
    state = {
        doctores: [],
        selectedDoctor: null,
        showModal: false
    }

    loadDoctores = () => {
        var idhospital = this.props.idhospital;
        var request = "api/doctores/doctoreshospital/" + idhospital;
        var url = Global.apiDoctores + request;
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data
            });
        });
    }

    componentDidMount = () => {
        this.loadDoctores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital !== this.props.idhospital) {
            this.loadDoctores();
        }
    }

    handleShowModal = (doctor) => {
        this.setState({ selectedDoctor: doctor, showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false, selectedDoctor: null });
    }

    render() {
        return (
            <div>
                <h2>Doctores del hospital <span style={{ color: "red" }}>{this.props.idhospital}</span>:</h2>
                <table className='table table-bordered'>
                    <thead className='table-info'>
                        <tr>
                            <th>Apellido</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doc.apellido}</td>
                                        <td>
                                            <button variant="primary" onClick={() => this.handleShowModal(doc)}>
                                                Detalles
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <DetallesDoctor
                    doctor={this.state.selectedDoctor}
                    show={this.state.showModal}
                    handleClose={this.handleCloseModal}
                />
            </div>
        );
    }
}
