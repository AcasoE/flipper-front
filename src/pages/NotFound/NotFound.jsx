import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Flex flexDirection="column" alignItems="center" textAlign="center">
    <Text fontSize={[30, 40, 60]}>Ups!</Text>
    <Image src='assets/images/tiburon.gif'
        w={[300, 450, 650]}
        borderRadius="20"
    />
      <Text fontSize={[30, 40, 60]}>Hay partes del océano que es mejor no explorar!</Text>
      <Text fontSize={[30, 40, 60]}>Pulsa en el SalvaFlippers para volver a la zona segura!</Text>
      <Link to={"/"}>
        <Image boxSize={[100, 200, 400]} borderRadius={"100%"} border="solid" borderColor="red" src="assets/images/flotador.jpg"></Image>
      </Link>
    </Flex>
      
  )
}

export default NotFound
