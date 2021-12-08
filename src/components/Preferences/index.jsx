import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommPref from "./CommunicationPreferences";
import CommMethods from "./CommunicationMethods";
import Parent from "./ParentCommunication";
import "./preferences.scss";

const Preferences = () => {
  const [info, setInfo] = useState({ email: "", mobile: "", preferred: "" });
  useEffect(() => {
    const url =
      process.env.NODE_ENV === "production"
        ? "?cmd=getDefaults"
        : "/dev/defaults.json";
    fetch(url)
      .then(res => res.json())
      .then(result => {
        const data = result.row[0];
        setInfo({ ...data });
      });
  }, []);
  return (
    <Container>
      <h1>Notifications</h1>
      <h2 style={{ color: "#841617" }}>
        Hi {info.preferred}! Let&apos;s stay in touch!
      </h2>
      <p>
        Within the Division of Enrollment Management, we know keeping up with
        deadlines, dates, enrollment, financial information, and all the other
        details surrounding your academic career at OU can be hard. That’s why
        we want to help. When you opt in to texting from Enrollment Management,
        we will share important information straight to your phone, including
        details about registration, scholarships, financial aid, OU MidFirst
        Bank MoneyCoach events, and more.
      </p>
      <p>
        Don’t worry, you can update these preferences or unsubscribe from text
        message notifications at any time.
      </p>
      <h2>
        <span style={{ color: "#841617" }}>
          <strong>Communication Preferences</strong>
        </span>
      </h2>
      <p>Check the boxes or leave them blank to complete your preferences.</p>
      <Row>
        <Col className="mb-3" md={6}>
          <CommPref data={info} />
        </Col>
        <Col className="mb-3" md={6}>
          <CommMethods data={info} />
        </Col>
      </Row>
      <Parent />
    </Container>
  );
};

ReactDom.render(<Preferences />, document.getElementById("portal-copy"));
