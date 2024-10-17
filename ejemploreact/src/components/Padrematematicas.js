import Matematicas from "./Matematicas";

function PadreMatematicas(props){
    var number= parseInt(props.number);
    const metodoTriple= (triple) =>{
        console.log((triple*3))
    }
    return(
        <div>
            <Matematicas doble={number} triple={number} metodoTriple={metodoTriple}/>
        </div>
        
    )
}
export default PadreMatematicas;