import React from 'react'
import { render, screen } from "test-utils";

import Hero from "./Hero";

test('renders Hero with children', () => {
  render(
    <Hero>
      <p>Issa test</p>
    </Hero>
  );

  expect(screen.getByText('Issa test')).toBeInTheDocument();
});

test('renders image background', () => {

  const imageUrl = "http://test/image.jpg";

  render(<Hero image={imageUrl} />)

  expect(screen.getByTestId("hero")).toHaveStyleRule({
    backgroundImage: imageUrl
  });
})
