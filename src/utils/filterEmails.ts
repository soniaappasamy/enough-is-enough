import { IEmail } from '../emails/types';

export function filterEmails(query: string, emails: IEmail[]): IEmail[] {
    return emails.filter((email) => (
        textContains(email.title, query)
      || (email.group !== undefined && textContains(email.group, query))));
}

const textContains = (text: string, query: string): boolean => (
    text.toLowerCase().indexOf(query.toLowerCase()) >= 0);
