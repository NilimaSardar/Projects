import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <AboutSection>
      <h1>About Page</h1>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.div`
  width: 100%;
  height: calc(100vh - 64.4px);
  display: grid;
  place-items: center;

`;