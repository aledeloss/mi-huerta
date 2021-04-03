import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import GenericButton from '../GenericButton/GenericButton';

const DeleteAllButton = () => {

    let [records, setRecords] = useLocalStorage();

    const handleDeleteAllClick = () => {
      setRecords([])
      console.log('borraste todos')
    }

    return (
        <GenericButton label={'Borrar todos'} handleClick={handleDeleteAllClick} />
    )
}

export default DeleteAllButton;