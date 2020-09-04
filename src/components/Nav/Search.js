import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import styled from "styled-components";
import { colors } from "../../theme";
import { useSpring, animated } from "react-spring";

const SearchContainer = styled.div`
  position: relative;
`;
const SearchBox = styled(animated.input)`
  color: ${colors.primary};
  border: none;
  &:focus {
    outline-color: ${colors.secondary};
  }
`;

const IconContainer = styled(animated.div)`
  position: absolute;
  display: inline;
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

const Search = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const inputRef = React.createRef();
  const { hover } = props;
  const checkIsActive = () => (hover || isActive) && true;

  const searchAnim = useSpring({
    width: checkIsActive() ? "10em" : "1.1em",
    backgroundColor: checkIsActive()
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 0)",
    padding: checkIsActive() ? "3px 20px 3px 7px" : "0px 0px 0px 0px",
    borderRadius: checkIsActive() ? "3px" : "0px",
  });

  const iconAnim = useSpring({
    right: checkIsActive() ? "2px" : "0px",
    top: checkIsActive() ? "3px" : "0px",
    color: checkIsActive() ? colors.primary : "#fff",
    transform: checkIsActive() ? "scale(0.6)" : "scale(1)",
  });

  const handleSearch = (query) => {
    window.location.href = `https://www.ou.edu/web/search?q=${encodeURIComponent(
      query
    )}`;
  };

  return (
    <SearchContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchKeyword);
        }}
      >
        <SearchBox
          ref={inputRef}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          style={searchAnim}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </form>
      <IconContainer
        style={{ cursor: checkIsActive() ? "pointer" : "default" }}
        onClick={() => {
          if (searchKeyword) {
            handleSearch(searchKeyword);
          } else {
            setIsActive(true);
            inputRef.current.focus();
          }
        }}
        style={iconAnim}
        $isActive={checkIsActive()}
      >
        <FontAwesomeIcon icon={faSearch} />
      </IconContainer>
    </SearchContainer>
  );
};

export default Search;
