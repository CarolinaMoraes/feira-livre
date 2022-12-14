import React from "react";
import { render, screen, fireEvent } from "test-utils";

import ProductGrid from "./ProductGrid";

function buildProducts(size) {
  const result = [];

  for (let index = 0; index < size; index++) {
    result.push({ id: index, title: `Title ${index}` });
  }

  return result;
}

const cases = [[1, 1], [2, 2], [3, 3], [4, 3], [6, 3]];

describe.each(cases)('with %i products', (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    render(<ProductGrid products={buildProducts(size)}></ProductGrid>);

    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  })

  test("show all the products when button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)}></ProductGrid>);

    await fireEvent.click(screen.getByText("Lista completa de serviços"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});

