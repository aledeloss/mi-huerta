import React, { useContext } from "react";
import "./PlantDetail.css";
import { useParams } from "react-router-dom";
import data from "../../../data/data.js";
import RecordsContext from "../../../contexts/RecordsContext";
import SaveRecordButton from "../../../components/SaveRecordButton/SaveRecordButton";
import DayJS from "react-dayjs";

const PlantDetail = ({ handleShow }) => {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const { vegetable } = useParams();

  const vegetableData = data.find((e) => {
    return e.name === vegetable;
  });

  let monthsArray = [];
  const sowingMonths = () => {
    for (const mes in vegetableData.sowing) {
      monthsArray.push(months[vegetableData.sowing[mes]]);
    }
    return monthsArray;
  };

  let [records, setRecords] = useContext(RecordsContext);

  const vegSowings = records.filter(
    (record) => record.name === vegetableData.name
  );
  console.log(vegSowings);

  const sowing = records.find((e) => e.name === vegetableData.name)
    ? vegSowings.map((sowing) => (
        <li>
          <DayJS format="DD/MM/YY">{sowing.sowDate.toString()}</DayJS>
        </li>
      ))
    : "¡No todavía!";

  return (
    <div className="detail-container">
      <div className="img-container">
        <img
          src={`vegetables-imgs/${vegetableData.img.src}.svg`}
          alt={vegetableData.img.alt}
        ></img>
      </div>
      <div className="vegetable-main-info">
        <h1>{vegetableData.name}</h1>
        <div>Meses de siembra: {sowingMonths().join(", ")}</div>
        <div>
          Días a cosecha: de {vegetableData.harvest.from} a{" "}
          {vegetableData.harvest.to}
        </div>
        <div>
          Distancia entre plantas: de {vegetableData.design.plantsSpacing.from}{" "}
          a {vegetableData.design.plantsSpacing.to}
        </div>
        <div>
          Distancia entre líneas: de {vegetableData.design.rowsSpacing.from} a{" "}
          {vegetableData.design.rowsSpacing.to}
        </div>
        <div>Asociar con: {vegetableData.design.associate.join(", ")}</div>
        <div>Rotar con con: {vegetableData.design.rotate.join(", ")}</div>
        <div>Tolera sombra: {vegetableData.design.shadow}</div>
        <div>Dificultad: {vegetableData.difficulty}</div>

        <div>
          <p>Siembra:</p>
          {sowing}
        </div>
      </div>
      <SaveRecordButton vegetable={vegetableData} />
    </div>
  );
};

export default PlantDetail;
