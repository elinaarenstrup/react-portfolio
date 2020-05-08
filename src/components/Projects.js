import React from "react";
import styled from "styled-components/macro";
import { ProjectCard } from "./ProjectCard";

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;

  :hover {
    color: #e92272;

    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;

    @-webkit-keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }
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
        <ProjectCard
          coverImage="https://images.unsplash.com/photo-1588871315923-90892643f48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          title="This is a title"
          paragraph="bla bla bla bla bla"
          link="https://github.com/elinaarenstrup/react-portfolio"
        />
        <ProjectCard
          coverImage="https://images.unsplash.com/photo-1588871315923-90892643f48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          title="This is another title"
          paragraph="bla bla bla bla bla..."
        />
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
