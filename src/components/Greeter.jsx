import React from 'react';
/* 
Props Object
{
    name: 'Ellie',
    favoriteShow: Breaking Bad,
    admin: true
}
*/

const Greeter = props => {
    
    return (
        <div>
            <h1>{props.phrase} {props.name}!</h1>
        </div>
    );
};

export default Greeter;