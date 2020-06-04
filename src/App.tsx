import React from "react";
import { Classes, H1, H4 } from "@blueprintjs/core";
import { EmailSenderForm } from "./components/EmailSenderForm";
import { allEmails } from "./emails/templates";
import "./App.scss";

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
