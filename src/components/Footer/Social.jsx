import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import styled from "styled-components";

const SocialIcon = styled("a").attrs(props => props.href)`
  font-size: 2em;
  margin: 0 0.5em;
  color: white;
`;

const Social = () => (
    <>
      <SocialIcon href="https://twitter.com/go2ou">
        <FontAwesomeIcon icon={faTwitter} />
      </SocialIcon>
      <SocialIcon href="https://facebook.com/go2ou">
        <FontAwesomeIcon icon={faFacebookF} />
      </SocialIcon>
      <SocialIcon href="https://instagram.com/go2ou">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialIcon>
    </>
  )

export default Social;
