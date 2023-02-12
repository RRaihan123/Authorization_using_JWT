import React from "react"


export default function HoverCounter({count,change1,theme,switchTheme}){
 var style = theme === "dark"?{backgroundColor:'#000000',color:'#ffffff'}:null

        console.log("hovercounter rendered")
        return(
            <div>
           
                <h1  onMouseOver={change1} style={style}>Hovered {count} times</h1>
                <button onClick={switchTheme} type="button">Change Theme</button>

            </div>
        )

    
    
}
