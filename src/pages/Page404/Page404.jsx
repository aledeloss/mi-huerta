import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Page404 = ({ history }) => {

    return (
        <div className="page404-container">
        <Header history={history} />
            <h1>Parece que la página que estás buscando no existe :(</h1>
        <Footer />
        </div>
    )
}

export default Page404;