import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const InfoContacto = () => {
  return (
    <div id="infoContacto_container">
        <h2>Información contacto</h2>
        <p><i><FontAwesomeIcon icon={faPhone} /></i> +54 299 550 6086</p>
        <p><i><FontAwesomeIcon icon={faWhatsapp} /></i> +598 97 338 264</p>
        <p><i><FontAwesomeIcon icon={faEnvelope} /></i> info@jisdevelopment.com</p>
    </div>
  )
}

export default InfoContacto