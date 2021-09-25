import React from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import ProjectDetail from "../../components/ProjectDetail.jsx";
import styled, { keyframes } from "styled-components";

const Project = () => {
  return (
    <Wrapper>
      <CardList>
        <ProjectCard title="Prolog;" />
        <ProjectCard title="서울어디까지가봤니?" />
        <ProjectCard title="돼지런한생활" />
        <ProjectCard title="KaKaoClone" />
        <ProjectCard title="React프로젝트(사내 세미나용)" />
      </CardList>
      <Content>
        <ProjectDetail />
      </Content>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div``;

const CardList = styled.div`
  display: flex;
  flex-flow: row;
  overflow: auto;
  padding: 1rem;
  height: 50%;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f36d5e;
  }
  ::-webkit-scrollbar-track {
    background-color: #f6b48d;
  }
`;

const Content = styled.div`
  background: white;
  height: 50%;
`;
