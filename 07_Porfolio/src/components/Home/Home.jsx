import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <HomePage>
        <div className='main-section'>
            <div className='intro'>
                <h1>Hi! I'm </h1>
                <span>NILIMA</span>
                <h2>Frontend Developer</h2>
            </div>
            
            {/* <div className='image'>
                <img src="" alt="" />
            </div> */}
        </div>
    </HomePage>
  )
}

export default Home

const HomePage = styled.div`
    width: 100%;
    /* background-color: rebeccapurple; */
    height: calc(100vh - 64.4px);
    display: grid;
    place-items: center;

      .main-section{
        font-size: 35px;
      }
      .intro{
        line-height: 50px;
      }
      
      .intro span{
        font-weight: 700;
        letter-spacing: 5px;
      }
      .intro h2{
        font-size: 70px;
      }
`;