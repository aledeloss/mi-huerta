import React, { useContext } from "react";
import "./Records.scss";
import Layout from "../../components/Layout/Layout";
import SowingCard from "../../components/SowingCard/SowingCard";
import { Container, Col, Row } from "react-bootstrap/";
import DeleteAllButton from "../../components/DeleteAllButton/DeleteAllButton";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import SowingsContext from "../../contexts/SowingsContext";

const Records = ({ history }) => {
  let { state } = useContext(SowingsContext);

  const sowingsList = state.records.map((sowing) => {
    return (
      <SowingCard
        key={sowing.name}
        name={sowing.name}
        sowDate={sowing.sowDate}
        harvestBegin={sowing.harvestBegin}
        harvestEnd={sowing.harvestEnd}
        id={sowing.id}
      />
    );
  });

  const recordsPageContent = (
    <Container fluid="md" className="records">
      <GoBackButton history={history} />
      <div className="records__list">
        {!state.records.length ? (
          <div className="alert">¡Parece que aún no sembraste nada!</div>
        ) : (
          sowingsList
        )}
        <div className="records__deleteAll-container">
        {state.records.length ? <DeleteAllButton /> : ""}
        </div>
      </div>
    </Container>
  );

  return (
    <Layout mainContent={recordsPageContent} bgColor="#ef476fff" history={history}/>
  );
};

export default Records;
