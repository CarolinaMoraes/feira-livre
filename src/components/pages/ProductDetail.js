import React from "react"

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, { CalloutBody, CalloutMedia, CalloutActions } from "components/atoms/Callout";
import Button from "components/atoms/Button";

import BgFruits from "stories/assets/hero-image.jpg";
import SvgPlanting from "drawings/Planting";
import { FaIdCard, FaIdBadge, FaHome, FaScroll } from "react-icons/fa";
import styled from "styled-components";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = (props) => (
  <>
    <Hero image={BgFruits}>
      <Heading>
        <h1>Nome do serviço</h1>
      </Heading>
    </Hero>
    <Section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum vero magnam quis ipsam labore modi, eaque accusamus perferendis aperiam, magni nemo porro obcaecati illum laboriosam eius, recusandae omnis maiores.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum vero magnam quis ipsam labore modi, eaque accusamus perferendis aperiam, magni nemo porro obcaecati illum laboriosam eius, recusandae omnis maiores.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum vero magnam quis ipsam labore modi, eaque accusamus perferendis aperiam, magni nemo porro obcaecati illum laboriosam eius, recusandae omnis maiores.</p>

      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdBadge />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Quero fazer parte</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident quidem officiis ab magnam placeat aut rerum suscipit sapiente officia illum reiciendis, tempora assumenda odit sint ratione vero perferendis repellat.</p>
          <CalloutActions>
            <Button color="primary">Registrar</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SvgPlanting />
        </CalloutMedia>
      </Callout>
      <Footer />
    </Section>
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
