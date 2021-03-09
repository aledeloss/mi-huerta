import React from "react";
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";

const About = ({ history }) => {
  return (
    <div>
      <Header  history={history}/>
      Sobre Mi Huerta
      <Footer />
    </div>
  );
};

export default About;
