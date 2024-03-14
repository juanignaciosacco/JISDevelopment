import React, { useState } from 'react'

const Modalidad = () => {

  const [btnSeleccionado, setBtnSeleccionado] = useState('')

  const btnClickHandler = (ev) => {
    setBtnSeleccionado(ev.target.id)
  }

  return (
    <div className='modalidadContainer'>
      <div className='modalidadBtns'>
        <button onClick={btnClickHandler} className='btn' id='lumpSumBtn'>Lump sum payment</button>
        <button onClick={btnClickHandler} className='btn' id='subscriptionBtn'>Subscription</button>
      </div>
      <div className='textoModalidad'>
      {btnSeleccionado === "lumpSumBtn" ? (
        <div id='lumpSum'>
          <h3>Lump sum payment</h3>
          <p>
            The lump sum payment is a modality in which the budget is allocated for each contracted service.
          </p>
          <p>
            Charging 50% in advance and the remaining 50% upon delivery of the product.
          </p>
        </div>
      ) : btnSeleccionado === "subscriptionBtn" && (
        <div id='subscription'>
          <h3>Subscription</h3>
          <p>The subscription is a 6-month contract, which depending on the subscription acquired, provides various services during the subscribed period.</p>
          <p>Depending on the contracted subscription, you can have:
            <ul>
              <li>Website development and updates</li>
              <li>Monthly digital flyers</li>
              <li>Digital menu with QR code</li>
              <li>Availability of our team from Monday to Friday during our day shift</li>
            </ul>
          </p>
        </div>
      )}
      </div>
    </div>

  )
}

export default Modalidad