/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */

import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//components and data imports
import PlantCard from '../PlantCard/PlantCard';
import './PlantsList.css';
import data from '../../../../data/data';
import RecordsContext from '../../../../contexts/RecordsContext';

//react-bootstrap imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const PlantsList = () => {

    const date = new Date();
    const month = date.getMonth();

  let [records, setRecord] = useContext(RecordsContext)

    function saveRecord(planta) {

        let newSeed = {
            nombre: planta.nombre,
            siembra: new Date(),
            cosecha: planta.cosecha[0]
        }
        if(newSeed) {
           setRecord(records => [...records, newSeed]);;
        };
        console.log(records);

    // localStorage.setItem("calendario", JSON.stringify(records));
    };

    const CardList = data.map((planta, index) =>
        planta.siembra.includes(month) &&
        <Col>
            <PlantCard
                key={index}
                src={planta.img.src}
                alt={planta.img.alt}
                nombre={planta.nombre}
                planta={planta}
                saveRecord={saveRecord}
            />
        </Col>
    );

    return (
            <Container className="">
                <Row className='plantsList-container'>
                <RecordsContext.Consumer>
                    {cardsList => (CardList)}
                </RecordsContext.Consumer>
                </Row>
            </Container>
    )
}

export default PlantsList;