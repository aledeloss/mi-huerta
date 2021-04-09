import { useState, useContext } from 'react';
import GenericButton from '../GenericButton/GenericButton';
import GenericModal from '../GenericModal/GenericModal';
import RecordsContext from '../../contexts/RecordsContext'

const SaveRecordButton = ({ vegetable }) => {

    let [show, setShow] = useState(false);
    let handleShow = () => setShow(true);
  
    let [records, setRecords] = useContext(RecordsContext);

    //USEREDUCER:
    // const { state, dispatch } = useContext(RecordsContext)
    //function saveRecord(planta) {
    //     let newSeed = {
    //       //id: records.length ? records[records.length-1].id + 1 : 1,
    //       name: vegetable.name,
    //       sowDate: new Date(),
    //       harvestBegin: vegetable.harvest.from,
    //       harvestEnd: vegetable.harvest.to,
    //     }
    //     dispatch({
    //         type: "SOW",
    //         value: newSeed
    //     })
    // };

    function saveRecord(vegetable) {
        console.log(vegetable)
      let newSow = {
        id: records.length ? records[records.length-1].id + 1 : 1,
        name: vegetable.name,
        sowDate: new Date(),
        harvestBegin: vegetable.harvest.from,
        harvestEnd: vegetable.harvest.to,
      };
      if (records.length === 0) {
        setRecords([newSow]);
      } else {
        setRecords([...records, newSow]);
      }
    }
    // TODO: Make sow a class.

  let sowingModalContent = `Vas a registrar tu siembra de ${vegetable.name.toLowerCase()} con fecha de hoy en tu calendario.`;
  let sowingModalActionLabel = "Sí, sembrar";

    return (
        <>
        <GenericButton label="Sembrar" handleClick={handleShow} vegetable={vegetable}/>

        <GenericModal
        show={show}
        content={sowingModalContent}
        setShow={setShow}
        actionLabel={sowingModalActionLabel}
        action={() => {
          saveRecord(vegetable);
          setShow(false);
        }}
      />
    </>
    )
}
export default SaveRecordButton;
