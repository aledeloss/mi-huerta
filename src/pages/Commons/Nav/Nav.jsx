import React from 'react';
import './Nav.css';

const Nav = ({ history }) => {

    // const About = () => (
    //     <div>
    //       <h2>Sobre este sitio</h2>
    //     </div>
    //   );
      
    //   const Seed = () => (
    //     <div>
    //       <h2>Sembrar</h2>
    //     </div>
    //   );
      
    //   const Records = () => (
    //     <div>
    //       <h2>Registro de siembra</h2>
    //     </div>
    //   );

    function handleonClickAbout() {
        history.push('about');
    };
    function handleonClickSembrar() {
        history.push('start');
    };

    function handleonClickRegistros() {
        history.push('records');
    };

    return (
        <div className='nav-container'>
            <ul>
                <li onClick={handleonClickAbout} >Sobre este sitio</li>
                <li onClick={handleonClickSembrar} >Sembrar</li>
                <li onClick={handleonClickRegistros} >Registros</li>
            </ul>
        </div>
    )
}

export default Nav;