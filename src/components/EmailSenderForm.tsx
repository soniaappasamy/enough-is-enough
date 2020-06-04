import React, { useState } from "react";
import { FormGroup, InputGroup, Button, Intent, MenuItem, Menu } from "@blueprintjs/core";
import { Select, ItemRenderer, ItemListRenderer, ItemPredicate } from "@blueprintjs/select";
import { IEmail } from "../emails/types";
import { getEmailMailToLink } from "../utils/getEmailMailToLink";
import "./EmailSenderForm.scss";

interface IEmailSenderFormProps {
    emails: IEmail[];
}

export const EmailSenderForm: React.FC<IEmailSenderFormProps> = ({ emails }) => {
    const [name, setName] = useState<string | undefined>(undefined);
    const [location, setLocation] = useState<string | undefined>(undefined);
    const [selectedEmail, setSelectedEmail] = useState<IEmail | undefined>(emails.length > 0 ? emails[0] : undefined);

    const onTypeName = (event: React.FormEvent) => setName((event.target as any).value); // Todo: remove as any casts
    const onTypeLocation = (event: React.FormEvent) => setLocation((event.target as any).value);

    const mailToLink = getEmailMailToLink(selectedEmail, name, location);

    return (
        <div className={"form-container"}>
            <FormGroup labelFor={"name-input"}>
                <InputGroup
                    id={"name-input"}
                    value={name}
                    placeholder={"Enter your name..."}
                    leftIcon={"person"}
                    fill={true}
                    large={true}
                    onInput={onTypeName}
                />
            </FormGroup>
            <FormGroup labelFor={"location-input"}>
                <InputGroup
                    id={"location-input"}
                    value={location}
                    placeholder={"Enter your location.."}
                    leftIcon={"map-marker"}
                    fill={true}
                    large={true}
                    onChange={onTypeLocation} />
            </FormGroup>
            <FormGroup className={"select-container"}>
                <Select
                    itemListRenderer={emailSelectItemListRenderer}
                    itemPredicate={filterEmails}
                    items={emails}
                    itemRenderer={emailSelectItemRenderer}
                    onItemSelect={setSelectedEmail}
                >
                    <Button
                        style={{ width: 350 }}
                        text={selectedEmail ? selectedEmail.title : "No selection"}
                        icon={"envelope"}
                        rightIcon={"caret-down"}
                        fill={true}
                    />
                </Select>
            </FormGroup>
            <div>
                <a className={"mailto-link"} href={mailToLink}>
                    <Button
                        text={"Send"}
                        fill={true}
                        large={true}
                        disabled={mailToLink === undefined}
                    />
                </a>
            </div>
        </div>
    );
};

const emailSelectItemListRenderer: ItemListRenderer<IEmail> = ({ items, itemsParentRef, query, renderItem }) => {
    const renderedItems = items.map(renderItem).filter(item => item != null);
    return (
        <Menu ulRef={itemsParentRef} style={{ width: 340 }}>
            <MenuItem
                disabled={true}
                text={`Found ${renderedItems.length} items matching "${query}"`}
            />
            {renderedItems}
        </Menu>
    );
};

const filterEmails: ItemPredicate<IEmail> = (query, email) => {
    return email.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
};

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
