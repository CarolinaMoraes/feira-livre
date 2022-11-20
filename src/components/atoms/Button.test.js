import React from 'react'
import Button, { ButtonColors, ButtonsVariants } from './Button';
import { render, fireEvent, screen } from "test-utils";

test('renders a text', () => {
  render(
    <Button>Click here</Button>
  );

  expect(screen.getByText('Click here')).toBeInTheDocument();
});


test('trigger event on click', () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick} />);

  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toBeCalled();
});

test.each(
  Object.values(ButtonColors).map(color => [color])
)('renders with color %s', (color) => {
  const { asFragment } = render(<Button color={color} />);

  expect(asFragment()).toMatchSnapshot();
});

test.each(
  Object.values(ButtonsVariants).map(variant => [variant])
)('renders with variant %s', (variant) => {
  const { asFragment } = render(<Button variant={variant} />);

  expect(asFragment()).toMatchSnapshot();
});

test('renders with color primary and variant outlined', () => {
  const { asFragment } = render(<Button color="primary" variant="outlined" />);

  expect(asFragment()).toMatchSnapshot();
});

test('renders with color primary and variant link', () => {
  const { asFragment } = render(<Button color="primary" variant="link" />);

  expect(asFragment()).toMatchSnapshot();
});
