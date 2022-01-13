import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/work/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
