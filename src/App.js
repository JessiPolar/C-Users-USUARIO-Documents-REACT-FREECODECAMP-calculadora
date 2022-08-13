import './App.css';
import Boton from './componentes/Boton.js';
import Input from './componentes/Input';
import BotonClear from './componentes/BotonClear';
import { useState} from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const ingresarInput = valor => {

    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      alert('ingrese los numeros a evaluar')
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Calculadora</h1>
      </header>
      <div className='contenedor-calculadora'>
        <Input  valorIngresado={input}/>
        <div className='fila'>
          <Boton manejarClic={ingresarInput}>1</Boton>
          <Boton manejarClic={ingresarInput}>2</Boton>
          <Boton manejarClic={ingresarInput}>3</Boton>
          <Boton manejarClic={ingresarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ingresarInput}>4</Boton>
          <Boton manejarClic={ingresarInput}>5</Boton>
          <Boton manejarClic={ingresarInput}>6</Boton>
          <Boton manejarClic={ingresarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ingresarInput}>7</Boton>
          <Boton manejarClic={ingresarInput}>8</Boton>
          <Boton manejarClic={ingresarInput}>9</Boton>
          <Boton manejarClic={ingresarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={ingresarInput}>0</Boton>
          <Boton manejarClic={ingresarInput}>.</Boton>
          <Boton manejarClic={ingresarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
