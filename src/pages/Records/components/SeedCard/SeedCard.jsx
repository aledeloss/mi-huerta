import { useContext } from "react";
import "./SeedCard.css";
import DayJS from "react-dayjs";
import RecordsContext from "../../../../contexts/RecordsContext";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SeedCard = ({ id, name, sowDate, harvestBegin, harvestEnd, onClick }) => {
  const [records, setRecords] = useContext(RecordsContext);

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
    let newRecords = records.filter((record) => record.id !== id);
    setRecords(newRecords);
  };

  let today = new Date(2021, 12, 25);
  //TODO hacer que ande el color según la fecha. Revisar cuenta de los días.

  return (
    <Row
      className={`seedCard-container ${
        sowDate + harvestBegin < today < sowDate + harvestEnd ? "green" : ""
      }`}
    >
      <Col xs={12} md={4} className="sowing-name-container">
        <Link to={`/detail/${name}`}>
          <h5 className="name">{name}</h5>
        </Link>
      </Col>
      <Col>
      {renderSowDate}
      </Col>
      <Col>
          Entre el {renderHarvestBegin} y el {renderHarvestEnd}
      </Col>
      <div
        className="delete-icon-container"
        onClick={() => handleDeleteClick({ id })}
      >
        X
      </div>
    </Row>
  );
};

export default SeedCard;

//TODO: color verde cuando está para cosechar y rojo cuando se esta por pasar.
