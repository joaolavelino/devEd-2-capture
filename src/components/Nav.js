import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About us</Link>
          {url === "/" ? (
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
            />
          ) : (
            ""
          )}
        </li>
        <li>
          <Link to="/work">Our work</Link>
          {url.includes("/work") ? (
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
            />
          ) : (
            ""
          )}
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
          {url === "/contact" ? (
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
            />
          ) : (
            ""
          )}
        </li>
      </ul>
    </StyledNav>
  );
};

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0;
  margin-top: 0.2rem;
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 8vh;
  height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    @media screen and (max-width: 425px) {
      width: 100%;
      justify-content: space-between;
    }
  }
  #logo {
    font-family: "Righteous", sans-serif;
    font-size: 2rem;
  }
  li {
    padding-left: 5rem;
    position: relative;
    @media screen and (max-width: 425px) {
      padding-left: 0;
      width: 25%;
    }
  }

  @media screen and (max-width: 425px) {
    height: 15vh;
    padding: 1rem 4rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Nav;
