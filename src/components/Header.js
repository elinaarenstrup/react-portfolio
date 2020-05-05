import React from "react";
import styled from "styled-components/macro";
import Lottie from "lottie-react-web";
import animation from "../arrow.json";
import profilePic from "../assets/elinaarenstrup.jpg";

const Presentation = styled.h2`
  font-family: "Bebas Neue";
  font-size: 72px;
  text-align: left;
  margin: 0 0 10px 0;
  color: #e92272;
`;

const Presentation2 = styled.h2`
  font-family: "Bebas Neue";
  font-size: 24px;
  text-align: left;
  letter-spacing: 2px;
  margin: 0 0 5px 0;
  color: #000;
`;

const Paragraph = styled.h2`
  font-family: "Bebas Neue";
  font-size: 24px;
  text-align: left;
  letter-spacing: 2px;
  margin: 0px;
  color: #000;

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
`;

const PresentationContainer = styled.div`
  padding-top: 50px;
  width: 80%;
  justify-content: center;
  background-color: pink;
`;

const Nav = styled.div`
  width: 100%;
  height: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
`;

const LottieContainer = styled.div`
  width: 300px;
`;

const Link = styled.button`
  font-family: "Roboto";
  font-size: 24px;
  margin: 0 20px;
  border: 0;
  border-bottom: 2px solid #e92272;
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
`;

const HeyYou = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;

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
`;

const ProfilePic = styled.div`
  background-image: url(${profilePic});
  background-repeat: no-repeat;
  background-size: cover;
  width: 350px;
  height: 350px;
  border: solid 15px #000;

  :hover {
    -webkit-animation: wobble-hor-bottom 0.8s both;
              animation: wobble-hor-bottom 0.8s both;

    @-webkit-keyframes wobble-hor-bottom {
      0%,
      100% {
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
                transform: translateX(-30px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateX(15px) rotate(6deg);
                transform: translateX(15px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
                transform: translateX(-15px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
                transform: translateX(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
                transform: translateX(-6px) rotate(-1.2deg);
      }
    }
    @keyframes wobble-hor-bottom {
      0%,
      100% {
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
                transform: translateX(-30px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateX(15px) rotate(6deg);
                transform: translateX(15px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
                transform: translateX(-15px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
                transform: translateX(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
                transform: translateX(-6px) rotate(-1.2deg);
      }
    }
    
    }
  }
`;

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <Nav>
          <Link href="https://www.linkedin.com">LinkedIn</Link>
          <Link href="https://www.github.com">GitHub</Link>
          <Link href="mailto:elinaarenstrup@gmail.com">Email</Link>
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
