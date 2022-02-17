import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './redux';
import { Provider } from 'react-redux';
const middelWare = [thunk];
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUserFromStorage = localStorage.getItem('userdata') ? JSON.parse(localStorage.getItem('userdata')) : {};

const initalState = {
    cartReducer: { cartItems: cartItemsFromStorage },
    userReducer: { currentUser: currentUserFromStorage },
};

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middelWare)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
