import React from "react";
import { Link } from "react-router-dom";

import img from '../assets/jurado.png';

import { Container, Container__card, Container__text, Container__img, Container_btn } from './Styles.jsx'
function HomePage() {

  return (

    <Container>

      <Container__card>
        <Container__text>ya estan todos los participantes!</Container__text >
        <Container__img src={img} alt="el jurado calificando">
        </Container__img>
        <Link to="/Calificaciones">
          <Container_btn>
            ingresar
          </Container_btn>
        </Link>
      </Container__card>

    </Container>

  )
}



export default HomePage;