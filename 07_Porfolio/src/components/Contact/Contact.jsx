import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <ContactSection>
      <h1>Contact Page</h1>
    </ContactSection>
  )
}

export default Contact


const ContactSection = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  place-items: center;
`;