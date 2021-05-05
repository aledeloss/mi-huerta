import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ history, mainContent, bgColor }) => {

    return (
        <div className="layout">
        <Header history={history} />
        <div className="layout__main-page"  style={{backgroundColor: bgColor}}>
        {mainContent}
        </div>  
        <Footer />          
        </div>

    )
}

export default Layout;