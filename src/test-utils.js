import React from 'react'
import ThemeProvider from "styles/ThemeProvider";
import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

const TestProvider = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </MemoryRouter>
)


export * from "@testing-library/react";

const customRender = (ui, options) => render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
