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
          Click below to send an email to your congressperson.
        </p>
        <a className="App-link" href={`mailto:${SEND_TO}?subject=${SUBJECT}&body=${BODY}`}>Email Us</a>
      </header>
    </div >
  );
}

export default App;
