import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { Layout, Description, Image, Hide } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services className="services">
      <Description className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card className="card">
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
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
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
