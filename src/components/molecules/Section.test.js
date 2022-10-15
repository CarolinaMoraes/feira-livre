import React from "react";
import { render } from "test-utils";

import Section from "./Section";


test('it renders correctly', () => {
  const { asFragment } = render(<Section></Section>);

  expect(asFragment()).toMatchSnapshot();
});
