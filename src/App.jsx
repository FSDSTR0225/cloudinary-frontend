import { useState } from 'react'
import './cloudinary.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form action="">
        <h1>Form cloudinary</h1>
        <label htmlFor="">Nombre del archivo</label>
        <input type="text" />
        <label htmlFor="">Archivo</label>
        <input type="file" />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
