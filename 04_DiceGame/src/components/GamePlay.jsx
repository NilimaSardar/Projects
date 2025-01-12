import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore/>
            <NumberSelector selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
        </div>
       <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice}/>
    </MainContainer>

  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`;