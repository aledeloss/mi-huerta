/* eslint-disable no-restricted-globals */
import Carrot from "./components/Carrot/Carrot";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import LocalStorageModal from '../../components/LocalStorageModal/LocalStorageModal';

const Home = ({ history }) => {

  return (
    <div className="home-app-container">
      <div className="home-app-content">
        <div className="home-app-greeting">
          <h1>¿Tenés ganas de armar una huerta?</h1>
          <h1>¡Tocá la zanahoria y comencemos!</h1>
        </div>
        <div className="carrot-container">
          <Carrot history={history} />
        </div>
      </div>
      <Footer />
      <LocalStorageModal />
    </div>
  );
};

export default Home;
