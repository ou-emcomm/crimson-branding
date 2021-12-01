import React from "react";

const campaigns = [
  {
    key: 1,
    name: "Student Financial Center",
    short: "sfc",
    note: (
      <>
        <p>
          The{" "}
          <a
            className="text-primary"
            href="https://ou.edu/sfc"
            target="_blank"
            rel="noreferrer"
          >
            Student Financial Center
          </a>{" "}
          within the Division of Enrollment Management uses SMS text messages to
          provide billing deadline reminders, financial aid updates, scholarship
          information, and other important details. Standard text messaging and
          data rates may apply.
        </p>
        <p>
          Students may opt-out of text messages at any time by navigating to{" "}
          <a className="text-primary" href="/portal/preferences">
            crimson.ou.edu/portal/preferences
          </a>{" "}
          and unchecking the SMS box associated with the Student Financial
          Center. Please note that opting out will remove you from future SMS
          communication from the Student Financial Center only. You will
          continue to receive important emails from the Student Financial Center
          and other offices, as email remains the official form of communication
          for the university.
        </p>
      </>
    ),
    channels: [
      { key: 1, type: "email", disabled: true },
      { key: 2, type: "sms", disabled: false }
    ]
  },
  {
    key: 2,
    name: "OU MidFirst Bank MoneyCoach Programs",
    short: "mc",
    note: (
      <>
        <p>
          The{" "}
          <a
            className="text-primary"
            href="https://ou.edu/moneycoach"
            target="_blank"
            rel="noreferrer"
          >
            OU MidFirst Bank MoneyCoach Program
          </a>{" "}
          within the Division of Enrollment Management uses SMS text messages to
          provide financial planning workshop invites, appointment reminders,
          financial aid updates, scholarship information, and other important
          details. Standard text messaging and data rates may apply.
        </p>
        <p>
          Students may opt-out of text messages at any time by navigating to{" "}
          <a className="text-primary" href="/portal/preferences">
            crimson.ou.edu/portal/preferences
          </a>{" "}
          and unchecking the SMS box associated with the OU MidFirst Bank
          MoneyCoach Program. Please note that opting out will remove you from
          future SMS communication from the OU MidFirst Bank MoneyCoach Program
          only. You will continue to receive important emails from the OU
          MidFirst Bank MoneyCoach Program and other offices, as email remains
          the official form of communication for the university.
        </p>
      </>
    ),
    channels: [
      { key: 1, type: "email", disabled: true },
      { key: 2, type: "sms", disabled: false }
    ]
  },
  {
    key: 3,
    name: "Office of the Registrar",
    short: "reg",
    note: (
      <>
        <p>
          The{" "}
          <a
            className="text-primary"
            href="https://ou.edu/registrar"
            target="_blank"
            rel="noreferrer"
          >
            Office of the Registrar
          </a>{" "}
          within the Division of Enrollment Management uses SMS text messages to
          provide enrollment information, appointment reminders, course and
          classroom announcements, and other important details. Standard text
          messaging and data rates may apply.
        </p>
        <p>
          Students may opt-out of text messages at any time by navigating to{" "}
          <a className="text-primary" href="/portal/preferences">
            crimson.ou.edu/portal/preferences
          </a>{" "}
          and unchecking the SMS box associated with the Office of the
          Registrar. Please note that opting out will remove you from future SMS
          communication from the Office of the Registrar only. You will continue
          to receive important emails from the Office of the Registrar and other
          offices, as email remains the official form of communication for the
          university.
        </p>
      </>
    ),
    channels: [
      { key: 1, type: "email", disabled: true },
      { key: 2, type: "sms", disabled: false }
    ]
  }
];
export default campaigns;
