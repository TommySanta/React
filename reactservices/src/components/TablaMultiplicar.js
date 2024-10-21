import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let num = parseInt(this.props.numero);
        for (let i = 1; i <= 10; i++) {
            let operacion = num * i;
            aux.push(`${num} x ${i} = ${operacion}`);
        }

        this.setState({
            tabla: aux
        });
    }

    componentDidUpdate = (oldProps) => {
        if ( oldProps.numero != this.props.numero){
            this.generarTablaMultiplicar();
        }
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }
    

    render() {
        return (
            <div>
                <h2>Tabla de Multiplicar del {this.props.numero}</h2>
                <ul>
                    {this.state.tabla.map((linea, index) => (
                        <li key={index}>{linea}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
