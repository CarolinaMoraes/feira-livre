import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(()=>{
  jest.resetAllMocks();
})

test('it renders', () => {
  render(<About />);
  const h1 = screen.getByTestId("aboutPageTitle");
  expect(h1.textContent).toBe("Feira Livre");
});
