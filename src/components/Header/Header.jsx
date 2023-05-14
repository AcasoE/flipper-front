import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'
import Navbar from '../Nav-bar/Navbar'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <Flex width="100%" height={28} flex alignItems="center" justifyContent="space-between" bg= "var(--secondary)">
    <Box width="130px" height="100%" padding={3}>
    <Logo/>
    </Box>
    <Box padding={10}>
    <Navbar/>
    </Box>

    </Flex>
  )
}

export default Header