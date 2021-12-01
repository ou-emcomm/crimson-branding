import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import validator from "email-validator";
import qs from "query-string";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Toast from "./Toast";

const Parents = () => {
  const [relationships, setRelationships] = useState([]);
  const [relationshipTypes, setRelationshipTypes] = useState([]);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirst, setValidFirst] = useState(false);
  const [validLast, setValidLast] = useState(false);
  const [validType, setValidType] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleteGuid, setDeleteGuid] = useState("");

  const loadRelationships = () => {
    const getRelationshipsUrl =
      process.env.NODE_ENV === "production"
        ? "?cmd=getRelationships"
        : "/dev/relationshipPreferences.json";
    fetch(getRelationshipsUrl)
      .then(res => res.json())
      .then(result => {
        setRelationships(result.row);
      });
  };
  const saveChanges = () => {
    const data = relationships.filter(el => el.guid === "new")[0];
    const url =
      process.env.NODE_ENV === "production"
        ? "?cmd=addRelation"
        : "https://0a4000bc-980e-4144-9a64-c8acf69f392a.mock.pstmn.io/addRelation";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        cmd: "addRelation",
        ...data,
        type: data.typeValue
      })
    })
      .then(res => {
        if (!res.ok) {
          setShowToast(true);
          setToastMessage(
            "There was an error saving your changes. Please try again later"
          );
        } else {
          setShowToast(true);
          setToastMessage("Your preferences have been saved!");
          loadRelationships();
        }
      })
      .catch(error => {
        setShowToast(true);
        setToastMessage(`There was an error... ${error}`);
      });
  };
  useEffect(() => {
    loadRelationships();
    const getRelationshipTypesUrl =
      process.env.NODE_ENV === "production"
        ? "?cmd=getRelationshipTypes"
        : "/dev/relationshipTypes.json";
    fetch(getRelationshipTypesUrl)
      .then(res => res.json())
      .then(result => {
        setRelationshipTypes(result.row);
      });
  }, []);
  return (
    <>
      <h2>
        <span style={{ color: "#841617" }}>
          <strong>Communication Preferences for Parents/Guardians</strong>
        </span>
      </h2>
      <p>
        We know your family is important — that’s why we want to stay in touch
        with them as well! If you choose to opt in your parent(s)/guardian(s),
        simply add their email address(es) and they will receive marketing
        information about important upcoming dates and deadlines from the
        Division of Enrollment Management via the provided email address(es).
        Those you list will <strong>not</strong> receive information regarding
        your grades, financial situation, or personal information unless
        permission is granted through your{" "}
        <a
          className="text-primary"
          href="https://one.ou.edu"
          target="_blank"
          rel="noreferrer"
        >
          one.ou.edu
        </a>{" "}
        account.
      </p>
      <p>
        When you add a parent/guardian, we will send them an email confirmation
        link.
      </p>
      <Table style={{ tableLayout: "auto" }} responsive striped bordered>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Relation</th>
            <th>Email</th>
            <th>Status</th>
            <th aria-label="Remove" />
          </tr>
        </thead>
        <tbody>
          {relationships.map(obj => (
            <tr key={obj.guid}>
              <td style={{ minWidth: "100px" }}>
                {obj.guid === "new" ? (
                  <input
                    className={(() => {
                      if (
                        !validFirst &&
                        relationships.filter(el => el.guid === "new")[0].first
                      ) {
                        return "form-control form-control-sm is-invalid";
                      }
                      if (validFirst) {
                        return "form-control form-control-sm is-valid";
                      }
                      return "form-control form-control-sm";
                    })()}
                    type="text"
                    onChange={e => {
                      setRelationships([
                        ...relationships.filter(el => el.guid !== "new"),
                        { ...obj, first: e.target.value }
                      ]);
                      if (e.target.value.length > 0) {
                        setValidFirst(true);
                      } else {
                        setValidFirst(false);
                      }
                    }}
                  />
                ) : (
                  obj.first
                )}
              </td>
              <td style={{ minWidth: "100px" }}>
                {obj.guid === "new" ? (
                  <input
                    className={(() => {
                      if (
                        !validLast &&
                        relationships.filter(el => el.guid === "new")[0].last
                      ) {
                        return "form-control form-control-sm is-invalid";
                      }
                      if (validLast) {
                        return "form-control form-control-sm is-valid";
                      }
                      return "form-control form-control-sm";
                    })()}
                    type="text"
                    onChange={e => {
                      setRelationships([
                        ...relationships.filter(el => el.guid !== "new"),
                        { ...obj, last: e.target.value }
                      ]);
                      if (e.target.value.length > 0) {
                        setValidLast(true);
                      } else {
                        setValidLast(false);
                      }
                    }}
                  />
                ) : (
                  obj.last
                )}
              </td>
              <td style={{ minWidth: "120px" }}>
                {obj.guid === "new" ? (
                  <select
                    className={(() => {
                      if (
                        !validType &&
                        relationships.filter(el => el.guid === "new")[0]
                          .typeValue
                      ) {
                        return "form-control form-select form-select-sm is-invalid";
                      }
                      if (validType) {
                        return "form-control form-select form-select-sm is-valid";
                      }
                      return "form-control form-select form-select-sm";
                    })()}
                    value={obj.typeValue || ""}
                    onChange={e => {
                      setRelationships([
                        ...relationships.filter(el => el.guid !== "new"),
                        {
                          ...obj,
                          typeValue: e.target.value
                        }
                      ]);
                      setValidType(true);
                    }}
                  >
                    <option value="" disabled>
                      --
                    </option>
                    {relationshipTypes.map(t => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  obj.type
                )}
              </td>
              <td style={{ minWidth: "150px" }}>
                {obj.guid === "new" ? (
                  <input
                    autoCapitalize="off"
                    className={(() => {
                      if (
                        !validEmail &&
                        relationships.filter(el => el.guid === "new")[0].email
                          .length > 3
                      ) {
                        return "form-control form-control-sm is-invalid";
                      }
                      if (validEmail) {
                        return "form-control form-control-sm is-valid";
                      }
                      return "form-control form-control-sm";
                    })()}
                    type="text"
                    onChange={e => {
                      setRelationships([
                        ...relationships.filter(el => el.guid !== "new"),
                        { ...obj, email: e.target.value }
                      ]);
                      setValidEmail(validator.validate(e.target.value));
                    }}
                  />
                ) : (
                  obj.email
                )}
              </td>
              <td>
                {obj.confirmed === "1" && (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} /> Confirmed
                  </>
                )}
                {obj.confirmed === "0" && (
                  <>
                    <FontAwesomeIcon icon={faTimesCircle} /> Declined
                  </>
                )}
                {!obj.confirmed && obj.guid !== "new" && (
                  <>
                    <FontAwesomeIcon icon={faClock} /> Awaiting Confirmation
                  </>
                )}
              </td>
              <td style={{ minWidth: "120px", textAlign: "center" }}>
                {obj.guid !== "new" &&
                  !relationships.some(el => el.guid === "new") && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                      onClick={() => {
                        setShowDelete(!showDelete);
                        setDeleteGuid(obj.guid);
                      }}
                    >
                      Delete
                    </button>
                  )}
                {obj.guid === "new" && (
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary rounded-pill px-3"
                    disabled={
                      !validFirst ||
                      !validLast ||
                      !validType ||
                      (!validEmail && "disabled")
                    }
                    onClick={saveChanges}
                  >
                    Save
                  </button>
                )}
              </td>
            </tr>
          ))}
          {!relationships.some(el => el.guid === "new") && (
            <tr>
              <td colSpan="6">
                <button
                  type="button"
                  className="btn btn-sm rounded-pill px-3 btn-outline-secondary"
                  onClick={() =>
                    setRelationships([
                      ...relationships,
                      {
                        guid: "new",
                        email: "",
                        first: "",
                        last: "",
                        typeValue: ""
                      }
                    ])
                  }
                >
                  + Add New
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={showDelete} onHide={() => setShowDelete(!showDelete)}>
        <Modal.Header closeButton>
          <Modal.Title as="h3">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this relationship?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowDelete(!showDelete)}>
            Cancel
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setShowDelete(!showDelete);
              fetch("?cmd=deleteRelation", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: qs.stringify({
                  cmd: "deleteRelation",
                  guid: deleteGuid
                })
              })
                .then(res => {
                  if (!res.ok) {
                    setShowToast(true);
                    setToastMessage(
                      "There was an error saving your changes. Please try again later"
                    );
                  } else {
                    setShowToast(true);
                    setToastMessage(
                      "The relationship record has been deleted."
                    );
                    loadRelationships();
                  }
                })
                .catch(error => {
                  setShowToast(true);
                  setToastMessage(`There was an error... ${error}`);
                });
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast show={showToast} message={toastMessage} hide={setShowToast} />
    </>
  );
};
export default Parents;
