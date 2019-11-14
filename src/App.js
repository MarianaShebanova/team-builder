import React, { useState } from "react";
import ReactDOM from "react-dom";

import List from "./List";
import Form from "./Form";


function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      email: "123@gmail.com",
      nameM: "Happy",
      role: "Backend engineer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      nameM: member.nameM,
      role: member.role,
      email: member.email
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>Team</h1>
      {/* we are going to pass a function down as a prop */}
      <Form addNewMember={addNewMember} />
      <List members={members} />
    </div>
  );
}

export default App;
