import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
const [value, setVal]=useState(0);

const Increment = () => {
  setVal(value + 1);
};
const Decrement = () =>{
  setVal(value-1);
};

const Reset= () =>{
  setVal(0);
};
  return (
    <div className='center'>
      <h1>Counter : {value}</h1>
      <button onClick={Increment} className='button'>Increment</button>
      <button onClick={Decrement} className='button'>Decrement</button>
      <button onClick={Reset} className='button' >Reset</button><br/><br/>
    </div>
  )
}
