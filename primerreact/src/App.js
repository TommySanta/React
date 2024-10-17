import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  var estilo ={
    color: "blue",
    backgroundcolor:"yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={estilo}>Ejemplo de estilo</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
}

export default App;
