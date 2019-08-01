import React from "react"

import { Text, Div, Icon } from "atomize"

const Notification = ({ ...rest }) => (
  <Div
    d={{ xs: "none", md: "flex" }}
    align="center"
    justify="space-between"
    border="1px solid"
    borderColor="gray200"
    pos="absolute"
    bg="white"
    w="18.5rem"
    right={{ md: "2.5rem", lg: "1rem" }}
    top={{ xs: "-1.5rem", md: "-2rem" }}
    rounded="lg"
    shadow="2"
    p="1rem"
  >
    <Div d="flex" align="center">
      <Icon
        name="AlertSolid"
        color="warning700"
        size="18px"
        m={{ r: "1rem" }}
      />
      <Text textWeight="500">Notification Message</Text>
    </Div>
    <Icon name="Cross" color="black" size="18px" cursor="pointer" />
  </Div>
)

Notification.defaultProps = {
  pos: { xs: "static", md: "absolute" },
  m: { xs: "1rem", md: "0" },
  d: { xs: "none", lg: "flex" },
}

export default Notification
