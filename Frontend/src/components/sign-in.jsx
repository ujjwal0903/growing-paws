import React,{useState} from 'react'
import {SignupCss} from '../cssfiles/sign-up.css'
import Navbar from '../body/sections/Navbar'
import { handleSubmit } from '../axios_file'


export default function Signup()
{
    const [form,setform]=useState({})
    const handleForm=(e)=>{

        // console.log(e.target.value, e.target.name);
        
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        await handleSubmit(form)
        
    }

    return (
        <>
        <Navbar/>
        <div className='all' >
        <div className="contain">   
    <form action="" onSubmit={handlesubmit}>

        {/* <p >{JSON.stringify(form)}</p> */}

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
    <button type="submit" className="submit-btn" href='#'>Sign up</button>
    <p> Already have an account?
    <a href="/login">Login</a>
    </p>
    </form>
</div>
</div>
</>
    )
}