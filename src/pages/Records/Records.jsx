import React, { useContext } from "react";
import "./Records.css";
import RecordsContext from "../../contexts/RecordsContext";
import SeedCard from "./components/SeedCard/SeedCard";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Container from "react-bootstrap/Container";

const Records = ({ history }) => {
  let [records, setRecord] = useContext(RecordsContext);

  let localRecords = records;
  console.log(records);

  let SowList = localRecords.map((sow, index) => (
    <div>
      {sow.name}
      <SeedCard
      // key={index}
      // name={sow.name}
      // sowDate={sow.sowDate}
      />
    </div>
  ));


  return (
    <div className="records-page-container">
      <Header history={history} />
      <Container className="records-content">
        {localRecords.length === 0 ? (
          <div className="alert">¡Parece que aún no sembraste nada!</div>
        ) : (
          localRecords.map((record) => {
            return (
                <SeedCard
                  name={record.name}
                  sowDate={record.sowDate.toString()}
                  harvestBegin={record.harvestBegin}
                  harvestEnd={record.harvestEnd}
                  />
            );
          })
        )}
      </Container>
      <Footer />

    </div>
  );
};

export default Records;

//TODO: Ver overflow y scroll.
