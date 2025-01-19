import React from 'react'
import styled from 'styled-components'
import Content from './Content';

function Projects() {
  return (
    <ProjectSection>
      <h1>Here's my Projects</h1>
      <Content heading='TypingTest' paragraph='A web based application to evaluate typing speed and accuracy.'  items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}/>
      <Content heading='Pet Store' paragraph='An onlne platform for managing pet,pet products and their accessories.'  items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}/>
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

`;