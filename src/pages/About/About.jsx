import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Layout from "../../components/Layout/Layout";

const About = ({ history }) => {
  const aboutPageContent = (
    <Container fluid="md" className="about-content">
      <div className="about__content">
        <p>
          En Mi Huerta podrás encontrar una guía para comenzar tu siembra en tu
          terraza, balcón o jardín. No necesitás saber mucho ni tener mucho
          lugar. Alcanza con tener un rinconcito con luz y, sobre todo, ¡muchas
          ganas! :)
        </p>
        <p>
          En la sección ¿Qué sembrar? encontrarás una lista con todo lo que
          podés sembrar este mes en la zona de Buenos Aires y alrededores. Si
          querés, podés usar los filtros para ver tus opciones para otros
          momentos del año (próximamente). Cuando decidas Sembrar, Mi Huerta
          guardará un registro con la fecha estimada de cosecha. Podrás
          consultarlo cuando quieras en la sección Mi Registros. Esta
          información se guarda en el navegador, así que ¡ojo! si borrás los
          datos o cambias de navegador tendrás que volver a registrar tu
          siembra.
        </p>
        <p>
          Créditos: Mi Huerta fue realizado con información tomada del
          Planificador ProHuerta 2020 del INTA. Las ilustraciones fueron
          diseñadas por Freepik de Flaticon, la animación es de 白寒 de Lottie y
          la paleta de colores la tomé de Coolors.
        </p>
        <p>
          ¡Espero que lo disfrutes! Cualquier feedback o comentario podés
          enviarlo a{" "}
          <a href="mailto:aledeloss@gmail.com" target="blank">
            aledeloss@gmail.com
          </a>
          .
        </p>
        <p>¡Gracias por visitar! 🙌🏽</p>
      </div>
    </Container>
  );

  return (
    <Layout
      mainContent={aboutPageContent}
      bgColor="#ffd166ff"
      history={history}
    />
  );
};

export default About;
