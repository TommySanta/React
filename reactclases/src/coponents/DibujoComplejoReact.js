import { Component} from "react";

class DibujosComplejoReact extends Component{
    state = {
        nombres: ["Lucia", "Paco", "Paula", "Tomas", "Sofia", "Alvaro"]
    }
    generarNombre = () =>{
        this.state.nombres.push("Nuevo Nombre");
        this.setState({
            nombres : this.state.nombres
        })
    }
    render(){
        return(<div>
            <h1>Dibujos complejos react Collection</h1>
            <button onClick={() => this.generarNombre()}>
                Generar nombre
                </button>
            {
                //Esto es codigo react es diferente al js
                // Es codigo logico con sintaxis JSX
                this.state.nombres.map((name,index) => {
                    return(<h1 style={{color: "blue"}} key={index}>{name}</h1>)
                })
            }
        </div>)
    }
}
export default DibujosComplejoReact;