import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import validator from 'email-validator';
import qs from 'query-string';
import Toast from './Toast';

const Parents = function () {
  const [initRelationships, setInitRelationships] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [relationshipTypes, setRelationshipTypes] = useState([]);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirst, setValidFirst] = useState(false);
  const [validLast, setValidLast] = useState(false);
  const [validType, setValidType] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const loadRelationships = () => {
    const getRelationshipsUrl = process.env.NODE_ENV === 'production'
      ? '?cmd=getRelationships'
      : 'https://0a4000bc-980e-4144-9a64-c8acf69f392a.mock.pstmn.io/getRelationships';
    fetch(getRelationshipsUrl)
      .then((res) => res.json())
      .then((result) => {
        setInitRelationships(result.row);
        setRelationships(result.row);
      });
  };
  const saveChanges = () => {
    const data = relationships.filter((el) => el.guid === 'new')[0];
    const url = process.env.NODE_ENV === 'production'
      ? '?cmd=addRelation'
      : 'https://0a4000bc-980e-4144-9a64-c8acf69f392a.mock.pstmn.io/addRelation';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: qs.stringify({
        cmd: 'addRelation',
        ...data,
        type: data.typeValue,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          setShowToast(true);
          setToastMessage('There was an error saving your changes. Please try again later');
        }
      })
      .then((data) => {
        setShowToast(true);
        setToastMessage('Your preferences have been saved!');
        loadRelationships();
      })
      .catch((error) => {
        setShowToast(true);
        setToastMessage(`There was an error... ${error}`);
      });
  };
  useEffect(() => {
    loadRelationships();
    const getRelationshipTypesUrl = process.env.NODE_ENV === 'production'
      ? '?cmd=getRelationshipTypes'
      : 'https://0a4000bc-980e-4144-9a64-c8acf69f392a.mock.pstmn.io/getRelationshipTypes';
    fetch(getRelationshipTypesUrl)
      .then((res) => res.json())
      .then((result) => {
        setRelationshipTypes(result.row);
      });
  }, []);
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
      <Table style={{ tableLayout: 'auto' }} responsive striped bordered>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Relation</th>
            <th>Email</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {relationships.map((obj) => (
            <tr key={obj.guid}>
              <td>
                {obj.guid === 'new' ? (
                  <input
                    style={{ minWidth: '100px' }}
                    className={`form-control form-control-sm${
                      relationships.filter((el) => el.guid === 'new')[0].first.length > 0
                        ? validFirst
                          ? ' is-valid'
                          : ' is-invalid'
                        : ''
                    }`}
                    type="text"
                    onChange={(e) => {
                      setRelationships([
                        ...relationships.filter((el) => el.guid !== 'new'),
                        { ...obj, first: e.target.value },
                      ]);
                      e.target.value.length > 0 && setValidFirst(true);
                    }}
                  />
                ) : (
                  obj.first
                )}
              </td>
              <td>
                {obj.guid === 'new' ? (
                  <input
                    style={{ minWidth: '100px' }}
                    className={`form-control form-control-sm${
                      relationships.filter((el) => el.guid === 'new')[0].last.length > 0
                        ? validLast
                          ? ' is-valid'
                          : ' is-invalid'
                        : ''
                    }`}
                    type="text"
                    onChange={(e) => {
                      setRelationships([
                        ...relationships.filter((el) => el.guid !== 'new'),
                        { ...obj, last: e.target.value },
                      ]);
                      e.target.value.length > 0 && setValidLast(true);
                    }}
                  />
                ) : (
                  obj.last
                )}
              </td>
              <td>
                {obj.guid === 'new' ? (
                  <select
                    style={{ minWidth: '100px' }}
                    className={`form-control form-select-sm form-select${
                      relationships.filter((el) => el.guid === 'new')[0].typeValue
                        ? validType
                          ? ' is-valid'
                          : ' is-invalid'
                        : ''
                    }`}
                    value={obj.typeValue || ''}
                    onChange={(e) => {
                      setRelationships([
                        ...relationships.filter((el) => el.guid !== 'new'),
                        {
                          ...obj,
                          typeValue: e.target.value,
                        },
                      ]);
                      setValidType(true);
                    }}
                  >
                    <option value="" disabled>
                      --
                    </option>
                    {relationshipTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  obj.type
                )}
              </td>
              <td>
                {obj.guid === 'new' ? (
                  <input
                    style={{ minWidth: '150px' }}
                    className={`form-control form-control-sm${
                      relationships.filter((el) => el.guid === 'new')[0].email.length > 3
                        ? validEmail
                          ? ' is-valid'
                          : ' is-invalid'
                        : ''
                    }`}
                    type="text"
                    onChange={(e) => {
                      setRelationships([
                        ...relationships.filter((el) => el.guid !== 'new'),
                        { ...obj, email: e.target.value },
                      ]);
                      setValidEmail(validator.validate(e.target.value));
                    }}
                  />
                ) : (
                  obj.email
                )}
              </td>
              <td>
                {obj.confirmed === '1' ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {' '}
                    Confirmed
                  </>
                ) : obj.confirmed === '0' ? (
                  <>
                    <FontAwesomeIcon icon={faTimesCircle} />
                    {' '}
                    Declined
                  </>
                ) : obj.guid !== 'new' ? (
                  <>
                    <FontAwesomeIcon icon={faClock} />
                    {' '}
                    Awaiting Confirmation
                  </>
                ) : (
                  <button
                    style={{ minWidth: '150px' }}
                    className="btn btn-secondary rounded-pill"
                    disabled={
                      !validFirst || !validLast || !validType || (!validEmail && 'disabled')
                    }
                    onClick={saveChanges}
                  >
                    Save Changes
                  </button>
                )}
              </td>
              <td>
                <button
                  style={{ minWidth: '100px' }}
                  className="btn btn-sm btn-outline-secondary rounded-pill"
                  onClick={() => {
                    const url = process.env.NODE_ENV === 'production'
                      ? '?cmd=deleteRelation'
                      : 'https://0a4000bc-980e-4144-9a64-c8acf69f392a.mock.pstmn.io/deleteRelation';
                    fetch(url, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: qs.stringify({
                        cmd: 'deleteRelation',
                        guid: obj.guid,
                      }),
                    })
                      .then((res) => {
                        if (!res.ok) {
                          setShowToast(true);
                          setToastMessage(
                            'There was an error saving your changes. Please try again later',
                          );
                        }
                      })
                      .then((data) => {
                        setShowToast(true);
                        setToastMessage('Your preferences have been saved!');
                        loadRelationships();
                      })
                      .catch((error) => {
                        setShowToast(true);
                        setToastMessage(`There was an error... ${error}`);
                      });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {!relationships.some((el) => el.guid === 'new') && (
            <tr>
              <td colSpan="6">
                <span
                  onClick={() => setRelationships([
                    ...relationships,
                    {
                      guid: 'new',
                      email: '',
                      first: '',
                      last: '',
                      typeValue: '',
                    },
                  ])}
                  style={{ cursor: 'pointer', color: '#1971FB' }}
                >
                  + Add New
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Toast show={showToast} message={toastMessage} hide={setShowToast} />
    </>
  );
};
export default Parents;
