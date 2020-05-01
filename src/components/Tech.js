import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #000;
`;

const TechDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: yellow;
`;

export const Tech = () => {
  return (
    <TechDiv>
      <Text>Tech</Text>
    </TechDiv>
  );
};
