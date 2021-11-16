import React, { useState } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
const Accordion = function (props) {
  const [active, setActive] = useState(false);
  const { header, body } = props;

  return (
    <div style={{ maxWidth: '340px' }}>
      <span onClick={() => setActive(!active)}>{header}</span>
      <Body active={active}>{body}</Body>
    </div>
  );
};

export default Accordion;
