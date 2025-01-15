import React from 'react'
import styled from 'styled-components'

function Input({type, placeholder, icon}) {
  return (
    <InputDiv>
        <input type={type} placeholder={placeholder} />
        {icon}
    </InputDiv>
  )
}

export default Input

const InputDiv = styled.div`
    position: relative;
    height: 30px;
    border: 1px solid black;
    width: 230px;
    border-radius: 20px;
    margin: 6px;
    padding: 3px;
    cursor: pointer;

    &:hover{
        background-color: #dcf7b4;
    }

    
    input{
        border: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: #574f4f;
        font-size: 14px;
        cursor: pointer;

    }
    input:focus{
        outline: none;
    }

    input::placeholder{
        font-size: 14px;
        color: grey;
    }

    .icon{
        position: absolute;
        top: 7px;
        right: 10px;
        font-size: 18px;
        color: grey;
    }

`;