import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "react-bootstrap/Container";

const About = ({ history }) => {
  return (
    <div className="about-page-container">
      <Header history={history} />
      
      <Container className="about-content">
        <div className="description">
          <p>
            Este sitio nació como un proyecto que cruzaba dos fuertes
            inquietudes personales durante la primera etapa de la cuarentena:
            Mantener la huerta y aprender programación.
          </p>
          <p>
            Surgió como respuesta a una necesidad real que tenía de saber qué
            podía sembrar en qué momento, y captó mi interés lo suficiente como
            para dedicar muchas horas a pensar el diseño, probarla y volverla
            hacer.
          </p>
          <p>
            Mi Huerta fue una excusa ideal para buscar recursos, aprender nuevas
            tecnologías, trabajar mucho y con ganas. Estoy convencida de que
            desarrollar Mi Huerta fue un proceso muy valioso.
            {/* Por eso intenté registrarlo aquí */}
          </p>
          <p>
            ¡Espero que lo disfrutes y te sirva tanto como a mí! Agradezco
            cualquier feedback o comentario en aledeloss@gmail.com
          </p>
        </div>
        <div className="créditos">
          <p>
            Este sitio fue realizado con información tomada del Planificador
            ProHuerta 2020 del INTA.
          </p>
          <p>Las ilustraciones fueron diseñadas por [Autor] de Flaticon.</p>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
