import React, { useState } from "react";
import ReactDom from "react-dom";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import styled from "styled-components";
import { colors } from "../../theme";

const Banner = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  background: ${colors.primary};
  color: #fff;
  padding: 0.5em 1em;
`;

const IconLinkContainer = styled.div`
  :not(:last-child) {
    margin-right: 0.5em;
  }
`;

const Nav = () => {
  const [searchHover, setSearchHover] = useState(false);
  return (
    <Banner>
      <IconLinkContainer>
        <FontAwesomeIcon icon={faHome} />
      </IconLinkContainer>
      <IconLinkContainer
        onMouseEnter={() => setSearchHover(true)}
        onMouseLeave={() => setSearchHover(false)}
      >
        <Search hover={searchHover} />
      </IconLinkContainer>
    </Banner>
  );
};

ReactDom.render(<Nav />, document.getElementById("nav"));
