import React, { useState } from 'react';
import Botao from './components/botao';
import * as math from 'mathjs';
import './styles.css';

const arrOper = ['*', '/', '+', '-', '.']

function App() {
  const [input, setInput] = useState("");

  function insereNum(val){
    setInput(input + val);
  }

  function insereOperacao(val){
    if (input === "" || (arrOper.includes(input[input.length-1]) && arrOper.includes(val))) {
      return;
    }
    else{
      setInput(input + val);
    }
  }

  function calc(){
    if (input === "" || (arrOper.includes(input[input.length-1]))){
      return input;
    }
    else{
      setInput(math.evaluate(input))
    }
  }

  return (
    <div className='App'>
      <h1>React4Calculator</h1>
      <div className='calc-wrapper'>
        <Botao isInput>{input}</Botao>
        <div className='linha'>
          <Botao onClick={() => setInput("")}>CE</Botao>
          <Botao onClick={() => setInput(input.slice(0, -1))}>C</Botao>
          <Botao onClick={() => setInput(input/100)}>%</Botao>
          <Botao onClick={insereOperacao}>/</Botao>
        </div>

        <div className='linha'>
          <Botao onClick={insereNum}>7</Botao>
          <Botao onClick={insereNum}>8</Botao>
          <Botao onClick={insereNum}>9</Botao>
          <Botao onClick={insereOperacao}>*</Botao>
        </div>

        <div className='linha'>
          <Botao onClick={insereNum}>4</Botao>
          <Botao onClick={insereNum}>5</Botao>
          <Botao onClick={insereNum}>6</Botao>
          <Botao onClick={insereOperacao}>-</Botao>
        </div>

        <div className='linha'>
          <Botao onClick={insereNum}>1</Botao>
          <Botao onClick={insereNum}>2</Botao>
          <Botao onClick={insereNum}>3</Botao>
          <Botao onClick={insereOperacao}>+</Botao>
        </div>

        <div className='linha'>
          <Botao onClick={() => setInput(input*(-1))}>+/-</Botao>
          <Botao onClick={insereNum}>0</Botao>
          <Botao onClick={insereOperacao}>.</Botao>
          <Botao onClick={calc}>=</Botao>
        </div>
      </div>
    </div>
  )
}    
export default App;
