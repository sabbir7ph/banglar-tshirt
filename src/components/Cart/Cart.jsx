import { key } from 'localforage';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>please add some products</p>
    }
    else {
        message = <div>
            <h3>tomi boro loks</h3>
            <p>thanks for give your mony</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>order summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2 ?
                <span className='purple'>Aro kino</span>
                : <span> Fokira</span>}

            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bonus</p>
            }
            {
                cart.length === 3 || <h3>tinta to hoylona</h3>
            }
        </div >
    );
};

export default Cart;