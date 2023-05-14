import React from 'react'
import { Navigate } from 'react-router-dom'

const Auth = ({children, user}) => {

  if(!user || user === "No estás autorizado"){
    return <Navigate to="/login"/>
  } 
  
    return children 
}

export default Auth
