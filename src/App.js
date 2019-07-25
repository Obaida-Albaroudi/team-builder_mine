import React, {useState} from 'react';
import Mate from "./List.js";
import Form from "./Form.js";
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  const [member, memberToEdit] = useState(false);
  const [newValue, setNewValue] = useState({})


  function editMember(value){
    const temp = team.map( mem => {
      if(mem === newValue){
        return value
      }else{
        return mem
      }
    })
    setTeam(temp)
  }


  // function changeState(){
  //   i
  // }
  
  return (
    <div>
      <Form team={team} setTeam={setTeam} newValue={newValue} setNewValue={setNewValue} editMember={editMember} member={member} memberToEdit={memberToEdit}/>
      <h2>Teammates: </h2>
      <Mate prop={team} setNewValue={setNewValue} memberToEdit={memberToEdit} />      
    </div>
  );
}

export default App;
