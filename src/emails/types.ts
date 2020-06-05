export interface IEmail {
    title: string;
    group?: string;
    secondInputPlaceholder: string;
    sendTo: string[];
    subject: string;
    body: EmailBody;
}

export type EmailBody = (name: string, secondInput: string) => string;
