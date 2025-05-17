import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const fetchUsuarios = async () => {
  try {
    const response = await fetch('https://gestproyv2-back.onrender.com/usuarios');
    if (!response.ok) {
      throw new Error('Error al obtener usuarios');
    }
    const usuarios = await response.json();
    console.log(usuarios);
    return usuarios;
  } catch (error) {
    console.error('Error:', error);
  }
};
  return (
    <>
      <h1>PRUEBA CONSULTA</h1>
      <div className="card">
        <button onClick={() => {
          fetchUsuarios()}}>
          consultar usuarios
        </button>
        <p>
          Este boton muestra en consola la coneccion con la base de datos
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
