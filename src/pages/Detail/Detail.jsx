import "./Detail.css";
import Layout from "../../components/Layout/Layout";
import PlantDetail from "./PlantDetail/PlantDetail";
import data from "../../assets/data/data.js";
import { useParams } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { Container } from "react-bootstrap";

const Detail = ({ history }) => {
  let { vegetableName } = useParams();

  const vegetableData = data.find((e) => {
    return e.name === vegetableName;
  });

  const detailPageContent = (
    <Container fluid="md" className="detail-content">
      <GoBackButton history={history} />
      <PlantDetail vegetable={vegetableData} />
    </Container>
  );

  return (
    <Layout mainContent={detailPageContent} bgColor="#118ab2ff" history={history}/>
  );
};

export default Detail;
