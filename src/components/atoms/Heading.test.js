import React from 'react'
import Heading from './Heading'

import { render } from 'test-utils';

test('match snapshot', () => {
  const { asFragment } = render(<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});
