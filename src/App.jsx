import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    pedido: "",
    domicilio: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.length > 2 && usuario.pedido.length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };
  return (
    <div>
      <h1>Formulario de delivery</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Nombre</label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value.trimStart() })
          }
        />
        <label>Pedido</label>
        <input
          type="text"
          value={usuario.pedido}
          onChange={(event) =>
            setUsuario({ ...usuario, pedido: event.target.value.trimStart() })
          }
        />
         <label>Domicilio</label>
        <input
          type="text"
          value={usuario.domicilio}
          onChange={(event) =>
            setUsuario({ ...usuario, domicilio: event.target.value.trimStart() })
          }
        />
        <button style={{marginTop: "10px"}}>Enviar</button>
      </form>
      {show && <Card usuario={usuario} />}
      {error && (
        <h5 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h5>
      )}
    </div>
  );
}

export default App;
