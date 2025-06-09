import { useState } from 'react'
import './cloudinary.css'

function App() {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch('http://localhost:3003/profile/edit', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form cloudinary</h1>
        <label htmlFor="filenane">Nombre del archivo</label>
        <input type="text" name="filename"/>
        <label htmlFor="file">Archivo</label>
        <input type="file" name="file" />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
