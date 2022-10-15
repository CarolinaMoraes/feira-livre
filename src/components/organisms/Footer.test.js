import React from "react";
import { render } from "test-utils";

import Footer from "./Footer";

test('it renders correctly', () => {
  const { asFragment } = render(<Footer />)

  expect(asFragment()).toMatchSnapshot();
});
