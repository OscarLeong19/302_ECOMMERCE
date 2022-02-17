import React, { useEffect, useState } from 'react';
import Items from './items';
import axios from 'axios';
import '../styles/drink.css';

function Dessert() {
    const [dessertList, setDessertList] = useState([]);
    useEffect(() => {
        const fetch = () => {
            return axios.get('http://127.0.0.1:5000/api/products', { params: { category_id: 4 } }).then((all) => {
                setDessertList(all.data);
            });
        };
        setTimeout(fetch, 600);
    }, []);
    return (
        <div className="drink">
            <h1 className="drinkTitle">Dessert --- Doll</h1>
            <div className="drinkList">
                {dessertList.map((dessertItem, key) => {
                    return (
                        <Items
                            key={key}
                            image={dessertItem.IMG_PATH}
                            name={dessertItem.NAME}
                            price={dessertItem.PRICE}
                            id={dessertItem.ID}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Dessert;
