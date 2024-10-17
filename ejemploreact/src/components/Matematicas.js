
function Matematicas(props){
    var numdoble = props.doble;
    var triple = props.triple;
    
    var ejecutarTriple= props.metodoTriple;

    const metodoDoble= (numdoble) =>{
        console.log((numdoble*2))
    }
    
    return (
    <div>
        <button onClick={()=>  metodoDoble(numdoble)}>
            El doble
        </button>
        <button onClick={()=> ejecutarTriple(triple)}>El triple</button>
    </div>
    );
}
export default Matematicas;