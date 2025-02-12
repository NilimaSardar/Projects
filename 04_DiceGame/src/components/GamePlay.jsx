import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);


  const generateRandomNumber = (min, max)=>{
    return Math.floor(Math.random()*(max - min)+min);
  };

const roleDice = ()=>{
  if(!selectedNumber) return;

  const randomNumber = generateRandomNumber(1, 7);

  setCurrentDice((prev)=>randomNumber);

  if(selectedNumber === randomNumber){
    setScore((prev) => prev + randomNumber)
  }else{
    setScore((prev)=>prev - 2)
  }

  selectedNumber(undefined)

}

  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore score={score}/>
            <NumberSelector selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
        </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice}/>
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