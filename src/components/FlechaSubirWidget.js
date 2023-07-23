import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const FlechaSubirWidget = () => {
  return (
    <div className='widgetArrowUp'>
        <a href='#Inicio'><i><FontAwesomeIcon icon={faArrowAltCircleUp} /></i></a>
    </div>
  )
}

export default FlechaSubirWidget