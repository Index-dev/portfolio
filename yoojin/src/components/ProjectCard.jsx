import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectCard = ({ title }) => {
  return (
    <Wrapper>
      <Image>Image</Image>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
  margin: 1rem;
`;
const Image = styled.div`
  border: 1px solid white;
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  border: 1px solid white;
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default ProjectCard;
