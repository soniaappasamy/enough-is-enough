/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Drawer, Classes } from '@blueprintjs/core';
import React, { useState } from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';
import ReactGA from 'react-ga';
import {
    HEADER_LOGO, HOME_BUTTON_LOGO, SHARE_BUTTON_LOGO, BASE_URL,
} from '../consts';
import '../App.scss';

interface IShareDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ShareDrawer: React.FC<IShareDrawerProps> = (props) => {
    const { isOpen, onClose } = props;
    const [shareIconsVisibility, setShareIconsVisibility] = useState<boolean>(false);
    const toggleShareIconsVisibility = () => setShareIconsVisibility(!shareIconsVisibility);
    const onReturnHomeClick = () => {
        onClose();
        setShareIconsVisibility(false);
    };

    return (
        <Drawer
            className="drawer"
            isOpen={isOpen}
            onClose={onClose}
            usePortal={false}
            position="bottom"
            size="100%"
        >
            <div className="header">
                <img src={HEADER_LOGO} alt="" height={140}/>
            </div>
            <div style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 80 }}>Thank you for your email.</div>
            <div onClick={onReturnHomeClick} style={{ marginBottom: 50 }}>
                <img src={HOME_BUTTON_LOGO} alt="" height={35}/>
                <div>Return home,</div>
                <div className={Classes.TEXT_MUTED}>send another email</div>
            </div>
            <div onClick={toggleShareIconsVisibility} style={{ marginBottom: 30 }}>
                <img src={SHARE_BUTTON_LOGO} alt="" height={35}/>
                <div>Share this link,</div>
                <div className={Classes.TEXT_MUTED}>send to a friend</div>
            </div>
            {shareIconsVisibility
                && <div>
                    <TwitterShareButton url={BASE_URL}>
                        <TwitterIcon borderRadius={4} style={{ height: 50 }} onClick={sendReactGAEvent('twitter')}/>
                    </TwitterShareButton>
                    <FacebookShareButton url={BASE_URL}>
                        <FacebookIcon borderRadius={4} style={{ height: 50 }} onClick={sendReactGAEvent('facebook')}/>
                    </FacebookShareButton>
                    <WhatsappShareButton url={BASE_URL}>
                        <WhatsappIcon borderRadius={4} style={{ height: 50 }} onClick={sendReactGAEvent('whatsapp')}/>
                    </WhatsappShareButton>
                </div>}
        </Drawer>
    );
};

const sendReactGAEvent = (shareType: string) => () => {
    ReactGA.event({
        category: 'Email form',
        action: 'Clicked send',
        label: `Clicked ${shareType} share button`,
    });
};
