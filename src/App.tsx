import React from "react";
import { Classes, H2 } from "@blueprintjs/core";
import { EmailSenderForm } from "./components/EmailSenderForm";
import "./App.scss";
import { allEmails } from "./emails/consts";

const App: React.FC = () => {
    return (
        <div className={`app ${Classes.DARK}`}>
            <H2 className={"header"}>Enough is Enough</H2>
            <EmailSenderForm emails={allEmails} />
        </div>
    );
};

export default App;
