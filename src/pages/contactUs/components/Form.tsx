import React, { useState } from 'react'
import styled from 'styled-components'
import { Composition, Box } from 'atomic-layout'
import { GoogleApiWrapper } from 'google-maps-react'

import { Label } from '../atoms/Label'
import { Button } from '../../../atoms/Button'

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.01);
  border-style: solid;
  border-width: 0 0 1px;
  border-color: ${({ theme }) => theme.colors.blackLight};
  padding: 15px 0 10px;
  width: 100%;
`

const StyledTextarea = styled.textarea`
  color: ${({ theme }) => theme.colors.grey};
  background-color: rgba(255, 255, 255, 0.01);
  border-style: solid;
  border-width: 0 0 1px;
  border-color: ${({ theme }) => theme.colors.blackLight};
  padding: 15px 0;
  width: 100%;
  height: 120px;
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blackLight};
  border: 2px solid ${({ theme }) => theme.colors.blackLight};
  font-size: 14px;
  margin: 30px 0;
  padding: 18px 28px;
  max-width: max-content;

  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blackLight};
    border: 2px solid ${({ theme }) => theme.colors.blackLight};
  }
`

const StyledSubscribe = styled.span`
  color: ${({ theme }) => theme.colors.blackLight};
  margin-left: 5px;
`

const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
`

export const Form: React.FC = () => {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNameChange = (event: any) => {
    setNameValue(event.target.value)
  }

  const handleEmailChange = (event: any) => {
    setEmailValue(event.target.value)
  }

  const handleMessageChange = (event: any) => {
    setMessageValue(event.target.value)
  }

  const handleSubscribedChange = (event: any) => {
    setSubscribed(event.target.checked)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const values = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
      subscribed,
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Composition gapXs={2} gapLg={5} marginLeftSmDown="20px">
        <Box>
          <Label htmlFor="name">Your Name:</Label>
          <StyledInput
            id="name"
            type="name"
            name="name"
            placeholder="Ex: John Doe"
            value={nameValue}
            onChange={handleNameChange}
            required
          />
        </Box>
        <Box>
          <Label htmlFor="email">E-Mail:</Label>
          <StyledInput
            id="email"
            type="email"
            name="email"
            placeholder="Ex: John_Doe@domain.com"
            value={emailValue}
            onChange={handleEmailChange}
            required
          />
        </Box>
        <Box>
          <Label htmlFor="message">Message</Label>
          <StyledTextarea
            id="message"
            name="message"
            placeholder="Enter text here..."
            value={messageValue}
            onChange={handleMessageChange}
          />
        </Box>
        <Box as={ContainerCheckbox}>
          <input
            type="checkbox"
            name="subscribe"
            checked={subscribed}
            onChange={handleSubscribedChange}
          />
          <StyledSubscribe>Also Subscribe Us</StyledSubscribe>
        </Box>
        <StyledButton>Send Message</StyledButton>
      </Composition>
    </form>
  )
}
