import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ history, mainContent, bgColor }) => {

    return (
        <div className="layout-container">
        <Header history={history} />
        <div className="main-page-container"  style={{backgroundColor: bgColor}}>
        {mainContent}
        </div>  
        <Footer />          
        </div>

    )
}

export default Layout;