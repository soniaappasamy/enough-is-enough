import React, { useState } from "react";
import { FormGroup, InputGroup, Button, MenuItem, Menu } from "@blueprintjs/core";
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

    const cleanText = (rawText: string) => rawText === "" ? undefined : rawText;
    const onTypeName = ({ target }: React.FormEvent) => setName(cleanText((target as any).value)); // Todo: remove as any casts
    const onTypeLocation = ({ target }: React.FormEvent) => setLocation(cleanText((target as any).value));

    const mailToLink = getEmailMailToLink(selectedEmail, name, location);

    const textInputStyle: React.CSSProperties = { backgroundColor: "#10161A", textAlign: "center" }; // Todo: figure out why disapearing when move to styles

    return (
        <div className={"form-container"}>
            <FormGroup>
                <InputGroup
                    style={textInputStyle}
                    value={name}
                    placeholder={"NAME..."}
                    // leftIcon={"person"}
                    fill={true}
                    large={true}
                    onInput={onTypeName}
                />
            </FormGroup>
            <FormGroup>
                <InputGroup
                    style={textInputStyle}
                    value={location}
                    placeholder={"LOCATION..."}
                    // leftIcon={"map-marker"}
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
                        style={{ width: "300px" }}
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
                        text={"SEND"}
                        intent={"none"}
                        fill={true}
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
        <Menu ulRef={itemsParentRef} style={{ width: "290px" }}>
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
