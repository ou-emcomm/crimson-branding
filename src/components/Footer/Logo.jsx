import React from 'react';
import styled from 'styled-components';
import logoSrc from '../../images/logo-white.png';

const LogoImg = styled.img.attrs(() => ({
  src: logoSrc,
  alt: 'university of oklahoma logo',
}))`
  width: 120px;
`;

const Logo = () => <LogoImg />;

export default Logo;
