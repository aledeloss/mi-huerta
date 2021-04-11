import React from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Page404 = ({ history }) => {
    const mainContent = 'Parece que la página que estás buscando no existe :('
    return (
        <Layout history={history} mainContent={mainContent} history={history}/>  

    )
}

export default Page404;