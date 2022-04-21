import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import NextLink from "next/link"
import { FaHome } from 'react-icons/fa'
import { VStack, Stack, Button, Heading, Text, Center, Img as Image, Box, Flex } from '@chakra-ui/react'

const PageNotFound: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/img/logo.png" />
        <title>404 | Tudo na vida tem um limite...</title>
      </Head>
      <Flex id="anime" flexDirection="column" minHeight="100vh" width="full" align="center" justifyContent="center">
        <Box
          px={4}
          width="94%"
          maxWidth="900px"
          borderRadius="sm"
          textAlign="center"
          mt={10}
        >
          <Box p={4}>
            <Center as="picture">
              <Image
                w="full"
                rounded="lg"
                maxW="400px"
                loading="lazy"
                src="/img/svg/undraw_warning_cyit.svg"
                alt="Hellonext feedback boards software screenshot"
              />
            </Center>
            <VStack justify="center" spacing="4" textAlign="center" as="article">
              <Heading>404 | Página não disponível</Heading>
              <Text fontSize={{ md: "xl" }}>
                Ops! Parece que você seguiu um link incorreto. Se você acha que isso é um problema para nós, diga-nos
              </Text>
              <Stack
                mt="10"
                spacing="4"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <NextLink href="/" passHref>
                  <Button
                    as="a"
                    aria-label="Voltar à tela inicial"
                    leftIcon={<FaHome />}
                    colorScheme="teal"
                    size="lg"
                  >
                    Voltar à tela inicial
                  </Button>
                </NextLink>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default PageNotFound;