import React from "react"

import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";

import { FaUtensils, FaSeedling, FaMedkit, FaHandshake } from "react-icons/fa";
import BgSeller from "assets/hero-image-2.jpg";
import AboutVideo from "assets/about-video.mp4";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";

import CozinhaSolidariaImage from "assets/cozinha-solidaria.jpg";
import ArmazemDoCampoImage from "assets/armazem-campo.jpeg";
import CooperativaImage from "assets/cooperativa.jpg";
import ProdutorImage from "assets/produtor.jpg";
import EducacaoImage from "assets/escola.jpg";
import AssentamentoImage from "assets/assentamento.jpg";

const products = [
  { id: 1, title: "Cozinha solidária", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: CozinhaSolidariaImage },
  { id: 2, title: "Armazém do Campo", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: ArmazemDoCampoImage },
  { id: 3, title: "Cooperativas", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: CooperativaImage },
  { id: 4, title: "Apoio ao pequeno produtor", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: ProdutorImage },
  { id: 5, title: "Educação no campo", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: EducacaoImage },
  { id: 6, title: "Assentamentos", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: AssentamentoImage }
];

const Home = () => (
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
    <Section inverse>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nossa missão</h2>
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nulla? Adipisci voluptates veniam officiis earum tempore repudiandae aliquid est eligendi,
            quibusdam, doloremque nobis dolore eveniet, magni numquam iure laboriosam voluptatibus.</p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" height="100%" autoPlay loop muted />
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça mais sobre os projetos</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>

    <Footer />
  </>
);

export default Home;
