import React from "react";
import { render, screen } from "test-utils";

import Feature from "./Feature";


test('renders the title', () => {
  render(<Feature title="My title"></Feature>);

  expect(screen.getByText("My title")).toBeInTheDocument();
});

test('renders the children', () => {
  render(<Feature>My children</Feature>);

  expect(screen.getByText("My children")).toBeInTheDocument();
});
