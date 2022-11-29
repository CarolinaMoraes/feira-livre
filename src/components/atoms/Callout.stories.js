import React from "react"
import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout"
import Button from "components/atoms/Button"

import SvgPlanting from "drawings/Planting";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia }
}

export const usage = () => (
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
);
