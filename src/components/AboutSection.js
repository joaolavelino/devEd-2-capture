import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Layout className="about">
      <Description className="description">
        <div className="title">
          <Hide className="hide">
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 2 } }}
              initial={{ opacity: 0 }}
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide className="hide">
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </Layout>
  );
};

//Styled Components

export default AboutSection;
