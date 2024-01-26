import React from 'react'
import { useEffect, useState } from "react";
import './Contact.css'
export default function Useeffect() {
    const [data, setData]=useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/tools/l')
          .then(response => response.json())
          .then(result => setData(result));
      return ()=>{
      };
    }, []);
  return (
    <div className='center'>
        {data ?(<p>Data: {JSON.stringify(data)}</p>):(<p>Loading</p>)}
    </div>
  );
}