import Formulario from "../components/Formulario"
import InfoContacto from "../components/InfoContacto"
import { useLanguage } from "../context/LanguageContext"

const Contacto = () => {

  const { language } = useLanguage()

  return (
    <div id="Contacto">
    { language === ' en' ? 
    <>
      <h2>Contact us!</h2>
      <div id="contacto_container">
          <Formulario />
          <InfoContacto />
      </div>
    </>
    :
    <>
      <h2>Contactenos!</h2>
      <div id="contacto_container">
          <Formulario />
          <InfoContacto />
      </div>
    </>
    }
    </div>
  )
}

export default Contacto