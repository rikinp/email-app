import React from 'react';
import './App.css';
import PermanentDrawerLeft from './components/EmailInbox';
import jsonData from "./data/emails.json";
import { useState, useEffect } from "react";
import Email from './components/Email';


function App() {

  const [emailData, setEmailData] = useState([]);

  useEffect(() => {
    setEmailData(jsonData);
  }, []);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const handleEmailSelected = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="App">
      <PermanentDrawerLeft emailData={emailData} onEmailSelected={handleEmailSelected}/>
      <Email email={selectedEmail}/>
    </div>
  );
}
export default App;
