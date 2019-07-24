import React, {useState} from 'react';
import Teammates from "./List.js";
import Form from "./Form.js";
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  console.log(team)

  const submitHandler = event =>{
    event.preventDefault();
    return(
      <div>
        <Form team={team} setTeam={setTeam} />
      </div>
    )
      
  };

  // function changeState(){
  //   i
  // }
  
  return (
    <div>
      <Form team={team} setTeam={setTeam} />
      <h2>Teammates: </h2>
        {team.map( mate => {
            return (
                <div>
                    <p>Name: {mate.Name}</p>
                    <p>Email: {mate.Email}</p>
                    <p>Role: {mate.Role}</p>
                    <form onSubmit={submitHandler}>
                    <button type="submit">Edit</button>       
                    </form>
                </div>
            )}
        )}
    </div>
  );
}

export default App;
