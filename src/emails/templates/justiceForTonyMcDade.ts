import { IEmail } from "../types";
import { NEW_LINE } from "../consts";

export const justiceForTonyMcDade: IEmail = {
    title: "JUSTICE FOR TONY MCDADE",
    subject: "JUSTICE FOR TONY MCDADE",
    sendTo: [
        "contactus@talgov.com",
        "mayor@talgov.com"
    ],
    body: (name, location) => `To whom it may concern,
    ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} regarding the murder of Tony McDade in your city on May 27, 2020.
    ${NEW_LINE}${NEW_LINE}Firstly, please use Tony’s correct name (Tony McDade) and pronouns (he/him/his) on the official police website and in any communication with the press. Using misgendered pronouns is a huge sign of disrespect.
    ${NEW_LINE}${NEW_LINE}I am very upset and disturbed by the events that took place. We need answers about exactly what happened, and justice for those who were involved.
    ${NEW_LINE}${NEW_LINE}A complete and transparent public and independent investigation must take place. Charges need to be brought against the officer involved, and all information and evidence must be made available to the public as soon as possible.
    ${NEW_LINE}${NEW_LINE}Black Lives Matter.
    ${NEW_LINE}Sincerely,
    ${NEW_LINE}${name}
    `
};