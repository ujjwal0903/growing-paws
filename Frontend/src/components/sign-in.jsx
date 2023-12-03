import React from 'react'
import {SignupCss} from '../cssfiles/sign-up.css'
import Navbar from '../body/sections/Navbar'

export default function Signup()
{
    const handleForm=(e)=>{
        console.log(e.target.value, e.target.name);
    }

    return (
        <>
        <Navbar/>
        <div className='all'>
        <div className="contain">   
    <form action="">
        <h1>Sign up</h1>
        <div className="input">
            <input type="text" name="fullname" onChange={handleForm} placeholder="Full Name" required={true}/>
        </div>
        <div className="input">
            <input type="text" name='username' onChange={handleForm} placeholder="Username" required={true}/>
        </div>
        <div className="input">
            <input type="text" name='email' onChange={handleForm} placeholder="Email" required={true}/>
        </div>
        <div className="input">
            <input type="password" name='password' onChange={handleForm} placeholder="Password" required={true}/>
        </div>
    <button type="submit" className="submit-btn">Sign up</button>
    <p> Already have an account?
    <a href="/login">Login</a>
    </p>
    </form>
</div>
</div>
</>
    )
}