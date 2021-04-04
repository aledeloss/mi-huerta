import './Detail.css';
import PlantDetail from './PlantDetail/PlantDetail';
import data from '../../data/data.js';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useLocalStorage from '../../hooks/useLocalStorage';

const Detail = ({ history }) => {

  let [records, setRecords] = useLocalStorage();
  let { vegetableName } = useParams();

  const vegetableData = data.find((e) => {
    return e.name === vegetableName;
  });


  return (
    <div className='detail-page-container'>
      <Header history={history} />
      
      <div className='detail-content'>
        <PlantDetail vegetable={vegetableData} />
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
