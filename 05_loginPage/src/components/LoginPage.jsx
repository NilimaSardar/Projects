import React from 'react'
import styled from 'styled-components';
import Input from './Input';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import LoginButton from './LoginButton';

function LoginPage() {
  return (
    <LoginDiv>
        <div className='main-div'>
            <h1>Login</h1>
            <Input type='text' placeholder='Username' icon={<FaUserAlt className='icon'/>}/>
            <Input type='password' placeholder='Password' icon={<FaLock className='icon'/>}/>

            <div className='login-remember'>
                <div className='login-checkbox'>
                    <input type="checkbox" />
                    <p>Remember me</p>
                </div>
                <div>
                    <p>Forgot password?</p>
                </div>
            </div>
            <div className='login-button'>
                <LoginButton/>
                <p>Don't have an account?<span>Register</span></p>
            </div>
        </div>
    </LoginDiv>
  )
}

export default LoginPage

const LoginDiv = styled.div`
display: grid;
place-items: center;
width: 100%;
height: 100vh;
background-color: beige;

    .main-div{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid black;
        border-radius: 10px;
        width: 450px;
        height: 320px;
        background-color: #eafccf;
    }

    .login-remember{
        display: flex;
        font-size: 15px;
        gap: 20px;
    }

    .login-remember .login-checkbox{
        display: flex;
    }


    .login-button{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-button p{
        font-size: 15px;
        color: gray;
    }

    .login-button p span{
        font-weight: 600;
        color: grey;
    }
   
`;