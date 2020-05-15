import React from "react";
import styled from "styled-components/macro";

const TextContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

const Title = styled.h2`
  margin: 10px;
  padding: 5px;
  font-family: "Bebas Neue";
  font-size: 42px;
  font-weight: bolder;
  color: #000;
  background-color: yellow;

  @media screen and (max-width: 820px) {
    font-size: 24px;
    margin-right: 5px;
  }

  :hover {
    -webkit-animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715)
      both;
    animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;

    @-webkit-keyframes shadow-pop-bl {
      0% {
        -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
          0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
          0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
      }
      100% {
        -webkit-box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e,
          -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e,
          -8px 8px #3e3e3e;
        box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e,
          -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e,
          -8px 8px #3e3e3e;
        -webkit-transform: translateX(8px) translateY(-8px);
        transform: translateX(8px) translateY(-8px);
      }
    }
    @keyframes shadow-pop-bl {
      0% {
        -webkit-box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0 #000, 0 0 #000,
          0 0 #000, 0 0 #000, 0 0 #000;
        box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0 #000, 0 0 #000, 0 0 #000,
          0 0 #000, 0 0 #000;
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
      }
      100% {
        -webkit-box-shadow: -1px 1px #000, -2px 2px #000, -3px 3px #000,
          -4px 4px #000, -5px 5px #000, -6px 6px #000, -7px 7px #000,
          -8px 8px #000;
        box-shadow: -1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000,
          -5px 5px #000, -6px 6px #000, -7px 7px #000, -8px 8px #000;
        -webkit-transform: translateX(8px) translateY(-8px);
        transform: translateX(8px) translateY(-8px);
      }
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ThoughtText = ({ title, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <TextContainer>{title && <Title>{title}</Title>}</TextContainer>
    </Link>
  );
};
