import React from "react";
var scalenames = {
    c:"celsius",
    f:"fahrenheit"
};
export default function Tempinput({temp,scale,tempchange}){
    return (
        <fieldset>
            <legend>temperatue in {scalenames[scale]}</legend>
            <input 
                 type="text" 
                 value={temp} 
                 onChange={(e) => {tempchange(e,scale)}}>
           </input>
        </fieldset>
    )
}

