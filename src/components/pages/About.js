import React from "react"
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import Breadcrumb from "components/atoms/Breadcrumb";

import BgFruits from "stories/assets/hero-image.jpg";
import AboutImage from "drawings/Cooking";

import CreatorImage1 from "assets/creators/creator1.jpg";
import CreatorImage2 from "assets/creators/creator2.jpg";
import CreatorImage3 from "assets/creators/creator3.jpg";
import CreatorImage4 from "assets/creators/creator4.jpg";
import CreatorImage5 from "assets/creators/creator5.jpg";
import CreatorImage6 from "assets/creators/creator6.jpg";

const ImageContainer = styled.div`
  text-align: center;

  svg{
    width: 100%;
    max-width: 380px;
    color: ${props => props.theme.colors.primary.main};
    height: auto;
  }
`;

const creators = [
  { id: 1, name: "Leonardo Gonçalves de Sá", avatar: CreatorImage1 },
  { id: 2, name: "Fernando Marques", avatar: CreatorImage2 },
  { id: 3, name: "Aline Ferreira dos Anjos", avatar: CreatorImage3 },
  { id: 4, name: "Gabriela Nakagawa", avatar: CreatorImage4 },
  { id: 5, name: "Gabriel Torres Deschamps", avatar: CreatorImage5 },
  { id: 6, name: "Cecília Souza", avatar: CreatorImage6 },
];

const About = () => {
  return (
    <>
      <Hero image={BgFruits}>
        <Heading><h1 data-testid="aboutPageTitle">Feira Livre</h1></Heading>
        <Breadcrumb items={[{ label: "Início", link: "/" }, { label: "Sobre", link: "" }]} />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae vero id eveniet enim reprehenderit ducimus fugiat nisi possimus, quasi tempore ad minus totam dicta, illum suscipit architecto, illo explicabo? Ducimus?</p>
            <p>A nihil expedita blanditiis eum provident officiis laudantium autem rem! Aut sed voluptate odio, quasi libero commodi eius corrupti nostrum numquam dolor est velit! Asperiores nihil a veniam veritatis corrupti.</p>
            <p>A maiores, ullam aliquid at dolores, dolorum debitis minus vitae, dignissimos saepe tempora quas nisi iusto ut rerum! Laudantium similique cum vel repellendus, commodi dolor optio ipsum sit excepturi sed.</p>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo vel eius impedit, laboriosam ducimus blanditiis dolore sapiente quidem ad doloribus! Ut rem explicabo maxime praesentium amet repudiandae, quaerat quos.</p>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Como começamos</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam placeat modi ullam illum, doloremque necessitatibus nisi consequuntur dolorum laudantium voluptatem blanditiis velit temporibus natus a officiis unde vitae minus perspiciatis.</p>
          </div>
          <div>
            <h4>Onde queremos chegar</h4>
            <p>Quasi libero suscipit impedit aut vitae adipisci, voluptatum expedita voluptas magnam eveniet, dolore tempore neque. Animi, illo pariatur. Blanditiis, quod. Tempore excepturi eius iste, ducimus iure at vel impedit? Eos.</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheça nossos idealizadores</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {creators.map(creator => (
            <Card key={creator.id}>
              <CardMedia image={creator.avatar}>
                <CardMediaDescription><h5>{creator.name}</h5></CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer></Footer>
    </>
  )
};

export default About;
