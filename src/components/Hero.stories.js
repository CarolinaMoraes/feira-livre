import React from 'react'
import { text } from "@storybook/addon-knobs"

import Hero from "./Hero";
import BgFruits from "../stories/assets/hero-image.jpg";
import BgSeller from "../stories/assets/hero-image-2.jpg"

import Button from './Button';
import Heading from './Heading';

export default {
  title: "Components/Hero",
  component: Hero
};

export const usage = () =>
  <Hero image={BgFruits}>
    <h1>{text('Title', 'Faça parte da Feira Livre')} </h1>
    <p>A maior Feira Livre da América Latina</p>
  </Hero>

export const withList = () => (
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
);
