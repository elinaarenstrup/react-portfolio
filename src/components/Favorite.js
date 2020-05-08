import React from "react";
import styled from "styled-components/macro";
import background from "../assets/Collage.jpg";

const Text2 = styled.h2`
  display: inline;
  font-family: "Bebas Neue";
  font-size: 72px;
  text-align: left;
  padding: 10px 30px;
  margin: 0;
  color: #e92272;

  :hover {
    color: yellow;
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
    padding: 5px 10px;
  }
`;

const Text = styled.h1`
  display: inline;
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0;
  padding: 10px 0 10px 30px;
  color: #fff;

  @media screen and (max-width: 600px) {
    font-size: 42px;
    padding: 5px 0 5px 10px;
  }
`;

const CaptureHeader = styled.h3`
  font-family: "Bebas Neue";
  font-size: 42px;
  text-align: center;
  margin: 30px auto;
  padding: 5px 15px;
  color: #000;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    margin: 10px auto;
    padding: 5px 10px;
  }
`;

const TechText = styled.p`
  display: inline;
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
    font-size: 14px;
  }
`;

const CaptureText = styled.p`
  display: block;
  font-family: "Roboto";
  font-size: 30px;
  color: #000;

  @media screen and (max-width: 600px) {
    margin: 0 0 20px 0;
    font-size: 18px;
  }
`;

const FavDiv = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  height: 100%;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;

const HeaderDiv = styled.div`
  margin: 20px auto;
  background-color: #000;

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

const ContentContainer = styled.div`
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

const ImgBox = styled.div`
  width: 800px;
  height: 500px;
  margin: 0;
  background-color: yellow;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;

export const Favorite = () => {
  return (
    <FavDiv>
      <HeaderDiv>
        <Text>Current</Text>
        <Text2>personal favorite:</Text2>
      </HeaderDiv>
      <ContentContainer>
        <ImgBox />
        <CaptureHeader>Todo App</CaptureHeader>
        <CaptureText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </CaptureText>
        <TechText>React</TechText>
        <TechText>JSX</TechText>
      </ContentContainer>
    </FavDiv>
  );
};
