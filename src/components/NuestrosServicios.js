import React, { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const NuestrosServicios = () => {

    const { language } = useLanguage()

    useEffect(() => {
        console.log(language)
    })

  return (
    <div className='nuestrosServiciosTxt'>
    {language === 'en' ? 
        <div id = 'txtEng'>
            <p>
                At JIS Development, we build websites and software that work—simple as that. Whether you need a brand-new site, a fresh redesign, or a custom software solution, we’ve got you covered.
            </p>
            <p>
                - Web Development – From simple sites to complex web apps, we create fast, modern, and fully responsive websites.
            </p>
            <p>
                - Website Redesign – Is your website outdated? We’ll give it a fresh new look and better performance.
            </p>
            <p>
                - Software Development – Need a custom system? We develop software that fits your business perfectly.
            </p>
            <p>
                - We keep things simple, efficient, and focused on what really matters: results. Let’s build something awesome together!
            </p>
        </div>
        :
        <div id='txtEsp'>
            <p>
                En JIS Development creamos sitios web y software que realmente funcionan, así de simple. Ya sea que necesites un sitio nuevo, un rediseño o una solución de software a medida, estamos aquí para ayudarte.
            </p>
            <p>
                - Desarrollo Web – Desde sitios simples hasta aplicaciones web complejas, creamos páginas rápidas, modernas y totalmente responsivas.
            </p>
            <p>
                - Rediseño de Sitios Web – ¿Tu página web está desactualizada? Le damos un nuevo diseño y mejor rendimiento.
            </p>
            <p>
                - Desarrollo de Software – ¿Necesitas un sistema a medida? Desarrollamos software adaptado perfectamente a tu negocio.
            </p>
            <p>
                - Mantenemos las cosas simples, eficientes y enfocadas en lo que realmente importa: resultados. ¡Hagamos algo increíble juntos!
            </p>
        </div>
    }
    </div>
  )
}

export default NuestrosServicios