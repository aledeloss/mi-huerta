import React, { useContext } from "react";
import "./PlantDetail.scss";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.js";
import SowingsContext from "../../contexts/SowingsContext";
import SaveRecordButton from "../SaveRecordButton/SaveRecordButton";
import PlantImage from "../../components/PlantImage/PlantImage";
import DayJS from "react-dayjs";

const PlantDetail = ({ handleShow }) => {

  const { vegetable } = useParams();

  const vegetableData = data.find((e) => e.name === vegetable);

  let { state } = useContext(SowingsContext);

  const vegSowings = state.records.filter(
    (record) => record.name === vegetableData.name
  );

  const sowingsRender = state.records.find((e) => e.name === vegetableData.name)
    ? vegSowings.map((sowing) => (
        <p>
          <DayJS format="DD/MM/YY">{sowing.sowDate.toString()}</DayJS>
        </p>
      ))
    : "¡No todavía!";

  return (
    <div className="plant-detail">
      {/* <PlantImage vegetable={vegetableData} /> */}
      <div className="plant-detail__img-container">
        <img
          className="plant-detail-img"
          src={`/vegetables-imgs/${vegetableData.img.src}.png`}
          alt={vegetableData.img.alt}
        ></img>
      </div>
      <div className="plant-detail__info-block">
        <h1>{vegetableData.name}</h1>
        <div>Meses de siembra: {vegetableData.sowing.join(", ")}</div>
        <div>
          Días a cosecha: de {vegetableData.harvest.from} a{" "}
          {vegetableData.harvest.to}
        </div>
        <div>Dificultad: {vegetableData.difficulty}</div>
      </div>
      <div className="veg-info-block">
        <h4>Diseño de la huerta</h4>
        <div>
          Distancia entre plantas: de {vegetableData.design.plantsSpacing.from}{" "}
          a {vegetableData.design.plantsSpacing.to} cm
        </div>
        <div>
          Distancia entre líneas: de {vegetableData.design.rowsSpacing.from} a{" "}
          {vegetableData.design.rowsSpacing.to} cm
        </div>
        <div>Asociar con: {vegetableData.design.associate.join(", ")}</div>
        <div>Rotar con con: {vegetableData.design.rotate.join(", ")}</div>
        <div>Tolera sombra: {vegetableData.design.shadow}</div>
      </div>
      <div className="sowing-info-block">
        <h4>Registros de siembra:</h4>
        {sowingsRender}
      </div>

      <SaveRecordButton vegetable={vegetableData} />
    </div>
  );
};

export default PlantDetail;
