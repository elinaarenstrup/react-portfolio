import React from "react";
import styled from "styled-components/macro";

const Text2 = styled.h2`
  display: inline;
  font-family: "Bebas Neue";
  font-size: 72px;
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
`;

const Text = styled.h1`
  display: inline;
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;
`;

const CaptureHeader = styled.h3`
  font-family: "Roboto";
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  color: #000;
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
`;

const CaptureText = styled.p`
  display: block;
  font-family: "Roboto";
  font-size: 30px;
  color: #000;
`;

const FavDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  height: 100%;
  background-color: #fff;
`;

const HeaderDiv = styled.div`
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  align-self: center;
  margin: 0;
  width: 800px;
`;

const ImgBox = styled.div`
  width: 800px;
  height: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: yellow;
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
