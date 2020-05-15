import React from "react";
import styled from "styled-components/macro";

const CardContainer = styled.div`
  width: 300px;
  height: 370px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 10px solid #000;
  background-color: #000;

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }

  @media screen and (max-width: 820px) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 200px;
  margin: 0 0 10px 0;
`;

const TextContainer = styled.div`
  margin: auto;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: left;
  justify-items: left;
`;

const Title = styled.h2`
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  margin: 10px auto;
  color: #fff;

  @media screen and (max-width: 820px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-size: 18px;
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
