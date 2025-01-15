import React from 'react'
// import {Link, NavLink} from 'react-router-dom';

import styled from 'styled-components'

function LoginButton() {

  return (
    <Button>
          <button>Login</button>
    </Button>
  )
}

export default LoginButton

const Button = styled.div`
    height: 30px;
    border: 1px solid black;
    width: 230px;
    border-radius: 20px;
    padding: 3px;

    &:hover{
        background-color: #d4f89d;
    }
    
    button{
        border: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
    }


`;