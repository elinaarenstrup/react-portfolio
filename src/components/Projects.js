import React from "react";
import styled from "styled-components/macro";

export const Projects = () => {
  return (
    <ProjectsDiv>
      <Text>Featured projects</Text>
    </ProjectsDiv>
  );
};

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 72px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #fff;
`;
