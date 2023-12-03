import React from 'react'
import {SignupCss} from '../cssfiles/sign-up.css'
import Navbar from '../body/sections/Navbar'

export default function Login()
{
    return (
        <>
        <Navbar/>
        <div className='all'>
        <div className="contain">
    <form action="">
        <h1>Login</h1>
        
        <div className="input">
            <input type="text" placeholder="Email" required="true"/>
        </div>
        <div className="input">
            <input type="password" placeholder="Password" required="true"/>
        </div>

    <button type="submit" className="submit-btn">Login</button>
    
    <a href="/signup">Create Account</a>

    </form>
</div>
</div>
</>
)
}