import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { Moneycontext } from '../GrandpaPropsDrill/Grandpa';

const Uncle = () => {
    // money from grandpa
    const [money,setMoney] = useContext(Moneycontext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>GrandpaMoney:{money}</p>

            <button onClick={()=> setMoney(money + 1000)}>Send 1000</button>

            <div className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </div>
        </div>
    );
};

export default Uncle;