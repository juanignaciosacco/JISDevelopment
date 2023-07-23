import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const InfoContacto = () => {
  return (
    <div id="infoContacto_container">
        <h2>Información contacto</h2>
        <a href="tel:+542995506086"><p><i><FontAwesomeIcon icon={faPhone} /></i> +54 299 550 6086</p></a>
        <a href="https://wa.link/n2lzny" rel="noreferrer" target="_blank"><p><i><FontAwesomeIcon icon={faWhatsapp} /></i> +598 97 338 264</p></a>
        <a href="mailto:info@jisdevelopment.com"><p><i><FontAwesomeIcon icon={faEnvelope} /></i> info@jisdevelopment.com</p></a>
    </div>
  )
}

export default InfoContacto