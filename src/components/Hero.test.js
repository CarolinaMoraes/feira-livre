import React from 'react'
import { render } from "test-utils";

import Hero from "./Hero";

test('renders Hero with children', () => {
  const view = render(
    <Hero>
      <p>Issa test</p>
    </Hero>
  );

  expect(view.getByText('Issa test')).toBeInTheDocument();
});

test('renders image background', () => {

  const imageUrl = "http://test/image.jpg";

  const { getByTestId } = render(<Hero image={imageUrl} />)

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: imageUrl
  });
})
