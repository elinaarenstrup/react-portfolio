import React from "react";
import styled from "styled-components/macro";
import { ThoughtText } from "./Thought";
import techhorse from "../assets/Crazytechhorse.jpeg";

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

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
    padding: 20px;
  }
`;

const ThoughtsContainer = styled.div`
  align-self: center;
  margin: 0;
  width: 800px;
  background: #fff;
  padding: 50px 20px;

  @media screen and (max-width: 820px) {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
  }
`;

const HeaderContainer = styled.div`
  margin: 100px 0 30px 0;

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
    font-size: 18px;
  }
`;

const ImgBox = styled.div`
  background-image: url(${techhorse});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 800px;
  height: 500px;
  margin: 0;
  background-color: #e92272;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const Link = styled.a`
  display: block;
  font-family: "Bebas Neue";
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

  @media screen and (max-width: 820px) {
    font-size: 18px;
    padding-right: 10px;
  }
`;

const OtherThoughts = styled.div`
  margin: 30px 0 0 0;

  @media screen and (max-width: 820px) {
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
          "So I’m on week 17 of 24, and that’s just insane! 4 of 6 sprints are
          done! It feels like it was yesterday I was in Stockholm for the first
          meet-up and met my team for the first time (GO HIPPOS!). I never
          thought that this Bootcamp thing was going to be so hard, but it sure
          is! It’s hard, intense and so much fun. I’ve grown so much since
          January and I can’t believe how much I’ve learnt in such a short
          time."
        </Paragraph>
        <Link
          href="https://www.linkedin.com/pulse/ever-heard-crazy-tech-horse-elin-aarenstrup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </Link>
      </ThoughtsContainer>
      <OtherThoughts>
        <ThoughtText
          title="Tips on remote work"
          link="https://www.linkedin.com/pulse/stay-productive-when-working-remote-elin-aarenstrup/"
        />
        <ThoughtText
          title="Dude, I have no clue"
          link="https://www.linkedin.com/pulse/dude-i-have-clue-bootcamp-pt1-elin-aarenstrup/"
        />
        <ThoughtText
          title="Good talk on imposter syndrome"
          link="https://www.youtube.com/watch?v=ZkwqZfvbdFw&feature=share"
        />
      </OtherThoughts>
    </ThoughtsDiv>
  );
};
