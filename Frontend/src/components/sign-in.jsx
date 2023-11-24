import React from 'react'
import {SignupCss} from '../cssfiles/sign-up.css'
import Navbar from '../body/sections/Navbar'

export default function Signup()
{
    return (
        <>
        <Navbar/>
        <div className='all'>
        <div class="contain">
    <form action="">
        <h1>Sign up</h1>
        <div class="input">
            <input type="text" placeholder="Full Name" required="true"/>
        </div>
        <div class="input">
            <input type="text" placeholder="Username" required="true"/>
        </div>
        <div class="input">
            <input type="text" placeholder="Email" required="true"/>
        </div>
        <div class="input">
            <input type="password" placeholder="Password" required="true"/>
        </div>
    <button type="submit" class="submit-btn">Sign up</button>
    <p> Already have an account?
    <a href="#">Login</a>
    </p>
    </form>
</div>
</div>
</>
    )
}