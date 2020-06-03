import { IEmail } from "../types";
import { NEW_LINE } from "../consts";

export const justiceForGeorgeFloyd: IEmail = {
    title: "JUSTICE FOR GEORGE FLOYD",
    subject: "JUSTICE FOR GEORGE FLOYD",
    sendTo: [
        "citizeninfo@hennepin.us",
        "police@minneapolismn.gov",
        "minneapolis311@minneapolismn.gov",
        "policereview@minneapolismn.gov",
        "sean.mcginty@minneapolismn.gov",
        "katie.blackwell@minneapolismn.gov"
    ],
    body: (name, location) => `To whom it may concern,
    ${NEW_LINE}${NEW_LINE}I am writing to you from ${location} concerning the horrific events that transpired in your city just a few days ago. I am demanding justice for George Floyd, a Black man who was murdered by four police officers in your city. Although Officer Derek Chauvin has been arrested, he should have been charged with FIRST DEGREE MURDER for taking an innocent man’s LIFE. This is unacceptable. Furthermore, Officer Tou Thao #7162 and the other two officers who were accomplices to this hate crime have not been properly reprimanded. It is NOT enough that they were fired from their jobs. They also need to be charged with MURDER. 
    ${NEW_LINE}${NEW_LINE}I will not stay silent about these abhorrent injustices. I demand that ALL FOUR officers are prosecuted to the fullest extent of the law and put behind bars for their crimes. George Floyd and the countless affected by this situation deserve justice. 
    ${NEW_LINE}${NEW_LINE}Black Lives Matter.
    ${NEW_LINE}Sincerely,
    ${NEW_LINE}${name}
    `
};