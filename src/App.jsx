import React, { useState } from 'react'
import Products from './Products'
import './Products.css'


function App() {
  var [a,b] = useState(10);
  return (
    <div className='main'>
      <p>hello {a}</p>
      <button onClick={()=>{b(a+1)}}style={{color:"green",
        backgroundColor:"black",
        padding:"10px 30px"
      }}>hiii</button>
      <Products value={a}/>
    </div>
  )
}

export default App