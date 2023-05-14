import { Formik, Form, Field } from "formik";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, FormControl, FormLabel, Textarea, Input} from "@chakra-ui/react";
import { newPost, updatePost } from "../../redux/posts/posts.actions";
import { useSelector } from "react-redux";
const MyForm = ({ onClose, id, post  }) => {
  const { posts } = useSelector((state)=> state.posts)
  let initialValues = {
    tittle: "",
    content: "",
    user: id
  };
  if (post) {
    initialValues = {
      tittle: post.tittle,
      content: post.content,
      user: post.user[0]
    };
  }
  const handleSubmit = (values) => {
    if (post) {
      console.log(values);
      updatePost(post, posts, values)
    } else {
      newPost(values)
    }
    onClose();
  };
  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="pink.100">
        <ModalHeader>{post? "¿Has metido la aleta? ¡No pasa nada!" : "Ábrete al Océano"} </ModalHeader>
        <ModalBody>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {() => (
              <Form>
                <FormControl isRequired>
                  <FormLabel>Título</FormLabel>
                  <Field name="tittle">
                    {({ field }) => <Input  resize="none" {...field} maxLength={20} bg="var(--bg)"/>}
                  </Field>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Descripción</FormLabel>
                  <Field name="content">
                    {({ field }) => <Textarea h={150} resize="none" {...field} maxLength={200} bg="var(--bg)"/>}
                  </Field>
                </FormControl>
                <Button type="submit" mt={4} bg="pink.300" _hover={{bg: "green", color: "white"}}>
                 {post? "Volver a liberar a Flipper" : "Liberar a Flipper"}
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} _hover={{bg: "red"}} >{post? "Falsa alarma" : "Abortar misión"}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default MyForm;
