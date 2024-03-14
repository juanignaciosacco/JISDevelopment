import React, { useEffect, useState } from 'react'

const QrsFrame = ({ qr }) => {

    const [qrR, setQrR] = useState({})

    useEffect(() => {
        setQrR(qr)
    }, [qr])

  return (
    <div className='frames'>
        <h2>{qrR.name}</h2>
        <iframe src={qrR.qr} title={qrR.name} />
    </div>
  )
}

export default QrsFrame