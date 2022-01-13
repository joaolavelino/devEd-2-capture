import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import {
  titleAnimation,
  dreamAnimation,
  fade,
  photoAnimation,
} from "../animation";

const AboutSection = () => {
  return (
    <Layout className="about">
      <Description className="description">
        <div className="title">
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image className="image">
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
    </Layout>
  );
};

//Styled Components

export default AboutSection;
