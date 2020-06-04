/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useMemo } from 'react';
import {
    FormGroup, InputGroup, Button, MenuItem, Menu,
} from '@blueprintjs/core';
import {
    Select, ItemRenderer, ItemListRenderer, ItemPredicate, IItemListRendererProps,
} from '@blueprintjs/select';
import ReactGA from 'react-ga';
import { IEmail } from '../emails/types';
import { getEmailMailToLink } from '../utils/getEmailMailToLink';
import './EmailSenderForm.scss';

interface IEmailSenderFormProps {
    emails: IEmail[];
}

const EmailSenderForm: React.FC<IEmailSenderFormProps> = ({ emails }) => {
    // Only want event to trigger once
    useMemo(() => ReactGA.pageview('Email form'), []);

    const [name, setName] = useState<string | undefined>(undefined);
    const [location, setLocation] = useState<string | undefined>(undefined);
    const [selectedEmail, setSelectedEmail] = (
        useState<IEmail | undefined>(emails.length > 0 ? emails[0] : undefined)
    );

    const cleanText = (rawText: string) => (rawText === '' ? undefined : rawText);
    // Todo: remove as any casts
    const onTypeName = ({ target }: React.FormEvent) => setName(cleanText((target as any).value));
    const onTypeLocation = ({ target }: React.FormEvent) => (
        setLocation(cleanText((target as any).value))
    );

    const mailToLink = getEmailMailToLink(selectedEmail, name, location);

    // Todo: figure out why disapearing when move to styles
    const textInputStyle: React.CSSProperties = { backgroundColor: '#10161A', textAlign: 'center' };

    return (
        <div className="form-container">
            <FormGroup>
                <InputGroup
                    style={textInputStyle}
                    value={name}
                    placeholder="NAME..."
                    fill
                    large
                    onInput={onTypeName}
                />
            </FormGroup>
            <FormGroup>
                <InputGroup
                    style={textInputStyle}
                    value={location}
                    placeholder="CITY..."
                    fill
                    large
                    onChange={onTypeLocation}
                />
            </FormGroup>
            <FormGroup className="select-container">
                <Select
                    itemListRenderer={emailSelectItemListRenderer}
                    itemPredicate={filterEmails}
                    items={emails}
                    itemRenderer={emailSelectItemRenderer}
                    onItemSelect={setSelectedEmail}
                >
                    <Button
                        style={{ width: '300px' }}
                        text={selectedEmail ? selectedEmail.title : 'No selection'}
                        icon="envelope"
                        rightIcon="caret-down"
                        fill
                    />
                </Select>
            </FormGroup>
            <div>
                <a className="mailto-link" href={mailToLink}>
                    <Button
                        text="SEND"
                        intent="none"
                        fill
                        disabled={mailToLink === undefined}
                        onClick={sendReactGAEvent(selectedEmail, location)}
                    />
                </a>
            </div>
        </div>
    );
};

const emailSelectItemListRenderer: ItemListRenderer<IEmail> = ({
    items, itemsParentRef, query, renderItem,
}: IItemListRendererProps<IEmail>) => {
    const renderedItems = items.map(renderItem).filter((item) => item != null);
    return (
        <Menu ulRef={itemsParentRef} style={{ minWidth: '290px', maxWidth: '290px' }}>
            <MenuItem
                disabled
                text={`Found ${renderedItems.length} items matching "${query}"`}
            />
            {renderedItems}
        </Menu>
    );
};

const filterEmails: ItemPredicate<IEmail> = (query, email) => (
    email.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
);

const emailSelectItemRenderer: ItemRenderer<IEmail> = (email, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            active={modifiers.active}
            key={email.title}
            onClick={handleClick}
            text={email.title}
        />
    );
};

const sendReactGAEvent = (email: IEmail | undefined, location: string | undefined) => () => {
    ReactGA.event({ category: 'Email form', action: 'Clicked send', label: `Location ${location || 'N/A'} Sent ${email?.title || 'N/A'}` });
};

export default EmailSenderForm;
