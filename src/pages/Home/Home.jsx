import { Box, Flex, Button, Text, color, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Flipp from "../../components/Flipp/Flipp";
import PostModal from "../../components/PostModal/PostModal"
import {  filterPostsByUser } from "../../redux/posts/posts.actions";
const Home = () => {
  const { posts, filteredPosts } = useSelector((state) => state.posts);
  const { user, users} = useSelector((state) => state.users);
  useEffect(()=>{
    filterPostsByUser(posts, "", users)
  },[posts, users])
  return (
    <Flex justifyContent="center" gap={10} marginTop={10}  alignItems="flex-start" paddingBottom={20} >
    {user && (
        <Flex flexDirection="column" alignItems="center"  >
        <PostModal user={user}/>
        </Flex>
      )}
      <Flex flexDirection="column" gap={10}>
        {filteredPosts.length > 0 ?

          filteredPosts.map((post) => {
            return (
              <Box key={post._id} >
                <Flipp post={post}></Flipp>
              </Box>)})
              : (<Text>No hay ningún Flipper con esas características por nuestro océano</Text>)}
      </Flex>
      <Flex>
      <Flex flexWrap="wrap" flexDirection="row">
      <Text>
      ¿No das con el Flipper deseado?
      <Input placeholder="Busca al Flipper perdido" onChange={(e)=>filterPostsByUser(posts,  e.target.value, users)}></Input>

      </Text>

      </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
