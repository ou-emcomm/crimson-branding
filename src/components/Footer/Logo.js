import React from "react";
import styled from "styled-components";
import logoSrc from "../../images/logo-white.png";

const LogoImg = styled.img.attrs((props) => ({
  src: logoSrc,
  alt: "university of oklahoma logo",
}))`
  width: 120px;
`;

const Logo = () => {
  return <LogoImg />;
};

export default Logo;
