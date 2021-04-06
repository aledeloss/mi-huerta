import GenericButton from '../GenericButton/GenericButton'
import './GoBackButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GoBackButton = ({ history }) => {

    const label = (
    <div>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Volver</span>
    </div>
    );

    console.log(label)

    const handleGoBackClick = () => {  
        history.goBack()
    }

    return (
        <div className="back-botton-container">
        <GenericButton label={label} handleClick={handleGoBackClick} />
        </div>
    )
}

export default GoBackButton