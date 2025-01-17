import React from 'react'
import styled from 'styled-components'

function Projects() {
  return (
    <ProjectSection>
      <h1>Project Page</h1>
      <div className='project-sections'>
        <div className='project-section'>
          <h2>Project 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            In necessitatibus incidunt atque ea dolorem. Doloremque nihil,
            velit culpa blanditiis magni cum molestias alias deleniti quas
            dignissimos dolores! Numquam facilis quidem dolores at culpa ex,
            exercitationem quae hic blanditiis asperiores commodi suscipit
            reprehenderit quas fuga reiciendis in explicabo laudantium eveniet
            quisquam.</p>
            <div className='image-section'>
              <img src="https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
            </div>
        </div>
      </div>
      <div className='project-sections'>
        <div className='project-section'>
          <h2>Project 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            In necessitatibus incidunt atque ea dolorem. Doloremque nihil,
            velit culpa blanditiis magni cum molestias alias deleniti quas
            dignissimos dolores! Numquam facilis quidem dolores at culpa ex,
            exercitationem quae hic blanditiis asperiores commodi suscipit
            reprehenderit quas fuga reiciendis in explicabo laudantium eveniet
            quisquam.</p>
            <div className='image-section'>
              <img src="https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
            </div>
        </div>
      </div>
      <div className='project-sections'>
        <div className='project-section'>
          <h2>Project 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            In necessitatibus incidunt atque ea dolorem. Doloremque nihil,
            velit culpa blanditiis magni cum molestias alias deleniti quas
            dignissimos dolores! Numquam facilis quidem dolores at culpa ex,
            exercitationem quae hic blanditiis asperiores commodi suscipit
            reprehenderit quas fuga reiciendis in explicabo laudantium eveniet
            quisquam.</p>
            <div className='image-section'>
              <img src="https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
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

  .project-sections{
    padding: 40px 100px;
  }
  .project-section .image-section{
    width: 80%;
    height: 350px;
    display: flex;
    padding: 10px 70px;

  }
  .project-section img{
    width: 100%;
    height: 100%;
  }

`;