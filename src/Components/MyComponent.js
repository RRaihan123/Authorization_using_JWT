/* import { useEffect, useState } from 'react';
export default function MyComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    });
    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    return (
        <div>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
} */

/* import { useEffect, useState } from 'react';
export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count]);
    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    var type1=(e)=>{
        setText(e.target.value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={type1}></input>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
} */

/* import { useEffect, useState } from 'react';
export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const tick = () => {
       setDate(new Date());
    };
    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count]);
    useEffect(() => {
        
        setInterval(tick, 1000);
    });
    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
} */

/* import { useEffect, useState } from 'react';
export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const tick = () => {
       setDate(new Date());
    };
    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count]);
    useEffect(() => {
        console.log("timer")
        setInterval(tick, 1000);
    },[]);
    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
} */

import { useEffect, useState } from 'react';
export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const tick = () => {
        console.log("clock ticking")
        setDate(new Date());
    };
    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count]);
    useEffect(() => {
        console.log("timer")
        var clear1=setInterval(tick, 1000);
        return () => {                         // it is for unmounting
            console.log("unmounted")          
            clearInterval(clear1)
        }
    },[]);
    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}