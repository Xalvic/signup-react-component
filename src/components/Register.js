import React, { useState } from "react";

const Register = () => {
  const [input, setInput] = useState([]);

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const [show, setShow] = useState(false);

  const reveal = () => {
    setShow(true);
  };
  const undo = () => {
    setShow(!true);
  };

  const { fullname, username, email, password } = input;
  return (
    <div id='Register-contain'>
      <div id='Register'>
        <div className={show ? "form-a" : "form form_a"}>
          <h1>New Account</h1>
          <form>
            <div className='up'>
              <input
                type='text'
                name='fullname'
                className='form-control'
                placeholder='Full Name'
                value={fullname}
                onChange={onChange}
                required
              />{" "}
              <br />
              <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={onChange}
                required
              />{" "}
              <br />
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={onChange}
                required
              />{" "}
              <br />
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={onChange}
                required
              />{" "}
            </div>
            <div className='bottom'>
              <input
                type='submit'
                id='submit'
                value='Register'
                className='button'
              />
              <h5 onClick={reveal}>Have an account, Login</h5>
            </div>
          </form>
        </div>
        <div className={show ? "form-b" : "form form_b"}>
          <h1>Login</h1>
          <form>
            <div className='up'>
              <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={onChange}
                required
              />{" "}
              <br />
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={onChange}
                required
              />{" "}
            </div>
            <div className='bottom'>
              <input
                type='submit'
                id='submit'
                value='Login'
                className='button'
              />
              <h5 onClick={undo}>Create a new account</h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
