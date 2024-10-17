function Saludohijo(props){
    var ejecutarPadre= props.metodoPadre
    var idhijo = props.idhijo
    
    return(
        <div>
            <h1 style={{color:"blue"}}>
                SaludoHijo
            </h1>
            <button onClick={()=> ejecutarPadre("Tommy" + idhijo)}>Ejemplo</button>
        </div>
    )
}
export default Saludohijo;