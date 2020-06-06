import React from 'react';

export default props =>
    (<div style={{
        border: "1px solid #ccc ",
        marginBottom: "10px",
        display: "block",
        padding: "10px"
    }}>
        <p>Name bike:{props.name}</p>
        <p>Year :  <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        {/* <button onClick={props.onClakB}>clik</button> */}
    </div>);