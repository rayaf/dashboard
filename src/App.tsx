import React  from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

import Routes from './routes';
import dark from "./styles/theme/dark"

const App: React.FC = () => {
	return (
    <ThemeProvider theme={dark} >
      <GlobalStyle/>
      <Routes />
    </ThemeProvider>
		
	);
}

export default App;