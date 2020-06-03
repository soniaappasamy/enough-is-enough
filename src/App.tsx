import React from "react";
import { Classes } from "@blueprintjs/core";
import { EmailSenderForm } from "./components/EmailSenderForm";
import "./App.scss";
import { allEmails } from "./emails/consts";

const App: React.FC = () => {
    return (
        <div className={`app ${Classes.DARK}`}>
            <EmailSenderForm emails={allEmails} />
            {/* <p>
          Click the links below to join the groups.
        </p>
        <a className="App-link" href={`sms:55156&body=FLOYD`}>FLOYD</a>
        <a className="App-link" href={`sms:668366&body=JUSTICE`}>JUSTICE</a>
        <a className="App-link" href={`sms:55165&body=ENOUGH`}>ENOUGH</a> */}
            {/* <a className="App-link" href={`mailto:${SEND_TO}?subject=${SUBJECT}&body=${BODY}`}>Email Us</a> */}
        </div>
    );
};

export default App;
