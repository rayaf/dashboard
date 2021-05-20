import React  from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import List from "./pages/List";
import dark from "./styles/theme/dark"

const App: React.FC = () => {
	return (
    <ThemeProvider theme={dark} >
      <GlobalStyle/>
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
		
	);
}

export default App;