import React, {useState} from "react";




const Mate = (prop) => {
     
 
    return(
        <div>
        {prop.prop.map( mate => {
            console.log(mate)
            return (
                <div>
                    <p>Name: {mate.Name}</p>
                    <p>Email: {mate.Email}</p>
                    <p>Role: {mate.Role}</p>
                    <button type="submit" onClick= {() => {
                        prop.setNewValue(mate);
                        prop.memberToEdit(true)
                    }}>Edit</button> 
                </div>
            )}
        )}
        </div>
    )
}

export default Mate;