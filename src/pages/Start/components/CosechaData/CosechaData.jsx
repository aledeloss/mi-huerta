import React from 'react';
import DayJS from 'react-dayjs';

import 'bootstrap/dist/css/bootstrap.min.css';

const CosechaData = ({vegetable}) => {
    
    const siembra = new Date();
    const cosechaInicio = <DayJS format="DD/MM/YY" add={ { days: vegetable.cosecha[0] } }>{siembra}</DayJS>
    const cosechaFin = <DayJS format="DD/MM/YY" add={ { days: vegetable.cosecha[1] } }>{siembra}</DayJS>
    
    
    return (
        <div>
        Si sembrás hoy podrás cosechar entre el {cosechaInicio} y el {cosechaFin}.
        </div>
        )
}

export default CosechaData;
