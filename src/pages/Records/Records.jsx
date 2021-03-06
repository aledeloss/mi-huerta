import React, { useContext } from 'react';
import RecordsContext from '../../contexts/RecordsContext';
// import SeedCard from './components/SeedCard/SeedCard';
import Nav from '../../commons/Nav/Nav';
import Footer from '../../commons/Footer/Footer';


const Records = ({ history }) => {

    let [records, setRecord] = useContext( RecordsContext );


    return (    
        <div>
        <Nav  history={history}/>
            
            {records.map(record => 
                <div>{record.nombre}</div>
            )}
            <Footer />
        </div>        
    )
}

export default Records