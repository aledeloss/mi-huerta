import React from 'react';
import DayJS from 'react-dayjs';

import 'bootstrap/dist/css/bootstrap.min.css';

const CosechaData = ({planta}) => {
    
    const siembra = new Date();
    const cosechaInicio = <DayJS format="DD/MM/YYYY"add={ { days: planta.cosecha[0] } }>{siembra}</DayJS>
    const cosechaFin = <DayJS format="DD/MM/YYYY"add={ { days: planta.cosecha[1] } }>{siembra}</DayJS>
    
    
    return (
        <div>
        Podrás cosechar entre el {cosechaInicio} y el {cosechaFin}.
        </div>
        )
}

export default CosechaData;
