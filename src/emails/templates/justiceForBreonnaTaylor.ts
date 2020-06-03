import { IEmail } from "../types";
import { NEW_LINE } from "../consts";

export const justiceForBreonnaTaylor: IEmail = {
    title: "JUSTICE FOR BREONNA TAYLOR",
    subject: "JUSTICE FOR BREONNA TAYLOR",
    sendTo: [
        "https://louisville-police.org/FormCenter/About-Us-4/Email-the-Chief-43",
        "https://louisvilleky.gov/government/mayor-greg-fischer/contact-mayors-office",
        "https://governor.ky.gov/contact/contact-us"
    ],
    body: (name, location) => `To whom it may concern,
    ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} in regards to the murder of Breonna Taylor, on March 13, 2020 in your city. She was shot and murdered in her own home.
    ${NEW_LINE}${NEW_LINE}I am disgusted and horrified by the events that took place on that night. Officers of the law are meant to protect the people. Breonna was not armed nor engaging with the police but she was shot not just once, but at least EIGHT times, in her own home. Along with these horrific details, there was also no body camera footage of the events that unfolded that night. 
    ${NEW_LINE}${NEW_LINE}It has been more than two months since this horrific event and there is still no explanation as to what happened. People need to be held accountable. I demand that a complete and transparent, public and independent investigation into the events that occured on that night take place. Charges must be brought on to all the officers that were involved. All information and evidence should be made available to the public.
    ${NEW_LINE}${NEW_LINE}There has to be justice for Breonna. She was only 26, and an EMT in your city. She was a daughter, friend, and girlfriend. She was a person.
    ${NEW_LINE}${NEW_LINE}Black Lives Matter.
    ${NEW_LINE}Sincerely,
    ${NEW_LINE}${name}
    `
};