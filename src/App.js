import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState("");
  const [error,setError] = useState(false)
  const [list,setList] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("hello");
  }
  return (
  <section>color generator project</section>
  )
}

export default App