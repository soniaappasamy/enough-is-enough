import React from 'react';
import { Classes, H1, H4 } from '@blueprintjs/core';
import ReactGA from 'react-ga';
import EmailSenderForm from './components/EmailSenderForm';
import { allEmails } from './emails/templates';
import { GOOGLE_ANALYTICS_TRACKING_ID } from './consts';
import './App.scss';

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);

const App: React.FC = () => (
    <div className={`app ${Classes.DARK}`}>
        <div className="header">
            <H1>ENOUGH IS ENOUGH</H1>
            <H4 className={Classes.TEXT_MUTED}>autofill emails to demand justice</H4>
        </div>
        <EmailSenderForm emails={allEmails} />
    </div>
);

export default App;
