import React, {setState} from 'react';

const AddButton = (planta, saveRecords) => {

    const [records, setRecords] = setState([]);

    return (
        <Button variant="primary" onClick={(e) => saveRecord(planta)}></Button>
    )
}

export default AddButton;