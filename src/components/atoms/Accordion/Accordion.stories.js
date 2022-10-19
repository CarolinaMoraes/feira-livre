import React from "react"
import Accordion from "./Accordion"
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion
}

export const usage = () => (
  <>  <Accordion title="Como realizo minha inscrição">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ea at sed magni ipsum, consequuntur, harum neque assumenda provident, eveniet molestiae deserunt quae similique modi aspernatur facilis dolor eius.
  </Accordion>
    <Accordion title="Como funciona o financiamento dos projetos">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ea at sed magni ipsum, consequuntur, harum neque assumenda provident, eveniet molestiae deserunt quae similique modi aspernatur facilis dolor eius.
    </Accordion>
    <Accordion title="Onde posso encontrar?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ea at sed magni ipsum, consequuntur, harum neque assumenda provident, eveniet molestiae deserunt quae similique modi aspernatur facilis dolor eius.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como realizo minha inscrição">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ea at sed magni ipsum, consequuntur, harum neque assumenda provident, eveniet molestiae deserunt quae similique modi aspernatur facilis dolor eius.
    </Accordion>
    <Accordion title="Como funciona o financiamento dos projetos">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ea at sed magni ipsum, consequuntur, harum neque assumenda provident, eveniet molestiae deserunt quae similique modi aspernatur facilis dolor eius.
    </Accordion>
    <Accordion title="Onde posso encontrar?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ea at sed magni ipsum, consequuntur, harum neque assumenda provident, eveniet molestiae deserunt quae similique modi aspernatur facilis dolor eius.
    </Accordion>
  </AccordionGroup>
);
