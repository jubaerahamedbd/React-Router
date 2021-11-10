import React, { useState } from 'react';

const Demo = () => {
    const [name,setname]=useState({
        country: "Bangladesh"
    })
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={()=>setname({country:"USA"})}>Change</button>
        </div>
    );
};

export default Demo;