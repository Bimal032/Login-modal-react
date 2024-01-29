import { useState, useRef } from "react";
import { BiSolidCommentX } from "react-icons/bi";
// import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { Link } from "react-router-dom";

const ShowModal = ({ closeModal }) => {
  const [errMsg, setErrMsg] = useState("offscreen");
  const userRef = useRef(); //for user input
  const passRef = useRef(); //for an error refernce to show in display

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = userRef.current.value;
    console.log(v1);
    const v2 = passRef.current.value;
    console.log(v2);
    if (!v1 || !v2) {
      setErrMsg("instructions");
      return;
    }
  };
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <span className="remove-btn" onClick={closeModal}>
          <BiSolidCommentX size="2rem" />
        </span>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            placeholder="Enter your username"
            required
            onChange={() => console.log(userRef.current.value)}
            aria-describedby="uidnote"
          />
          <p id="uidnote" className={errMsg}>
            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
            The email address or mobile number you entered isn't connected to an
            account. Find your account and log in.
          </p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            aria-describedby="pwdnote"
            placeholder="Enter your password"
          />
          <p id="pwdnote" className={errMsg}>
            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
            check your password.
          </p>
          <button className="model-btn btn">Sign In</button>
        </form>
        <p>
          <span className="line">
            {/*put router link here*/}
            <a href="#">Forgotten password</a>
          </span>
          <span className="line">
            {/*put router link here*/}
            {/* <Link to="/register">Create an account</Link> */}
            <a href="#">Create an account</a>
          </span>
        </p>
      </div>
    </>
  );
};
export default ShowModal;
