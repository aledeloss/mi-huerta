import { useContext } from "react";
import "./SowingCard.scss";
import DayJS from "react-dayjs";
import SowingsContext from "../../contexts/SowingsContext";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SowingCard = ({
  id,
  name,
  sowDate,
  harvestBegin,
  harvestEnd,
  onClick,
}) => {
  const { dispatch } = useContext(SowingsContext);

  const renderSowDate = <DayJS format="DD/MM/YY">{sowDate}</DayJS>;
  const renderHarvestBegin = (
    <DayJS format="DD/MM/YY" add={{ days: harvestBegin }}>
      {sowDate}
    </DayJS>
  );
  const renderHarvestEnd = (
    <DayJS format="DD/MM/YY" add={{ days: harvestEnd }}>
      {sowDate}
    </DayJS>
  );

  const handleDeleteClick = ({ id }) => {
    console.log(`borraste el ${id}`);
    dispatch({ type: "DELETE_RECORD", payload: id });
  };

  let today = new Date(2021, 12, 25);
  //TODO hacer que ande el color según la fecha. Revisar cuenta de los días.

  return (
    <div
      className={`sowingCard ${
        sowDate + harvestBegin < today < sowDate + harvestEnd ? "green" : ""
      }`}
    >
      <Row className="sowingCard__content">
        <Col xs={12} md={3}>
          <Link to={`/detail/${name}`} className="sowingCard__name">
            {name}
          </Link>
        </Col>
        <Col xs={12} md={2} className="sowingCard__title">
          Siembra: {renderSowDate}
        </Col>
        <Col xs={12} md={6}>
          Cosecha: entre el {renderHarvestBegin} y el {renderHarvestEnd}
        </Col>
      </Row>
        <div
          className="sowingCard__deleteIcon"
          onClick={() => handleDeleteClick({ id })}
        >
          X
        </div>
    </div>
  );
};

export default SowingCard;

//TODO: color verde cuando está para cosechar y rojo cuando se esta por pasar.
