import React from "react"


export default class ClickCounter extends React.Component{
    render(){
        var {count,change1}=this.props
        return(
            <div>
                <br></br>
                <br></br>
                <button type="button" onClick={change1}>clicked {count} times</button>
            </div>
        )

    }
    
}
