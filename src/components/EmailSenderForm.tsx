/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, {
    useState, useMemo, useCallback, useEffect,
} from 'react';
import {
    FormGroup, InputGroup, Button, MenuItem, Menu, Classes, Intent,
} from '@blueprintjs/core';
import {
    Select, ItemRenderer, ItemListRenderer, IItemListRendererProps,
} from '@blueprintjs/select';
import ReactGA from 'react-ga';
import { IEmail } from '../emails/types';
import { getEmailMailToLink } from '../utils/getEmailMailToLink';
import './EmailSenderForm.scss';
import { filterEmails } from '../utils/filterEmails';
import { emailsToGroupsMap } from '../utils/emailsToGroupsMap';
import { groupDescriptions } from '../emails/templates';

interface IEmailSenderFormProps {
    emails: IEmail[];
    urlGroupFilter: string | undefined;
    urlEmailFilter: string | undefined;
    onSendEmail: () => void;
}

const EmailSenderForm: React.FC<IEmailSenderFormProps> = (props) => {
    const {
        emails, urlGroupFilter, urlEmailFilter, onSendEmail,
    } = props;

    // Only want event to trigger once
    useMemo(() => ReactGA.pageview('Email form'), []);

    const [emailGroups, groupKeys] = useMemo(() => emailsToGroupsMap(emails), [emails]);
    const [selectedGroup, setSelectedGroup] = useState<string | undefined>(
        initSelectedGroup(urlGroupFilter, emailGroups, groupKeys),
    );
    const [selectedEmail, setSelectedEmail] = useState<IEmail | undefined>(undefined);
    const [name, setName] = useState<string | undefined>(undefined);
    const [secondInput, setSecondInput] = useState<string | undefined>(undefined);

    useEffect(() => maybeUpdateSelectedEmail(
        selectedGroup, emailGroups, urlEmailFilter, setSelectedEmail,
    ),
    [emailGroups, selectedGroup, urlEmailFilter]);

    const cleanText = useCallback((rawText: string) => (rawText === '' ? undefined : rawText), []);
    const onTypeName = useCallback(
        // Todo: remove as any casts
        ({ target }: React.FormEvent) => setName(cleanText((target as any).value)), [cleanText],
    );
    const onTypeSecondInput = useCallback(
        ({ target }: React.FormEvent) => setSecondInput(cleanText((target as any).value)),
        [cleanText],
    );
    const onSelectGroup = useCallback((group: string) => () => {
        setSelectedGroup(group);
        setSelectedEmail(undefined);
    }, []);
    const onSelectEmail = useCallback(
        (email: IEmail) => {
            setSelectedEmail((oldEmail) => {
                if (oldEmail?.secondInputPlaceholder !== email.secondInputPlaceholder) {
                    setSecondInput('');
                }
                return email;
            });
        }, [],
    );
    const onClickSend = useCallback(() => {
        onSendEmail();
        sendReactGAEvent(selectedEmail, secondInput);
    }, [selectedEmail, secondInput, onSendEmail]);

    const areEmailsSelectable = useMemo(() => {
        if (selectedGroup !== undefined) {
            const groupEmails = emailGroups.get(selectedGroup);
            if (groupEmails !== undefined && groupEmails.length === 1) {
                setSelectedEmail(groupEmails[0]);
                return false;
            }
        }
        return true;
    }, [selectedGroup, emailGroups]);

    const mailToLink = getEmailMailToLink(selectedEmail, name, secondInput);

    // Todo: figure out why disapearing when move to styles
    const inputStyle: React.CSSProperties = {
        width: 280,
        backgroundColor: '#10161A',
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: '#D1D1D1',
        borderRadius: 4,
    };

    return (
        <div>
            <div className="input-container">
                <FormGroup style={{ marginBottom: 30, width: 325 }}>
                    <div
                        className={Classes.TEXT_MUTED}
                        style={{ textAlign: 'center', paddingBottom: 5 }}
                    >
                        Select one topic:
                    </div>
                    <div className="group-button-area">
                        {groupKeys.map((groupKey) => (
                            <Button
                                className="group-button"
                                style={{
                                    borderColor: groupKey === selectedGroup ? '#FBE845' : '#D1D1D1',
                                    backgroundColor: groupKey === selectedGroup ? '#3E3E3E' : '#10161A',
                                    borderRadius: 4,
                                }}
                                key={groupKey}
                                active={groupKey === selectedGroup}
                                minimal
                                outlined
                                onClick={onSelectGroup(groupKey)}
                            >
                                <div style={{ textAlign: 'center', paddingBottom: 5 }}>{groupKey}</div>
                                {groupDescriptions[groupKey] !== undefined
                                    && <div className={`${Classes.TEXT_MUTED} ${Classes.TEXT_SMALL}`} style={{ bottom: 0 }}>
                                        {groupDescriptions[groupKey]}
                                    </div>}
                            </Button>))}
                    </div>
                </FormGroup>
                <FormGroup>
                    <InputGroup
                        style={inputStyle}
                        value={name}
                        placeholder="Enter your name..."
                        fill
                        large
                        onInput={onTypeName}
                    />
                </FormGroup>
                {selectedGroup !== undefined && areEmailsSelectable
                  && <FormGroup>
                      <Select
                          itemListRenderer={emailSelectItemListRenderer}
                          items={emailGroups.get(selectedGroup) || []}
                          itemRenderer={emailSelectItemRenderer}
                          onItemSelect={onSelectEmail}
                          popoverProps={{ minimal: true }}
                      >
                          <Button
                              style={inputStyle}
                              text={selectedEmail ? selectedEmail.title : 'Select an email...'}
                              rightIcon="caret-down"
                              fill
                              large
                              minimal
                          />
                      </Select>
                  </FormGroup>}
                {selectedEmail !== undefined
                  && <FormGroup>
                      <InputGroup
                          style={inputStyle}
                          value={secondInput}
                          placeholder={selectedEmail.secondInputPlaceholder}
                          fill
                          large
                          onChange={onTypeSecondInput}
                      />
                  </FormGroup>}
            </div>
            <div>
                <a className="mailto-link" href={mailToLink}>
                    <Button
                        text="SEND"
                        style={mailToLink !== undefined
                            ? {
                                borderColor: '#5C5C5C',
                                backgroundColor: '#FBE845',
                                color: 'black',
                                fontWeight: 'bold',
                                borderRadius: 4,
                            }
                            : { borderRadius: 4 }}
                        intent={mailToLink === undefined ? Intent.NONE : Intent.PRIMARY}
                        large
                        outlined={mailToLink !== undefined}
                        disabled={mailToLink === undefined}
                        onClick={onClickSend}
                    />
                </a>
            </div>
        </div>
    );
};

/**
 * Render functions
 */

const emailSelectItemListRenderer: ItemListRenderer<IEmail> = ({
    items: allEmails, itemsParentRef, query, renderItem,
}: IItemListRendererProps<IEmail>) => {
    const filteredEmails = filterEmails(query, allEmails);
    const renderedEmails = filteredEmails.map(renderItem).filter((email) => email != null);

    return (
        <Menu ulRef={itemsParentRef} style={{ minWidth: '270px', maxWidth: '270px' }}>
            {query !== ''
             && <MenuItem
                 disabled
                 text={`Found ${filteredEmails.length} emails matching "${query}"`}
             />}
            {renderedEmails}
        </Menu>
    );
};

const emailSelectItemRenderer: ItemRenderer<IEmail> = (email, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            className={modifiers.active ? 'menu-item-selected' : undefined}
            key={email.title}
            style={{
                marginTop: 3,
                height: 40,
                fontSize: 17,
                alignItems: 'center',
            }}
            onClick={handleClick}
            text={email.title}
        />
    );
};

const sendReactGAEvent = (email: IEmail | undefined, secondInput: string | undefined) => {
    ReactGA.event({
        category: 'Email form',
        action: 'Clicked send',
        label: `Second Input ${secondInput || 'N/A'} Sent ${email?.title || 'N/A'}`,
    });
};

/**
 * Helper functions
 */

function initSelectedGroup(
    urlGroupFilter: string | undefined,
    emailGroups: Map<string, IEmail[]>,
    groupKeys: string[],
): string | undefined {
    return urlGroupFilter !== undefined && emailGroups.has(urlGroupFilter)
        ? urlGroupFilter
        : groupKeys.length > 0 ? groupKeys[0] : undefined;
}

function maybeUpdateSelectedEmail(
    selectedGroup: string | undefined,
    emailGroups: Map<string, IEmail[]>,
    urlEmailFilter: string | undefined,
    setSelectedEmail: (email: IEmail) => void,
) {
    if (selectedGroup !== undefined && urlEmailFilter !== undefined) {
        const filteredEmails = filterEmails(
            urlEmailFilter,
            emailGroups.get(selectedGroup) || [],
        );
        if (filteredEmails.length > 0) {
            setSelectedEmail(filteredEmails[0]);
        }
    }
}

export default EmailSenderForm;
