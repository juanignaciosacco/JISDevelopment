import Formulario from "../components/Formulario"
import InfoContacto from "../components/InfoContacto"

const Contacto = () => {
  return (
    <div id="Contacto">
      <h2>Contact us!</h2>
      <div id="contacto_container">
          <Formulario />
          <InfoContacto />
      </div>
    </div>
  )
}

export default Contacto