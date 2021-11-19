import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Notification = function (props) {
  const { message, show, hide } = props;
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast show={show} autohide delay={4500} onClose={() => hide(!true)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Notification</strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default Notification;
