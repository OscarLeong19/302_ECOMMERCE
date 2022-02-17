import React, { useState } from "react";
import "../../styles/modal/loginmodal.css";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../redux/user/userAction";
function LoginModal({ setOpenModal }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e, email, password) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    dispatch(userLoginAction(bodyFormData));
  };

  return (
    <div id="modal">
      <div className="modal_window">
        <div className="close">
          <button onClick={() => setOpenModal(false)}> X </button>
        </div>
        <h2>Login</h2>
        <form method="POST" onSubmit={(e) => submitHandler(e)}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="re-btn"
            onClick={(e) => submitHandler(e, email, password)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
