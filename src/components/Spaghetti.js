import React, { useEffect, useState } from 'react';
import Items from './items';
import axios from 'axios';
import '../styles/drink.css';

function Spaghetti() {
    const [spaghettiList, setSpaghettiList] = useState([]);
    useEffect(() => {
        const fetch = () => {
            return axios.get('http://127.0.0.1:5000/api/products', { params: { category_id: 6 } }).then((all) => {
                setSpaghettiList(all.data);
            });
        };
        setTimeout(fetch, 1000);
    }, []);
    return (
        <div className="drink">
            <h1 className="drinkTitle">Spaghetti --- Stationery</h1>
            <div className="drinkList">
                {spaghettiList.map((spaghetti, key) => {
                    return (
                        <Items
                            key={key}
                            image={spaghetti.IMG_PATH}
                            name={spaghetti.NAME}
                            price={spaghetti.PRICE}
                            id={spaghetti.ID}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Spaghetti;
