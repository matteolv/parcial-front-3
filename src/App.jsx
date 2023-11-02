import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {

  const [algo, setAlgo] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <h1>Carga de estudiantes</h1>
    <form onSubmit={handleSubmit} style={{display: "flex",flexDirection: "column",alignItems: "center"}}>

      <label htmlFor="">Label</label>

      <input type="text" placeholder=''/>

      <label htmlFor="">Label</label>

      <input type="text" placeholder=''/>
      
      <button>De una</button>
    </form>
    <Card/>
    </>
  )
}

export default App
