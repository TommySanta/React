import { useState } from "react";
function Car(props){
    //Vamos a crear una variable que nos permetira visualizar la variable del coche 
    const [estado, setEstado] = useState(false);
    //Vamos a tener una variable para visualizar la velocidad actual del coche
    const [velocidad, setVelocidad] = useState(0);

    var coche ={
        marca:props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadmaxima),
        aceleracion: parseInt(props.aceleracion)
    }
    //incluimos un metodo para comprobar el estado del coche dependiendo de dicho estado, lo que 
    // haremos sea devolver codigo html

    const comprobarEstado= ()=>{
        if(estado){
            return(<h1 style={{color:"green"}}>Arrancado</h1>)
        }else{
            return(<h1 style={{color:"red"}}>Detenido</h1>)
        }
    }
    const aceleracionCoche = () => {
        if ( estado == false){
            alert("El coche esta detenido");
        }else{
            if (velocidad >= coche.velocidadMaxima){
                setVelocidad(coche.velocidadMaxima);
            }else{
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    return (<div>
        <h1 style={{color:"blue"}}>
            Component car: {coche.marca}, {coche.modelo}
        </h1>
        <h2 style={{color:"fuchsia"}}>
            Velocidad actual: {velocidad} km/h
        </h2>
        <div>
            {comprobarEstado()}
        </div>
        <button onClick={() => {
            setEstado(!estado);
        }}>Arrancar</button>
        <button onClick={() => aceleracionCoche()}>Acelerar coche </button>
    </div>);
}
export default Car;