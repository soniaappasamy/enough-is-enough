/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEmail } from './types';
import { NEW_LINE } from './consts';

export const allEmails: IEmail[] = [
    {
        title: 'JUSTICE FOR REGIS KORCHINSKI-PAQUET',
        subject: 'JUSTICE FOR REGIS KORCHINSKI-PAQUET',
        sendTo: [
            'councillor_perks@toronto.ca',
            'bkarpoche-co@ndp.on.ca',
            'arif.virani@parl.gc.ca',
            'mayor_tory@toronto.ca',
            'officeofthechief@torontopolice.on.ca',
            'doug.downey@pc.ola.org',
        ],
        body: (name, location) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} in regards to the incident that occurred at 100 High Park Avenue on May 27th, 2020. A 29 year-old Black woman, Regis, fell to her death off her own balcony, despite police being present.
            ${NEW_LINE}${NEW_LINE}I am very upset and disturbed at the events that took place. The police were called to help Regis’ situation, yet she ended up losing her life. I am demanding justice and answers as to the death of Regis Korchinski-Paquet.
            ${NEW_LINE}${NEW_LINE}Why has more information not been released? A complete and transparent public and independent investigation needs to take place. Charges need to be brought to all the officers involved, and all information and evidence should be made available to the public.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'JUSTICE FOR TONY MCDADE',
        subject: 'JUSTICE FOR TONY MCDADE',
        sendTo: [
            'contactus@talgov.com',
            'mayor@talgov.com',
        ],
        body: (name, location) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} regarding the murder of Tony McDade in your city on May 27, 2020.
            ${NEW_LINE}${NEW_LINE}Firstly, please use Tony’s correct name (Tony McDade) and pronouns (he/him/his) on the official police website and in any communication with the press. Using misgendered pronouns is a huge sign of disrespect.
            ${NEW_LINE}${NEW_LINE}I am very upset and disturbed by the events that took place. We need answers about exactly what happened, and justice for those who were involved.
            ${NEW_LINE}${NEW_LINE}A complete and transparent public and independent investigation must take place. Charges need to be brought against the officer involved, and all information and evidence must be made available to the public as soon as possible.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'REPEAL 50-A',
        subject: 'REPEAL 50-A',
        sendTo: [
            'scousins@nysenate.gov',
            'speaker@nyassembly.gov',
        ],
        body: (name, location) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}Hello, my name is ${name}, and I urge you to advocate for the legislature to reconvene and pass Senator Bailey and Assemblyman O'Donnell's bill to repeal 50-A (A2513/S3695). In light of the recent police violence, 50-A must be fully repealed--no modifcations or amendments. Can we count your support to fully repeal 50-A and ask leadership to bring the bill to the floor and vote yes when it comes to floor?
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'DEFUND NYPD',
        subject: 'DEFUND NYPD',
        sendTo: [
            'ddromm@council.nyc.gov',
            'drichards@council.nyc.gov',
            'action@comptroller.nyc.gov',
        ],
        body: (name, location) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${location}. Last April, NYC Mayor Bill De Blasio proposed major budget cuts for the Fiscal Year 2021, especially to education and youth programs, while refusing to slash the NYPD budget by any significant margin. I urge you to consider pressuring the office of the mayor towards an ethical and equal reallocation of the NYC expense budget, away from NYPD, and towards social services and education programs, effective at the beginning of FY 21, July 1st.
            ${NEW_LINE}${NEW_LINE}I am emailing to ask for an emergency council meeting among city officials regarding this matter. Governor Cuomo has doubled NYPD presence effective tonight. I am asking that city officials lobby the same amount of attention and effort towards finding sustainable, long term change.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'NY S2253&frasl;A654',
        subject: 'Passing S2253&frasl;A654 is Police Accountability',
        sendTo: [
            'speaker@nyassembly.gov',
            'scousins@nysenate.gov',
        ],
        body: (name, location) => `Dear Senate Majority Leader Andrea Stewart-Cousins and Assembly Speaker Carl Heastie,
            ${NEW_LINE}${NEW_LINE}I join over 90 organizations across New York State in urging that as part of the police accountability package the legislature will repeal the Walking While Trans Ban, S2253/A654. For four decades, law enforcement has used this statute to target, harass, coerce into sexual acts, and arrest cisgender and transgender women of color, and gender expansive people for how they dress, or for merely existing in public spaces. 
            ${NEW_LINE}${NEW_LINE}Monday marked the beginning of Pride month. This statute has been used to terrorize TGNC community members for far too long. We need you to stand with TGNC community members and get this law repealed. 
            ${NEW_LINE}${NEW_LINE}Black Trans Lives Matter.
            ${NEW_LINE}Respectfully,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'New York City',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'bdeblasio@cityhall.nyc.gov',
        ],
        body: (name, location) => `Dear Mayor Bill DeBlasio, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. New York City ban the use of chokeholds and strangleholds by the NYPD
            ${NEW_LINE}2. New York City require NYPD officers to issue a verbal warning prior to using deadly force
            ${NEW_LINE}3. Reinstate the language that was removed from the NYPD's use of force policy in 2016, and require officers to exhaust all alternatives prior to using deadly force
            ${NEW_LINE}4. Require comprehensive reporting by the NYPD, including all incidents where officers point their firearms at civilians
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the NYPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },

    {
        title: 'Washington D.C.',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'eom@dc.gov',
        ],
        body: (name, location) => `Dear Mayor Muriel Bowser, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Washington DC ban the use of chokeholds and strangleholds by the MPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the MPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Los Angeles',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'mayor.helpdesk@lacity.org',
        ],
        body: (name, location) => `Dear Mayor Eric Garcetti, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Los Angeles require LAPD officers to issue a warning prior to shooting
            ${NEW_LINE}2. Los Angeles require LAPD officers to exhaust all alternatives prior to using deadly force
            ${NEW_LINE}3. Require comprehensive reporting by the LAPD, including all incidents where officers point their firearms at civilians
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the LAPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Portland, OR',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'mayorwheeler@portlandoregon.gov',
        ],
        body: (name, location) => `Dear Mayor Ted Wheeler, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Portland ban the use of chokeholds and strangleholds by the PPB
            ${NEW_LINE}2. Portland require PPB officers to exhaust all alternatives prior to using deadly force
            ${NEW_LINE}3. Portland ban shooting at moving vehicles by the PPB
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the PPB will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Chicago',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'letterforthemayor@cityofchicago.org',
        ],
        body: (name, location) => `Dear Mayor Lori Lightfoot, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Chicago ban shooting at moving vehicles by the CPD
            ${NEW_LINE}2. Require comprehensive reporting by the CPD, including all incidents where officers point their firearms at civilians 
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the CPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Houston',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'mayor@houstontx.gov',
        ],
        body: (name, location) => `Dear Mayor Sylvester Turner, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Houston ban the use of chokeholds and strangleholds by the HPD 
            ${NEW_LINE}2. Houston require HPD officers to de-escalate situations
            ${NEW_LINE}3. Houston require HPD officers to issue a warning prior to shooting  
            ${NEW_LINE}4. Houston require HPD officers to exhaust all other means prior to using deadly force
            ${NEW_LINE}5. Houston ban shooting at moving vehicles by the HPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the HPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Phoenix',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'mayor.gallego@phoenix.gov',
        ],
        body: (name, location) => `Dear Mayor Kate Gallego, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Phoenix ban the use of chokeholds and strangleholds by the PHXPD
            ${NEW_LINE}2. Phoenix require PHXPD officers to de-escalate situations
            ${NEW_LINE}3. Phoenix require PHXPD officers to actively exhaust all other means prior to using deadly force
            ${NEW_LINE}4. Phoenix ban shooting at moving vehicles by the PHXPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the PHXPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Philadelphia',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'james.kenney@phila.gov',
        ],
        body: (name, location) => `Dear Mayor Jim Kenney, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Philadelphia ban shooting at moving vehicles by the PPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the PPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },

    {
        title: 'San Antonio',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'ron.nirenberg@sanantonio.gov',
        ],
        body: (name, location) => `Dear Mayor Ron Nirenberg, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. San Antonio require SAPD officers to issue a warning prior to shooting  
            ${NEW_LINE}2. San Antonio require SAPD officers to actively exhaust all other means prior to using deadly force
            ${NEW_LINE}3. San Antonio ban shooting at moving vehicles by the SAPD
            ${NEW_LINE}4. Require comprehensive reporting by the SAPD, including all incidents where officers point their firearms at civilians  
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SAPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {

        title: 'San Diego',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'kevinfaulconer@sandiego.gov',
        ],
        body: (name, location) => `Dear Mayor Kevin Faulconer, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. San Diego ban the use of chokeholds and strangleholds by the SDPD
            ${NEW_LINE}2. San Diego require SDPD officers to de-escalate situations  
            ${NEW_LINE}3. San Diego mandate the adoption of a duty to intervene by the SDPD
            ${NEW_LINE}4. San Diego ban shooting at moving vehicles by the SDPD
            ${NEW_LINE}5. Require comprehensive reporting by the SDPD, including all incidents where officers point their firearms at civilians    ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SAPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SDPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Dallas',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'eric.johnson@dallascityhall.com',
        ],
        body: (name, location) => `Dear Mayor Eric Johnson, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Dallas ban the use of chokeholds and strangleholds by the DPD
            ${NEW_LINE}2. Dallas require DPD officers to issue a warning prior to shooting 
            ${NEW_LINE}3. Dallas mandate the adoption of a duty to intervene by the DPD   
            ${NEW_LINE}4. Dallas ban shooting at moving vehicles by the DPD   
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the DPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'San Jose',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'mayoremail@sanjoseca.gov',
        ],
        body: (name, location) => `Dear Mayor Sam Liccardo, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. San Jose require SJPD officers to issue a warning prior to shooting 
            ${NEW_LINE}2. San Jose require SJPD officers to actively exhaust all other means prior to using deadly force  
            ${NEW_LINE}3. San Jose mandate the adoption of a duty to intervene by the SJPD 
            ${NEW_LINE}4. Require comprehensive reporting by the SJPD, including all incidents where officers point their firearms at civilians   
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SJPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {

        title: 'Austin, TX',
        group: '8Can\'tWait',
        subject: '8 Can\'t Wait',
        sendTo: [
            'steve.adler@austintexas.gov',
        ],
        body: (name, location) => `Dear Mayor Steve Adler, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Austin ban the use of chokeholds and strangleholds by the APD  
            ${NEW_LINE}2. Austin require APD officers to de-escalate situations    
            ${NEW_LINE}3. Austin require APD officers to actively exhaust all other means prior to using deadly force  
            ${NEW_LINE}4. Austin ban shooting at moving vehicles by the APD  
            ${NEW_LINE}5. Require comprehensive reporting by the APD, including all incidents where officers point their firearms at civilians    ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SJPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
];
