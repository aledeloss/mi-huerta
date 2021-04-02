import React from 'react';
import DayJS from 'react-dayjs';

import 'bootstrap/dist/css/bootstrap.min.css';

const cosechaData = ({vegetable}) => {
    
    const sowingDate = new Date();
    const harvestBegin = <DayJS format="DD/MM/YY" add={ { days: vegetable.harvest.from } }>{sowingDate}</DayJS>
    const harvestEnd = <DayJS format="DD/MM/YY" add={ { days: vegetable.harvest.to } }>{sowingDate}</DayJS>
    
    
    return (
        <div>
        Si sembrás hoy podrás cosechar entre el {harvestBegin} y el {harvestEnd}.
        </div>
        )
}

export default cosechaData;
