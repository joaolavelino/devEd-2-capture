import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
  scrollReveal,
} from "../animation";
import { useScroll } from "../hooks/useScroll";

const OurWork = () => {
  const [element0, controls0] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ddd" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="Athlete movie scene"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element1}
        variants={fade}
        animate={controls1}
        initial="hidden"
      >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt="Racer movie scene"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="Good Times movie scene"
            />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    overflow: hidden;
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 8vh;
  width: 100%;
  height: 100vh;
  background-color: #23d997;
  z-index: 1;
`;

const Frame2 = styled(Frame1)`
  opacity: 0.7;
`;

const Frame3 = styled(Frame1)`
  opacity: 0.5;
`;

const Frame4 = styled(Frame1)`
  opacity: 0.3;
`;

export default OurWork;
