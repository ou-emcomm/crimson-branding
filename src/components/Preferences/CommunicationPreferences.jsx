import React, { useState, useEffect } from "react";
import "./checkboxes.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import isEqual from "lodash/isEqual";
import qs from "query-string";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import campaigns from "./campaigns";
import Toast from "./Toast";
import ConditionalWrapper from "./ConditionalWrapper";

const noMobile = (id, header, body, children) => (
  <OverlayTrigger
    overlay={
      <Popover id={id}>
        <Popover.Header as="h3">{header}</Popover.Header>
        <Popover.Body dangerouslySetInnerHTML={{ __html: body }} />
      </Popover>
    }
  >
    <div>{children}</div>
  </OverlayTrigger>
);

const CommPref = props => {
  const { data } = props;
  const [init, setInit] = useState(false);
  const [initPref, setInitPref] = useState(() => {
    const pref = {};
    campaigns.forEach(e => {
      pref[e.short] = { sms: "0", email: "0" };
    });
    return pref;
  });
  const [preferences, setPreferences] = useState(() => {
    const pref = {};
    campaigns.forEach(e => {
      pref[e.short] = { sms: "0", email: "0" };
    });
    return pref;
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const url =
      process.env.NODE_ENV === "production"
        ? "?cmd=getPreferences"
        : "/dev/personalPreferences.json";
    fetch(url)
      .then(res => res.json())
      .then(result => {
        const saved = result.row[0];
        const copyPref = {};
        Object.keys(saved).forEach(o => {
          const value = saved[o][0];
          copyPref[o] = value;
        });
        setInitPref({ ...initPref, ...copyPref }); // set inital values so they can be compared against when showing/hiding the save button
        setPreferences({ ...preferences, ...copyPref }); // set live displayed preferences
        setInit(true); // init is used to determine if the checkboxes should be read only or not (on load)
      });
  }, []);
  const handleChange = e => {
    const el = e.target;
    const { checked } = el;
    const channel = el.dataset.method;
    const box = el.name;
    setPreferences({
      ...preferences,
      [box]: { [channel]: checked ? "1" : "0" }
    });
    setUnsavedChanges(true);
  };
  const saveChanges = () => {
    const url =
      process.env.NODE_ENV === "production"
        ? "?cmd=updatePreferences"
        : "https://0a4000bc-980e-4144-9a64-c8acf69f392a.mock.pstmn.io/updatePreferences";
    Object.keys(preferences).forEach((ob, i) => {
      Object.keys(preferences[ob]).forEach(item => {
        // if (item !== "email") {
          // TODO: remove when implementing email
          fetch(url, {
            method: "POST",
            // mode: 'no-cors',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: qs.stringify({
              cmd: "updatePreferences",
              type: ob,
              method: item,
              pref: preferences[ob][item]
            })
          })
            .then(res => {
              if (!res.ok) {
                setShowToast(true);
                setToastMessage(
                  "There was an error saving your changes. Please try again later"
                );
              } else if (isEqual(Object.keys(preferences).length - 1, i)) {
                setUnsavedChanges(false);
                setShowToast(true);
                setToastMessage("Your preferences have been saved!");
                setInitPref(preferences);
              }
            })
            .catch(error => {
              setShowToast(true);
              setToastMessage(`There was an error... ${error}`);
            });
        // }
      });
    });
  };
  return (
    <>
      <Row className="flex-nowrap">
        <Col style={{ padding: 0, textAlign: "center" }} xs={8} />
        <Col style={{ padding: 0, textAlign: "center" }}>Email</Col>
        <Col style={{ padding: 0, textAlign: "center" }}>SMS</Col>
      </Row>
      {campaigns.map(c => (
        <Row className="flex-nowrap" key={c.short}>
          <Col xs={8}>
            <Accordion>
              <Accordion.Item eventKey={c.key}>
                <Accordion.Header>{c.name}</Accordion.Header>
                <Accordion.Body>{c.note}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          {c.channels.map(ch => (
            <Col
              className="py-2 d-flex justify-content-center"
              style={{ padding: 0, textAlign: "center" }}
              key={`${c.short}-box-${ch.key}`}
            >
              <div className="form_checkbox">
                <div className="form_responses">
                  <ConditionalWrapper
                    condition={
                      ch.type === "sms" && (!data.mobile || data.mobile === "")
                    }
                    wrapper={children =>
                      noMobile(
                        `${c.short}-box-${ch.key}`,
                        `Cannot add texting preferences for the ${c.name}`,
                        `<p>Cannot add texting preferences because there is no phone number on file. Visit <a href="https://one.ou.edu" target="_blank">one.ou.edu</a> to add a mobile phone.</p><p class="small">Please note that it can take up to two hours for any updates to sync back to this portal.</p>`,
                        children
                      )
                    }
                  >
                    <>
                      <input
                        style={{
                          pointerEvents:
                            !data.mobile || data.mobile === ""
                              ? "none"
                              : "inherit"
                        }}
                        checked={(() => {
                          if (ch.disabled) {
                            return "checked";
                          }
                          if (preferences[c.short][ch.type] === "1") {
                            return "checked";
                          }
                          return "";
                        })()}
                        onChange={handleChange}
                        disabled={(() => {
                          if (ch.disabled || !init) {
                            return "disabled";
                          }
                          if (!data.mobile || data.mobile === "") {
                            return "disabled";
                          }
                          return "";
                        })()}
                        id={`${c.short}-${ch.type}`}
                        data-method={ch.type}
                        name={`${c.short}`}
                        readOnly={ch.disabled ? "readonly" : ""}
                        type="checkbox"
                      />
                      <label htmlFor={`${c.short}-${ch.type}`}>
                        <span className="hidden">{`${c.name}-${ch.type}`}</span>
                      </label>
                    </>
                  </ConditionalWrapper>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
      {unsavedChanges && !isEqual(initPref, preferences) && (
        <Row className="mt-3">
          <Col className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary rounded-pill"
              onClick={saveChanges}
            >
              Save Changes
            </button>
          </Col>
        </Row>
      )}
      <Toast show={showToast} message={toastMessage} hide={setShowToast} />
    </>
  );
};
export default CommPref;

CommPref.propTypes = {
  data: PropTypes.shape({
    mobile: PropTypes.string.isRequired
  }).isRequired
};
