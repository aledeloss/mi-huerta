import React, { useContext } from "react";
import "./Records.css";
import Layout from "../../components/Layout/Layout";
import SeedCard from "./components/SeedCard/SeedCard";
import { Container, Col, Row } from "react-bootstrap/";
import DeleteAllButton from "../../components/DeleteAllButton/DeleteAllButton";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import RecordsContext from "../../contexts/RecordsContext";

const Records = ({ history }) => {
  let [records, setRecords] = useContext(RecordsContext);

  const recordsHeader = (
    <Row className="records-header-container">
      <Col xs={12} md={4} className="plant-name-container">
        <h5>Planta</h5>
      </Col>
      <Col>
        <h5>Siembra</h5>
      </Col>
      <Col>
        <h5>Cosecha</h5>
      </Col>
    </Row>
  );

  const recordsList = records.map((record) => {
    return (
      <SeedCard
        key={record.name}
        name={record.name}
        sowDate={record.sowDate}
        harvestBegin={record.harvestBegin}
        harvestEnd={record.harvestEnd}
        id={record.id}
      />
    );
  });

  const recordsPageContent = (
    <Container fluid="md" className="records-page-content">
      <GoBackButton history={history} />
      <div className="records-list">
        {records.length ? recordsHeader : ""}
        {!records.length ? (
          <div className="alert">¡Parece que aún no sembraste nada!</div>
        ) : (
          recordsList
        )}
        {records.length ? <DeleteAllButton /> : ""}
      </div>
    </Container>
  );

  return (
    <Layout mainContent={recordsPageContent} bgColor="#ef476fff" history={history}/>
  );
};

export default Records;
