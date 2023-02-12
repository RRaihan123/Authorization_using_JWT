import React from "react"
function withCounter(Originalcomponent){    // here, withCounter is HOC
    class newcomponent extends React.Component{
        state={
            count:0
        }
    
        change1 = ()=>{
                      this.setState((prevstate) => ({count : prevstate.count + 1}))
                      }

        render(){
            var {count} = this.state;
            return <Originalcomponent count={count} change1={this.change1}/>
        }
     }
    return newcomponent;
}
export default withCounter