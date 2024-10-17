import { Component } from "react";

class HijoNumero extends Component{

    sumarNumero= () =>{
        this.props.sumarTotal(this.props.numero)
    }

    render() {
        return (<div>
            <h1 style={{ color: "blue"}}>Hijo Numero : {this.props.numero}</h1>
            <button onClick={this.sumarNumero}>Sumar numero</button>
        </div>)
    }
}
export default HijoNumero;