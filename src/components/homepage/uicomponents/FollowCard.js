import React from "react"

import girl from "../../../images/avatar/girl.png"

import { Button, Text, Div, Icon } from "atomize"

const FollowCard = ({ ...rest }) => (
  <Div
    flexDir="column"
    h="17rem"
    bg="white"
    left={{ md: "2rem", lg: "-1.5rem" }}
    w={{ xs: "100%", md: "18rem" }}
    top="6rem"
    rounded="lg"
    shadow="2"
    p={{
      x: { xs: "2rem", sm: "1.5rem" },
      b: { xs: "2rem", sm: "1.5rem" },
      t: "2.5rem",
    }}
    {...rest}
  >
    <Div flexGrow="1" d="flex" justify="center" align="center" flexDir="column">
      <Div
        h="3.5rem"
        w="3.5rem"
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
      <Text textSize="subheader" textWeight="500" textAlign="center">
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
        maxW="calc(50% - 4px)"
        rounded="circle"
        m={{ r: "0.5rem" }}
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
        maxW="calc(50% - 4px)"
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
  maxW: "calc(100% - 2rem)",
}

export default FollowCard
