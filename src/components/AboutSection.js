import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { Layout, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <Layout className="about">
      <Description className="description">
        <div className="title">
          <Hide className="hide">
            <h2>We work to make</h2>
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
