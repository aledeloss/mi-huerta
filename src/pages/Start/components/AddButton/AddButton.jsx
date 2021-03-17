import React, {setState} from 'react';

const AddButton = (planta, saveRecords) => {

    const [records, setRecord] = setState([]);

    return (
        <Button variant="primary" onClick={(e) => saveRecord(planta)}></Button>
    )
}

export default AddButton;