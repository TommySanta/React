//DEBEMOS IMPORTAR Component PARA LA HERENCIA 
import { Component } from "react";
//PODEMOS DECLARAR METODOS FUERA DE LA CLASE 
//DICHOS METODOS NO PUEDEN UTILIZAR NADA DEL Component 
//Y SE DECLARAN CON function 
function metodoExterno() {
    console.log("Function externa de la clase");
}
class Contador extends Component {
    //LAS VARIABLES Y LOS METODOS SE DECLARAN FUERA DEL RENDER 
    //NO SE UTILIZAN PALABRAS CLAVE COMO var, let o const 
    numero = 1;
    //LOS METODOS SE DECLARAN DIRECTAMENTE AQUI 
    incrementarNumero = () => {
        //PARA PODER ACCEDER A LAS VARIABLES DE LA CLASE 
        //DEBEMOS UTILIZA LA PALABRA CLAVE this 
        this.numero = this.numero + 1;
        console.log("Valor de número: " + this.numero);
    }
    //VAMOS A DECLARAR UNA VARIABLE DE ESTADO QUE TENDRA  
    //EL VALOR DE PROPS 
    state = {
        valor: parseInt(this.props.inicio)
    }
    //CREAMOS UN METODO PARA CAMBIAR EL VALOR DEL STATE 
    incrementarValorState = () => {
        //PARA MODIFICAR LOS ELEMENTOS QUE TENGAMOS DENTRO DE STATE 
        //SE UTILIZA setState CON UN JSON DEL OBJETO CON LAS VARIABLES  
        //QUE DESEEMOS MODIFICAR 
        //LAS VARIABLES QUE NO MODIFIQUEMOS NO CAMBIARAN 
        this.setState({
            valor: this.state.valor + 1
        });
    }
    render() {
        return (<div>
            <h1>Class Component Contador</h1>
            <h2 style={{ color: "blue" }}>
                Inicio del contador: {this.props.inicio}
            </h2>
            <h2 style={{ color: "red" }}>
                Valor del state: {this.state.valor}
            </h2>
            {/* LA LLAMADA A LOS METODOS ES MAS SENCILLA, NO NECESITAMOS  
            LAMBDA Y TAMPOCO SE UTILIZAN PARENTESIS*/}
            <button onClick={this.incrementarValorState}>
                Incrementar state
            </button>
            {/* VAMOS A UTILIZAR UNA FUNCION ANONIMA PARA LLAMAR A UN METODO  */}
            <button onClick={() => {
                //SI DESEAMOS LLAMAR A UN METODO DE LA CLASE, SE UTILIZA LA  
                //PALABRA this 
                this.incrementarNumero();
                //SI DESEAMOS LLAMAR A UN METODO EXTERNO DEL COMPONENT 
                //NO UTILIZAMOS this 
                metodoExterno();
            }}>
                Incrementar número
            </button>
        </div>)
    }
}
export default Contador;

