import React from "react";
import styled from "styled-components/macro";

const CardContainer = styled.div`
  width: 300px;
  height: 320px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #000;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 200px;
  margin: 0;
  background-color: yellow;
`;

const TextContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const Boldertext = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  color: #fff;
`;

export const ProjectCard = () => {
  return (
    <CardContainer>
      <ImgBox />{" "}
      <TextContainer>
        <Boldertext>Title</Boldertext>
      </TextContainer>
    </CardContainer>
  );
};
