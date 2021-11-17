import React from 'react';
import ReactDom from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommPref from './CommunicationPreferences.jsx';
import CommMethods from './CommunicationMethods.jsx';
import Parent from './ParentCommunication.jsx';
import './preferences.scss';

const Preferences = function () {
  return (
    <Container>
      <h1>Notifications</h1>
      <h2 style={{ color: '#841617' }}>Let's stay in touch!</h2>
      <p>
        Opt in to texting from the Division of Enrollment Management! Don't worry, you can update
        these preferences at any time.
      </p>
      <p>
        We will use the following settings to determine how to communicate with you about
        registration, scholarships, financial aid, OU MidFirst Bank MoneyCoach events, and more.
      </p>
      <h2>
        <span style={{ color: '#841617' }}>
          <strong>Communication Preferences</strong>
        </span>
      </h2>
      <Row>
        <Col className="mb-3" md={6}>
          <CommPref />
        </Col>
        <Col className="mb-3" md={6}>
          <CommMethods />
        </Col>
      </Row>
      <Parent />
    </Container>
  );
};

ReactDom.render(<Preferences />, document.getElementById('portal-copy'));
