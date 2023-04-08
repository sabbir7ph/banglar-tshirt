import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money]=useContext(MoneyContext);
    return (
        <div>
            <h2>sister</h2>
            <p><small>grandpa money:{money}</small></p>
        </div>
    );
};

export default Sister;