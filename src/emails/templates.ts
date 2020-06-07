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
        title: 'CORNELL PROFESSOR DAVID COLLUM',
        group: 'Demand Justice',
        subject: 'Concern Regarding Professor David Collum',
        secondInputPlaceholder: 'Class Year / University...',
        sendTo: [
            'president@cornell.edu',
            'ryan.lombardi@cornell.edu',
        ],
        body: (name, secondInput) => `To President Martha Pollack and Vice President Ryan Lombardi,
            ${NEW_LINE}${NEW_LINE}As you’re aware, there has been a large and appropriate response to the murder of Black Americans by police officers taking place over the last several days. As we mourn and seek justice for the murders of Mr. George Floyd, Ahmaud Arbery, Breonna Taylor, and countless others, our society is being traumatized by the systemic, institutional racism that pervades the structures that govern and rule our citizenry.
            ${NEW_LINE}${NEW_LINE}Yesterday, many people were deeply disturbed to see a video from protests in Buffalo, New York, in which an older man approached police and was violently shoved, then falling backward and hitting his head, leaving him bleeding and unconscious. The video was hard to watch, it was an indefensible use of force that’s characteristic to the overarching issue of police brutality, which a most salient weapon of hatred and racism, which this institution continuously vows its commitment against.
            ${NEW_LINE}${NEW_LINE}Dave Collum, one of your faculty members and one of our professors, publicly commented on the events in that video in a most despicable manner. Saying, in two separate tweets:
            ${NEW_LINE}“That guy needed to give that cop space. Wasn’t brutality: the guy was feeble. The cracked skull (which I agree was the likely event) was self inflicted [sic].”
            ${NEW_LINE}“Can you imagine how fried these cops are at this point? The guy got a nudge. The old guy had something in his hand. Looked like maybe a taser. If [sic] were a cop, my nerves would be raw. I am tired of these riots.”
            ${NEW_LINE}${NEW_LINE}David Collum is a professor of Organic Chemistry, he teaches pre-med students and influences future doctors. That position of power and impact is in no way fit for someone who so clearly expresses complete apathy about brutality and an aversion to the cause of nation-wide protests in general. It is shameful behavior, to say the least, and the university should be ashamed to have any attachment to it.
            ${NEW_LINE}${NEW_LINE}This is far from the first time David Collum has gone public with such casually contemptible comments, as it is also far from the first time that students of this university have drawn attention to it. As detailed in this Letter to the Editor published in the Cornell Daily Sun, he commonly vocalizes opinions that are misogynistic, transphobic, insensitive of rape and violence against women, and overall dangerous, especially of a university professor.
            ${NEW_LINE}${NEW_LINE}I, as a concerned student from ${secondInput}, am disappointed. I am appalled by David Collum and I am disappointed to attend and institution that is tolerant of such bigotry and apathy. I am disappointed because many of you have failed to take on the role of a faculty member in its entirety. As faculty members, our students expect you to be leaders, mentors, and role models. Yet, you have limited yourself to only an academic influence. Black students need and deserve more from the institution that benefits so greatly from having their dynamic community at Cornell University.
            ${NEW_LINE}${NEW_LINE}As faculty that represent programs with a commitment to social justice, you have a responsibility to Black students to openly and loudly affirm that they are safe in academic settings from racism and discrimination. That you vehemently oppose and condemn the actions of the police officers in Minneapolis who murdered George Floyd in cold blood, along with the hundreds who went before him. As well as the recent atrocious actions of the Philadelphia Police Department on June 1, 2020, against protesters.
            ${NEW_LINE}${NEW_LINE}Black lives have been traumatized repeatedly and yet are expected to show up in meetings, research, and academic spaces as though things are 'business as usual' while the Black community is quite literally fighting for its life. Although you are familiar with the Black community here in primarily academic settings, many of our Black students are protesting in the streets, constantly providing resources and support to others, and grieving. Black students in our department are risking their lives, safety, and careers daily to bravely stand against White supremacy in the midst of a global pandemic.
            ${NEW_LINE}${NEW_LINE}How are you supporting your Black students? What resources have you offered to them? Have you contacted every single one of them, asking what they need from faculty, how you can support them? How are you working with your non-Black colleagues and students to remind them that inherent bias runs deep and that you are each responsible for unlearning racism? How are you addressing systemic racism? Cornell University constantly pledges support to its marginalized communities, but claiming solidarity is meaningless while employing a professor who openly condones sexual assault and police brutality. Black students are constantly let down by this institution. Ignoring it is not an option and you have done a deep disservice to yourselves by turning a blind eye and pretending that these events aren’t impacting all of us, particularly Black students and their families. I urge you to address it. Your students will not stand for this disregard of faculty misconduct, and in turn, disregard for our lives.
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
        title: 'Arlington',
        group: 'Defund The Police',
        subject: 'Arlington Resident for Defunding of Arlington PD',
        secondInputPlaceholder: 'ARLINGTON AREA (CITY)...',
        sendTo: [
           'lgarvey@arlingtonva.us', 
           'mdeferranti@arlingtonva.us', 
           'kcristol@arlingtonva.us', 
           'cdorsey@arlingtonva.us',
        ],
        body: (name, secondInput) => `Dear Arlington City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  This past week, our nation has been gripped by protests calling for rapid and meaningful reevaluation of the role of policing in our communities and an end to racism and anti-Blackness. Our county recently withdrew police presence from DC, and is re-evaluating our mutual aid obligations to the city, but that is not enough.
            ${NEW_LINE}${NEW_LINE}Arlington's public would be better served by dedicating resources to addressing homelessness, strengthening mental health resources, increasing affordable housing, and other community services. I call on you to meaningfully restrict the Arlington PD budget and instead use those extraordinary resources for programs that are much more effective at promoting safety and social equity than policing and incarceration.
            ${NEW_LINE}${NEW_LINE}We can be a beacon for other counties to follow if only we have the courage to change. Can I count on you to consider an alternative budget that puts a focus on social service programs?
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Austin',
        group: 'Defund The Police',
        subject: 'We Demand Divestment from Police and an Investment in Black Communities',
        secondInputPlaceholder: 'Austin Area (CITY)...',
        sendTo: [
            'steve.adler@austintexas.gov', 
            'Natasha.Madison@austintexas.gov', 
            'Delia.Garza@austintexas.gov', 
            'Sabino.Renteria@austintexas.gov', 
            'Greg.Casar@austintexas.gov', 
            'Ann.Kitchen@austintexas.gov', 
            'jimmy.flannigan@austintexas.gov', 
            'Leslie.Pool@austintexas.gov', 
            'Paige.Ellis@austintexas.gov', 
            'Kathie.Tovo@austintexas.gov', 
            'Alison.Alter@austintexas.gov',
        ],
        body: (name, secondInput) => `Dear Austin City Council Members,
	    ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. WE ARE JOINING TOGETHER TO DEMAND THAT YOU, MY LOCAL OFFICIALS, WILL: 
        ${NEW_LINE}1. Vote no on all increases to police budgets 
        ${NEW_LINE} 2. Vote yes to decrease police spending and budgets 
        ${NEW_LINE}3. Vote yes to increase spending on Health care, education and community programs that keep us safe.
        ${NEW_LINE}${NEW_LINE}Black communities across the nation are mourning the deaths of George Floyd, tortured to death by Minneapolis police, Ahmaud Arbery, a jogger who was killed while running in a residential neighborhood in Brunswick, Georgia, Breonna Taylor an EMT killed while asleep in her bed in Louisville,KY, Dreasjon Reed in Indianapolis and Tony McDade in Tallahassee. Their names are added to a devastatingly long list of Black people who have been killed at the hands of vigilantes or law enforcement. Not to mention the others whose names we don’t yet know, and may never know since they were killed without a camera recording it.
        ${NEW_LINE}${NEW_LINE}At the same time, the United States leads the world in COVID-19 cases. So far, more than 100,000 people — enough to fill a football stadium– have perished from the virus,with over one million cases confirmed, and those numbers don’t reflect all the people dying from virus-related illnesses. Black people are suffering disproportionately from COVID-19, four times more likely to die than their white neighbors. 
        ${NEW_LINE}${NEW_LINE} It is important to state this within the context of the scourge of anti-Black police terror and the resulting uprisings taking place across the U.S. 
        ${NEW_LINE}${NEW_LINE}The COVID-19 deaths and the deaths caused by police terror are connected and consequential to each other. The United States does not have a national healthcare system. Instead, we have the largest military budget in the world, and some of the most well-funded and militarized police departments in the world, too. Policing and militarization overwhelmingly dominate the bulk of national and local budgets. In fact, police and military funding has increased every single year since 1973, and  at the same time, funding for public health decreased every year, crystallized  most recently when the Trump administration eliminated the US Pandemic Response Team in 2018, citing “costs”. 
        ${NEW_LINE}${NEW_LINE}Black communities are living in persistent fear of being killed by state authorities like police, immigration agents or even white vigilantes who are emboldened by state actors. According to the Urban Institute, in 1977, state and local governments spent $60 billion on police and corrections . In 2017, they spent $194 billion. A 220 percent increase. Despite continued profiling, harassment, terror and killing of Black communities, local and federal decision-makers continue to invest in the police, which leaves Black people vulnerable and our communities no safer.
        ${NEW_LINE}${NEW_LINE}Where could that money go? It could go towards building healthy communities, to the health of our elders and children,to neighborhood infrastructure, to education, to childcare, to support a vibrant Black future. The possibilities are endless. 
        ${NEW_LINE}${NEW_LINE}We join in solidarity with the freedom fighters in Minneapolis, Louisville, and across the United States. And we call for the end to police terror. 
        ${NEW_LINE}${NEW_LINE}Sincerely,
        ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Baltimore',
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
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I call on the Baltimore City Council to vote against the proposed FY 2020-21 Baltimore Police Department budget and instead work to implement significant and permanent reductions to this department. These funds should be routed toward the development of harm reduction systems that do not terrorize our neighbors and communities. The proposed BPD FY21 Budget is $549,959,519. This is an increase of $13,583,042 compared to FY20. The Budget also calls for cuts to several departments that better serve the public, including:
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
        title: 'Boston',
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
        title: 'Charlottesville',
        group: 'Defund The Police',
        subject: 'Charlottesville City Resident for Defunding CPD',
        secondInputPlaceholder: 'Charlottesville Area (CITY)...',
        sendTo: [
           'council@charlottesville.org', 
           'nwalker@charlottesville.org', 
           'smagill@charlottesville.gov', 
           'hhill@charlottesville.gov', 
           'mpayne@charlottesville.gov', 
           'lsnook@charlottesville.gov', 
           'budget@charlottesville.gov',
        ],
        body: (name, secondInput) => `Dear Members of the City Council and Budget Department,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  This past week, our nation has been gripped by protests calling for rapid and meaningful change with regard to police brutality, an end to racism and anti-Blackness, and immediate improvements in how Black people are treated in America.
            ${NEW_LINE}${NEW_LINE}Accordingly, it has come to my attention that the budget for FY 2021 was recently revised, and that city officials will soon begin the FY 2022 budget process. The Charlottesville Police Department has been a waste of our resources. For FY 2021, $18M has been allocated to CPD. While we’ve been spending extraordinary amounts on policing, we have not seen sufficient improvements to safety, homelessness, mental health, or affordability in our city. Instead, we see wasteful and harmful actions of our police.
            ${NEW_LINE}${NEW_LINE}While the new Community Review Board might be a step in the direction, this effort doesn’t go nearly far enough in protecting Black community members from CPD. I call on you to slash the CPD budget and instead use those extraordinary resources to fund what Black and other marginalized communities need to be safe and healthy: COVID-19 relief, affordable housing, education, healthcare (including mental healthcare), jobs with livable wages, community centers, treatment, and community-led organizations.
            ${NEW_LINE}${NEW_LINE}The nation looked to Charlottesville in 2017, as our activists stood up to white supremacists. Our community can again be a beacon for other cities to follow if only we have the courage to change.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Chicago',
        group: 'Defund The Police',
        subject: 'DEFUND CPD',
        secondInputPlaceholder: 'Chicago Area...',
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
        title: 'Dallas',
        group: 'Defund The Police',
        subject: 'We Demand Divestment from Police and an Investment in Black Communities',
        secondInputPlaceholder: 'Dallas Area (CITY)...',
        sendTo: [
            'eric.johnson@dallascityhall.com', 
            'Chad.West@dallascityhall.com', 
            'adam.medrano@dallascityhall.com', 
            'casey.thomas@dallascityhall.com', 
            'carolyn.kingarnold@dallascityhall.com', 
            'jaime.resendez@dallascityhall.com', 
            'omar.Narvaez@dallascityhall.com', 
            'Adam.Bazaldua@dallascityhall.com', 
            'Tennell.Atkins@dallascityhall.com', 
            'Paula.Blackmon@dallascityhall.com', 
            'adam.mcgough@dallascityhall.com', 
            'lee.kleinman@dallascityhall.com', 
            'cara.mendelsohn@dallascityhall.com', 
            'david.blewett@dallascityhall.com', 
            'jennifer.gates@dallascityhall.com',
        
        ],
        body: (name, secondInput) => `Dear Dallas City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I am emailing today to demand a complete overhaul on our Dallas Police Department in light of the Black Lives Matter protests being demonstrated across the US, but specifically our city.
            ${NEW_LINE}${NEW_LINE}WE ARE JOINING TOGETHER TO DEMAND THAT YOU, MY LOCAL OFFICIALS, WILL: 
            ${NEW_LINE}1. Vote no on all increases to police budgets 
            ${NEW_LINE}2. Vote yes to decrease police spending and budgets 
            ${NEW_LINE}3. Vote yes to increase spending on Health care, education and community programs that keep us safe.
            ${NEW_LINE}${NEW_LINE}The militarized tactics that our Police Department have used against its citizens in response to peaceful protesting is unacceptable and unwarranted. To ensure your dedication to our city and citizens, I demand that you defund the Dallas Police Department and start providing more support and funding towards our community efforts and organizations that serve our predominantly Latinx and Black communities, as these are the communities that are being targeted the most. By doing so, I believe this will prevent further police brutality and violence in the future.
            ${NEW_LINE}${NEW_LINE}The Dallas Police Department said that “(they) are dedicated to serving the people of Dallas and strives to reduce crime and provide a safe city.” If this true, we demand you listen to our concerns and implement change immediately.
            ${NEW_LINE}${NEW_LINE}Black communities are living in persistent fear of being killed by state authorities like police, immigration agents or even white vigilantes who are emboldened by state actors. According to the Urban Institute, in 1977, state and local governments spent $60 billion on police and corrections . In 2017, they spent $194 billion. A 220 percent increase. Despite continued profiling, harassment, terror and killing of Black communities, local and federal decision-makers continue to invest in the police, which leaves Black people vulnerable and our communities no safer.
            ${NEW_LINE}${NEW_LINE}Where could that money go? It could go towards building healthy communities, to the health of our elders and children,to neighborhood infrastructure, to education, to childcare, to support a vibrant Black future. The possibilities are endless. 
            ${NEW_LINE}${NEW_LINE} We join in solidarity with the freedom fighters in Minneapolis, Louisville, and across the United States. And we call for the end to police terror.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Houston',
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
        title: 'Los Angeles',
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
        title: 'Madison',
        group: 'Defund The Police',
        subject: 'Reallocation of Funds from MPD to Social Service Programs',
        secondInputPlaceholder: 'Madison Area...',
        sendTo: [
            'district1@cityofmadison.com', 
            'district2@cityofmadison.com', 
            'district3@cityofmadison.com', 
            'district4@cityofmadison.com', 
            'district5@cityofmadison.com', 
            'district6@cityofmadison.com', 
            'district7@cityofmadison.com', 
            'district8@cityofmadison.com', 
            'district9@cityofmadison.com', 
            'district10@cityofmadison.com', 
            'district11@cityofmadison.com', 
            'district12@cityofmadison.com', 
            'district13@cityofmadison.com', 
            'district14@cityofmadison.com', 
            'district15@cityofmadison.com', 
            'district16@cityofmadison.com', 
            'district17@cityofmadison.com', 
            'district18@cityofmadison.com', 
            'district19@cityofmadison.com', 
            'district20@cityofmadison.com',
        ],
        body: (name, secondInput) => `Dear Madison Council Members and Alderpersons,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I am extremely concerned with the City of Madison's inordinate investment in the Madison Police Department (MPD) at the expense of critical youth, education, and health services.
            ${NEW_LINE}${NEW_LINE}I am asking that the Madison Common Council make a more overt and visible commitment to racial justice. I demand that the budget vote be delayed so that Council may find ways to redirect money away from Madison Police Department’s overinflated budget. I urge you to pressure the City Manager’s Office towards an ethical and equal reallocation of the city’s expenditures, away from MPD, and towards sectors that facilitate the dismantling of racial and class inequality.
            ${NEW_LINE}${NEW_LINE}Research shows that a living wage, access to holistic health services and treatment, educational opportunity, and stable housing are far more successful at reducing crime than police or prisons. As such, I demand more aggressive financial support be directed to those areas.
            ${NEW_LINE}${NEW_LINE}I also urge the Madison Common Council to enact legislation that holds police accountable and to overturn policies that allow police to engage in unlawful behavior with impunity. Justice will only be served when the police are reformed, and this will not be possible until we defund them.
            ${NEW_LINE}${NEW_LINE}People are marching in the streets because they know that these actions will result in a healthier, more just society. I implore you to please listen to the needs of your constituents and take immediate action to address their concerns.
            ${NEW_LINE}${NEW_LINE}Can I count on you to consider an alternative budget that puts a focus on social service programs?
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
     {
        title: 'Milwaukee',
        group: 'Defund The Police',
        subject: 'Defund MPD, Reallocate for Social Equity',
        secondInputPlaceholder: 'Milwaukee Area...',
        sendTo: [
            'Cavalier.Johnson2@milwaukee.gov', 
            'ahamil@milwaukee.gov', 
            'nkovac@milwaukee.gov', 
            'rjbauma@milwaukee.gov', 
            'ald05@milwaukee.gov', 
            'mcoggs@milwaukee.gov', 
            'Khalif.Rainey@milwaukee.gov', 
            'Chantia.Lewis@milwaukee.gov', 
            'mmurph@milwaukee.gov', 
            'mark.borkowski@milwaukee.gov', 
            'JoseG.Perez@milwaukee.gov', 
            'scott.spiker@milwaukee.gov', 
            'Marina@milwaukee.gov', 
            'russell.stamper@milwaukee.gov',
        ],
        body: (name, secondInput) => `Dear Milwaukee Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}. I am extremely concerned with the City of Milwaukee’s inordinate investment in the Milwaukee Police Department (MPD) at the expense of critical youth, education, and health services.
            ${NEW_LINE}${NEW_LINE}I am asking that the Milwaukee Common Council make a more overt and visible commitment to racial justice. I demand that the budget vote be delayed so that Council may find ways to redirect money away from Milwaukee Police Department’s overinflated budget. I urge you to pressure the City Manager’s Office towards an ethical and equal reallocation of the city’s expenditures, away from MPD, and towards sectors that facilitate the dismantling of racial and class inequality.
            ${NEW_LINE}${NEW_LINE}Research shows that a living wage, access to holistic health services and treatment, educational opportunity, and stable housing are far more successful at reducing crime than police or prisons. As such, I demand more aggressive financial support be directed to those areas.
            ${NEW_LINE}${NEW_LINE}The events of the last weeks have shown time and again that it is also critical that you implement enforceable controls on police tactics, and explicitly ban pervasive violent tactics--dangerous physical restraints, chemical weapons, and rubber bullets are all seriously dangerous and often lethal. 
            ${NEW_LINE}${NEW_LINE}People are marching in the streets because they know that these actions will result in a healthier, more just society. I implore you to please listen to the needs of your constituents and take immediate action to address their concerns.
            ${NEW_LINE}${NEW_LINE}Can I count on you to consider an alternative budget that puts a focus on social service programs?
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Minneapolis',
        group: 'Defund The Police',
        subject: 'DEFUND MPD',
        secondInputPlaceholder: 'Minneapolis Area...',
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
        title: 'New York City',
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
        title: 'Salt Lake City',
        group: 'Defund The Police',
        subject: 'Defund the SLCPD',
        secondInputPlaceholder: 'SF AREA (CITY)...',
        sendTo: [
            'mayor@slc.gov', 
            'james.rogers@slcgov.com', 
            'andrew.johnston@slcgov.com', 
            'chris.wharton@slcgov.com', 
            'ana.valdemoros@slcgov.com', 
            'darin.mano@slcgov.com', 
            'dan.dugan@slcgov.com', 
            'amy.fowler@slcgov.com',
        ],
        body: (name, secondInput) => `To The Members of the SLC City Council,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  I am writing to demand that the City Council adopt a People’s Budget that prioritizes community wellbeing and redirects funding away from the police.
            ${NEW_LINE}${NEW_LINE} We are in the midst of widespread upheaval over the systemic violence of policing, embodied by the SLCPD’s well documented history of murdering Black people. We will no longer accept empty gestures and suggestions of “reform.” We are demanding that our voices be heard now, and that real change be made to the way this city allocates its resources.
            ${NEW_LINE}${NEW_LINE}Support for communities in need is necessary now, more than ever. But instead, the Mayor has proposed an increase in funding to the SLCPD, despite the fact that crime has fallen considerably during the past few months. The SLCPD has seen a rise in overtime pay which, more often than not, is paid out to officers responsible for harassing the unhoused, and Black, Indigenous, people of color.
            ${NEW_LINE}${NEW_LINE}We demand that the City Council defund the SLCPD. We join the calls of those across the country to #DefundThePolice. We demand a budget that adequately and effectively meets the needs of at-risk Utahans during this trying and uncertain time, when livelihoods are on the line. We demand a budget that supports community wellbeing, rather than empowers the police forces that tear them apart.
            ${NEW_LINE}${NEW_LINE}Although City Council has avoided voting or revising Mayor Mendenhall’s draconian budget proposal, the document is back in your hands. It is your duty to represent your constituents. I am urging you to completely revise the SLC budget for 2020-2021 fiscal year, and to fund #CareNotCops. You need to adopt a People’s Budget. Public opinion is with me.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'San Francisco',
        group: 'Defund The Police',
        subject: 'Defund the SFPD',
        secondInputPlaceholder: 'SF AREA (CITY)...',
        sendTo: [
            'MayorLondonBreed@sfgov.org',
            'Board.of.Supervisors@sfgov.org',
            'sandra.fewer@sfgov.org',
            'Catherine.Stefani@sfgov.org',
            'Aaron.Peskin@sfgov.org',
            'marstaff@sfgov.org',
            'waltonstaff@sfgov.org', 
            'Ahsha.Safai@sfgov.org', 
            'Carmen.Chu@sfgov.org',
            'cityattorney@sfcityatty.org',
            'districtattorney@sfgov.org',
            'sfso.complaints@sfgov.org',
            'jose.cisneros@sfgov.org',
            'manohar.raju@sfgov.org',
        ],
        body: (name, secondInput) => `To Mayor Breed, the San Francisco Board of Supervisors, and San Francisco Elected Officers,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  This past week, our nation has been gripped by protests calling for rapid and meaningful change with regard to police behavior, an end to racism and anti-blackness, and immediate reform in how black people are treated in America. Our city has been at the forefront of much of this action. Accordingly, it has come to my attention that the budget for 2021 is being decided as these protests continue.
            ${NEW_LINE}${NEW_LINE}SFPD has been a waste of our resources. Last year, the SFPD budget was $611,701,869, the majority of which comes from the San Francisco general fund. While we've been spending extraordinary amounts on policing, we have not seen improvements to safety, homelessness, mental health, or affordability in our city. Instead, we see wasteful and harmful actions of our police.
            ${NEW_LINE}${NEW_LINE}I call on you to slash the SFPD budget and instead use those extraordinary resources towards solving homelessness, which is felt most by our black neighbors and veterans. We implore you to give every member of our community experiencing homelessness a place to call home and the treatment they need.
            ${NEW_LINE}${NEW_LINE}We can be a beacon for other cities to follow if only we have the courage to change.
            ${NEW_LINE}${NEW_LINE}We’re counting on you to stand up for Black communities and marginalized communities and defund the SFPD. Thank you.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Seattle',
        group: 'Defund The Police',
        subject: 'Commit to Reallocation for Social Equity',
        secondInputPlaceholder: 'Seattle District...',
        sendTo: [
            'jenny.durkan@seattle.gov', 
            'COUNCIL@SEATTLE.GOV', 
            'lisa.herbold@seattle.gov', 
            'tammy.morales@seattle.gov', 
            'kshama.sawant@seattle.gov', 
            'alex.pedersen@seattle.gov', 
            'debora.juarez@seattle.gov', 
            'dan.strauss@seattle.gov', 
            'andrew.lewis@seattle.gov', 
            'teresa.mosqueda@seattle.gov', 
            'lorena.gonzalez@seattle.gov',
        ],
        body: (name, secondInput) => `Dear Seattle City Leadership,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  I am writing to demand that the City Council adopt a People’s Budget that prioritizes community wellbeing and redirects funding away from the police.
            ${NEW_LINE}${NEW_LINE}We are in the midst of widespread upheaval over the systemic violence of policing, embodied by the SPD’s well documented history of murdering Black people. I will no longer accept empty gestures and suggestions of “reform.” I am  demanding that my voice be heard now, and that real change be made to the way this city allocates its resources.
            ${NEW_LINE}${NEW_LINE}Rather than prioritize the quality of life for all of Seattle with a proportional housing and development budget, Mayor Durkan chooses to prioritize the SPD. In the 2019-2020 proposed budget, the funding for the Office of Housing, which provides grants for affordable housing, remained unchanged at only $69.1 million. In comparison, the SPD was allocated a budget of $363 million, representing a 9.7% increase in funds.
            ${NEW_LINE}${NEW_LINE}This pandemic has had severe economic consequences including high unemployment causing many people to be unable to pay rent. Prior to the pandemic, 60k people were unhoused; the evictions and economic insecurity caused by COVID-19 will bring that number even higher. Support for communities in need is necessary now, more than ever. But instead, out of all departments, the Mayor has proposed an increase in funding to the SPD. The SPD has seen a rise in overtime pay which, more often than not, is paid out to officers responsible for harassing people who are unhoused, Black, Indigenous, and people of color. This money can be spent in other ways that are proven to be more effective in improving community safety and wellness.
            ${NEW_LINE}${NEW_LINE}I demand that the City Council defund the SPD. I join the calls of those across the country to defund the police. I demand a budget that adequately and effectively meets the needs of at-risk Seattleites. I demand a budget that supports community wellbeing, rather than empowers the police forces that tear them apart.
            ${NEW_LINE}${NEW_LINE}Although City Council has avoided voting or revising Mayor Durkan's draconian budget proposal, the document is back in your hands. It is your duty to represent your constituents. I am urging you to completely revise the Seattle budget for 2020-2021 fiscal year. You need to adopt a People’s Budget. Public opinion is with me.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Spokane',
        group: 'Defund The Police',
        subject: 'Spokane Resident for Defunding of SPD',
        secondInputPlaceholder: 'Spokane Neighborhood...',
        sendTo: [
            'mayor@spokanecity.org', 
            'bbeggs@spokanecity.org', 
            'kateburke@spokanecity.org', 
            'mcathcart@spokanecity.org',
            'bwilkerson@spokanecity.org', 
            'lkinnear@spokanecity.org', 
            'cmumm@spokanecity.org',
            'kstratton@spokanecity.org',
        ],
        body: (name, secondInput) => `Dear Mayor Nadine Woodward and Spokane City Council Members,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  Given the history of policing and the most recent murders of Black people, I am asking you to redirect money away from the Spokane PD in the 2021 budget and instead to prioritize services that help strengthen our communities.
            ${NEW_LINE}${NEW_LINE}I want a budget that reflects our community's priorities and needs. I urge you to advocate for a meaningful reallocation of the city's expenditures: away from policing, and towards social programs and resources that support housing, jobs, education, health care, child care, and other critical community needs. Beyond policing our community, these services are proven to be more effective in improving community safety and wellness. I demand a budget that supports community wellbeing, rather than gives power to police forces that tear them apart.
            ${NEW_LINE}${NEW_LINE}Please consider your role in enriching and empowering our communities, especially during a time of racial injustice, wide-spread illness, and economic vulnerability.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Tacoma',
        group: 'Defund The Police',
        subject: 'We Demand Justice for Manuel Ellis and Reallocation of TPD Funds',
        secondInputPlaceholder: '(CITY)...',
        sendTo: [
            'victoria.woodards@cityoftacoma.org', 
            'john.hines@cityoftacoma.org', 
            'robert.thoms@cityoftacoma.org', 
            'catherine.ushka@cityoftacoma.org', 
            'chris.beale@cityoftacoma.org', 
            'lillian.hunter@cityoftacoma.org', 
            'conor.mccarthy@cityoftacoma.org', 
            'kristina.walker@cityoftacoma.org',
        ],
        body: (name, secondInput) => `Dear Mayor Woodards and Tacoma City Council,
            ${NEW_LINE}${NEW_LINE}My name is ${name}, and I am a resident of ${secondInput}.  I am writing to demand justice for Manuel Ellis, an innocent Black man who was murdered by Tacoma police officers on March 3, and so many murdered Black people before him.
            ${NEW_LINE}${NEW_LINE}Despite autopsy evidence ruling Ellis’ death a homicide, the officers involved in this murder have not been charged and are still employed at the Tacoma Police Department. This is unacceptable. Administrative leave is not enough. I demand that these officers be fired and arrested for their crimes.
            ${NEW_LINE}${NEW_LINE}I am also asking the City of Tacoma to show your commitment to racial justice moving forward by opposing any increase in the Tacoma Police Department’s budget, and re-allocating city resources from policing to services that keep Black people safe, such as healthcare, education, and community programs.
            ${NEW_LINE}${NEW_LINE}Sincerely,
            ${NEW_LINE}${name}
            `,
    },
    {
        title: 'Washington DC',
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
