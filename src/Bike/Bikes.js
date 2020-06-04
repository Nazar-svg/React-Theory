import React from 'react';

export default props =>
    (
        <div>
            <p>Name bike:{props.name}</p>
    <p>Year :  <strong>{props.year }</strong></p>
    <button onClick={props.onClakB}>clik</button>
        </div>);