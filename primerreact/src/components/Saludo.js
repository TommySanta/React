import DobleNumero from "./DobleNumero";
import Metodos from "./Metodo";

function Saludo(props){
    var dato = "Mañana es viernes....";
    const {nombre, edad} = props
    return (
    <div>
        <h1>React en Juernes</h1>
        <h2>Saludos</h2>
        <h2>Dato : {dato}</h2>
        <h2>{edad}</h2>
        <h1>Su nombre es {nombre}</h1>
        <Metodos></Metodos>
        <DobleNumero></DobleNumero>
    </div>
    )

}
export default Saludo;
