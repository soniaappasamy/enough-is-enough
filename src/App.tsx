import React, { useState, useMemo } from 'react';
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
    // Allow for preselecting the group and email via url parameters
    const urlQuery = window.location.search;
    const [urlGroupFilter, urlEmailFilter] = useMemo(() => {
        if (urlQuery !== '') {
            const groupQuery = urlQuery.split('group=');
            const group = groupQuery.length === 2 ? cleanUrlParam(groupQuery[1]) : undefined;
            const emailQuery = urlQuery.split('email=');
            const email = emailQuery.length === 2 ? cleanUrlParam(emailQuery[1]) : undefined;
            return [group, email];
        }
        return [undefined, undefined];
    }, [urlQuery]);

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
        <EmailSenderForm
            emails={allEmails}
            urlGroupFilter={urlGroupFilter}
            urlEmailFilter={urlEmailFilter}
            onSendEmail={openShareDrawer} />
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

function cleanUrlParam(param: string): string {
    return param.split('&')[0].replace('%20', ' ');
}

export default App;
