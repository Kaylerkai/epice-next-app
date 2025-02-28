/* eslint-disable */
import React from 'react';
import {
  Flex,
  Box, FormControl, FormLabel,
  Textarea, Button, useColorModeValue, useToast, Input as ChakraInput, FormErrorMessage
} from '@chakra-ui/react';
import Head from 'next/head'
import {
  AiOutlineUserDelete,
  AiOutlineMail,
  AiFillFileText,
} from 'react-icons/ai';
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputProps } from "../utils/types";
import { FormHeader } from '../components/';
const Contact: React.FC = () => {
  // const toast = useToast()

  type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Esse campo é obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Esse campo é obrigatório"),
    subject: yup
      .string()
      .required("Esse campo é obrigatório"),
    message: yup
      .string()
      .required("Esse campo é obrigatório"),
  })
  const [loading, setLoading] = React.useState<boolean>(false);
  // async function handleSubmit(event: React.FormEvent): Promise<void> {
  //   event.preventDefault();
  //   const data = {
  //     name,
  //     email,
  //     subject,
  //     message
  //   };
  //   if (name !== '' && email !== '' && subject !== '') {
  //     try {
  //       setLoading(true)
  //       await axios.post('/api/contact', data)
  //       toast({
  //         title: 'Enviado com sucesso!.',
  //         description: "Aguarde alguns dias para que possamos lhe ajudar.",
  //         status: 'success',
  //         duration: 9000,
  //         isClosable: true,
  //       })
  //     } catch (error: any) {
  //       toast({
  //         title: 'Não foi possível cadastrar.',
  //         description: error.message || error,
  //         status: 'error',
  //         duration: 5000,
  //         isClosable: true,
  //       })
  //     } finally {
  //       setLoading(false)
  //     }
  //   } else {
  //     toast({
  //       title: 'Não foi possível cadastrar.',
  //       description: "Certifique-se de que todos os campos estejam preenchidos.",
  //       status: 'error',
  //       duration: 5000,
  //       isClosable: true,
  //     })
  //   }
  // }
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });
  async function onSubmitHandler<SubmitHandler, FormValues>(data: FormValues): Promise<void> {
    console.log(data)
  };
  return (
    <React.Fragment key="key">
      <Head>
        <title>EPICE | Contato</title>
      </Head>
      <Flex
        id="anime"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
        mt={10}
      >
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmitHandler)}
          backgroundColor={useColorModeValue('#d0d8dd', '#0e0e10')}
          px={4}
          width="94%"
          maxWidth="500px"
          borderRadius="sm"
          textAlign="center"
        >
          <Box p={4}>
            <FormHeader
              heading="Contato"
              text="Detalhe o seu problema"
            />
            <Box my={8} textAlign="left">
              <FormControl id="nome" isInvalid={errors.name ? true : false}>
                <FormLabel>Nome:</FormLabel>
                <Input
                  type="text"
                  placeholder="Insira o seu nome"
                  {...register('name')}
                />
                <FormErrorMessage>
                  {errors.name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="email" mt={2} isInvalid={errors.email ? true : false}>
                <FormLabel>E-mail:</FormLabel>
                <Input
                  type="email"
                  placeholder="Insira o seu endereço de e-mail"
                  {...register('email')}
                />
                <FormErrorMessage>
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="descricao" mt={2} isInvalid={errors.subject ? true : false}>
                <FormLabel>Descrição:</FormLabel>
                <Input
                  type="text"
                  placeholder="Insira a sua descrição"
                  {...register('subject')}
                />
                <FormErrorMessage>
                  {errors.subject?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="text" mt={2} isInvalid={errors.message ? true : false}>
                <FormLabel>Texto:</FormLabel>
                <Textarea
                  placeholder="Coloque o seu texto aqui"
                  focusBorderColor="purple.500"
                  backgroundColor={useColorModeValue("white", "gray.800")}
                  border={0}
                  color={useColorModeValue("#18216d", "white")}
                  {...register('message')}
                />
                <FormErrorMessage>
                  {errors.message?.message}
                </FormErrorMessage>
              </FormControl>
              <ButtonSend />
            </Box>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};
const ButtonSend = () => {
  return (
    <Button
      type="submit"
      width="full"
      mt={4}
      outline="none"
      _hover={{ backgroundColor: 'purple.600' }}
      backgroundColor="purple.500"
    >
      Enviar
    </Button>
  );
};
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <ChakraInput
    ref={ref}
    type={props.type}
    focusBorderColor="purple.500"
    backgroundColor={useColorModeValue("white", "gray.800")}
    border={0}
    color={useColorModeValue("#18216d", "white")}
    _placeholder={{
      color: useColorModeValue("black", "white"),
    }}
    {...props}
  />
));
export default Contact;
