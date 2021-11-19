import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import logoRed from '../../images/logo-red.png';

const Notification = function (props) {
  const { message, show, hide } = props;
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast show={show} autohide delay={4500} onClose={() => hide(!true)}>
        <Toast.Header>
          <img
            src={logoRed}
            style={{ height: '30px' }}
            className="me-2"
            alt="interlocking OU"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Notification</strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default Notification;
