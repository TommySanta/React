import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumero extends Component {
    
    state = {
        hijos: [],
        total: 0
    };
    
    sumarTotal =(num)=>{
        this.setState({
            total: parseInt(this.state.total) + parseInt(num)
        })
    }

    nuevoHijo = () => {
        const nuevoNumero = parseInt(Math.random() * 100) + 1;
        this.setState((state) => ({
            hijos: [...state.hijos, <HijoNumero numero={nuevoNumero} key={state.hijos.length} sumarTotal={this.sumarTotal}/>]
        }));
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Padre Numero</h1>
                <h4 style={{ color: "green" }}>{this.state.total}</h4>
                <button onClick={this.nuevoHijo}>Nuevo Numero</button>
                <div>{this.state.hijos}</div>
            </div>
        );
    }
}

export default PadreNumero;
