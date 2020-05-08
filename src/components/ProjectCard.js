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

const CoverImage = styled.img`
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

const Title = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  margin: 10px auto;
  color: #fff;
`;

const Paragraph = styled.p`
  margin: 0;
  display: block;
  text-align: left;
  font-family: "Roboto";
  font-size: 14px;
  color: #fff;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ProjectCard = ({ title, paragraph, coverImage, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <CardContainer>
        {coverImage && <CoverImage src={coverImage} />}
        <TextContainer>
          {title && <Title>{title}</Title>}
          {paragraph && <Paragraph>{paragraph}</Paragraph>}
        </TextContainer>
      </CardContainer>
    </Link>
  );
};
