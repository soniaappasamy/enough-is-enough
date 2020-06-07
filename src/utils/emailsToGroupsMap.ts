import { IEmail } from '../emails/types';

export function emailsToGroupsMap(emails: IEmail[]): [Map<string, IEmail[]>, string[]] {
    const groupsMap = new Map<string, IEmail[]>();
    emails.forEach((email) => {
        const group = email.group || email.title;
        groupsMap.set(group, [...(groupsMap.get(group) || []), email]);
    });
    return [groupsMap, Array.from(groupsMap.keys())];
}
