import React, { useState } from 'react'
import QrsFrame from './QrsFrame'

const Qrs = () => {

  const [qrSeleccionado, setQrSeleccionado] = useState({})

  const list = [
    {
      id: 0,
      name: 'Tango Empanadas',
      qr: 'https://view.genial.ly/6594eae3dd3ae00014b4cccc'
    },
    {
      id: 1,
      name: 'La Casita Sushi Bar',
      qr: 'https://view.genial.ly/5fea8eb7aee89c0e7ea0f2fe'
    },
    {
      id: 2,
      name: 'La Solana Parador',
      qr: 'https://view.genial.ly/5fdd6b26aee89c0e7e9d5d09'
    },
    {
      id: 3,
      name: 'El Viejo Almacen',
      qr: 'https://view.genial.ly/5fd623d19b84390e8450a0c2'
    },
    {
      id: 4,
      name: 'Café de la huerta',
      qr: 'https://view.genial.ly/5f19dd722b36990e389f64a2'
    }
  ]

  const handleQrClick = (ev) => {
    setQrSeleccionado(list[ev.target.id])
  }

  return (
    <div className='qrListContainer'>
      <ul className='list'>
        {list.map((qr) => (
          <li onClick={handleQrClick} key={qr.id} className={qrSeleccionado.id === qr.id ? 'active' : ''} id={qr.id}>{qr.name}</li>
        ))}
      </ul>
      <div>
        {Object.keys(qrSeleccionado).length !== 0 ? (
          <QrsFrame qr={qrSeleccionado} />
        ) : (
          <div className="texto_paginas_list">
            <h3>Select a QR Menu to view it!</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Qrs