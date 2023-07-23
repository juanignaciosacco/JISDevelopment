import Formulario from "../components/Formulario"
import InfoContacto from "../components/InfoContacto"

const Contacto = () => {
  return (
    <div id="contacto">
      <h1>Contact us!</h1>
      <div id="contacto_container">
          <Formulario />
          <InfoContacto />
      </div>
    </div>
  )
}

export default Contacto