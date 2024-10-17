import React, { Component } from 'react';

class Collatz extends Component {
    cajaNumero = React.createRef();
    state = {
        lista: [] 
    }
    metodoCollatz = (numero) => {
        let secuencia = [];
        while (numero !== 1) {
            secuencia.push(numero);
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
        }
        secuencia.push(1);
        return secuencia;
    }
    peticionForm = (e) => {
        e.preventDefault(); 
        const numero = parseInt(this.cajaNumero.current.value);
        if (!isNaN(numero) && numero > 0) { 
            const listaCollatz = this.metodoCollatz(numero);
            this.setState({
                lista: listaCollatz 
            });
        }
    }
    render() {
        return (
            <div>
                <h1>Collatz</h1>
                {
                    // Mostrar la secuencia si existe en el estado
                    this.state.lista.length > 0 &&
                    (
                        <div>
                            <h2 style={{ color: "blue" }}>
                                Collatz del número: {this.cajaNumero.current.value}
                            </h2>
                            <ul>
                                {
                                    this.state.lista.map((num, index) => (
                                        <li key={index}>{num}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                <form onSubmit={this.peticionForm}>
                    <label>Número: </label>
                    <input type="text" ref={this.cajaNumero} /><br />
                    <button>
                        Enviar Números
                    </button>
                </form>
            </div>
        )
    }
}
export default Collatz;
