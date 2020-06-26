import React from "react";
import styled from "styled-components/macro";
import { ProjectCard } from "./ProjectCard";
import { ProjectText } from "./Project";
import happy from "../assets/Happy.png";
import foodquiz from "../assets/Foodquiz.png";
import movies from "../assets/Movies.png";
import weather from "../assets/Weather.png";
import flowers from "../assets/Flower.png"

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;
  transition: all 0.3s;

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

  @media screen and (max-width: 820px) {
    font-size: 42px;
    margin: 0 0 20px 0;
  }
`;

const Text2 = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  margin: 0 0 30px 0;
  padding: 5px 15px;
  color: #000;
  background-color: yellow;

  @media screen and (max-width: 820px) {
    font-size: 30px;
    margin: 20px 0;
  }
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 100px 20px;
  background-color: #fff;

  @media screen and (max-width: 820px) {
    padding: 50px 20px;
  }
`;

const OtherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100%;
  padding: 100px 0 0 0;
  background-color: #fff;

  @media screen and (max-width: 820px) {
    width: 100%;
    padding: 0;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;

  @media screen and (max-width: 820px) {
    padding: 0;
  }
`;

export const Projects = () => {
  return (
    <ProjectsDiv>
      <Text>Featured projects</Text>
      <CardDiv>
        <ProjectCard
          coverImage={flowers}
          title="Friday Flowers"
          paragraph="A bouqetshop with both frontend and backend..."
          link="https://github.com/elinaarenstrup/project-happy-thoughts"
        />
        <ProjectCard
          coverImage={happy}
          title="Happy thoughts"
          paragraph="A twitter-like app, but only for the good stuff..."
          link="https://github.com/elinaarenstrup/project-happy-thoughts"
        />
        <ProjectCard
          coverImage={weather}
          title="Weather app"
          paragraph="A weather app to display the weather based on a location using Open weather maps API...."
          link="https://github.com/elinaarenstrup/project-weather-app"
        />
        <ProjectCard
          coverImage={movies}
          title="Movie rating"
          paragraph="Filter the latest movies on based on rating, multipage app using React router..."
          link="https://github.com/elinaarenstrup/project-movies"
        />
        <ProjectCard
          coverImage={foodquiz}
          title="Food quiz"
          paragraph="A fun little quiz game made with Redux..."
          link="https://github.com/elinaarenstrup/project-redux-quiz-hippos"
        />
      </CardDiv>
      <OtherContainer>
        <Text2>Other projects</Text2>
        <ProjectText
          title="Happy thoughts API"
          paragraph="Build an API which includes both GET and POST endpoints to create data...."
          link="https://github.com/elinaarenstrup/project-happy-thoughts-api"
        />
        <ProjectText
          title="MongoDB project"
          paragraph="Build a database to store and retrieve data from and use that data to produce a RESTful API...."
          link="https://github.com/elinaarenstrup/project-mongo-api"
        />
        <ProjectText
          title="RESTFul API"
          paragraph="RESTful API with routes and data manipulation in JS - selecting, filtering, and limiting arrays...."
          link="https://github.com/elinaarenstrup/project-express-api"
        />
        <ProjectText
          title="Food scanner"
          paragraph="An app that scans barcodes on food packages to retrieve the product name and ingredients...."
          link="https://github.com/elinaarenstrup/project-nutrition"
        />
        <ProjectText
          title="Rick & Morty quotes on life"
          paragraph="A random quote generator mad with React native that makes your phone vibrate when clicking the button...."
          link="https://github.com/elinaarenstrup/project-react-native-app"
        />
        <ProjectText
          title="Tic-tac-toe game"
          paragraph="A tic-tac-toe game to lear Redux..."
          link="https://github.com/elinaarenstrup/tic-tac-toe-redux-codealong"
        />
        <ProjectText
          title="Business site"
          paragraph="Cool site with hero-video, sign-up form & a accordion..."
          link="https://github.com/elinaarenstrup/project-business-site"
        />
        <ProjectText
          title="Swedish fika-survey"
          paragraph="Small survey that displays a summary of your fika prefs..."
          link="https://github.com/elinaarenstrup/project-survey"
        />
      </OtherContainer>
    </ProjectsDiv>
  );
};
