import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Effect = () => {
const [clicked,setclicked] = useState(false);
console.log(clicked);

useEffect(()=> {
    console.log("Iam in seide useEffect");
    
    
},[])

  return (
    <div>
        <Navbar/>
      <h1>Use Effect Hook</h1> 
      <button onClick={()=>setclicked(true)}>Click</button>
    </div>
  )
}

export default Effect
