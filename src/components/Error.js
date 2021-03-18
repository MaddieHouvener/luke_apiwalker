import React from 'react';
import obi from '../obi-wan-kenobi.jpg';

const Error = () => {

    console.log(obi)
    return (
        <div>
            <h2>These aren't the droids you're looking for!</h2>
            <img style={{ width: 500 }} src={obi} alt="obi" />
        </div>
    )
}

export default Error;