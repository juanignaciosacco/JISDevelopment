import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const TextoInformativo = () => {
  const [verMas, setVerMas] = useState(false)
  const { language } = useLanguage()

  const clickHandler = () => {
    setVerMas(!verMas)
  }

  return (
    <div className='textoInformativo'>
      {language === 'en' ? (
        <>
          <p>
            We specialize in creating innovative and engaging web solutions that help our clients achieve their business goals. Our focus is on technical excellence and high-quality design to deliver exceptional user experiences.
          </p>
          {verMas && (
            <div>
              <p>
                For the frontend development, we utilize cutting-edge technologies like React, HTML, CSS, and SASS, while also leveraging the versatility of JavaScript and Bootstrap's responsive design capabilities...
              </p>
              <p>
                For backend development, we rely on the power of Java and Spring Boot...
              </p>
              <p>
                Our team also specializes in database analysis and design...
              </p>
              <p>
                User experience (UX) and user interface (UI) design are fundamental...
              </p>
              <p>
                Whether you need an attractive website or a high-performance web application...
              </p>
            </div>
          )}
          <button className='btn2' onClick={clickHandler}>
            {verMas ? 'View less' : 'View more'}
          </button>
        </>
      ) : (
        <>
          <p>
            Nos especializamos en crear soluciones web innovadoras y atractivas que ayudan a nuestros clientes a alcanzar sus objetivos comerciales...
          </p>
          {verMas && (
            <div>
              <p>
                Para el desarrollo frontend, utilizamos tecnologías de vanguardia como React...
              </p>
              <p>
                Para el desarrollo backend, confiamos en la potencia de Java y Spring Boot...
              </p>
              <p>
                Nuestro equipo también se especializa en el análisis y diseño de bases de datos...
              </p>
              <p>
                El diseño de experiencia de usuario (UX) y de interfaz de usuario (UI) es fundamental...
              </p>
              <p>
                Ya sea que necesites un sitio web atractivo o una aplicación web de alto rendimiento...
              </p>
            </div>
          )}
          <button className='btn2' onClick={clickHandler}>
            {verMas ? 'Ver menos' : 'Ver más'}
          </button>
        </>
      )}
    </div>
  )
}

export default TextoInformativo
