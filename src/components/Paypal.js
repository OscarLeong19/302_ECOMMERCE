import React, { useRef, useEffect } from 'react';

export default function Paypal({ prices, setPaid }) {
    const paypal = useRef();
    const total = Number.parseFloat(prices.reduce((sum, i) => (sum += i.total_price), 0) / 7.8).toPrecision(4);
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, action, err) => {
                    return action.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [
                            {
                                description: 'Total pizzas and drinks',
                                amount: {
                                    currency_code: 'USD',
                                    value: total,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, action) => {
                    const order = await action.order.capture();
                    setPaid(true);
                    localStorage.setItem('cartItems', '[]');
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []);
    return (
        <div>
            <div className="" ref={paypal}></div>
        </div>
    );
}
