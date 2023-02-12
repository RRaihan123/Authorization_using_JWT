import React from "react"
export default class Counter extends React.Component{
    state={
        count:0
    }

    change1 = ()=>{
                  this.setState((prevstate) => ({count : prevstate.count + 1}))
                  }

    render(){
        var {count} = this.state;
        var {children} = this.props
        return  children(count,this.change1)
    }
 
}
