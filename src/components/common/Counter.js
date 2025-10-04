import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}