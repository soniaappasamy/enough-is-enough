import { IEmail } from '../emails/types';

export function getEmailMailToLink(
    email: IEmail | undefined,
    name: string | undefined,
    secondInput: string | undefined,
): string | undefined {
    if (email === undefined || name === undefined || secondInput === undefined
        || name === '' || secondInput === ''
    ) {
        return undefined;
    }
    const { sendTo, subject, body } = email;
    return `mailto:${sendTo.join(', ')}?subject=${subject}&body=${body(name, secondInput)}`;
}
