// Code Keypad Component Here
import React from "react";
function Keypad (){
    const enterChange=()=>{
        console.log("Entering password...");
    }
    return (
        <div>
            <input type='password' onChange={enterChange} />
        </div>
    )
}

export default Keypad;