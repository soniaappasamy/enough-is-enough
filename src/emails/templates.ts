/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEmail } from './types';
import { NEW_LINE } from './consts';

export const allEmails: IEmail[] = [
    {
        title: 'NY WWT REPEAL',
        subject: 'Passing S2253/A654 is Police Accountability',
        secondInputPlaceholder: 'BOROUGH (CITY)...',
        sendTo: [
            'speaker@nyassembly.gov',
            'scousins@nysenate.gov',
        ],
        body: (name, secondInput) => `Dear Senate Majority Leader Andrea Stewart-Cousins and Assembly Speaker Carl Heastie,
            ${NEW_LINE}${NEW_LINE}I join over 90 organizations across New York State in urging that as part of the police accountability package the legislature will repeal the Walking While Trans Ban, S2253/A654. For four decades, law enforcement has used this statute to target, harass, coerce into sexual acts, and arrest cisgender and transgender women of color, and gender expansive people for how they dress, or for merely existing in public spaces. 
            ${NEW_LINE}${NEW_LINE}Monday marked the beginning of Pride month. This statute has been used to terrorize TGNC community members for far too long. We need you to stand with TGNC community members and get this law repealed. 
            ${NEW_LINE}${NEW_LINE}Black Trans Lives Matter.
            ${NEW_LINE}Respectfully,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'JUSTICE FOR REGIS KORCHINSKI-PAQUET',
        subject: 'JUSTICE FOR REGIS KORCHINSKI-PAQUET',
        secondInputPlaceholder: 'CITY...',
        sendTo: [
            'councillor_perks@toronto.ca',
            'bkarpoche-co@ndp.on.ca',
            'arif.virani@parl.gc.ca',
            'mayor_tory@toronto.ca',
            'officeofthechief@torontopolice.on.ca',
            'doug.downey@pc.ola.org',
        ],
        body: (name, secondInput) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} in regards to the incident that occurred at 100 High Park Avenue on May 27th, 2020. A 29 year-old Black woman, Regis, fell to her death off her own balcony, despite police being present.
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
        secondInputPlaceholder: 'CITY...',
        sendTo: [
            'contactus@talgov.com',
            'mayor@talgov.com',
        ],
        body: (name, secondInput) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} regarding the murder of Tony McDade in your city on May 27, 2020.
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
        secondInputPlaceholder: 'CITY...',
        sendTo: [
            'scousins@nysenate.gov',
            'speaker@nyassembly.gov',
        ],
        body: (name, secondInput) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}Hello, my name is ${name}, and I urge you to advocate for the legislature to reconvene and pass Senator Bailey and Assemblyman O'Donnell's bill to repeal 50-A (A2513/S3695). In light of the recent police violence, 50-A must be fully repealed--no modifcations or amendments. Can we count your support to fully repeal 50-A and ask leadership to bring the bill to the floor and vote yes when it comes to floor?
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Boston - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND BPD',
        secondInputPlaceholder: 'BOSTON AREA (CITY)...',
        sendTo: [
            'A.E.GEORGE@BOSTON.GOV',
            'MICHAEL.F.FLAHERTY@BOSTON.GOV',
            'MICHELLE.WU@BOSTON.GOV',
            'LYDIA.EDWARDS@BOSTON.GOV',
            'ED.FLYNN@BOSTON.GOV',
            'FRANK.BAKER@BOSTON.GOV',
            'ANDREA.CAMPBELL@BOSTON.GOV',
            'RICARDO.ARROYO@BOSTON.GOV',
            'MATTHEW.OMALLEY@BOSTON.GOV',
            'KENZIE.BOK@BOSTON.GOV',
            'LIZ.BREADON@BOSTON.GOV',
        ],
        body: (name, secondInput) => `Dear Boston City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  I am asking that you work to reduce the Boston Police Department budget. The City Council needs to address a lack of investment in Black and Brown communities and an over-investment in their criminalization and surveillance including spending on the Boston Regional Intelligence Center (BRIC).
            ${NEW_LINE}${NEW_LINE}The City Council is considering a grant of $850,000 from the Executive of Public Safety to spend on the BRIC, in addition to $4 million in the City Budget and other federal funding from the Department of Homeland Security. The City Council should not authorize the BRIC grant and should cut the BRIC line item from the city budget. 
            ${NEW_LINE}${NEW_LINE}With the overall police budget, the City Council has the power to cut line items in the City budget, due on June 10. The police budget and overtime budget should be cut, with funds reinvested in Black and POC communities, including $15 million this year for youth jobs.
            ${NEW_LINE}${NEW_LINE}Racist police violence does not just happen in other cities - it happens here in Boston too.  The City Council must stop investing in targeted criminalization and surveillance, and fund what Black and Brown communities need to be safe and healthy: COVID19 relief, housing, healthcare, treatment, healing, cooperative businesses, community centers, community-led organizations and projects.
            ${NEW_LINE}${NEW_LINE}We’re counting on you to stand up for Black communities and marginalized communities and defund the BPD. Thank you.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Houston - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND Houston PD',
        secondInputPlaceholder: 'Houston Area (CITY)...',
        sendTo: [
            'districta@houstontx.gov',
            'districtb@houstontx.gov',
            'districtc@houstontx.gov',
            'districtd@houstontx.gov',
            'districte@houstontx.gov',
            'districtf@houstontx.gov',
            'districtg@houstontx.gov',
            'districth@houstontx.gov',
            'districti@houstontx.gov',
            'districtj@houstontx.gov',
            'districtk@houstontx.gov',
            'atlarge1@houstontx.gov',
            'atlarge2@houstontx.gov',
            'atlarge3@houstontx.gov',
            'atlarge4@houstontx.gov',
            'atlarge5@houstontx.gov',
        ],
        body: (name, secondInput) => `Dear Houston City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I’m emailing you to decrease funding for the 2021 HPD Budget. This money could be used for other vital resources for Houstonians.
            ${NEW_LINE}${NEW_LINE}Before your vote on June 10th we ask that you consider all these factors before voting for the almost $1 billion budget for HPD. Above all: our communities deserve to feel safe and protected — that can be accomplished through funding for health and human services, public housing, COVID-19 relief, and mental healthcare, instead of police. This requires significant defunding of HPD and reinvestment in these programs, specifically in  Black and POC communities. Remember that many communities, especially Black and brown communities, do not feel safe calling the police in a time of emergency and that the police are perpetrators of racist violence in many of their communities. 
            ${NEW_LINE}${NEW_LINE}We are counting on the you to stand up for Black communities and marginalized communities and defund the HPD. Thank you.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Los Angeles - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND LAPD',
        secondInputPlaceholder: 'Los Angeles (CITY)...',
        sendTo: [
            'councilmember.cedillo@lacity.org',
            'councilmember.Krekorian@lacity.org',
            'councilmember.blumenfield@lacity.org',
            'david.ryu@lacity.org',
            'paul.koretz@lacity.org',
            'councilmember.martinez@lacity.org',
            'councilmember.rodriguez@lacity.org',
            'councilmember.harris-dawson@lacity.org',
            'councilmember.price@lacity.org',
            'councilmember.wesson@lacity.org',
            'councilmember.bonin@lacity.org',
            'councilmember.Lee@lacity.org',
            'councilmember.ofarrell@lacity.org',
            'councilmember.huizar@lacity.org',
            'councilmember.buscaino@lacity.org',
        ],
        body: (name, secondInput) => `Dear Los Angeles City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I’m emailing you today to urge you to stand up to and block the Mayor’s horrific and white supremacist budget. 
            ${NEW_LINE}${NEW_LINE}Black, Brown, poor, institutionalized and unhoused people are at the greatest risk of being exposed to and dying from COVID-19 and are disproportionately impacted by LAPD violence. 
            ${NEW_LINE}${NEW_LINE}We are demanding [you/Councilmember] to stand up to Mayor Garcetti and stand up for Black folks by committing to:
            ${NEW_LINE}1. Divest from traditional policing and defund the police.
            ${NEW_LINE}2. Reject the proposal to give LAPD an additional $100,000 for the “Through Our Eyes” Program.
            ${NEW_LINE}3. Invest in universal needs like quality housing for all, universal access to healthy food, financial and economic support, climate justice, free and quality public transit, public health, and mental health support.
            ${NEW_LINE}${NEW_LINE}We are counting on the you to stand up for Black communities and marginalized communities and defund the LAPD. Thank you.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'New York City - Comptroller',
        group: 'Defund The Police',
        subject: 'DEFUND NYPD',
        secondInputPlaceholder: 'BOROUGH (CITY)...',
        sendTo: [
            'action@comptroller.nyc.gov',
        ],
        body: (name, secondInput) => `Dear Comptroller Scott Stringer,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. Last April, NYC Mayor Bill De Blasio proposed major budget cuts for the Fiscal Year 2021, especially to education and youth programs, while refusing to slash the NYPD budget by any significant margin. I urge you to consider pressuring the office of the mayor towards an ethical and equal reallocation of the NYC expense budget, away from NYPD, and towards social services and education programs, effective at the beginning of FY 21, July 1st.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'New York City - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND NYPD',
        secondInputPlaceholder: 'BOROUGH (CITY)...',
        sendTo: [
            'mguerra@council.nyc.gov',
            'District2@council.nyc.gov',
            'SpeakerJohnson@council.nyc.gov',
            'KPowers@council.nyc.gov',
            'BKallos@benkallos.com',
            'Helen@helenrosenthal.com',
            'District7@council.nyc.gov',
            'DAyala@council.nyc.gov',
            'D09perkins@council.nyc.gov',
            'yrodriguez@council.nyc.gov',
            'District11@council.nyc.gov',
            'Andy.King@council.nyc.gov',
            'MGjonaj@council.nyc.gov',
            'fcabrera@council.nyc.gov',
            'Rtorres@council.nyc.gov',
            'District16Bronx@council.nyc.gov',
            'salamanca@council.nyc.gov',
            'RDiaz@council.nyc.gov',
            'district19@council.nyc.gov',
            'pkoo@council.nyc.gov',
            'FMoya@council.nyc.gov',
            'BGrodenchik@council.nyc.gov',
            'RLancman@council.nyc.gov',
            'dromm@council.nyc.gov',
            'JVanBramer@council.nyc.gov',
            'Adams@council.nyc.gov',
            'Koslowitz@council.nyc.gov',
            'District30@council.nyc.gov',
            'drichards@council.nyc.gov',
            'eulrich@council.nyc.gov',
            'slevin@council.nyc.gov',
            'areynoso@council.nyc.gov',
            'LCumbo@council.nyc.gov',
            'district36@council.nyc.gov',
            'district37@council.nyc.gov',
            'info38@council.nyc.gov',
            'lander@council.nyc.gov',
            'meugene@council.nyc.gov',
            'District41@council.nyc.gov',
            'viverdree@council.nyc.gov',
            'AskJB@council.nyc.gov',
            'AskKalman@council.nyc.gov',
            'District45@council.nyc.gov',
            'AMaisel@council.nyc.gov',
            'ascaife@council.nyc.gov',
            'cdeutsch@council.nyc.gov',
            'DROSE@Council.nyc.gov',
            'SMatteo@council.nyc.gov',
            'borelli@council.nyc.gov',
        ],
        body: (name, secondInput) => `Dear New York City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  I am emailing today to urge you to stand up to Mayor Deblasio and his wartime budget. Deblasios proposed budget will completely devastate our communities. I expect you to vote NO on any budget that does not defund the NYPD and prioritize the wellbeing of our communities. 
            ${NEW_LINE}${NEW_LINE}We are asking for reallocation of funds from the NYPD to the Summer Youth Employment Program; funding for re-entry programs; Personal Protective Equipment for all essential workers; economic and housing support for Black and brown sex workers, street vendors and undocumented people; and immediate housing and economic support for homeless people, families in shelters and individuals who have been recently released from jail.
            ${NEW_LINE}${NEW_LINE}In light of the NYPDs recent violent attacks on protestors, it is particularly vital that next months budget defunds the NYPD. Jails, prisons, and police will not keep us safe. It is unconscionable that the City would prioritize the expansion of surveillance and violent policing over the health of NYC residents in the midst of a deadly pandemic. To survive this pandemic and its aftermath, our communities need resources that do not look like police.
            ${NEW_LINE}${NEW_LINE}We are counting on you to advocate for us! Stand up to Mayor De Blasio.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Washington DC - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND METRO PD',
        secondInputPlaceholder: 'DC AREA (CITY)...',
        sendTo: [
            'pmendelson@dccouncil.us',
            'kmcduffie@dccouncil.us',
            'abonds@dccouncil.us',
            'dgrosso@dccouncil.us',
            'esilverman@dccouncil.us',
            'rwhite@dccouncil.us',
            'bnadeau@dccouncil.us',
            'mcheh@dccouncil.us',
            'btodd@dccouncil.us',
            'kmcduffie@dccouncil.us',
            'callen@dccouncil.us',
            'vgray@dccouncil.us',
            'twhite@dccouncil.us',
        ],
        body: (name, secondInput) => `Dear Washington DC City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  I am emailing today to ask that the City Council confront MPD's record of brutality towards Black communities in DC by defunding the department. The current proposed budget increases MPD funding, despite DC already having more officers per capita than almost anywhere else in the country. Homicides continue to increase despite the MPD budget growing every year.
            ${NEW_LINE}${NEW_LINE}At the same time violence prevention programs in DC, which already made up a tiny percentage of the DC budget, have been cut significantly, including $800,000 taken from the Office of Neighborhood Safety and Engagement (ONSE), $1.4 million cut from the Roving Leaders program and what seems to be the elimination of the Cure the Streets program.
            ${NEW_LINE}${NEW_LINE}This is not just about MPD getting increased funding while specific programs get cut, however. It’s about the need to radically shift our priorities. We don’t just want to halt increases to the MPD’s bloated budget, we want to defund it and shift that money toward non-police resources that actually make us safer. Repurposed funding could go towards the Office of Neighborhood and Safety Engagement and violence interrupter programs, medical and mental health professionals and social workers, mental health care and trauma-informed services in DC public schools, services for formerly incarcerated DC residents, public housing repairs, and COVID-19 relief funding to all DC residents, including undocumented residents.
            ${NEW_LINE}${NEW_LINE}Racist police violence does not just happen in other cities - it happens here in Boston too.  The City Council must stop investing in targeted criminalization and surveillance, and fund what Black and Brown communities need to be safe and healthy: COVID19 relief, housing, healthcare, treatment, healing, cooperative businesses, community centers, community-led organizations and projects.
            ${NEW_LINE}${NEW_LINE}We’re counting on you to stand up for Black communities and marginalized communities and defund the MPD. Thank you.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {

        title: 'Austin',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'steve.adler@austintexas.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Steve Adler, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Austin has already implemented 3 of the #8CANTWAIT policies, there is more we can and should do. 
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Austin ban the use of chokeholds and strangleholds by the APD  
            ${NEW_LINE}2. Austin require APD officers to de-escalate situations    
            ${NEW_LINE}3. Austin require APD officers to actively exhaust all other means prior to using deadly force  
            ${NEW_LINE}4. Austin ban shooting at moving vehicles by the APD  
            ${NEW_LINE}5. Require comprehensive reporting by the APD, including all incidents where officers point their firearms at civilians    
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the APD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Austin are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Chicago',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'letterforthemayor@cityofchicago.org',
        ],
        body: (name, secondInput) => `Dear Mayor Lori Lightfoot, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Chicago has already implemented 6 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Chicago ban shooting at moving vehicles by the CPD
            ${NEW_LINE}2. Require comprehensive reporting by the CPD, including all incidents where officers point their firearms at civilians 
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the CPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Chicago are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Dallas',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'eric.johnson@dallascityhall.com',
        ],
        body: (name, secondInput) => `Dear Mayor Eric Johnson, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Dallas has already implemented 4 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Dallas ban the use of chokeholds and strangleholds by the DPD
            ${NEW_LINE}2. Dallas require DPD officers to issue a warning prior to shooting 
            ${NEW_LINE}3. Dallas mandate the adoption of a duty to intervene by the DPD   
            ${NEW_LINE}4. Dallas ban shooting at moving vehicles by the DPD   
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the DPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Dallas are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Houston',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'mayor@houstontx.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Sylvester Turner, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Houston has already implemented 3 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Houston ban the use of chokeholds and strangleholds by the HPD 
            ${NEW_LINE}2. Houston require HPD officers to de-escalate situations
            ${NEW_LINE}3. Houston require HPD officers to issue a warning prior to shooting  
            ${NEW_LINE}4. Houston require HPD officers to exhaust all other means prior to using deadly force
            ${NEW_LINE}5. Houston ban shooting at moving vehicles by the HPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the HPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Houston are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Fort Worth',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'betsy.price@fortworthtexas.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Betsy Price, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Fort Worth has already implemented 6 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Fort Worth require FWPD officers to exhaust all other means prior to using deadly force
            ${NEW_LINE}2. Require comprehensive reporting by the FWPD, including all incidents where officers point their firearms at civilians
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the FWPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Fort Worth are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Jacksonville',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'MayorLennyCurry@coj.net',
        ],
        body: (name, secondInput) => `Dear Mayor Lenny Curry, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Jacksonville has already implemented 3 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Jacksonville require Jacksonville Police officers to de-escalate situations
            ${NEW_LINE}2. Jacksonville require Jacksonville Police officers to exhaust all other means prior to using deadly force
            ${NEW_LINE}3. Jacksonville mandate the adoption of a duty to intervene by the Jacksonville Police officers 
            ${NEW_LINE}4. Jacksonville ban shooting at moving vehicles by Jacksonville Police officers
            ${NEW_LINE}5. Require comprehensive reporting by the Jacksonville Police, including all incidents where officers point their firearms at civilians 
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the Jacksonville Sheriff's Office will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Jacksonville are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Los Angeles',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'mayor.helpdesk@lacity.org',
        ],
        body: (name, secondInput) => `Dear Mayor Eric Garcetti, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Los Angeles has already implemented 5 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Los Angeles require LAPD officers to issue a warning prior to shooting
            ${NEW_LINE}2. Los Angeles require LAPD officers to exhaust all alternatives prior to using deadly force
            ${NEW_LINE}3. Require comprehensive reporting by the LAPD, including all incidents where officers point their firearms at civilians
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the LAPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Los Angeles are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'New York City',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'bdeblasio@cityhall.nyc.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Bill DeBlasio, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While New York has already implemented 4 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. New York City ban the use of chokeholds and strangleholds by the NYPD
            ${NEW_LINE}2. New York City require NYPD officers to issue a verbal warning prior to using deadly force
            ${NEW_LINE}3. Reinstate the language that was removed from the NYPD's use of force policy in 2016, and require officers to exhaust all alternatives prior to using deadly force
            ${NEW_LINE}4. Require comprehensive reporting by the NYPD, including all incidents where officers point their firearms at civilians
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the NYPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Philadelphia',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'james.kenney@phila.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Jim Kenney, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Philadelphia has already implemented 7 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Philadelphia ban shooting at moving vehicles by the PPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the PPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Philadelphia are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Phoenix',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'mayor.gallego@phoenix.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Kate Gallego, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Phoenix has already implemented 4 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Phoenix ban the use of chokeholds and strangleholds by the PHXPD
            ${NEW_LINE}2. Phoenix require PHXPD officers to de-escalate situations
            ${NEW_LINE}3. Phoenix require PHXPD officers to actively exhaust all other means prior to using deadly force
            ${NEW_LINE}4. Phoenix ban shooting at moving vehicles by the PHXPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the PHXPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Phoenix are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Portland, OR',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'mayorwheeler@portlandoregon.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Ted Wheeler, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Portland has already implemented 5 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Portland ban the use of chokeholds and strangleholds by the PPB
            ${NEW_LINE}2. Portland require PPB officers to exhaust all alternatives prior to using deadly force
            ${NEW_LINE}3. Portland ban shooting at moving vehicles by the PPB
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the PPB will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Portland are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'San Antonio',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'ron.nirenberg@sanantonio.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Ron Nirenberg, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While San Antonio has already implemented 4 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. San Antonio require SAPD officers to issue a warning prior to shooting  
            ${NEW_LINE}2. San Antonio require SAPD officers to actively exhaust all other means prior to using deadly force
            ${NEW_LINE}3. San Antonio ban shooting at moving vehicles by the SAPD
            ${NEW_LINE}4. Require comprehensive reporting by the SAPD, including all incidents where officers point their firearms at civilians  
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SAPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in San Antonio are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {

        title: 'San Diego',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'kevinfaulconer@sandiego.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Kevin Faulconer, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While San Diego has already implemented 3 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. San Diego ban the use of chokeholds and strangleholds by the SDPD
            ${NEW_LINE}2. San Diego require SDPD officers to de-escalate situations  
            ${NEW_LINE}3. San Diego mandate the adoption of a duty to intervene by the SDPD
            ${NEW_LINE}4. San Diego ban shooting at moving vehicles by the SDPD
            ${NEW_LINE}5. Require comprehensive reporting by the SDPD, including all incidents where officers point their firearms at civilians
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SDPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in New York are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE}Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'San Jose',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'mayoremail@sanjoseca.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Sam Liccardo, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While San Jose has already implemented 4 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. San Jose require SJPD officers to issue a warning prior to shooting 
            ${NEW_LINE}2. San Jose require SJPD officers to actively exhaust all other means prior to using deadly force  
            ${NEW_LINE}3. San Jose mandate the adoption of a duty to intervene by the SJPD 
            ${NEW_LINE}4. Require comprehensive reporting by the SJPD, including all incidents where officers point their firearms at civilians   
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the SJPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in San Jose are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Washington D.C.',
        group: 'Campaign Zero 8Can\'tWait',
        subject: '8 Can\'t Wait',
        secondInputPlaceholder: 'YOUR CITY...',
        sendTo: [
            'eom@dc.gov',
        ],
        body: (name, secondInput) => `Dear Mayor Muriel Bowser, 
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} demanding you pass the policies outlined in Campaign Zero's #8CANTWAIT. Implementing these life-saving policies can reduce police violence by 72% and you have the power to adopt them all right now. Learn more at https://8cantwait.org/.
            ${NEW_LINE}${NEW_LINE}While Washington DC has already implemented 7 of the #8CANTWAIT policies, there is more we can and should do.
            ${NEW_LINE}${NEW_LINE}I demand:
            ${NEW_LINE}1. Washington DC ban the use of chokeholds and strangleholds by the MPD
            ${NEW_LINE}${NEW_LINE}If the above changes are not implemented, the MPD will continue to murder, assault, and terrorize the very residents they have sworn to protect and serve. Communities of color in Washington D.C. are disproportionately affected by this abuse. 
            ${NEW_LINE}${NEW_LINE} Now is the time to act, and commit to implementing clear and researched policies that will protect your citizens. I implore you to make these changes. 
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
];
