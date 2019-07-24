import React from "react";

const Mate = ({prop}) => {
    return(
        <div>
        {prop.map( mate => {
            return (
                <div>
                    <p>Name: {mate.Name}</p>
                    <p>Email: {mate.Email}</p>
                    <p>Role: {mate.Role}</p>
                </div>
            )}
        )}
        </div>
    )
}

export default Mate;