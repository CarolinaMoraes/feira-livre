import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";


test('it renders', () => {
  render(<ProductDetail product={buildProduct()} />);

  // text from the fixture
  const productTitle = "Oriental Cotton Hat";

  // First way of doing it
  // const h1 = screen.getByTestId("productDetailTitle");
  // expect(h1.textContent).toBe(productTitle);

  // Second way of doing it
  expect(screen.getByText(productTitle, { selector: "h1" })).toBeInTheDocument();
});
