import React, { useState, useEffect } from 'react';
import Greeter from './Greeter';



const App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setLoaded(!loaded);
        }, 3000);
    }, []);
    
    if (loaded) {
        return(
            <>
                <Greeter phrase="Hey there" name="Ellie" />
                <Greeter phrase="My doggy is" name="Blu" />
                <Greeter phrase="I love you" name="Britney Spears" />
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logging in as: {username} </p>
            </>
        );
    } else {
        return (
            <>
            <h1>Website Loading...</h1>
            <button onClick={() => setLoaded(true)}>Load page!</button>
            </>
        );
    };
};      


export default App;