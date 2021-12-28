import React, { useState } from 'react';
import Botao from './components/botao';
import './styles.css';

const arrOper = ['*', '/', '+', '-', '.']

function App() {
  return (
    <div className='App'>
      <h1>Calculadora com React</h1>
      <div className='calc-wrapper'>
        <Botao isInput></Botao>
        <div className='linha'>
          <Botao>CE</Botao>
          <Botao>C</Botao>
          <Botao>%</Botao>
          <Botao>/</Botao>
        </div>

        <div className='linha'>
          <Botao>7</Botao>
          <Botao>8</Botao>
          <Botao>9</Botao>
          <Botao>x</Botao>
        </div>

        <div className='linha'>
          <Botao>4</Botao>
          <Botao>5</Botao>
          <Botao>6</Botao>
          <Botao>-</Botao>
        </div>

        <div className='linha'>
          <Botao>1</Botao>
          <Botao>2</Botao>
          <Botao>3</Botao>
          <Botao>+</Botao>
        </div>

        <div className='linha'>
          <Botao>+/-</Botao>
          <Botao>0</Botao>
          <Botao>.</Botao>
          <Botao>=</Botao>
        </div>
      </div>
    </div>
  )
}    
export default App;
