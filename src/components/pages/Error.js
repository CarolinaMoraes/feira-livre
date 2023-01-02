import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import styled from "styled-components";

const ImageContainer = styled.div`
  text-align: right;
  
  svg {
    width: 100%;
    height: auto;
    max-width: 4=500px;
    color: ${props => props.theme.colors.primary.main};
  }
`;

const ErrorTitle = styled.h1`
    margin-top: 0;
`;

const ErrorMessage = styled.p`
    margin-top: 24px 0;
    font-size: 1.2rem;
`;

const Error = ({ image, title, description }) => (
  <Section>
    <Grid md={2}>
      <div>
        <Heading><ErrorTitle>{title}</ErrorTitle></Heading>
        <ErrorMessage>{description}</ErrorMessage>
        <div><Button as={Link} to="/" color="primary">Voltar para a página inicial</Button></div>
      </div>
      <div>
        <ImageContainer>
          {image}
        </ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: ""
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Error;
