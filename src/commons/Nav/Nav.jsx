import React from 'react';

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

    function handleonClickSembrar() {
        history.push('start');
    };

    function handleonClickRegistros() {
        history.push('records');
    };

    return (
        <div>
            <ul>
                <li>Sobre este sitio</li>
                <li  onClick={handleonClickSembrar} >Sembrar</li>
                <li  onClick={handleonClickRegistros} >Registros</li>
            </ul>
        </div>
    )
}

export default Nav;