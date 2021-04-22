import { useContext } from 'react';
import GenericButton from '../GenericButton/GenericButton';
import SowingsContext from '../../contexts/SowingsContext';

const DeleteAllButton = () => {

    let { dispatch} = useContext(SowingsContext);

    const handleDeleteAllClick = () => {
      dispatch({ type: "DELETE_ALL" })
      console.log('borraste todos')
    }

    return (
        <GenericButton label={'Borrar todos'} handleClick={handleDeleteAllClick} />
    )
}

export default DeleteAllButton;