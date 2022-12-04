import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";


test('it renders', () => {
  render(<ProductDetail />);

  const h1 = screen.getByTestId("productDetailTitle");
  expect(h1.textContent).toBe("Nome do serviço");
});
