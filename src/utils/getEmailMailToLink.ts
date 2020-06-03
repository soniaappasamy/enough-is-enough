import { IEmail } from "../emails/types";

export function getEmailMailToLink(email: IEmail | undefined, name: string | undefined, location: string | undefined): string | undefined {
    if (email === undefined || name === undefined || location === undefined) {
        return undefined;
    }
    const { sendTo, subject, body } = email;
    return `mailto:${sendTo.join(", ")}?subject=${subject}&body=${body(name, location)}`;
}