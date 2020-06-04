import React from "react";
import { Classes, H1, H4 } from "@blueprintjs/core";
import { EmailSenderForm } from "./components/EmailSenderForm";
import "./App.scss";
import { allEmails } from "./emails/consts";

const App: React.FC = () => {
    return (
        <div className={`app ${Classes.DARK}`}>
            <div className={"header"}>
                <H1>ENOUGH IS ENOUGH</H1>
                <H4 className={Classes.TEXT_MUTED}>autofill emails to demand justice</H4>
            </div>
            <EmailSenderForm emails={allEmails} />
        </div>
    );
};

export default App;
