import React, { useState, useEffect } from "react";
import logo from "../../images/logo-white.png";
import wordmark from "../../images/ou-wordmark.png";
import styled from "styled-components";

const WordmarkImg = styled.img.attrs((props) => ({
  src: wordmark,
}))`
  width: 300px;
`;
const LogoImg = styled.img.attrs((props) => ({
  src: logo,
}))`
  width: 40px;
`;

const Wordmark = () => {
  return <WordmarkImg />;
};

const Logo = () => {
  return <LogoImg />;
};

export { Logo, Wordmark };
