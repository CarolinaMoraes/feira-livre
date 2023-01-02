import React from "react"
import Error from "./Error"

import TakenImage from "drawings/Taken";

export default {
  title: "Components/Pages/Error",
  component: Error
}

export const usage = () => (
  <Error image={<TakenImage />} title="Página não encontrada" description="A página informada não existe"></Error>
);
