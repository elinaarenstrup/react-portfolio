import React from "react";
import styled from "styled-components/macro";
import background from "../assets/Collage.jpg";
import todo from "../assets/Todo.png";

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

  @media screen and (max-width: 820px) {
    font-size: 30px;
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

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
    font-size: 30px;
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
  background-color: #e92272;
  color: #fff;

  @media screen and (max-width: 820px) {
    font-size: 10px;
    margin: 2px;
    padding: 2px 5px;
  }
`;

const CaptureText = styled.p`
  display: block;
  font-family: "Roboto";
  font-size: 30px;
  color: #000;

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 820px) {
    padding: 50px 20px;
  }
`;

const HeaderDiv = styled.div`
  margin: 20px auto;
  background-color: #000;

  @media screen and (max-width: 820px) {
    margin: 0;
  }
`;

const ContentContainer = styled.div`
  align-self: center;
  margin: 0;
  width: 800px;
  height: 100%;
  background: #fff;
  padding: 50px 20px;

  @media screen and (max-width: 820px) {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
  }
`;

//video istället kanske?
const ImgBox = styled.div`
  background-image: url(${todo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 800px;
  height: 500px;
  margin: 0;
  background-color: #000;

  @media screen and (max-width: 820px) {
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
          A todo app made using React Redux. Thoughts can be added, marked as
          completed and removed from the list.
        </CaptureText>
        <TechText>React</TechText>
        <TechText>Redux</TechText>
        <TechText>Redux toolkit</TechText>
        <TechText>JSX</TechText>
        <TechText>Styled components</TechText>
      </ContentContainer>
    </FavDiv>
  );
};
