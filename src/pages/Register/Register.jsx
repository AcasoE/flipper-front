import { Button, Flex,FormControl, FormLabel, Image, Input, Text,} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css"
import { registerUser } from "../../redux/users/users.actions";
import { useNavigate } from "react-router-dom";
const Register = ({user}) => {
  const [currentImage, setcurrentImage ] = useState()
  let defaultValues = {
    userName: "",
    name: "",
    password: "",
    image: "",
  };
  useEffect(()=>{
    if (user) {
      defaultValues = {
        userName: user.userName,
        name: user.name,
        password: "",
        image: user.image,
      };
      setcurrentImage(user.image)
    }
  },[user])
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues
  });
  
  const onSubmit= (datos)=>{
    registerUser(datos, navigate)
  }

  const navigate = useNavigate()
  return (
    <Flex justifyContent="center" marginTop={10} >
      <Flex
        flexDirection={"column"} gap={5} alignItems="center" justifyContent="center" boxShadow="2xl" p="6" rounded="md" borderRadius={15} bg="#ffe9e7"
      >
        <form onSubmit={handleSubmit((datos) => onSubmit(datos) )}>
          <Flex flexDirection={"column"} gap={7} alignItems="center" justifyContent="center" paddingLeft={10} paddingRight={10}
          >
            <FormControl isRequired >
              <FormLabel>Nombre de usuario</FormLabel>
              <Input {...register("userName")} placeholder="nombre de usuario" bg="white"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Nombre completo</FormLabel>
              <Input {...register("name")} placeholder="nombre completo" bg="white"
              />
            </FormControl>
            {!user &&
              <FormControl  isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input {...register("password")} type="password" placeholder="password" bg="white"
              />
            </FormControl>
            }
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} type="email" placeholder="email" bg="white"
              />
            </FormControl>
            <FormControl isRequired>
            <input {...register("image")} type="file"/>
            </FormControl>
            <Button type="submit" bg={"pink.200"}>Registro</Button>
          </Flex>
        </form>
      </Flex>
      {user && 
        <Image boxSize={200} src={currentImage}></Image>}    
    </Flex>
  )
}

export default Register