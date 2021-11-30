import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-size: cover;
  background-position: initial;
  border-radius: 1em;
  padding: 2rem 2rem 2.5rem 2rem;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)),
    url(https://hello.ou.edu/sites/app-status-page/static/6b77f522b4a96db4835b.jpg);
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Button = styled.a`
  color: #fff;
  font-weight: bold;
  border-radius: 0.3rem;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 5px 30px;
  margin-right: 10px;
  text-align: center;
  white-space: nowrap;
`;

const CommMethods = function () {
  return (
    <div>
      <Card>
        <h2>
          <span style={{ color: '#ffffff' }}>
            <strong>Contact Information</strong>
          </span>
        </h2>

        <p>
          <strong>Email:</strong>
          {' '}
          bryce.kunkel@ou.edu
          <br />
          <strong>SMS:</strong>
          {' '}
          +1 817-456-8711
        </p>

        <p>
          If the details above are incorrect, please edit your contact information on the General
          tab at
          {' '}
          <a
            style={{ textDecoration: 'none' }}
            href="https://one.ou.edu"
            target="_blank"
            rel="noreferrer"
          >
            one.ou.edu
          </a>
          .
        </p>

        <ButtonContainer>
          <Button
            className="btn-outline-light rounded-pill"
            href="https://one.ou.edu/account/general"
            style={{ border: '1px solid #fff', textDecoration: 'none' }}
            target="_blank"
          >
            Update
          </Button>
        </ButtonContainer>
      </Card>
    </div>
  );
};
export default CommMethods;
