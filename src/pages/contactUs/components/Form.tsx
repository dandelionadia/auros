import React from 'react'
import styled from 'styled-components'
import { Composition, Box, query } from 'atomic-layout'

import { Label } from '../atoms/Label'

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

const StyledSubscribe = styled.span`
  color: ${({ theme }) => theme.colors.blackLight};
  margin-left: 5px;
`

const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
`

export const Form: React.FC = () => {
  return (
    <Composition gapXs={2} gapLg={5} marginLeftSmDown="20px">
      <Box>
        <Label htmlFor="name">Your Name:</Label>
        <StyledInput
          id="name"
          type="name"
          name="name"
          placeholder="Ex: John Doe"
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
          required
        />
      </Box>
      <Box>
        <Label htmlFor="story">Message</Label>
        <StyledTextarea id="story" name="story">
          Enter text here...
        </StyledTextarea>
      </Box>
      <Box as={ContainerCheckbox}>
        <input type="checkbox" id="myCheck" />
        <StyledSubscribe id="text">Also Subscribe Us</StyledSubscribe>
      </Box>
    </Composition>
  )
}
