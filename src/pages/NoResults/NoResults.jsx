import Layout from '../../components/Layout/Layout';

const NoResults = ({ history }) => {
    const mainContent = 'No se encontraron resultados para tu búsqueda :('
    
    return (
        <Layout history={history} mainContent={mainContent} bgColor="#06d6a0ff"/>  
    )
}

export default NoResults;