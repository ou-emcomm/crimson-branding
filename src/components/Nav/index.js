import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Search from "./Search";
import { Logo, Wordmark } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import styled from "styled-components";
import { colors, breakpoints } from "../../theme";

const Banner = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  padding: 1em;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;
const WordmarkContainer = styled(IconContainer)`
  justify-content: center;
`;

const LogoContainer = styled(IconContainer)`
  justify-content: flex-end;
`;

const IconLinkContainer = styled.div`
  color: white;
  :not(:last-child) {
    margin-right: 0.8em;
  }
`;

const Nav = () => {
  const [searchHover, setSearchHover] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <Banner>
      <IconContainer>
        <IconLinkContainer as="a" href="/">
          <FontAwesomeIcon icon={faHome} />
        </IconLinkContainer>
        <IconLinkContainer
          onMouseEnter={() => setSearchHover(true)}
          onMouseLeave={() => setSearchHover(false)}
        >
          <Search hover={searchHover} />
        </IconLinkContainer>
      </IconContainer>
      <WordmarkContainer>
        {width >= breakpoints.md && <Wordmark />}
      </WordmarkContainer>
      <LogoContainer>{width < breakpoints.md && <Logo />}</LogoContainer>
    </Banner>
  );
};

ReactDom.render(<Nav />, document.getElementById("nav"));
