import "./Start.css";
import Layout from "../../components/Layout/Layout";
import PlantsList from "./components/PlantsList/PlantsList";
import Container from "react-bootstrap/Container";
import { SowingsProvider} from "../../contexts/SowingsContext";
import FiltersForm from "../../components/FiltersForm/FiltersForm";

const Start = ({ history }) => {

  const date = new Date();

  const startPageContent = (
    <Container fluid="md" className="start-content">
      <div className="main">
        <h2>
          Estamos en <span className="month">{date.toLocaleString('default', { month: 'long' })}</span>.
        </h2>
        <h2>Estas plantas podés sembrar este mes:</h2>
        <FiltersForm />
        <PlantsList />
        <SowingsProvider>
        </SowingsProvider>
      </div>
    </Container>
  );

  return (
  <Layout mainContent={startPageContent} bgColor="#118ab2ff" history={ history }/>
)};

export default Start;
