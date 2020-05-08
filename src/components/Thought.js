import React from "react";
import styled from "styled-components/macro";

const TextContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
`;

const Title = styled.h2`
  margin: auto;
  padding: 5px;
  display: inline;
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  margin-right: 10px;
  color: #000;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    margin-right: 5px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 5px 15px;
  display: inline;
  text-align: left;
  font-family: "Roboto";
  font-size: 30px;
  color: #fff;
  background-color: #000;

  :hover {
    background-color: pink;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ThoughtText = ({ title, paragraph, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <TextContainer>
        {title && <Title>{title}</Title>}
        {paragraph && <Paragraph>{paragraph}</Paragraph>}
      </TextContainer>
    </Link>
  );
};
