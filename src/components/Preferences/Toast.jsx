import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import PropTypes from "prop-types";
import logoRed from "../../images/logo-red.png";

const Notification = (props) => {
  const { message, show, hide } = props;
  return (
    <ToastContainer className="p-3 position-fixed top-0 end-0">
      <Toast show={show} autohide delay={4500} onClose={() => hide(!true)}>
        <Toast.Header>
          <img
            src={logoRed}
            style={{ height: "30px" }}
            className="me-2 rounded"
            alt="interlocking OU"
          />
          <strong className="me-auto">Notification</strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
};
