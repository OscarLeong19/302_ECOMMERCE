// import './App.css';
import Navbar from './components/nav';
import Footer from './components/footer';
import LoginModal from './components/modal/loginmodal';
import RegisModal from './components/modal/registermodal';
import React, { useEffect, useState } from 'react';
import background from './assets/backgroundimg.png';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Track from './pages/trackingpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertInfo from './components/AlertInfo';
import { useSelector } from 'react-redux';
import "./App.css";

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [variant,setVariant]=useState('');
    const [payload,setPayload]=useState('');
    const [show,setShow] = useState(false)
    const cart = useSelector((state) => state.cartReducer);
    const user = useSelector((state) => state.userReducer);

    useEffect(()=>{
        if (user.status){
            setPayload(user.message)
            setVariant(user.status)
            setShow(true)
        }
        if (cart.status) {
            setPayload(cart.message)
            setVariant(cart.status)
            setShow(true)
        }
    },[cart,user])
    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <Router>
                <Navbar setOpenModal={setOpenModal} setRegisterModal={setRegisterModal} />
                {/* <Carousel carousels={carouseldata} />
        <Pizza /> */}
                {openModal && <LoginModal setOpenModal={setOpenModal} />}
                {registerModal && <RegisModal setRegisterModal={setRegisterModal} />}
                <AlertInfo show={show} setShow={setShow} variant={variant} payload={payload}/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/track" exact component={Track} />
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
