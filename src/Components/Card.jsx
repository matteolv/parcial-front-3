import React from 'react'

const Card = ({usuario}) => {
  return (
    <div>
      
      <h3>Buenisimo {usuario.nombre}! </h3>
      <h4>Tu {usuario.pedido} ya esta siendo preparado/a</h4>
      <h4>En breve sera enviado a {usuario.domicilio} </h4>
    </div>
  )
}

export default Card