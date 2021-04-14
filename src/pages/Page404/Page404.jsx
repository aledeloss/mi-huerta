import React from 'react';
import Layout from '../../components/Layout/Layout';

const Page404 = ({ history }) => {
    const mainContent = 'Parece que la página que estás buscando no existe :('
    return (
        <Layout history={history} mainContent={mainContent} bgColor="#06d6a0ff"/>  
    )
}

export default Page404;