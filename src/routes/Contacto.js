import Formulario from "../components/Formulario"
import InfoContacto from "../components/InfoContacto"

const Contacto = () => {
  return (
    <div id="Contacto">
      <h1>Contact us!</h1>
      <div id="contacto_container">
          <Formulario />
          <InfoContacto />
      </div>
    </div>
  )
}

export default Contacto