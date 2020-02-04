import React, {useState} from 'react';

const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter+1);

    return (
        <div>
            {counter} <button onClick={increment}>+1</button>
        </div>
    );
}

export default Counter;