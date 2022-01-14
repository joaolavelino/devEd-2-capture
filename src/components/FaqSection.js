import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "../hooks/useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      className="faq"
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              debitis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              debitis.
            </p>
          </div>
        </Toggle>

        <Toggle title={"Different payment methods?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              debitis.
            </p>
          </div>
        </Toggle>
        <Toggle title={"What products do you offer?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              debitis.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
    @media screen and (max-width: 425px) {
      padding: 1rem 0;
    }
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
    @media screen and (max-width: 425px) {
      padding: 1rem 0;
    }
  }
  @media screen and (max-width: 1400px) {
    padding: 2rem 5rem;
    display: block;
  }
  @media screen and (max-width: 425px) {
    padding: 2rem 1rem;
    font-size: 50%;
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default FaqSection;
