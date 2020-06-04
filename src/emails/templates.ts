import { IEmail } from "./types";
import { NEW_LINE } from "./consts";

export const allEmails: IEmail[] = [
    {
        title: "JUSTICE FOR REGIS KORCHINSKI-PAQUET",
        subject: "JUSTICE FOR REGIS KORCHINSKI-PAQUET",
        sendTo: [
            "councillor_perks@toronto.ca",
            "bkarpoche-co@ndp.on.ca",
            "arif.virani@parl.gc.ca",
            "mayor_tory@toronto.ca",
            "officeofthechief@torontopolice.on.ca",
            "sylva.jones@pc.ola.org",
            "doug.downey@pc.ola.org"
        ],
        body: (name, location) =>
            `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} in regards to the incident that occurred at 100 High Park Avenue on May 27th, 2020. A 29 year-old Black woman, Regis, fell to her death off her own balcony, despite police being present.
            ${NEW_LINE}${NEW_LINE}I am very upset and disturbed at the events that took place. The police were called to help Regis’ situation, yet she ended up losing her life. I am demanding justice and answers as to the death of Regis Korchinski-Paquet.
            ${NEW_LINE}${NEW_LINE}Why has more information not been released? A complete and transparent public and independent investigation needs to take place. Charges need to be brought to all the officers involved, and all information and evidence should be made available to the public.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `
    },
    {
        title: "JUSTICE FOR TONY MCDADE",
        subject: "JUSTICE FOR TONY MCDADE",
        sendTo: [
            "contactus@talgov.com",
            "mayor@talgov.com"
        ],
        body: (name, location) =>
            `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} regarding the murder of Tony McDade in your city on May 27, 2020.
            ${NEW_LINE}${NEW_LINE}Firstly, please use Tony’s correct name (Tony McDade) and pronouns (he/him/his) on the official police website and in any communication with the press. Using misgendered pronouns is a huge sign of disrespect.
            ${NEW_LINE}${NEW_LINE}I am very upset and disturbed by the events that took place. We need answers about exactly what happened, and justice for those who were involved.
            ${NEW_LINE}${NEW_LINE}A complete and transparent public and independent investigation must take place. Charges need to be brought against the officer involved, and all information and evidence must be made available to the public as soon as possible.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `
    }, {
        title: "REPEAL 50-A",
        subject: "REPEAL 50-A",
        sendTo: [
            "scousins@nysenate.gov",
            "speaker@nyassembly.gov"
        ],
        body: (name, location) =>
            `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}Hello, my name is ${name}, and I urge you to advocate for the legislature to reconvene and pass Senator Bailey and Assemblyman O'Donnell's bill to repeal 50-A (A2513/S3695). In light of the recent police violence, 50-A must be fully repealed--no modifcations or amendments. Can we count your support to fully repeal 50-A and ask leadership to bring the bill to the floor and vote yes when it comes to floor?
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `
    }
];
