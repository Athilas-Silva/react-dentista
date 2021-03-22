import React from 'react';

const Data = () => {
    const data = new Date().toLocaleDateString();

    return(
        <div>
            <p>{data}</p>
        </div>
    );
}

export default Data;