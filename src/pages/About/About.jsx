import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "react-bootstrap/Container";
import useLocalStorage from "../../hooks/useLocalStorage";
// import GoBackButton from "../../components/GoBackButton/GoBackButton";

const About = ({ history }) => {
  let [records, setRecords] = useLocalStorage();

  return (
    <div className="about-page-container">
      <Header history={history} />
      {/* <GoBackButton history={history} /> */}
      <Container fluid="md" className="about-content">
        <div className="description">
          <p>
            Este sitio nació como un proyecto que cruzaba dos fuertes
            inquietudes personales durante la primera etapa de la cuarentena en
            2020: Mantener un pequeña huerta que tengo en mi terraza y aprender
            programación, un gran desafío que asumí con mucho gusto.
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
            desarrollar Mi Huerta fue y es un proceso muy valioso.
          </p>
          <p>
            ¡Espero que lo disfrutes y te sirva tanto como a mí! Agradezco
            cualquier feedback o comentario en{" "}
            <a href="mailto:aledeloss@gmail.com">aledeloss@gmail.com</a>.
          </p>
        </div>
        <div className="créditos">
          <p>
            Este sitio fue realizado con información tomada del Planificador
            ProHuerta 2020 del INTA. Las ilustraciones fueron diseñadas por
            Freepik de Flaticon y la paleta de colores la tomé de Coolors.
          </p>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
