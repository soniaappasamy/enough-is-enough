export interface IEmail {
    title: string;
    group?: string;
    sendTo: string[];
    subject: string;
    body: EmailBody;
}

export type EmailBody = (name: string, location: string) => string;
