import React, { Component } from 'react';

class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    state = {
        numero: null
    };
    peticionForm = (e) => {
        e.preventDefault();
        const numero = parseInt(this.cajaNumero.current.value); 
        if (!isNaN(numero)) {
            this.setState({ numero });
        }
    }
    render() {
        return (
            <div>
                <h1>TablaMultiplicar</h1>
                {
                    this.state.numero !== null && (
                        <div>
                            <h2 style={{ color: "blue" }}>
                                Tabla del número: {this.state.numero}
                            </h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Numero</th>
                                        <th>Multiplicador</th>
                                        <th>Resultado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (() => {
                                            let filas = [];
                                            for (let i = 0; i <= 10; i++) {
                                                filas.push(
                                                    <tr key={i}>
                                                        <td>{this.state.numero}</td> {/* Número */}
                                                        <td>{i}</td> {/* Multiplicador */}
                                                        <td>{this.state.numero * i}</td> {/* Resultado */}
                                                    </tr>
                                                );
                                            }
                                            return filas;
                                        })()
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
                <form onSubmit={this.peticionForm}>
                    <label>Número: </label>
                    <input type="text" ref={this.cajaNumero} /><br />
                    <button>
                        Enviar Número
                    </button>
                </form>
            </div>
        );
    }
}

export default TablaMultiplicar;
