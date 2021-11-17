import React from 'react';
import './checkboxes.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const CommPref = function () {
  const campaigns = [
    {
      key: 1,
      name: 'Student Financial Center',
      short: 'sfc',
      note: (
        <>
          <p>
            The
            {' '}
            <strong>Student Financial Center</strong>
            {' '}
            within the Division of Enrollment
            Management uses SMS text messages to provide billing deadline reminders, financial aid
            updates, scholarship information, and other important details. Standard text messaging
            and data rates may apply.
          </p>
          <p>
            Students may opt-out at any time by responding to the text message. Please note that
            opting out will remove you from all future communication from the Student Financial
            Center only. You will continue to receive important emails from the Student Financial
            Center and other offices, as email remains the official form of communication from the
            university.
          </p>
        </>
      ),
      channels: [
        { key: 1, type: 'email', disabled: true },
        { key: 2, type: 'sms', disabled: false },
      ],
    },
    {
      key: 2,
      name: 'OU MidFirst Bank MoneyCoach Programs',
      short: 'mc',
      note: (
        <>
          <p>
            The
            {' '}
            <strong>OU MidFirst Bank MoneyCoach Program</strong>
            {' '}
            within the Division of
            Enrollment Management uses SMS text messages to provide financial planning workshop
            invites, appointment reminders, financial aid updates, scholarship information, and
            other important details. Standard text messaging and data rates may apply.
          </p>
          <p>
            Students may opt-out at any time by responding to the text message. Please note that
            opting out will remove you from all future communication from the OU MidFirst Bank
            MoneyCoach Program only. You will continue to receive important emails from the
            MoneyCoach Program and other offices, as email remains the official form of
            communication from the university.
          </p>
        </>
      ),
      channels: [
        { key: 1, type: 'email', disabled: true },
        { key: 2, type: 'sms', disabled: false },
      ],
    },
    {
      key: 3,
      name: 'Office of the Registrar',
      short: 'reg',
      note: (
        <>
          <p>
            The
            {' '}
            <strong>Office of the Registrar</strong>
            {' '}
            within the Division of Enrollment
            Management uses SMS text messages to provide enrollment information, appointment
            reminders, course and classroom announcements, and other important details. Standard
            text messaging and data rates may apply.
          </p>
          <p>
            Students may opt-out at any time by responding to the text message. Please note that
            opting out will remove you from all future communication from the Office of the
            Registrar only. You will continue to receive important emails from the Office of the
            Registrar and other offices, as email remains the official form of communication from
            the university.
          </p>
        </>
      ),
      channels: [
        { key: 1, type: 'email', disabled: true },
        { key: 2, type: 'sms', disabled: false },
      ],
    },
  ];
  return (
    <>
      <Row className="flex-nowrap">
        <Col style={{ padding: 0, textAlign: 'center' }} xs={8} />
        <Col style={{ padding: 0, textAlign: 'center' }}>Email</Col>
        <Col style={{ padding: 0, textAlign: 'center' }}>SMS</Col>
      </Row>
      {campaigns.map((c) => (
        <Row className="flex-nowrap" key={c.short}>
          <Col xs={8}>
            <Accordion>
              <Accordion.Item eventKey={c.key}>
                <Accordion.Header>{c.name}</Accordion.Header>
                <Accordion.Body>{c.note}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          {c.channels.map((ch) => (
            <Col
              className="py-2 d-flex justify-content-center"
              style={{ padding: 0, textAlign: 'center' }}
              key={`${c.short}-box-${ch.key}`}
            >
              <div className="form_checkbox">
                <div className="form_responses">
                  <input
                    defaultChecked={ch.disabled ? 'checked' : ''}
                    disabled={ch.disabled ? 'disabled' : ''}
                    id={`${c.short}-${ch.type}`}
                    name={`${c.short}-${ch.type}`}
                    readOnly={ch.disabled ? 'readonly' : ''}
                    type="checkbox"
                  />
                  <label htmlFor={`${c.short}-${ch.type}`}>
                    <span className="hidden">{`${c.name}-${ch.type}`}</span>
                  </label>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};
export default CommPref;
