import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import Tema from "./Tema";


const App = () => (

  <AuthProvider>
    <Tema/>
    <RoutesApp />
    <GlobalStyle />
  
  </AuthProvider>
   
);

export default App;
