import { Button, Flex,FormControl, FormLabel, Input, Text,} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/users/users.actions";
import { useSelector } from "react-redux";
const Login = () => {
  const { error } = useSelector((state)=> state.users)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  return (
    <Flex justifyContent="center" marginTop={10} p={4}>
      <Flex
        flexDirection={"column"} gap={5} alignItems="center" justifyContent="center" boxShadow="2xl" p="6" rounded="md" borderRadius={15} bg="#ffe9e7"
      >
        <form onSubmit={handleSubmit((datos) => login(datos, navigate))}>
          <Flex flexDirection={"column"} gap={5} alignItems="center" justifyContent="center"
          >
            <FormControl isRequired>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input {...register("userName")} placeholder="nombre de usuario" bg="white"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input {...register("password")} type="password" placeholder="password" bg="white"
              />
              <Text color="red">{error}</Text>
            </FormControl>
            <Button type="submit" bg={"pink.200"}>Login</Button>
          </Flex>
        </form>
        <Flex>
          <Text fontSize={12}>¿No eres miembro?</Text>
          <Link to="/register">
            <Text marginLeft={1} fontSize={12} color={"pink.400"}>Regístrate aquí</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
