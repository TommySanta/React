function SumarNumero(props){
    const sumar= ()=>{
        var suma = parseInt(props.num)+parseInt(props.num2);
        console.log("Total "+ suma);
    }
    

    return (<div> 
        <h1>Sumar Numero</h1>
        <button onClick={()=> sumar()}>Sumar 5 + 6 </button>
        <button onClick={()=> sumar()}>Sumar 2</button>
    </div>)

}

export default SumarNumero;