import React from 'react';
import DayJS from 'react-dayjs';
import './CosechaData.css';

const cosechaData = ({ vegetable }) => {
  const sowingDate = new Date();
  const harvestBegin = (
    <DayJS format='DD/MM/YY' add={{ days: vegetable.harvest.from }}>
      {sowingDate}
    </DayJS>
  );
  const harvestEnd = (
    <DayJS format='DD/MM/YY' add={{ days: vegetable.harvest.to }}>
      {sowingDate}
    </DayJS>
  );

  return (
    <div className='harvest-data-container'>
      Si sembrás hoy podrás cosechar entre el {harvestBegin} y el {harvestEnd}.
    </div>
  );
};

export default cosechaData;
