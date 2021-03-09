import React, { useContext } from "react";
import './Records';
import RecordsContext from "../../contexts/RecordsContext";
// import SeedCard from './components/SeedCard/SeedCard';
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";

const Records = ({ history }) => {
  let [records, setRecord] = useContext(RecordsContext);

  return (
    <div>
      <Header history={history} />
      <div className="records">
        {records.map((record) => (
          <div>{record.nombre}</div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Records;
