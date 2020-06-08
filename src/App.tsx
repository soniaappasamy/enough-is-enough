import React, { useState } from 'react';
import {
    Classes, Drawer, Button, H3,
} from '@blueprintjs/core';
import ReactGA from 'react-ga';
import EmailSenderForm from './components/EmailSenderForm';
import { allEmails } from './emails/templates';
import {
    GOOGLE_ANALYTICS_TRACKING_ID, CONTACT_EMAIL, HEADER_LOGO,
} from './consts';
import './App.scss';
import { ShareDrawer } from './components/ShareDrawer';

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);

const App: React.FC = () => {
    const [isHelpDrawerOpen, setHelpDrawerOpen] = useState(false);
    const openHelpDrawer = () => setHelpDrawerOpen(true);
    const closeHelpDrawer = () => setHelpDrawerOpen(false);

    const [isShareDrawerOpen, setShareDrawerOpen] = useState(false);
    const openShareDrawer = () => setShareDrawerOpen(true);
    const closeShareDrawer = () => setShareDrawerOpen(false);

    return <div className={`app ${Classes.DARK}`}>
        <div className="header">
            <img src={HEADER_LOGO} alt="" height={140}/>
        </div>
        <EmailSenderForm emails={allEmails} onSendEmail={openShareDrawer} />
        <Button
            className="bottom-button"
            icon="help"
            minimal
            small
            onClick={openHelpDrawer} />
        <Drawer
            className="drawer"
            isOpen={isHelpDrawerOpen}
            onClose={closeHelpDrawer}
            usePortal={false}
            position="bottom"
        >
            <H3 style={{ color: '#CED9E0' }}>
                <p style={{ paddingBottom: 20 }}>
                  Please let us know if an email bounces or you notice any other issues!
                </p>
                <p>Send us an email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </H3>
        </Drawer>
        <ShareDrawer isOpen={isShareDrawerOpen} onClose={closeShareDrawer} />
    </div>;
};

export default App;
