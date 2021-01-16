/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
// import DayJS from 'react-dayjs';
import PlantCard from '../PlantCard/PlantCard';
// import CosechaData from '../CosechaData/CosechaData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantsList.css';
import data from '../../../../data/data';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import Palette from '../../data/palette';




const PlantsList = () => {

    const date = new Date();
    const month = date.getMonth();

    let [siembra, setSiembra] = useState();
    let [record, setRecord] = useState([]);

    function saveRecord(planta) {
        
        setSiembra({
            planta: planta.nombre,
            fecha: date
            // ,
            // cosechaInicio: <DayJS format="DD/MM/YYYY"add={ { days: planta.cosecha[0] } }>{date}</DayJS>,
            // cosechaFin: <DayJS format="DD/MM/YYYY"add={ { days: planta.cosecha[1] } }>{date}</DayJS> 
        })

        setTimeout(()=>{
            setRecord([ ...record, siembra]);
            console.log(record);
        }, 5000);


        console.log(planta.nombre);
           
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
        <Container className='PlantsList-container'>
            <Row>
                {CardList}
            </Row>
        </Container>
    )
}

export default PlantsList;