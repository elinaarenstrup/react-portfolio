import React from "react";
import styled from "styled-components/macro";

const Text2 = styled.h2`
  font-family: "Bebas Neue";
  font-size: 72px;
  display: inline;
  text-align: left;
  padding: 10px 30px;
  margin: 0 0 10px 0;
  color: #e92272;

  :hover {
    color: pink;
    -webkit-animation: shake-horizontal 0.8s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;

    @-webkit-keyframes shake-horizontal {
      0%,
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70% {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px);
      }
      20%,
      40%,
      60% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
      }
      80% {
        -webkit-transform: translateX(8px);
        transform: translateX(8px);
      }
      90% {
        -webkit-transform: translateX(-8px);
        transform: translateX(-8px);
      }
    }
    @keyframes shake-horizontal {
      0%,
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70% {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px);
      }
      20%,
      40%,
      60% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
      }
      80% {
        -webkit-transform: translateX(8px);
        transform: translateX(8px);
      }
      90% {
        -webkit-transform: translateX(-8px);
        transform: translateX(-8px);
      }
    }
  }

  @media screen and (max-width: 820px) {
    font-size: 24px;
    padding: 5px;
    margin: 0 0 10px 0;
  }
`;

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  display: inline;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;

  @media screen and (max-width: 820px) {
    font-size: 42px;
    padding: px;
    margin: 0 0 10px 0;
  }
`;

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  margin: 0;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  margin: 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  width: 100%;
`;

const GreyDiv = styled.div`
  margin: 10px;
  width: 20%;
  padding: 20px;
  background-color: #f1f1f1;
`;

const WhiteDiv = styled.div`
  margin: 10px;
  width: 20%;
  padding: 20px;
  background-color: pink;
`;

const Headline = styled.h3`
  font-family: "Bebas Neue";
  font-size: 42px;
  text-align: center;
  margin: 30px auto;
  padding: 5px 15px;
  color: #000;

  @media screen and (max-width: 820px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  display: block;
  font-family: "Roboto";
  font-size: 24px;
  color: #000;

  @media screen and (max-width: 820px) {
    font-size: 18px;
  }
`;

export const Skills = () => {
  return (
    <SkillsDiv>
      <HeaderContainer>
        <Text>Tech &</Text>
        <Text2>skills</Text2>
      </HeaderContainer>
      <SkillsContainer>
        <GreyDiv>
          <Headline>CODE</Headline>
          <Paragraph>GitHub</Paragraph>
          <Paragraph>CSS3</Paragraph>
          <Paragraph>HTML5</Paragraph>
          <Paragraph>Javascript ES6</Paragraph>
        </GreyDiv>
        <WhiteDiv>
          <Headline>TOOLBOX</Headline>
          <Paragraph>Slack</Paragraph>
          <Paragraph>Github</Paragraph>
          <Paragraph>Mob/pair programming</Paragraph>
          <Paragraph>Photoshop</Paragraph>
          <Paragraph>Illustrator</Paragraph>
          <Paragraph>Visual Studio Code</Paragraph>
        </WhiteDiv>

        <GreyDiv>
          <Headline>MORE</Headline>
          <Paragraph>API:s</Paragraph>
          <Paragraph>Branding</Paragraph>
          <Paragraph>Strategy</Paragraph>
          <Paragraph>Web Accessibly</Paragraph>
          <Paragraph>Agile methodology</Paragraph>
          <Paragraph>Graphic design</Paragraph>
        </GreyDiv>

        <WhiteDiv>
          <Headline>UPCOMING</Headline>
          <Paragraph>React</Paragraph>
          <Paragraph>Node.js</Paragraph>
        </WhiteDiv>
      </SkillsContainer>
    </SkillsDiv>
  );
};
