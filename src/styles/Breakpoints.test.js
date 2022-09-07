import { breakAt, BreakpointSizes } from './Breakpoints'

const cases = [[BreakpointSizes.sm], [BreakpointSizes.md], [BreakpointSizes.lg], [BreakpointSizes.xl]];

test.each(cases)("break at %i", (size) => {
  expect(breakAt(size)).toEqual(`@media(min-width: ${size}px)`)
})
