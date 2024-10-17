function DobleNumero(){

    var ejemplo= "Soy una variable"
    const cambiarVariable= ()=>{
        console.log("Valor antes "+ ejemplo);
        ejemplo= "He cambaido de valo!!!"
        console.log("Valor despues "+ejemplo)
    }
    const numeroDoble=(numero)=>{
        var doble = numero *2;
        console.log(doble)
    }
    return (<div> 
        <h1>Ejemplo metodo parametro</h1>
        <h1>{ejemplo}</h1>
        <button onClick={()=> numeroDoble(7)}>Doble 7 </button>
        <button onClick={()=> cambiarVariable()}>Cambiar variable</button>
    </div>)
}
export default DobleNumero;