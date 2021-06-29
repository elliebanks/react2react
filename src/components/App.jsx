import React, { useState, useEffect } from 'react';
import Greeter from './Greeter';


const App = () => {
    const [username, setUsername] = useState('');
    const [loaded] = useState(false);

    if (loaded === false) {
        return <Greeter phrase ="Website loading..." />
        
    } 

    return(
        <div>
            <Greeter phrase="Hey there" name="Ellie" />
            <Greeter phrase="My doggy is" name="Blu" />
            <Greeter phrase="I love you" name="Britney Spears" />
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <p>You are logging in as: {username} </p>
        </div>
    );
}

export default App;