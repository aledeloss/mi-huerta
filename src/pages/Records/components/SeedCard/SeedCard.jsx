import React, { useState, useContext } from "react";
import "./SeedCard.css";
import DayJS from "react-dayjs";
import RecordsContext from "../../../../contexts/RecordsContext";
import { Link } from "react-router-dom";

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

  let today = new Date(2021, 12, 25)
  //TODO hacer que ande el color según la fecha. Revisar cuenta de los días.

  return (
    <div className={`seedCard-container ${(sowDate+harvestBegin) < today < (sowDate+harvestEnd) ? 'green' : ''}`}>
      <Link to={`/detail/${name}`}>
        <h5 className="name">{name}</h5>
      </Link>
      <p className="sowDate">{renderSowDate}</p>
      <p className="harvest">
        Entre el {renderHarvestBegin} y el {renderHarvestEnd}
      </p>
      <div
        className="delete-icon-container"
        onClick={() => handleDeleteClick({ id })}
      >
        X
      </div>
    </div>
  );
};

export default SeedCard;

//TODO: color verde cuando está para cosechar y rojo cuando se esta por pasar.
