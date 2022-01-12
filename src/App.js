import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//import Pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
