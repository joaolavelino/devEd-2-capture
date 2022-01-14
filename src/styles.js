import styled from "styled-components";
import { motion } from "framer-motion";

//layout style
export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media screen and (max-width: 1400px) {
    padding: 2rem 5rem;
    display: block;
  }
  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media screen and (max-width: 1400px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 2rem;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
