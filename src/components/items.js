import React from 'react';
import { addToCartAction } from '../redux/cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';
function Items({ image, name, price, id }) {
    const dispatch = useDispatch();
    const addToCartHandler = (name, id, price) => {
        dispatch(addToCartAction(name, id, price, image));
    };
    return (
        <div className="drinkitems">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ${price} </p>
            <button onClick={() => addToCartHandler(name, id, price, image)}>Add To Cart</button>
        </div>
    );
}

export default Items;
