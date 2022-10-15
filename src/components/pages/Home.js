import React from "react"

import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";

import { FaUtensils, FaSeedling, FaMedkit, FaHandshake } from "react-icons/fa";
import BgSeller from "assets/hero-image-2.jpg";
import Section from "components/molecules/Section";

const Home = (props) => (
  <>
    <Hero image={BgSeller} >

      <Heading>
        <h1> Faça parte da <strong>Feira Livre</strong> </h1>
      </Heading>

      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button color='primary' variant='outlined'>Matricule-se agora</Button>
    </Hero>

    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaUtensils />} title="Qualidade 1">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaSeedling />} title="Qualidade 2">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMedkit />} title="Qualidade 3">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaHandshake />} title="Qualidade 4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
