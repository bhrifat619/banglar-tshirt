import React, { useContext } from 'react';
import { Moneycontext } from '../GrandpaPropsDrill/Grandpa';

const Sister = () => {
    const [money] = useContext(Moneycontext)
    return (
        <div>
            <h2>sis here</h2>
            <p>Grandpa money:{money}</p>
        </div>
    );
};

export default Sister;