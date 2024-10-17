function Metodos(){

    const mostrarMensaje = () =>{
        console.log("Boton pulsado")
    }
    return (<div>
        <h1>Ejemplo metodo react </h1>
        {mostrarMensaje()}
        <button onClick={() => mostrarMensaje()}>
            Pulsa para cosas...
        </button>
    </div>);
}
export default Metodos;