import { Box, Button, Flex, Image, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { filterUserPosts } from "../../redux/posts/posts.actions";
import Flipp from "../../components/Flipp/Flipp";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { posts, userPosts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate()
  
  useEffect(() => {
    if (posts && user != null) {
      filterUserPosts(posts, user);
    }
  }, [user, posts]);
  return (
    <Flex >
      {user != null && (
        <Flex justifyContent="space-between" w="100%"  flexDirection={{base:"column", lg: "row"}}>
          <Flex flexDirection="column" m={[2, 4, 6]} gap={10}  alignItems="center">
            <Image src={user.image}  borderRadius={20} w={[220, 300, 400]} h={[150, 200, 250]} ></Image>
            <Flex flexDirection="column" p={10} gap={5} alignItems="center" textAlign="center" bg="pink.100" borderRadius={10}>
             <Flex flexDirection="column" w={150}>
             <Text as="b" fontFamily="sans-serif">Nombre</Text>
              <Text as="i">{user.name}</Text>
             </Flex>
             <Flex  flexDirection="column">
             <Text as="b" fontFamily="sans-serif" flexGrow={1}>Nombre de usuario</Text>
              <Text>{user.userName}</Text>
             </Flex>
            <Flex  flexDirection="column">
            <Text as="b" fontFamily="sans-serif">Email</Text>
              <Text>{user.email}</Text>
            </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            gap={10}
            marginTop={10}
            width={"80%"}
            alignItems="center"
          >
            {userPosts.length > 0 &&
              userPosts.map((post) => {
                return (
                  <Box key={post._id}>
                    <Flipp post={post} isEditMode></Flipp>
                  </Box>
                );
              })}
              {userPosts.length < 1 &&
              <>
              <Box boxSize={400}>
              <Logo></Logo>
              </Box>
              <Text>¿Todavía no has flipppeado nada?</Text>
              <Text>¡Hay mucho océano que explorar!</Text>
              <Button onClick={()=>navigate("/")}>Empecemos</Button>
              </>} 
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default Profile;
