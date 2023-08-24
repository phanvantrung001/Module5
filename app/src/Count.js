import React, { useState } from 'react';

function Count(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>click</button>
            <p>{count}</p>
        </div>
    );
}

export default Count;