import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty here</h2>
            <div className='flex'>
                <Cousin>Maisha</Cousin>
                <Cousin>Raisha</Cousin>
            </div>
        </div>
    );
};

export default Aunty;