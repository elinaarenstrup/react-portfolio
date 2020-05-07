import React from "react";
import styled from "styled-components/macro";
import { ProjectCard } from "./ProjectCard";

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 72px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;
`;

const Text2 = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  margin: 0 0 30px 0;
  padding: 5px 15px;
  color: #000;
  background-color: yellow;
`;

const Paragraph = styled.p`
  margin: 0 auto 30px;
  display: block;
  text-align: left;
  font-family: "Roboto";
  font-size: 30px;
  color: #000;
`;

const BolderText = styled.h2`
  display: inline;
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  text-align: center;
  color: #000;
`;

const Link = styled.a`
  display: inline;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  color: #000;
  cursor: pointer;

  :hover {
    color: yellow;
  }
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 100px;
  background-color: #fff;
`;

const OtherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 100px 0 0 0;
  background-color: #fff;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 100px;
  background-color: #fff;
`;

export const Projects = () => {
  return (
    <ProjectsDiv>
      <Text>Featured projects</Text>
      <CardDiv>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CardDiv>
      <OtherContainer>
        <Text2>Other projects</Text2>
        <Paragraph>
          <BolderText>Title </BolderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          <Link>...</Link>
        </Paragraph>
        <Paragraph>
          <BolderText>News site </BolderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          <Link>...</Link>
        </Paragraph>
        <Paragraph>
          <BolderText>News site </BolderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          <Link>...</Link>
        </Paragraph>
        <Paragraph>
          <BolderText>News site </BolderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          <Link>...</Link>
        </Paragraph>
      </OtherContainer>
    </ProjectsDiv>
  );
};
