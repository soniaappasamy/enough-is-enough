/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useMemo } from 'react';
import {
    FormGroup, InputGroup, Button, MenuItem, Menu, Tag,
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
    const [selectedEmail, setSelectedEmail] = useState<IEmail | undefined>(undefined);

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
                    items={emails}
                    itemRenderer={emailSelectItemRenderer}
                    onItemSelect={setSelectedEmail}
                >
                    <Button
                        style={{ width: '300px' }}
                        text={selectedEmail ? selectedEmail.title : 'SELECT EMAIL...'}
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
    items: allEmails, itemsParentRef, query, renderItem,
}: IItemListRendererProps<IEmail>) => {
    const getRenderedEmails = (emails: IEmail[]) => (
        emails.map(renderItem).filter((email) => email != null));

    const filteredEmails = allEmails.filter((email) => filterEmails(query, email));
    const groupedEmails = new Map<string | undefined, IEmail[]>();
    filteredEmails.forEach((email) => {
        const { group } = email;
        groupedEmails.set(group, [...(groupedEmails.get(group) || []), email]);
    });

    return (
        <Menu ulRef={itemsParentRef} style={{ minWidth: '290px', maxWidth: '290px' }}>
            <MenuItem
                disabled
                text={`Found ${filteredEmails.length} items matching "${query}"`}
            />
            {Array.from(groupedEmails.keys()).map((groupName) => (
                <div key={groupName}>
                    {groupName !== undefined
                    && <Tag style={{ margin: '10px 0 5px 0' }} minimal fill>{groupName}</Tag>}
                    {getRenderedEmails(groupedEmails.get(groupName) || [])}
                </div>
            ))}
        </Menu>
    );
};

const filterEmails: ItemPredicate<IEmail> = (query, email) => (
    textContains(email.title, query)
    || (email.group !== undefined && textContains(email.group, query)));
const textContains = (text: string, query: string): boolean => (
    text.toLowerCase().indexOf(query.toLowerCase()) >= 0);

const emailSelectItemRenderer: ItemRenderer<IEmail> = (email, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            key={email.title}
            style={{ marginLeft: 10 }}
            active={modifiers.active}
            onClick={handleClick}
            text={email.title}
        />
    );
};

const sendReactGAEvent = (email: IEmail | undefined, location: string | undefined) => () => {
    ReactGA.event({ category: 'Email form', action: 'Clicked send', label: `Location ${location || 'N/A'} Sent ${email?.title || 'N/A'}` });
};

export default EmailSenderForm;
