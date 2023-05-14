import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/users/users.actions'

const Navbar = () => {
  const { user } = useSelector((state)=> state.users)
  const navigate = useNavigate()
  return (
    <Flex alignItems="center" gap={10} >
      <Link to="/">Home</Link>
      {user? 
      <>
      <Link to="/profile">Perfil</Link>
      <Button size="xs" bgColor="pink.100"  onClick={()=>logout(navigate)}>Logout</Button>
      </>
      :
      <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
 }

    </Flex>
  )
}

export default Navbar
