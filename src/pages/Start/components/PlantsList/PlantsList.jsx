/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */
import React from 'react';
import PlantCard from '../PlantCard/PlantCard';
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

    const CardList = data.map((planta, index) =>
        planta.siembra.includes(month) &&
        <Col>
            <PlantCard
                src={planta.img.src}
                alt={planta.img.alt}
                nombre={planta.nombre}
                planta={planta}
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