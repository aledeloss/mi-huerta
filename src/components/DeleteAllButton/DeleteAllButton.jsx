import { useContext } from 'react';
import GenericButton from '../GenericButton/GenericButton';
import RecordsContext from '../../contexts/RecordsContext';

const DeleteAllButton = () => {

    let [records, setRecords] = useContext(RecordsContext);

    const handleDeleteAllClick = () => {
      setRecords([])
      console.log('borraste todos')
    }

    return (
        <GenericButton label={'Borrar todos'} handleClick={handleDeleteAllClick} />
    )
}

export default DeleteAllButton;