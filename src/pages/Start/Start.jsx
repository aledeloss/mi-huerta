import "./Start.css";
import Layout from "../../components/Layout/Layout";
import PlantsList from "./components/PlantsList/PlantsList";
import Container from "react-bootstrap/Container";

const Start = ({ history }) => {

  const date = new Date();
  const month = date.getMonth();
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

  const startPageContent = (
    <Container fluid="md" className="start-content">
      <div className="main">
        <h2>
          Estamos en <span className="month">{months[month]}</span>.
        </h2>
        <h2>Estas plantas podés sembrar este mes:</h2>
        <PlantsList />
      </div>
    </Container>
  );

  return (
  <Layout mainContent={startPageContent} bgColor="#118ab2ff" history={ history }/>
)};

export default Start;
