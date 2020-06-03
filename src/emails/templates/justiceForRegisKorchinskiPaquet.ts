import { IEmail } from "../types";
import { NEW_LINE } from "../consts";

export const justiceForRegisKorchinskiPaquet: IEmail = {
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
    body: (name, location) => `To whom it may concern,
    ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} in regards to the incident that occurred at 100 High Park Avenue on May 27th, 2020. A 29 year-old Black woman, Regis, fell to her death off her own balcony, despite police being present.
    ${NEW_LINE}${NEW_LINE}I am very upset and disturbed at the events that took place. The police were called to help Regis’ situation, yet she ended up losing her life. I am demanding justice and answers as to the death of Regis Korchinski-Paquet.
    ${NEW_LINE}${NEW_LINE}Why has more information not been released? A complete and transparent public and independent investigation needs to take place. Charges need to be brought to all the officers involved, and all information and evidence should be made available to the public.
    ${NEW_LINE}${NEW_LINE}Black Lives Matter.
    ${NEW_LINE}Sincerely,
    ${NEW_LINE}${name}
    `
};