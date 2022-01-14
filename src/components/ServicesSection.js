import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { Layout, Description, Image, Hide } from "../styles";
import styled from "styled-components";
//animation
import { scrollReveal, titleAnimation } from "../animation";
import { motion } from "framer-motion";
//nosso Hook customizado
import { useScroll } from "../hooks/useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      className="services"
    >
      <Description className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card variants={titleAnimation} className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card variants={titleAnimation} className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card variants={titleAnimation} className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card variants={titleAnimation} className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image className="image">
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem;
  }
  @media screen and (max-width: 1400px) {
    padding: 2rem 5rem;
    display: block;
  }
  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;

const Cards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(motion.div)`
  width: 50%;
  min-width: 250px;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
