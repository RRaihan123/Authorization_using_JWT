import Counter from './Counter';
import HC from './HC';
import ThemeContext from "../contexts/themeContext"
import React from "react"
/*export default class Content extends React.Component {
    
    render(){
        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {
                        (count,change1)=>(
                            <ThemeContext.Consumer>
                                {
                                    ({theme,switchTheme})=>(
                                        <HC count={count} change1={change1} theme={theme} 
                                             switchTheme={switchTheme} />
                                    )
                                }
                            </ThemeContext.Consumer>
                        )
                    }
                </Counter>
            </div>
        );
    }
   
} */
/* export default class Content extends React.Component {
    
    componentDidMount(){
        console.log(this.context)
    }
    render(){
        var {theme,switchTheme} = this.context
        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {
                        (count,change1)=>(
                          
                                    
                                        <HC count={count} change1={change1} theme={theme} 
                                             switchTheme={switchTheme} />
                                    
                              
                        )
                    }
                </Counter>
            </div>
        );
    }
   
}

Content.contextType=ThemeContext */

import { useContext } from 'react';
export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    console.log("content rendered")
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, change1) => (
                    <HC
                        count={count}
                        change1={change1}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
