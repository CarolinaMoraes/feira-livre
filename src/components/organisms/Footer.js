import React from "react"
import styled from "styled-components";

import { FaPhone, FaBuilding, FaMousePointer, FaHandshake } from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Feira Livre</h6>
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae officia minus blanditiis quia magnam voluptatem, cumque laboriosam neque, architecto delectus eos provident illum adipisci. Consequuntur, dignissimos. Dicta, unde corrupti.</p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (11) 12345-6789</p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae officia minus blanditiis quia magnam voluptatem</p>
        </div>
        <div>
          <Heading>
            <h6>Outros links do projeto</h6>
            <p>
              <FooterLink target="_blank" href="https://www.cozinhasolidaria.com/">
                <IconContainer>
                  <FaMousePointer />
                </IconContainer> Site do Cozinha Solidária
              </FooterLink>
            </p>

            <p>
              <FooterLink target="_blank" href="https://apoia.se/cozinhasolidaria">
                <IconContainer>
                  <FaHandshake />
                </IconContainer> Apoia.se
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);


export default Footer;
