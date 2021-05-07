import React  from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import dark from "./styles/theme/dark"

const App: React.FC = () => {
	return (
    <ThemeProvider theme={dark} >
      <GlobalStyle/>
      <Layout/>
    </ThemeProvider>
		
	);
}

export default App;