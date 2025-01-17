import React from 'react'
import styled from 'styled-components'

function Button({text, icon}) {
  return (
    <Button_part>
        <button>{text}{icon}</button>
    </Button_part>
  )
}

export default Button

const Button_part = styled.div`
    button{
        padding: 8px;
        font-size: 18px;
        border-radius: 20px;
        background-color: #72b572;
    }
`;