import React from "react"

import girl from "../../../images/avatar/girl.png"

import { Button, Text, Div, Icon } from "atomize"

const FollowCard = ({ ...rest }) => (
  <Div
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    h="19.5rem"
    bg="white"
    left={{ md: "2rem", lg: "0" }}
    w={{ xs: "100%", md: "19.5rem" }}
    top="4.5rem"
    rounded="xl"
    shadow="4"
    p={{
      x: { xs: "2rem", sm: "1.5rem" },
      b: { xs: "2rem", sm: "1.5rem" },
      t: "1.5rem",
    }}
    {...rest}
  >
    <Div flexGrow="1" d="flex" justify="center" align="center" flexDir="column">
      <Div
        h="4.5rem"
        w="4.5rem"
        bg="gray300"
        rounded="circle"
        pos="relative"
        bgImg={girl}
        bgSize="cover"
        bgPos="center"
        m={{ b: "1rem" }}
      >
        <Div
          pos="absolute"
          rounded="circle"
          right="0.25rem"
          bottom="0.25rem"
          bg="white"
          shadow="2"
          h="0.5rem"
          w="0.5rem"
          p="1px"
        >
          <Div bg="success800" rounded="circle" h="6px" w="6px" />
        </Div>
      </Div>
      <Text
        textSize="title"
        m={{ b: "0.25rem" }}
        textWeight="500"
        textAlign="center"
      >
        Meagan Fisher
      </Text>
      <Text
        textSize="caption"
        textColor="light"
        m={{ b: "2.5rem" }}
        textAlign="center"
      >
        Engineering Manager
      </Text>
    </Div>
    <Div d="flex" w="100%">
      <Button
        bg="info700"
        hoverBg="info800"
        justify="space-between"
        flexGrow="1"
        maxW="calc(50% - 0.5rem)"
        rounded="circle"
        m={{ r: "1rem" }}
        suffix={<Icon name="Plus" size="18px" color="white" />}
      >
        Follow
      </Button>
      <Button
        bg="white"
        hoverBg="gray100"
        border="1px solid"
        borderColor="gray500"
        textColor="medium"
        justify="space-between"
        flexGrow="1"
        maxW="calc(50% - 0.5rem)"
        rounded="circle"
        suffix={<Icon name="Message" size="18px" color="black400" />}
      >
        Message
      </Button>
    </Div>
  </Div>
)

FollowCard.defaultProps = {
  m: { xs: "1rem", md: "0" },
  pos: { xs: "static", md: "absolute" },
  d: "flex",
  maxW: "100%",
}

export default FollowCard
