import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const InfoContacto = () => {
  return (
    <div id="infoContacto_container">
        <h2>Información contacto</h2>
        <a href="tel:+18084590282"><p><i><FontAwesomeIcon icon={faPhone} /></i> +1 808 459 0282</p></a>
        <a href="https://wa.link/n2lzny" rel="noreferrer" target="_blank"><p><i><FontAwesomeIcon icon={faWhatsapp} /></i> +598 97 338 264</p></a>
        <a href="mailto:hi@jisdevelopment.com"><p><i><FontAwesomeIcon icon={faEnvelope} /></i> hi@jisdevelopment.com</p></a>
    </div>
  )
}

export default InfoContacto