import { Flex, Image, Text, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  getTimeAgo } from "./actions/Flipp-actions";
import { deletePost} from "../../redux/posts/posts.actions";
import PostModal from "../PostModal/PostModal";
const Flipp = ({ post, isEditMode }) => {
  const [user, setUser] = useState(null);
  const { users } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    const currentUser = users.filter((user) => user.id === post.user[0]);
    setUser(currentUser[0]);
  }, [users]);
  return (
    <Flex  w={400} alignItems="flex-start" boxShadow="dark-lg" p="4" rounded="md" bg="var(--terciary)" flexDirection="column" >
      {user && (
        <>
          <Flex gap={4}>
            <Flex alignItems="center" h="100%">
              <Image src={user.image} alt={user.userName} boxSize={50} objectFit="cover" borderRadius="full" />
            </Flex>
            <Flex flexDirection="column">
              <Flex flexWrap="wrap" alignItems="center">
                <Text  fontWeight="bold">{post.tittle}</Text>
                <Text>@{user.userName}</Text>
                <Text marginLeft={1} fontSize={12}>
                  ·{getTimeAgo(post.createdAt)}
                </Text>
              </Flex>
              <Flex>
              <Box maxW={300} whiteSpace="pre-wrap">
                  {post.content}
                </Box>
              </Flex>
            </Flex>
          </Flex>
          {isEditMode && (
            <Flex justifyContent="right" width="100%" gap={4}>
            <PostModal isEditMode user={user} size={"xs"} post={post}></PostModal>
              <Button size="xs" bg="red.200" onClick={() => deletePost(post, posts)}>
                Borrar
              </Button>
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
};
export default Flipp;
