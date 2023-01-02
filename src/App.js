import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (

    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
