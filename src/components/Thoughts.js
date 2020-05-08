import React from "react";
import styled from "styled-components/macro";
import { ThoughtText } from "./Thought";

const Text2 = styled.h2`
  font-family: "Bebas Neue";
  font-size: 72px;
  text-align: left;
  padding: 10px 30px;
  margin: 0 0 10px 0;
  color: #e92272;
  display: inline;

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

  @media screen and (max-width: 600px) {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
`;

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;
  display: inline;

  @media screen and (max-width: 600px) {
    font-size: 42px;
    margin: 0 0 5px 0;
  }
`;

const ThoughtsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  height: 100%;
  background-color: #f1f1f1;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

const ThoughtsContainer = styled.div`
  align-self: center;
  margin: 0;
  width: 800px;
  background: #fff;
  padding: 50px 20px;

  @media screen and (max-width: 600px) {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
  }
`;

const HeaderContainer = styled.div`
  margin: 100px 0 30px 0;

  @media screen and (max-width: 600px) {
    margin: 50px 0 20px 0;
  }
`;

const Headline = styled.h3`
  font-family: "Bebas Neue";
  font-size: 42px;
  text-align: center;
  margin: 30px auto;
  padding: 5px 15px;
  color: #000;
`;

const Paragraph = styled.p`
  display: block;
  font-family: "Roboto";
  font-size: 30px;
  color: #000;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const ImgBox = styled.div`
  width: 800px;
  height: 500px;
  margin: 0;
  background-color: #e92272;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;

const Link = styled.a`
  display: block;
  font-family: "Roboto";
  font-size: 24px;
  color: #000;
  padding-right: 50px;
  text-align: right;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    color: #e92272;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    padding-right: 10px;
  }
`;

const OtherThoughts = styled.div`
  margin: 30px 0 0 0;

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const Thoughts = () => {
  return (
    <ThoughtsDiv>
      <HeaderContainer>
        <Text2>My</Text2>
        <Text>thoughts</Text>
      </HeaderContainer>
      <ThoughtsContainer>
        <ImgBox />
        <Headline>Have you ever heard of a crazy Tech-horse?</Headline>
        <Paragraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Paragraph>
        <Link href="">Read more...</Link>
      </ThoughtsContainer>
      <OtherThoughts>
        <ThoughtText
          title="Title"
          paragraph="Description of thoughts..."
          link=""
        />
        <ThoughtText
          title="Title 2"
          paragraph="Description of thoughts..."
          link=""
        />
        <ThoughtText
          title="Title 3"
          paragraph="Description of thoughts..."
          link=""
        />
      </OtherThoughts>
    </ThoughtsDiv>
  );
};
