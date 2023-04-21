import React from 'react';
import Myself from '../MyselfProps/Myself';
import Sister from '../SisterProps/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <div className='flex'>
                <Myself ring={ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </div>
        </div>
    );
};

export default Father;