import imagenT from "../assets/images/imagen1.png"
import "./Mostratimagen.css"
function MostrarImagen(){

    return (<div>
        <p>Imagen</p>
        <img src={imagenT}/>
    </div>)
}
export default MostrarImagen;