import React from "react"
import Feature from "./Feature"
import { FaUtensils, FaSeedling, FaMedkit, FaHandshake } from "react-icons/fa";
import Grid from "components/atoms/Grid";


export default {
  title: "Components/Atoms/Feature",
  component: Feature
}

export const usage = () => (
  <Feature icon={<FaUtensils />} title="Título">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </Feature>
);


export const withGrid = () => (
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
)
