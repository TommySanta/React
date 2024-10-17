import Saludohijo from "./Saludohijo";

function SaludoPadre(){
    const metodoPadre= (nombre) =>{
        console.log("Yo soy tu padre"+nombre)
    }
    return(
        <div>
            <h1 style={{color:"red"}}>
                SaludoPadre
            </h1>
            <Saludohijo idhijo="1" metodoPadre={metodoPadre}></Saludohijo>
            <Saludohijo idhijo="2" metodoPadre={metodoPadre}></Saludohijo>
            <Saludohijo idhijo="3" metodoPadre={metodoPadre}></Saludohijo>
        </div>
    )
}
export default SaludoPadre;