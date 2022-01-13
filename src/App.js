import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
