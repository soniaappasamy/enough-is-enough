/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IEmail } from './types';
import { NEW_LINE } from './consts';

export const allEmails: IEmail[] = [
    {
        title: 'NY WWT REPEAL',
        group: 'Repeal',
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
        title: 'REPEAL 50-A',
        group: 'Repeal',
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
        title: 'JUSTICE FOR AHMAUD ARBERY',
        group: 'Demand Justice',
        subject: 'JUSTICE FOR AHMAUD ARBERY',
        secondInputPlaceholder: 'CITY...',
        sendTo: [
            'mayorcharvey@gmail.com',
            'kbottoms@atlantaga.gov',
        ],
        body: (name, secondInput) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} to demand justice for the murder of Ahmaud Arbery. On February 23, 2020, 25 year-old Ahmaud Arbery was chased and gunned down by Travis McMichael, son of retired Brunswick investigator Greg McMichael, under the father’s and son’s pretenses of witnessing a burglary in Satilla Shores of Glynn County.
            ${NEW_LINE}${NEW_LINE}McMichael’s account of the deadly encounter with Arbery was not released until nearly 6 weeks following the shooting. 
            ${NEW_LINE}${NEW_LINE}In addition; McMichael’s questionable account of events and the police department’s poor communication efforts following Arbery’s death leads us to believe that Arbery was a victim of racial profiling. 
            ${NEW_LINE}${NEW_LINE}No one has the right to pursue, attack and kill an unarmed, non-threatening individual. Ahmaud’s voice will be heard. I demand that you investigate his murder.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'JUSTICE FOR BREONNA TAYLOR',
        group: 'Demand Justice',
        subject: 'JUSTICE FOR BREONNA TAYLOR',
        secondInputPlaceholder: 'CITY...',
        sendTo: [
            'attorney.general@ag.ky.gov',
            'greg.fischer@louisvilleky.gov',
            'robert.schroeder@louisvilleky.gov',
        ],
        body: (name, secondInput) => `To whom it may concern,
            ${NEW_LINE}${NEW_LINE}I am writing to you from ${secondInput} to demand justice for the murder of Breonna Taylor. 
            ${NEW_LINE}${NEW_LINE}I demand that Jonathan Mattingly, Brett Hankison and Myles Cosgrove each be arrested and charged for the wrongful death of Breonna Taylor.
            ${NEW_LINE}${NEW_LINE}June 5th would have been Breonna’s 27th birthday but she is unable to celebrate  because on March 13th your police recklessly executed a raid using a “no knock” warrant on the wrong home.
            ${NEW_LINE}${NEW_LINE}Despite your almost 3 months of inaction, Breonna’s life matters and I want justice for her. I demand the following:
            ${NEW_LINE}1. Address the use of force by Louisville Metro Police Department. Police shootings are gun violence.
            ${NEW_LINE}2. Immediately fire and revoke the pensions of the officers that murdered Breonna. Arrest, charge, and convict them for this crime. Ensure that the newly requested special prosecutor, State AG Daniel Cameron, seek full transparency and accountability.
            ${NEW_LINE}3. All necessary information be provided to a local, independent civillian community police accountability council #CPAC.
            ${NEW_LINE}4. The creation of policy to ensure transparent investigation processes.
            ${NEW_LINE}5. Immediately drop all charges for Kenneth Walker, Breonna's boyfriend, who attempted to defend them and their home.
            ${NEW_LINE}6. The release of the 911 call to the public for accountability.
            ${NEW_LINE}7. Eliminate no-knock warrants.
            ${NEW_LINE}${NEW_LINE}Black Lives Matter.
            ${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'JUSTICE FOR REGIS KORCHINSKI-PAQUET',
        group: 'Demand Justice',
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
        group: 'Demand Justice',
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
        title: 'Baltimore - City Council',
        group: 'Defund The Police',
        subject: 'VOTE AGAINST BPD BUDGET',
        secondInputPlaceholder: 'Baltimore AREA (CITY)...',
        sendTo: [
            'mayor@baltimorecity.gov',
            'Robert.Stokes@baltimorecity.gov',
            'Ryan.Dorsey@baltimorecity.gov',
            'Kristerfer.Burnett@baltimorecity.gov',
            'Edward.Reisinger@baltimorecity.gov',
            'Isaac.Schleifer@baltimorecity.gov',
            'Zeke.Cohen@baltimorecity.gov',
            'marguerite.currin@baltimorecity.gov',
            'Shannon.Sneed@baltimorecity.gov',
            'John.Bullock@baltimorecity.gov',
            'CouncilPresident@baltimorecity.gov',
            'Bill.Henry@baltimorecity.gov',
            'MaryPat.Clarke@baltimorecity.gov',
            'Eric.Costello@baltimorecity.gov',
            'Danielle.McCray@baltimorecity.gov',
            'Leon.Pinkett@baltimorecity.gov',
        ],
        body: (name, secondInput) => `Dear Baltimore City Council Members and Mayor,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.I call on the Baltimore City Council to vote against the proposed FY 2020-21 Baltimore Police Department budget and instead work to implement significant and permanent reductions to this department. These funds should be routed toward the development of harm reduction systems that do not terrorize our neighbors and communities. The proposed BPD FY21 Budget is $549,959,519. This is an increase of $13,583,042 compared to FY20. The Budget also calls for cuts to several departments that better serve the public, including:
            ${NEW_LINE}Affordable Housing (-$3,535,819)
            ${NEW_LINE}Housing and Community Development (-$227,023)
            ${NEW_LINE}Homeless Prevention and Support Services for the Homeless (-$641,270)
            ${NEW_LINE}Outreach to the homeless (-$1,971,541)
            ${NEW_LINE}Enoch Pratt Free Library (-$350,000)
            ${NEW_LINE}Youth and Trauma Services (-$10,749)
            ${NEW_LINE}Board of Elections (-$190,470)
            ${NEW_LINE}Environmental Inspection Services (-$50,243)
            ${NEW_LINE}Chronic Disease Prevention (-$252,906)
            ${NEW_LINE}Park programs and events (-$122,912)
            ${NEW_LINE}Public right of way cleaning (-$686,806)
            ${NEW_LINE}Events Art Culture and Films (-$442,488)
            ${NEW_LINE}${NEW_LINE}We’re counting on you to stand up for Black communities and marginalized communities. I call on the City Council to cancel the BPD budget increase of $13.5 million and allocate it to the above departments.
            ${NEW_LINE}${NEW_LINE}Sincerely,
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
        title: 'Chicago - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND CPD',
        secondInputPlaceholder: '(CITY)...',
        sendTo: [
            'info@the1stward.com',
            'Ward02@cityofchicago.org',
            'Ward03@cityofchicago.org',
            'Ward04@cityofchicago.org',
            'Ward05@cityofchicago.org',
            'Ward06@cityofchicago.org',
            'Alderman@gregmitchell7thward.org',
            'Ward08@cityofchicago.org',
            'Ward09@cityofchicago.org',
            'Ward10@cityofchicago.org',
            'Ward11@cityofchicago.org',
            'Ward12@cityofchicago.org',
            'Ward13@cityofchicago.org',
            'Ward14@cityofchicago.org',
            'Ward15@cityofchicago.org',
            'Info@16thward.org',
            'Alderman@17ward.com',
            'Ward18@cityofchicago.org',
            'Ward19@cityofchicago.org',
            'Jeanette.Taylor@cityofchicago.org',
            'Ward21@cityofchicago.org',
            'Ward22@cityofchicago.org',
            'Ward23@cityofchicago.org',
            'Ward24@cityofchicago.org',
            'Inquiries@25thward.org',
            'Ward26@cityofchicago.org',
            'Ward27@cityofchicago.org',
            'Ward28@cityofchicago.org',
            'Ward29@cityofchicago.org',
            'Ward30@cityofchicago.org',
            'Ward31@cityofchicago.org',
            'Ward32@cityofchicago.org',
            'info@33rdward.org',
            'Ward34@cityofchicago.org',
            'Ward35@cityofchicago.org',
            'Ward36@cityofchicago.org',
            'Ward37@cityofchicago.org',
            'Ward38@cityofchicago.org',
            'info@40thward.org',
            'Ward41@cityofchicago.org',
            'Ward43@cityofchicago.org',
            'Ward44@cityofchicago.org',
            'Ward45@cityofchicago.org',
            'Ward46@cityofchicago.org',
            'info@aldermanmartin.com',
            'Ward48@cityofchicago.org',
            'Office@49thward.org',
            'Ward50@cityofchicago.org',
        ],
        body: (name, secondInput) => `Dear Chicago City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I’m emailing you today to urge you to defund the Chicago Police Department and invest in the resources that actually keep us safe and healthy, especially in Black communities, Indigenous communities and communities of color.
            ${NEW_LINE}${NEW_LINE}Where we spend money now will decide what kind of city we’ll live in for decades to come. Gun violence, homelessness, racial disparities, disappearing cultural spaces—these crises are not inevitable. They are the product of policy decisions. Chicago can be a city where all of us have high quality housing, livable wages, and where arts and cultural spaces thrive. The infrastructure we need to address our challenges requires significant investment—that’s where we should be spending. Investing in more cops is both reckless and unimaginative.
            ${NEW_LINE}${NEW_LINE}No one in our communities should have to be afraid of violence, so we need to invest in the right tools to prevent and stop it. We expect cops to fill too many roles--social worker, investigator, traffic patrol, addiction counselor—let’s consider who else can fill some of them. If we send the right person or response for each issue, we will better meet community members’ needs. For many of the most marginalized people in our communities--people of color, queer and trans people, immigrants--police signal less safety, not more. It’s the Police Chief’s job to advocate for police solutions; it’s our job to advocate for each other. 
            ${NEW_LINE}${NEW_LINE}When we fight over crumbs, we fail to see the whole pie. Chicago has enough. Chicago's Police Department continues to receive funding, even when they cost our community precious lives and millions of additional dollars in settlement fees. In the last fifteen years the city has paid out tens of millions of dollars in settlements - dollars that could have served and supported our communities. When we continuously allocate enormous amounts of money to police at the expense of other departments, programs, and proven safety initiatives, we prevent ourselves from forging a smarter path to safety. 
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
        secondInputPlaceholder: 'Los Angeles Area (CITY)...',
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
        title: 'Minneapolis - City Council',
        group: 'Defund The Police',
        subject: 'DEFUND MPD',
        secondInputPlaceholder: '(CITY)...',
        sendTo: [
            'kevin.reich@minneapolismn.gov',
            'cam.gordon@minneapolismn.gov',
            'steve.fletcher@minneapolismn.gov',
            'phillipe.cunningham@minneapolismn.gov',
            'jeremiah.ellison@minneapolismn.gov',
            'abdi.warsame@minneapolismn.gov',
            'lisa.goodman@minneapolismn.gov',
            'andrea.jenkins@minneapolismn.gov',
            'lisa.bender@minneapolismn.gov',
            'jeremy.schroeder@minneapolismn.gov',
            'andrew.johnson@minneapolismn.gov',
            'linea.palmisano@minneapolismn.gov',
        ],
        body: (name, secondInput) => `Dear Minneapolis City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I’m emailing you today to urge you to defund the Minneapolis Police Department and invest in the resources that actually keep us safe and healthy, especially in Black communities, Indigenous communities and communities of color.
            ${NEW_LINE}${NEW_LINE}In the wake of George Floyd's murder by MPD officer Derek Chauvin, and the MPD's escalated violence against the city's grieving Black community, I am calling on the Councilmember to pledge to defund the Minneapolis Police Department and to commit to the following:
            ${NEW_LINE}1. Never again vote to increase the police department's budget. 
            ${NEW_LINE}2. Propose and vote for a $45 million cut from MPD's budget as the City responds to projected COVID-19 shortfalls.
            ${NEW_LINE}3. Protect and expand current investment in community-led health and safety strategies, instead of investing in police.
            ${NEW_LINE}4. Do everything in your power to compel all law enforcement agencies to immediately cease enacting violence on community members.
            ${NEW_LINE}${NEW_LINE}We are counting on the you to stand up for Black communities and marginalized communities and defund the MPD. Thank you.
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
];
