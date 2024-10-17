import { useState } from "react";
function Contador(){
    //Declaramos una variable de tipo state y en la creacion le indicamos el tipo de dato
    const[ numero, setNumero ]= useState(0);
    const sumarContador = () => {
        setNumero(numero + 1);
    }
    return (
        <div>
            <h1 style={{color:"blue"}}>
                Ejemplo Contador
            </h1>
            <h2 style={{color:"red"}}>
                Contador {numero}
            </h2>
            <button onClick={() => sumarContador()}>
                Sumar Contador
            </button>
        </div>
    )
}
export default Contador;