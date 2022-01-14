import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MovieState from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;

  const [movieList, setMovieList] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movieList.filter((e) => e.addres === url);
    if (currentMovie[0]) setMovie(currentMovie[0]);
  }, [movieList, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie frame" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie frame" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 5vh;
  position: relative;
  h2 {
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media screen and (max-width: 1400px) {
    min-height: 60vh;
    padding-top: 5rem;
  }
  @media screen and (max-width: 425px) {
    min-height: 50vh;
  }
`;

const Awards = styled.div`
  min-height: 30vh;
  display: flex;
  margin: 2rem;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1400px) {
    padding: 2rem 5rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0;
    display: block;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Component Award

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0;
  }
  @media screen and (max-width: 1400px) {
    padding: 2rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 425px) {
  }
`;

export default MovieDetail;
