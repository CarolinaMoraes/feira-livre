import React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

export const ThemeNames = {
  light: "light",
  ocean: "ocean",
  nature: "nature"
}

const light = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121"
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121"
    },
    border: "rgba(0,0,0,0.125)"
  }
};

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff"
      }
    }
  },
  nature: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#5bcc23",
        dark: "#2ca352",
        light: "#80ed4a",
        text: "#fff"
      }
    }
  }
};


const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>
    {children}
  </StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "nature"
}

export default ThemeProvider;
