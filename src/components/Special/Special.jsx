import React, { useContext } from 'react';
import { RingContext } from '../GrandpaPropsDrill/Grandpa';

const Special = ({ring}) => {
    const angti =useContext(RingContext)
    return (

        <div>
            <h2>special person</h2>
            <p>Ring:{angti}</p>
        </div>
    );
};

export default Special;