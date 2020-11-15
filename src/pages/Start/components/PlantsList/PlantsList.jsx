/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */
import React from 'react';
import PlantCard from '../PlantCard/PlantCard';
import './PlantsList.css';
// import { jsonData } from '../../../../data/data'; //Importa la data.
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Palette from '../../data/palette';

// Images imports
import GarlicImg from './vegetables-imgs/svg/018-garlic.svg';




const PlantsList = () => {

    const data = [
        {
            nombre: 'Acelga',
            siembra: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
            cosecha: [60, 80],
            img: {
                src: GarlicImg,
                alt: 'Garlic icon.'
            }
        },
        {
            nombre: 'Ajo',
            siembra: [2, 3, 4],
            cosecha: [250, 270],
            img: {
                src: GarlicImg,
                alt: 'Garlic icon.'
            }
        },
        {
            nombre: 'Albahaca',
            siembra: [7, 8, 9, 10],
            cosecha: [80, 100],
            img: {
                src: GarlicImg,
                alt: 'Garlic icon.'
            }
        }
    ]

    const date = new Date();
    const month = date.getMonth();

    const CardList = data.map((planta, index) =>
        planta.siembra.includes(month) &&
        <Col>
            <PlantCard
                src={planta.img.src}
                alt={planta.img.alt}
                nombre={planta.nombre}
                cosechaInicio={planta.cosecha[0]}
                consechaFin={planta.cosecha[1]}
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