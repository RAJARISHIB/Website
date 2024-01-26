import React from 'react'
import { useReducer } from 'react'


const counterReducer =(state, action) =>{
    switch (action.type)
    {
        case "INCREMENT":
            return {count: state.count+1};
        case "DECREMENT":
            return{count: state.count-1};
        case "RESET":
            return{count: 0}
        default:
            return state;
}};


export default function Reduce() {
    const [state,dispatch]=useReducer(counterReducer, { count: 0 } );
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>ADD</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>SUB</button>
            <button onClick={()=> dispatch({type:'RESET'})}>RESET</button>
        </div>
  )
}
