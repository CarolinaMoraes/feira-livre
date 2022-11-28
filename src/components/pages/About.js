import React from "react"
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import BgFruits from "stories/assets/hero-image.jpg";
import AboutImage from "drawings/Cooking";

const ImageContainer = styled.div`
  text-align: center;

  svg{
    width: 100%;
    max-width: 380px;
    color: ${props => props.theme.colors.primary.main};
    height: auto;
  }
`;

const About = () => (
  <>
    <Hero image={BgFruits}>
      <Heading><h1>Feira Livre</h1></Heading>
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
          <h4>Missão</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam placeat modi ullam illum, doloremque necessitatibus nisi consequuntur dolorum laudantium voluptatem blanditiis velit temporibus natus a officiis unde vitae minus perspiciatis.</p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>Quasi libero suscipit impedit aut vitae adipisci, voluptatum expedita voluptas magnam eveniet, dolore tempore neque. Animi, illo pariatur. Blanditiis, quod. Tempore excepturi eius iste, ducimus iure at vel impedit? Eos.</p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos idealizadores</h2>
      </Heading>
    </Section>
    <Footer></Footer>
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
