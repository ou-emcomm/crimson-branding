import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { colors, breakpoints } from '../../theme';
import Logo from './Logo.jsx';
import Address from './Address.jsx';
import Website from './Website.jsx';
import Social from './Social.jsx';

const FooterContainer = styled.div`
  background: ${colors.primary};
  color: #fff;
  padding: 3em;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  position: relative;
  width: 100%;
  padding: 0 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;
`;
const ColAuto = styled(Col)`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;
const Col4 = styled(Col)`
  flex-basis: auto;
  @media (min-width: ${breakpoints.md}px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    padding-bottom: 0px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Row>
      <Col4 justify="flex-start">
        <Row>
          <ColAuto style={{ paddingBottom: 0 }}>
            <Logo />
          </ColAuto>
          <Col style={{ paddingBottom: 0 }}>
            <Address />
          </Col>
        </Row>
      </Col4>
      <Col4>
        <Website />
      </Col4>
      <Col4 justify="flex-end" align="center">
        <Social />
      </Col4>
    </Row>
  </FooterContainer>
);

ReactDom.render(<Footer />, document.getElementById('footer'));
