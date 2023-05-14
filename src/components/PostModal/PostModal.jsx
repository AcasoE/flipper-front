import React, { useState } from "react";
import MyForm from "../../components/PostForm/MyForm";
import { Box, Button } from "@chakra-ui/react";
const PostModal = ({user, isEditMode, size, post}) => {
const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        size={size}
        onClick={()=>{ handleOpenModal()}}
        bg="pink.100"

        _hover={{ bg: "pink.500", color: "white" }}
      >
       {isEditMode? "Editar" : "Flippear"}
      </Button>
      {showModal && <MyForm post={post} id={user._id} onClose={handleCloseModal} isEditMode/>}
    </>
  );
};

export default PostModal;
