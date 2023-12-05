import React, { useState } from 'react';
import { SignupCss } from '../cssfiles/sign-up.css';
import Navbar from '../body/sections/Navbar';
import { handleSubmit } from '../axios_file';
import { handleLoginSubmit } from '../axios_file';


export default function Login() {
  const [loginForm, setLoginform] = useState({});
  const handleLogin = (e) => {
    // console.log(e.target.value,e.target.name)

    setLoginform({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit=async (e)=>{
    e.preventDefault();
    await handleLoginSubmit(loginForm)
  }

  return (
    <>
      <Navbar />
      <div className='all'>

      {/* <p>{JSON.stringify(loginForm)}</p> */}

        <div className='contain'>
          <form action='' onSubmit={handleLoginSubmit}>
            <h1>Login</h1>

            <div className='input'>
              <input
                type='text'
                onChange={handleLogin}
                name='email'
                placeholder='Email'
                required={true}
              />
            </div>
            <div className='input'>
              <input
                type='password'
                onChange={handleLogin}
                name='password'
                placeholder='Password'
                required={true}
              />
            </div>

            <button type='submit' className='submit-btn'>
              Login
            </button>

            <a href='/signup'>Create Account</a>
          </form>
        </div>
      </div>
    </>
  );
}
