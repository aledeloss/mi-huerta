import { useState, useEffect } from "react";
import "./Start.scss";
import Layout from "../../components/Layout/Layout";
import PlantsList from "../../components/PlantsList/PlantsList";
import Container from "react-bootstrap/Container";
import FiltersForm from "../../components/FiltersForm/FiltersForm";

const Start = ({ history }) => {
  const date = new Date();

  const [filters, setFilters] = useState([
    date.toLocaleString("default", { month: "long" })
  ]);

  const handleInputChange = (evt) => {
    if (filters.includes(evt.target.name)) {
      setFilters(filters.filter((filter) => filter !== evt.target.name));
    } else {
      setFilters([...filters, evt.target.name]);
    }
    console.log(filters);
    return filters
  };


  const startPageContent = (
    <Container fluid="md" className="start-content">
      <div className="main">
        <FiltersForm
          handleInputChange={handleInputChange}
          filters={filters}
        />
        <PlantsList filters={filters} />
      </div>
    </Container>
  );

  return (
    <Layout
      mainContent={startPageContent}
      bgColor="#118ab2ff"
      history={history}
    />
  );
};

export default Start;
