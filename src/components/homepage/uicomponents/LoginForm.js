import React from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"

const LoginForm = () => (
  <Div
    d="flex"
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    w={{ xs: "100%", md: "19.5rem" }}
    maxW="100%"
    pos={{ xs: "static", md: "absolute" }}
    m={{ xs: "1rem", md: "0" }}
    right="0"
    top="0"
    rounded="xl"
    h={{ lg: "24rem" }}
    bg="white"
    shadow="4"
    p="2rem"
  >
    <Div flexGrow="1">
      <Text
        textAlign="center"
        textSize="title"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="500"
        fontFamily="secondary"
      >
        Login into your account
      </Text>
      <Text
        textColor="light"
        textSize="caption"
        m={{ b: "4rem" }}
        textAlign="center"
      >
        Don't have an account yet? <Anchor>Create New</Anchor>
      </Text>
      <Input
        type="email"
        p={{ x: "1rem" }}
        m={{ b: "1rem" }}
        placeholder="johndoe@gmail.com"
        rounded="circle"
        borderColor="gray400"
        focusBorderColor="info700"
        suffix={
          <Icon
            pos="absolute"
            name="Email"
            color="light"
            size="18px"
            top="50%"
            transform="translateY(-50%)"
            right="1rem"
          />
        }
      />
      <Input
        type="password"
        p={{ x: "1rem" }}
        m={{ b: "3rem" }}
        placeholder="Password"
        rounded="circle"
        borderColor="gray400"
        focusBorderColor="info700"
        suffix={
          <Icon
            pos="absolute"
            name="Eye"
            color="light"
            size="18px"
            top="50%"
            transform="translateY(-50%)"
            right="1rem"
          />
        }
      />
    </Div>
    <Button
      rounded="circle"
      h="3rem"
      bg="info200"
      hoverBg="info300"
      textColor="info700"
    >
      Login
    </Button>
  </Div>
)

export default LoginForm
