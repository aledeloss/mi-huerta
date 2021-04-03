import React, { useState } from "react";
import "./Records.css";
import SeedCard from "./components/SeedCard/SeedCard";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from "react-bootstrap/Container";
import useLocalStorage from '../../hooks/useLocalStorage';
import DeleteAllButton from '../../components/DeleteAllButton/DeleteAllButton';

const Records = ({ history }) => {
  let [records, setRecords] = useLocalStorage();
  let [sowList, setSowList] = useState();
  
  const handleDeleteAllClick = () => {
    setRecords([])
    console.log('borraste todos')
  }

  // useEffect(() => {
  //   setSowList(<Container className="records-content">
  //   {!records.length ?  
  //     <div className="alert">¡Parece que aún no sembraste nada!</div>
  //    : 
  //     records.map((record) => {
  //       return (
  //           <SeedCard
  //             key={record.name} 
  //             name={record.name}
  //             sowDate={record.sowDate}
  //             harvestBegin={record.harvestBegin}
  //             harvestEnd={record.harvestEnd}
  //             id={record.id}
  //             />
  //       );
  //     })
  //   }
  // </Container>);
  //   },[records]);
  
  //   useEffect(() => {
  //     console.log('records cambió')
  //   }, [records])


  return (
    <div className="records-page-container">
      <Header history={history} />
      {/* <div>{sowList}</div> */}
      <Container className="records-content">
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
