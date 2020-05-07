import React from "react";
import styled from "styled-components/macro";

const CardContainer = styled.div`
  width: 300px;
  height: 370px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 10px solid #000;
  background-color: #000;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 0 10px 0;
  background-color: yellow;
`;

const TextContainer = styled.div`
  margin: auto;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const Boldertext = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  margin: 10px auto;
  color: #fff;
`;

const Paragraph = styled.p`
  display: block;
  text-align: left;
  font-family: "Roboto";
  font-size: 14px;
  color: #fff;
`;

export const ProjectCard = () => {
  return (
    <CardContainer>
      <ImgBox />{" "}
      <TextContainer>
        <Boldertext>Title</Boldertext>
        <Paragraph>
          A music release page in pairs using a API, which shows new album and
          single releases
        </Paragraph>
      </TextContainer>
    </CardContainer>
  );
};
