import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import pdf from "../assets/politicaPrivacidadDatos.pdf"

const Footer = () => {

    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/juan-ignacio-sacco/" target="_blank" rel="noreferrer">
                    <i><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
                <a href="https://github.com/juanignaciosacco?tab=repositories" target="_blank" rel="noreferrer">
                    <i><FontAwesomeIcon icon={faGithub} /></i>
                </a>
                <a href={pdf} target="_blank">Politicas de privacidad</a>
            </div>
        </div>
    )
}

export default Footer;