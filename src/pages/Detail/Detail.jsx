import React from 'react';
import './Detail.css';
import PlantDetail from './PlantDetail/PlantDetail';
import data from '../../data/data.js';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Detail = ({ history }) => {
  let { vegetable } = useParams();

  const vegetableData = data.find((e) => {
    return e.name === vegetable;
  });

  return (
    <div className='page-container'>
      <Header history={history} />
      
      <div className='main'>
        <PlantDetail vegetable={vegetableData} />
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
