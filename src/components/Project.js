import React from "react";
import styled from "styled-components/macro";

const Title = styled.h2`
  margin: auto;
  margin-bottom: 5px;
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: normal;

  color: #000;

  :hover {
    color: #e92272;
  }

  @media screen and (max-width: 820px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-family: "Roboto";
  font-size: 30px;
  color: #000;

  @media screen and (max-width: 820px) {
    font-size: 18px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ProjectText = ({ title, paragraph, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {title && <Title>✘ {title}</Title>}
      {paragraph && <Paragraph>{paragraph}</Paragraph>}
    </Link>
  );
};
