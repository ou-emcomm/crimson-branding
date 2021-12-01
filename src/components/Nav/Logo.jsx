import styled from "styled-components";
import logo from "../../images/logo-white.png";
import wordmark from "../../images/ou-wordmark.png";

const WordmarkImg = styled.img.attrs(() => ({
  src: wordmark,
  alt: "university of oklahoma wordmark"
}))`
  width: 300px;
`;
const LogoImg = styled.img.attrs(() => ({
  src: logo,
  alt: "university of oklahoma logo"
}))`
  width: 1.2em;
  color: #fff;
`;

export { LogoImg, WordmarkImg };
