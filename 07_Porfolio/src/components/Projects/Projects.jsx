import React from 'react'
import styled from 'styled-components'
import Button from '../Home/Button';

function Projects() {
  return (
    <ProjectSection>
      <h1>Here's my Projects</h1>
        <div className='project-section'>
          {/* <h2>Typing Test</h2> */}
            <div className='image'></div>
            <div className='content'>
              <h3>Typing Test</h3>
              <p>A web based application to evaluate typing speed and accuracy.</p>
              <div className='tool-used'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className='button-used'>
                <Button text='VIEW LIVE' color='color'/>
                <Button text='GITHUB' color='color'/>
              </div>
            </div>
        </div>
    </ProjectSection>
  )
}

export default Projects

const ProjectSection = styled.div`
  width: 100%;
  /* height: calc(100vh - 64.4px); */
  display: grid;
  place-items: center;
  padding: 30px 70px;

  .project-section{
    width: 50%;
    height: auto;
    position: relative;
  }
  .project-section .image{
    border-radius: 20px;
    width: 100%;
    height: 400px;
    background-image: url("public/Login.png");
    background-size: 100% 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    filter: grayscale(75%);
    display: block;
    margin: auto;
    animation: changeImage 10s ease infinite;
  }

  @keyframes changeImage {
    0%{
      background-image: url("public/Images/TypingTest/Home.png");
    }
    25%{
      background-image: url("public/Images/TypingTest/Register.png");
      
    }
    50%{
      background-image: url("public/Images/TypingTest/Login.png");
      
    }
    75%{
      background-image: url("public/Images/TypingTest/TypingPage.png");
      
    }
    100%{
      background-image: url("public/Images/TypingTest/Achievement.png");
      
    }
  }

  .content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.697);
    color: #bbb7b7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    gap: 10px;
    opacity: 0;
    transition: 0.6s;
  }
  .content h3{
    font-size: 36px;
  }
  .content p{
    font-size: 18px;
  }

  .content:hover{
    opacity: 1;
  }

  .content > *{
    transform: translateY(25px);
    transition: transform 0.6s;
  }
  .content:hover > *{
    transform: translate(0px);
  }

  .content .tool-used ul{
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    gap: 10px;
  }
  .content .tool-used ul li{
    background-color: #bbb7b7;
    color: #FFFFFF;
    padding: 5px;
    border-radius: 15px;
  }

  .content .button-used{
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

`;