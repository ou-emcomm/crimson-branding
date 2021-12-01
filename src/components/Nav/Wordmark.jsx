import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import wordmark from "../../images/em-wordmark.png";

const WordmarkContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const EmWordmark = styled.img.attrs(() => ({
  src: wordmark,
  alt: "Enrollment Management Wordmark"
}))`
  width: ${props => (props.fullWidth ? "100%" : "60%")};
  padding: 2em;
  display: flex;
`;

const Wordmark = (props) => {
  const { fullWidth } = props;
  return (
    <WordmarkContainer>
      <EmWordmark fullWidth={fullWidth} />
    </WordmarkContainer>
  );
}
export default Wordmark;

Wordmark.propTypes = {
  fullWidth: PropTypes.bool.isRequired
};
