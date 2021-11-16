import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Parents = function () {
  return (
    <>
      <h2>
        <span style={{ color: '#841617' }}>
          <strong>Communication Preferences for Parents/Guardians</strong>
        </span>
      </h2>
      <p>
        We know your family is important - let us keep in touch with them as well! Add your
        parent/guardian email address and we will send them information about upcoming important
        dates and deadlines for the Division of Enrollment Management.
      </p>
      <p>When you add a parent/guardian, we will send them an email confirmation link.</p>
      <div style={{ overflow: 'scroll' }}>
        <Row
          className="flex-nowrap g-0"
          style={{
            background: '#ccc',
            fontWeight: 'bold',
            borderRadius: '3px',
            minWidth: 'fit-content',
            padding: '2px 5px',
          }}
        >
          <Col style={{ minWidth: '150px' }} xs={3}>
            Name
          </Col>
          <Col style={{ minWidth: '150px' }} xs={3}>
            Relation
          </Col>
          <Col style={{ minWidth: '150px' }} xs={3}>
            Email
          </Col>
          <Col style={{ minWidth: '150px' }} xs={3}>
            Status
          </Col>
        </Row>
        <Row
          style={{ borderBottom: '1px solid #ccc', minWidth: 'fit-content', padding: '2px 5px' }}
          className="flex-nowrap g-0"
        >
          <Col style={{ minWidth: '150px' }} xs={3}>
            Lara Kunkel
          </Col>
          <Col style={{ minWidth: '150px' }} xs={3}>
            Sister
          </Col>
          <Col style={{ minWidth: '150px' }} xs={3}>
            lara.kunkel@ou.edu
          </Col>
          <Col style={{ minWidth: '150px' }} xs={3}>
            <span style={{ color: 'green' }}>✔</span>
            {' '}
            Awaiting Confirmation
          </Col>
        </Row>
        <Row style={{ minWidth: 'fit-content', padding: '2px 5px' }} className="flex-nowrap g-0">
          <Col>
            <span style={{ color: '#1971FB' }}>+ Add New</span>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Parents;
