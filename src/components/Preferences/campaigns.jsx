import React from 'react';

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
          <a
            style={{ textDecoration: 'none' }}
            className="text-secondary"
            href="https://ou.edu/sfc"
            target="_blank"
            rel="noreferrer"
          >
            Student Financial Center
          </a>
          {' '}
          within the Division of Enrollment Management uses SMS text messages to provide billing
          deadline reminders, financial aid updates, scholarship information, and other important
          details. Standard text messaging and data rates may apply.
        </p>
        <p>
          Students may opt-out at any time by responding to the text message. Please note that
          opting out will remove you from all future communication from the Student Financial Center
          only. You will continue to receive important emails from the Student Financial Center and
          other offices, as email remains the official form of communication from the university.
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
          <a
            style={{ textDecoration: 'none' }}
            className="text-secondary"
            href="https://ou.edu/moneycoach"
            target="_blank"
            rel="noreferrer"
          >
            OU MidFirst Bank MoneyCoach Program
          </a>
          {' '}
          within the Division of Enrollment Management uses SMS text messages to provide financial
          planning workshop invites, appointment reminders, financial aid updates, scholarship
          information, and other important details. Standard text messaging and data rates may
          apply.
        </p>
        <p>
          Students may opt-out at any time by responding to the text message. Please note that
          opting out will remove you from all future communication from the OU MidFirst Bank
          MoneyCoach Program only. You will continue to receive important emails from the MoneyCoach
          Program and other offices, as email remains the official form of communication from the
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
    key: 3,
    name: 'Office of the Registrar',
    short: 'reg',
    note: (
      <>
        <p>
          The
          {' '}
          <a
            href="https://ou.edu/registrar"
            style={{ textDecoration: 'none' }}
            className="text-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Office of the Registrar
          </a>
          {' '}
          within the Division of Enrollment Management uses SMS text messages to provide enrollment
          information, appointment reminders, course and classroom announcements, and other
          important details. Standard text messaging and data rates may apply.
        </p>
        <p>
          Students may opt-out at any time by responding to the text message. Please note that
          opting out will remove you from all future communication from the Office of the Registrar
          only. You will continue to receive important emails from the Office of the Registrar and
          other offices, as email remains the official form of communication from the university.
        </p>
      </>
    ),
    channels: [
      { key: 1, type: 'email', disabled: true },
      { key: 2, type: 'sms', disabled: false },
    ],
  },
];
export default campaigns;
