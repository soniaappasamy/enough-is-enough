import React, { useState } from 'react';
import {
    Classes, H1, H4, Drawer, Button, H3,
} from '@blueprintjs/core';
import ReactGA from 'react-ga';
import EmailSenderForm from './components/EmailSenderForm';
import { allEmails } from './emails/templates';
import {
    GOOGLE_ANALYTICS_TRACKING_ID, BASE_URL, CONTACT_EMAIL, BASE_DEV_URL,
} from './consts';
import { getUrlFilter } from './utils/getUrlFilter';
import './App.scss';
import { filterEmails } from './utils/filterEmails';
import { isLocalhost } from './serviceWorker';

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);

const App: React.FC = () => {
    const [isHelpDrawerOpen, setHelpDrawerOpen] = useState(false);
    const openHelpDrawer = () => setHelpDrawerOpen(true);
    const closeHelpDrawer = () => setHelpDrawerOpen(false);

    const urlFilter = getUrlFilter();
    const filteredEmails = urlFilter !== undefined ? filterEmails(urlFilter, allEmails) : allEmails;
    const returnToHomePage = () => window.location.assign(isLocalhost ? BASE_DEV_URL : BASE_URL);

    return <div className={`app ${Classes.DARK}`}>
        <div className="header">
            <H1>ENOUGH IS ENOUGH</H1>
            <H4 className={Classes.TEXT_MUTED}>autofill emails to demand justice</H4>
        </div>
        <EmailSenderForm emails={filteredEmails} />
        <div>
            {urlFilter !== undefined
            && <Button
                className="bottom-button"
                icon="home"
                minimal
                small
                onClick={returnToHomePage}
            />}
            <Button
                className="bottom-button"
                icon="help"
                minimal
                small
                onClick={openHelpDrawer} />
        </div>
        <Drawer
            className="help-drawer"
            isOpen={isHelpDrawerOpen}
            onClose={closeHelpDrawer}
            usePortal={false}
            position="bottom"
        >
            <H3>
                <p>
                  Please let us know if an email bounces or you notice any other issues!
                </p>
                <p>Send us an email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </H3>
        </Drawer>
    </div>;
};

export default App;
