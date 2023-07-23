import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faReact, faHtml5, faCss3, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const WidgetTechnologies = () => {

    return (
        <div>
            <div className="widgetsTech">
                <i><FontAwesomeIcon icon={faCss3} /></i>
                <i><FontAwesomeIcon icon={faReact} /></i>
                <i><FontAwesomeIcon icon={faHtml5} /></i>
                <i><FontAwesomeIcon icon={faJava} /></i>
                <i><FontAwesomeIcon icon={faSass} /></i>
                <i><FontAwesomeIcon icon={faSquareJs} /></i>
                <i><FontAwesomeIcon icon={faDatabase} /></i>
            </div>
        </div>
    )
}

export default WidgetTechnologies;