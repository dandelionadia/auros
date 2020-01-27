import React from 'react'
import { Box } from 'atomic-layout'
import { IoIosSearch, IoMdPerson, IoMdCart } from 'react-icons/io'

export const Bar: React.FC = () => {
  return (
    <>
      <IoIosSearch size="22" />
      <Box marginHorizontal="20px">
        <IoMdPerson size="22" />
      </Box>
      <IoMdCart size="22" />
    </>
  )
}
