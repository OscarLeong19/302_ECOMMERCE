import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegisterAction } from '../../redux/user/userAction';
import '../../styles/modal/registermodal.css';

function RegisModal({ setRegisterModal }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone_num, setPhone_num] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        const formBodyData = new FormData();
        formBodyData.append('email', email);
        formBodyData.append('first_name', first_name);
        formBodyData.append('last_name', last_name);
        formBodyData.append('phone_num', phone_num);
        formBodyData.append('password', password);
        dispatch(userRegisterAction(formBodyData));
    };

    return (
        <div id="modal">
            <div className="modal_window">
                <div className="close">
                    <button onClick={() => setRegisterModal(false)}> X </button>
                </div>
                <h2>Register</h2>
                <form method="POST" onSubmit={(e) => submitHandler(e)}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="email"
                        name="first_name"
                        placeholder="First Name"
                        onChange={(e) => setFirst_name(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="email"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={(e) => setLast_name(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="email"
                        name="phone_num"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone_num(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="pass"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="re-btn" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
export default RegisModal;
