import React from "react";
import styled from "styled-components/macro";
import Lottie from "lottie-react-web";
import animation from "../arrow.json";
import profilePic from "../assets/elinaarenstrup.jpg";

const Presentation = styled.h2`
  font-family: "Bebas Neue";
  font-size: 72px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 0.9;
  margin: 0 0 5px 0;
  color: #e92272;

  @media screen and (max-width: 820px) {
    font-size: 60px;
  }
`;

const Presentation2 = styled.h2`
  font-family: "Bebas Neue";
  font-size: 24px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 0.9;
  margin: 0 0 50px 0;
  color: #000;

  @media screen and (max-width: 820px) {
    margin: 0 0 100px 0;
    font-weight: lighter;
    font-size: 30px;
  }
`;

const Paragraph = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 0.9;
  margin: 0 0 30px 0;
  color: #000;
  transition: all 0.3s;

  :hover {
    color: yellow;
  }
`;

const Color = styled.span`
  color: #e92272;
`;

const Play = styled.span`
  color: white;
`;

const HeaderDiv = styled.div`
  height: 100%;
  padding: 100px;
  background-color: pink;

  @media screen and (max-width: 820px) {
    height: 100%;
    padding: 10px 10px 100px 10px;
  }
`;

const PresentationContainer = styled.div`
  padding-top: 50px;
  width: 80%;
  justify-content: center;
`;

const Nav = styled.div`
  width: 100%;
  height: 40px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;

  @media screen and (max-width: 820px) {
    padding: 0;
  }
`;

const LottieContainer = styled.div`
  width: 300px;

  @media screen and (max-width: 820px) {
    width: 200px;
  }
`;

const Link = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  font-family: "Roboto";
  font-size: 24px;
  margin: 0 20px;
  border: 0;
  border-bottom: 2px solid #e92272;
  text-decoration: none;
  text-transform: uppercase;
  background-color: pink;
  color: #000;
  cursor: pointer;

  :hover {
    color: yellow;

    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;

    @-webkit-keyframes jello-horizontal {
      0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    @keyframes jello-horizontal {
      0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const HeyYou = styled.h1`
  font-family: "Bebas Neue";
  font-size: 120px;
  line-height: 0.8;
  letter-spacing: 5px;
  text-align: left;
  margin: 100px 0 100px 0;
  color: #000;
  transition: all 0.3s;

  :hover {
    -webkit-animation: wobble-ver-left 0.8s both;
    animation: wobble-ver-left 0.8s both;

    @-webkit-keyframes wobble-ver-left {
      0%,
      100% {
        -webkit-transform: translateY(0) rotate(0);
        transform: translateY(0) rotate(0);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateY(-30px) rotate(-6deg);
        transform: translateY(-30px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateY(15px) rotate(6deg);
        transform: translateY(15px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateY(-15px) rotate(-3.6deg);
        transform: translateY(-15px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateY(9px) rotate(2.4deg);
        transform: translateY(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateY(-6px) rotate(-1.2deg);
        transform: translateY(-6px) rotate(-1.2deg);
      }
    }
    @keyframes wobble-ver-left {
      0%,
      100% {
        -webkit-transform: translateY(0) rotate(0);
        transform: translateY(0) rotate(0);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateY(-30px) rotate(-6deg);
        transform: translateY(-30px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateY(15px) rotate(6deg);
        transform: translateY(15px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateY(-15px) rotate(-3.6deg);
        transform: translateY(-15px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateY(9px) rotate(2.4deg);
        transform: translateY(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateY(-6px) rotate(-1.2deg);
        transform: translateY(-6px) rotate(-1.2deg);
      }
    }
  }
  @media screen and (max-width: 820px) {
    margin: 0 0 100px 0;
  }
`;

const ProfilePic = styled.div`
  background-image: url(${profilePic});
  background-repeat: no-repeat;
  background-size: cover;
  width: 350px;
  height: 350px;
  border: solid 15px #000;
  box-shadow: 30px 30px yellow;

  @media screen and (max-width: 820px) {
    width: 200px;
    height: 200px;
    border: solid 10px #000;
    box-shadow: 20px 20px yellow;
  }
`;

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <Nav>
          <Link
            href="https://www.linkedin.com/in/elin-aarenstrup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/elinaarenstrup"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="mailto:hej@elinaarenstrup.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
        </Nav>
        <PresentationContainer>
          <HeyYou>Hello you,</HeyYou>

          <Presentation>I'm Elin Aarenstrup.</Presentation>

          <Presentation2>Frontend developer / Graphic designer</Presentation2>

          <Paragraph>
            Passionate about <Color>colors</Color> & <Play>play</Play>
          </Paragraph>

          <LottieContainer>
            <Lottie
              options={{
                animationData: animation,
              }}
            />
          </LottieContainer>
          <ProfilePic />
        </PresentationContainer>
      </HeaderContainer>
    </HeaderDiv>
  );
};
