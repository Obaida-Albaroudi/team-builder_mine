import React, {useState, useEffect} from "react";


const Form = (props) => {
    const [state, setState] = useState({
        Name: "",
        Email: "",
        Role: ""
      });     

    useEffect(() => {
        setState(props.newValue)},
        [props.newValue])
    
    

    const submitHandler = event =>{
        event.preventDefault();
        if(props.member === true){
            props.editMember({...state, [event.target.name] : event.target.value})
            props.memberToEdit(false)
            console.log(props.member)

        } else{
            props.setTeam([...props.team, state]) 
        }
      };
    
      const changeHandler = event => {
        setState({
          ...state, [event.target.name] : event.target.value
        });
    
      }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="first-set">
            <label> Name: </label> <input type="text" name="Name" value={state.Name} onChange={changeHandler} />
            </div>
            <div className="second-set">
            <label> Email: </label> <input type="text" name="Email" value={state.Email} onChange={changeHandler} />
            </div>
            <div className="third-set">
            <label> Role: </label> <input type="text" name="Role" value={state.Role} onChange={changeHandler} />
            </div>
            <div className="final-set">
            <button type="submit">Submit</button>
            </div>
        </form>
        
    )
}

export default Form;