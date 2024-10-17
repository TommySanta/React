import logo from '../logo.svg';
import '../App.css';
import SumarNumero from './SumarNumero';
import MostrarImagen from './MostrarImagen';

function App() {
  return (
    <div>
    {MostrarImagen()} {SumarNumero(42,21)}
    </div>
  );
}

export default App;
