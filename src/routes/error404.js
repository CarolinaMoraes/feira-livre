import React from "react"

import Error from "components/pages/Error";
import TakenImage from "drawings/Taken";

const Error404 = () => (
  <Error image={<TakenImage />} title="Página não encontrada" description="A página informada não existe"></Error>
);

export default Error404;
