import React from 'react'
import styled from 'styled-components'

function Projects() {
  return (
    <ProjectSection>
      <h1>Project Page</h1>
    </ProjectSection>
  )
}

export default Projects

const ProjectSection = styled.div`
  width: 100%;
  height: calc(100vh - 64.4px);
  display: grid;
  place-items: center;

`;