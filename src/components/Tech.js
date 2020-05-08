import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 50px 0;
  color: #000;

  @media screen and (max-width: 600px) {
    font-size: 42px;
    margin: 0 0 20px;
  }
`;

const TechDiv = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: yellow;

  @media screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;

const TechHeader = styled.div`
  margin: 0;
`;

const TechGrid = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const TechText = styled.p`
  font-family: "Bebas Neue";
  font-size: 30px;
  margin: 5px;
  padding: 5px 15px;
  background-color: #000;
  color: #fff;

  :hover {
    background-color: #e92272;
    color: #000;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Tech = () => {
  return (
    <TechDiv>
      <TechHeader>
        <Text>Tech</Text>
      </TechHeader>
      <TechGrid>
        <TechText>HTML</TechText>
        <TechText>CSS</TechText>
        <TechText>Javascript Es6</TechText>
        <TechText>React</TechText>
        <TechText>Jsx</TechText>
        <TechText>React Native</TechText>
        <TechText>Redux</TechText>
        <TechText>Node.js</TechText>
        <TechText>API:s</TechText>
        <TechText>React hooks</TechText>
        <TechText>Github</TechText>
        <TechText>VS Code</TechText>
        <TechText>Slack</TechText>
        <TechText>Pair-programming</TechText>
        <TechText>Mob-programming</TechText>
        <TechText>Adobe Photoshop</TechText>
        <TechText>Adobe Illustrator</TechText>
        <TechText>Adobe XD</TechText>
      </TechGrid>
    </TechDiv>
  );
};
