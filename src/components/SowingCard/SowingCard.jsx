import { useContext } from "react";
import "./SowingCard.css";
import DayJS from "react-dayjs";
import SowingsContext from "../../contexts/SowingsContext";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SowingCard = ({ id, name, sowDate, harvestBegin, harvestEnd, onClick }) => {
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

  const handleDeleteClick = ({id}) => {
    console.log(`borraste el ${id}`)
    dispatch({ type: "DELETE_RECORD", payload: id })
  };

  let today = new Date(2021, 12, 25);
  //TODO hacer que ande el color según la fecha. Revisar cuenta de los días.

  return (
    <Row
      className={`seedCard-container ${
        sowDate + harvestBegin < today < sowDate + harvestEnd ? "green" : ""
      }`}
    >
      <Col xs={12} md={3} className="sowing-name-container">
        <Link to={`/detail/${name}`}>
          <h5 className="name">{name}</h5>
        </Link>
      </Col>
      <Col xs={3} md={2}>
      {renderSowDate}
      </Col>
      <Col xs={6} md={6}>
          Entre el {renderHarvestBegin} y el {renderHarvestEnd}
      </Col>
      <Col xs={1}
      >
        <div
          className="delete-icon-container"
          onClick={()=>handleDeleteClick({id})}>
        X
        </div>
      </Col>
    </Row>
  );
};

export default SowingCard;

//TODO: color verde cuando está para cosechar y rojo cuando se esta por pasar.