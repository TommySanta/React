import React, { Component } from 'react';

export default class TablaMultiplicar extends Component {
    selectNumero = React.createRef();
    state = {
        tabla: [],
        options: [] 
    }

    componentDidMount() {
        this.generarOptions();
    }

    mostrarTabla = (e) => {
        e.preventDefault();
        let numero = parseInt(this.selectNumero.current.value);
        console.log(numero);
        let aux = [];
        for (let i = 1; i <= 10; i++) {
            let dato = {
                operacion: `${numero} * ${i}`,
                resultado: (numero * i)
            }
            aux.push(dato);
        }
        this.setState({
            tabla: aux
        })
    }

    generarOptions = () => {
        console.log("Loading");
        const options = [];
        for (let i = 1; i <= 5; i++) {
            let random = Math.floor(Math.random() * 50) + 1;
            options.push(
                <option key={i} value={random}>
                    {random}
                </option>
            );
        }
        this.setState({ options });
    }

    render() {
        return (
            <div>
                <h1>TablaMultiplicar</h1>
                <form>
                    <label>Introduzca número</label>
                    <select ref={this.selectNumero}>
                        {this.state.options} {/* Usar el estado para renderizar las opciones */}
                    </select>
                    <button onClick={this.mostrarTabla}>
                        Tabla multiplicar
                    </button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tabla.map((fila, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{fila.operacion}</td>
                                        <td>{fila.resultado}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
