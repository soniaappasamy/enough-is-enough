import React from 'react';
import './App.css';

const SEND_TO = "kl743@cornell.edu";
const SUBJECT = "Hey kavin";
const BODY = "Wassup";

const App: React.FC = () => {
  return (
    <div className="App" >
      <header className="App-header">
        <p>
          Click the links below to join the groups.
        </p>
        <a className="App-link" href={`sms:55156&body=FLOYD`}>FLOYD</a>
        <a className="App-link" href={`sms:668366&body=JUSTICE`}>JUSTICE</a>
        <a className="App-link" href={`sms:55165&body=ENOUGH`}>ENOUGH</a>
        {/* <a className="App-link" href={`mailto:${SEND_TO}?subject=${SUBJECT}&body=${BODY}`}>Email Us</a> */}
      </header>
    </div >
  );
}

export default App;
