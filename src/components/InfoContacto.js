import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const InfoContacto = () => {
  return (
    <div id="infoContacto_container">
        <h2>Contact</h2>
        <a href="tel:+18084590282"><p><i><FontAwesomeIcon icon={faPhone} /></i><u>Call us!</u></p></a>
        <a href="https://wa.link/1t47yh" rel="noreferrer" target="_blank"><p><i><FontAwesomeIcon icon={faWhatsapp} /></i><u>Send a message!</u></p></a>
        <a href="mailto:hi@jisdevelopment.com"><p><i><FontAwesomeIcon icon={faEnvelope} /></i> hi@jisdevelopment.com</p></a>
    </div>
  )
}

export default InfoContacto