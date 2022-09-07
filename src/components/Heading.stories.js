import React from 'react'
import { text } from "@storybook/addon-knobs"


import Heading from './Heading'

export default {
  title: "Components/Heading",
  component: Heading
};

export const usage = () => (
  <div>
    <Heading>
      <h1>{text("Title 1", "Título")}</h1>
    </Heading>
    <Heading>
      <h2>{text("Title 2", "Título")}</h2>
    </Heading>
    <Heading>
      <h3>{text("Title 3", "Título")}</h3>
    </Heading>
    <Heading>
      <h4>{text("Title 4", "Título")}</h4>
    </Heading>
    <Heading>
      <h5>{text("Title 5", "Título")}</h5>
    </Heading>
    <Heading>
      <h6>{text("Title 6", "Título")}</h6>
    </Heading>
  </div>
);
