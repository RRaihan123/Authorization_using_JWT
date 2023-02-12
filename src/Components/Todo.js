/* import { useState } from 'react';
export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    var handleInput = (e) =>{
        var inputValue = e.target.value;
        var warning1 = inputValue.includes('.js')?'where is JS?' : null;

        setTodo(inputValue)
        setWarning(warning1)
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea value={todo} onChange={handleInput}/>
            </p>
            <hr />
            <h2>{warning || 'Good'}</h2>
        </div>
    );
} */

/* import { useState } from 'react';             
export default function Todo() {
    const [todo, setTodo] = useState({          //useState with object
        title: '',
        description: '',
    });
    const { title, description } = todo;
    var func1 = (e) =>setTodo({
                            ...todo,
                            title: e.target.value,
                        })
    var func2 = (e) =>setTodo({
                            ...todo,
                            description: e.target.value,
                        })
    return (
        <div>
            <p>{title}</p>
            <p>
                <input type="text" value={title} onChange={func1} />
            </p>
            <p>{description}</p>
            <p>
                <textarea value={description} onChange={func2}/>
            </p>
        </div>
    );
} */


import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            
            i += 1;
        }
    };

    var addOne = () => setCount((prevState) => prevState + 1)

    return (
        <div>
            {count}
            <p>
                <button type="button" onClick={addOne}>
                    Add 1
                </button>
            </p>
            <p>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    );
}

export default Counter;

