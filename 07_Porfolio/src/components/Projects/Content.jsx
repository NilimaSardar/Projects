import React from 'react'
import styled from 'styled-components'
import Button from '../Home/Button';

function Content({heading, paragraph, items=[]}) {
  return (
    <ContentSection>
        <div className='image'></div>
        <div className='content'>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
            <div className='tool-used'>
                <ul>
                    {items.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='button-used'>
                <Button text='VIEW LIVE' color='color'/>
                <Button text='GITHUB' color='color'/>
            </div>
        </div>
    </ContentSection>
  )
}

export default Content

const ContentSection = styled.div`
    width: 70%;
    height: auto;
    position: relative;
    margin: 30px 0;
  
  .image{
    border-radius: 20px;
    width: 100%;
    height: 400px;
    background-image: url("public/Login.png");
    background-size: 100% 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    filter: grayscale(25%);
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