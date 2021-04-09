import React, { useContext } from "react";
import "./Records.css";
import SeedCard from "./components/SeedCard/SeedCard";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from "react-bootstrap/Container";
import useLocalStorage from '../../hooks/useLocalStorage';
import DeleteAllButton from '../../components/DeleteAllButton/DeleteAllButton';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import LocalStorageModal from '../../components/LocalStorageModal/LocalStorageModal';
import RecordsContext from '../../contexts/RecordsContext';

const Records = ({ history }) => {
  // let [records, setRecords] = useLocalStorage();
  // let [sowList, setSowList] = useState();
    let [records, setRecords] = useContext(RecordsContext);
  

  return (
    <div className="records-page-container">
      <LocalStorageModal />
      <Header history={history} />
      <Container className="records-content">

      <GoBackButton history={history}/>

        {!records.length ?  
          <div className="alert">¡Parece que aún no sembraste nada!</div>
         : 
          records.map((record) => {
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
          })
        }
        {records.length? <DeleteAllButton /> : ''}
        
      </Container>
      <Footer />

    </div>
  );
};

export default Records;

//TODO: Ver overflow y scroll.
