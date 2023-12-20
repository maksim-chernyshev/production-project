import {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    let [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div className={classes.button}>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

