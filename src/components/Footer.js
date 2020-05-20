import React from "react";
import styled from "styled-components/macro";

const Nav = styled.div`
  margin: 0;
  width: 50%;
  height: 40px;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 50px;
  background-color: #000;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Text = styled.h1`
  font-family: "Bebas Neue";
  font-size: 100px;
  text-align: left;
  margin: 0 0 30px 0;
  color: #fff;

  @media screen and (max-width: 820px) {
    font-size: 52px;
  }
`;

const Link = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  font-family: "Roboto";
  font-size: 24px;
  margin: 0 20px;
  border: 0;
  border-bottom: 2px solid #e92272;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  :hover {
    color: yellow;

    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;

    @-webkit-keyframes jello-horizontal {
      0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    @keyframes jello-horizontal {
      0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
  }
  @media screen and (max-width: 950px) {
    font-size: 18px;
    margin: 0 10px;
  }
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <Text>Say Hello...</Text>
      <Nav>
        <Link
          href="https://www.linkedin.com/in/elin-aarenstrup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/elinaarenstrup"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link href="mailto:elinaarenstrup@gmail.com">Email</Link>
      </Nav>
    </FooterDiv>
  );
};
