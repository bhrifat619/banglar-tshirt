import React, { createContext, useState } from 'react';
import Father from '../FatherProps/Father';
import Uncle from '../UncleProps/Uncle';
import Aunty from '../AuntyProps/Aunty';
import './grandpa.css'

export const RingContext = createContext('gold')

export const Moneycontext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';

    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has money: {money}</p>
            <Moneycontext.Provider value={[money, setMoney]}>

                <RingContext.Provider value='golden ring'>
                    <section className='flex' value='goldenRing'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>

            </Moneycontext.Provider>
        </div>
    );
};

export default Grandpa;
/**
 * Context
 * 1. Create a context and export
 * 2.Create a provider and pass a value
 * 3.use useContext
 * */ 