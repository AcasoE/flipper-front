/* import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const EditFormProfile = () => {
  const [changeImage, setchangeImage] = useState(false);
  const { user } = useSelector((state) => state.users);
  const { register, handleSubmit } = useForm();


  return (
    <>
      <Image boxSize={150} src={user.image}></Image>
      <Button onClick={() => setchangeImage(true)}>Cambiar imagen</Button>
        <Form >
          {changeImage && (
            <FormControl>
              <FormLabel>image</FormLabel>

              <Field name="image">
                {({ field, form }) => (
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      form.setFieldValue(
                        field.image,
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                )}
              </Field>
            </FormControl>
          )}

          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Field name="name">
              {({ field }) => (
                <Input resize="none" {...field} maxLength={20} bg="var(--bg)" />
              )}
            </Field>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Nombre de usuario</FormLabel>
            <Field name="userName">
              {({ field }) => (
                <Input resize="none" {...field} maxLength={20} bg="var(--bg)" />
              )}
            </Field>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>email</FormLabel>
            <Field name="email">
              {({ field }) => (
                <Input resize="none" {...field} maxLength={20} bg="var(--bg)" />
              )}
            </Field>
          </FormControl>
          <Flex>
            <Button>Editar</Button>
            <Button type="onSubmit" onClick={() => setchangeImage(false)}>
              Guardar
            </Button>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default EditFormProfile;
 */