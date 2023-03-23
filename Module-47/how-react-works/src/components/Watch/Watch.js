import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        setSteps(steps + 1);
    }
    // using useEffect to get realtime data of steps in console.log
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div>
            <h2>This is my smart watch</h2>
            <h3>My current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De dour...</button>
        </div>
    );
};

export default Watch;