/* import Counter from "./Components/Counter1"
export default function App() {
    
    return (
        <div className="app">
            <Counter/>
        </div>
    );
} */

/* import ComplexCounter from "./Components/ComplexCounter"
export default function App() {
    
    return (
        <div className="app">
            <ComplexCounter/>
        </div>
    );
} */

/* import CounterThree from "./Components/CounterThree"
export default function App() {
    
    return (
        <div className="app">
            <CounterThree/>
        </div>
    );
} */

/* import React, { useReducer } from 'react';
import ComponentA from './Components/ComA';
export const counterContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};
export default function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="app">
            <div>Count: {count}</div>
            <counterContext.Provider value={{ countDispatch: dispatch }}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
} */

/* import GetPost from "./Components/GetPost"
export default function App() {
    
    return (
        <div className="app">
            <GetPost/>
        </div>
    );
} */

import GetPost2 from "./Components/GetPost2"
export default function App() {
    
    return (
        <div className="app">
            <GetPost2/>
        </div>
    );                                                                                                                                                                                               
}
 
 