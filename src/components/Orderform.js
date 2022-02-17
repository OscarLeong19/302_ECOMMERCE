import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../redux/order/orderAction';
import axios from 'axios';
import Paypal from './Paypal';
export default function Orderform({ setPaid }) {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cartReducer);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [checkOut, setCheckOut] = useState(false);
    const product_ids = cartItems.map((value, key) => {
        return { product_id: value.id, qty: value.qty };
    });
    const prices = cartItems.map((value, key) => {
        return { total_price: value.price * value.qty };
    });
    const submitHandler = (e, first_name, last_name, email, product_ids) => {
        e.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append('first_name', first_name);
        bodyFormData.append('last_name', last_name);
        bodyFormData.append('email', email);
        bodyFormData.append('product_ids', JSON.stringify(product_ids));
        dispatch(createOrder(bodyFormData));
    };
    useEffect(() => {
        const isUser = JSON.parse(localStorage.getItem('userdata'));
        if (isUser) {
            const first_name = document.getElementById('first-name');
            const last_name = document.getElementById('last-name');
            const email = document.getElementById('email');
            first_name.setAttribute('value', isUser.FIRST_NAME);
            last_name.setAttribute('value', isUser.LAST_NAME);
            email.setAttribute('value', isUser.EMAIL);
        }
    }, []);

    return (
        <form>
            <div class="form-group">
                <h2>Please enter your information</h2>
                <label for="exampleInputEmail1">First Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="first-name"
                    placeholder="First Name"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                        setFirst_name(e.target.value);
                    }}
                />
                <label for="exampleInputEmail1">Last Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="last-name"
                    placeholder="Last Name"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                        setLast_name(e.target.value);
                    }}
                />

                <label for="exampleInputEmail1">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            {checkOut ? (
                <Paypal prices={prices} setPaid={setPaid} />
            ) : (
                <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={(e) => {
                        submitHandler(e, first_name, last_name, email, product_ids);
                        setCheckOut(true);
                    }}
                >
                    Submit
                </button>
            )}
        </form>
    );
}
