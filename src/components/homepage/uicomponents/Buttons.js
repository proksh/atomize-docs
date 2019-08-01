import React from "react"

import { Button, Div, Icon } from "atomize"

const Buttons = () => (
  <Div
    d="flex"
    justify="center"
    pos="absolute"
    w={{ xs: "100%", md: "auto" }}
    m={{ xs: "1rem", md: "0" }}
    pos={{ xs: "static", md: "absolute" }}
    left={{ md: "2rem", lg: "0" }}
    top="0"
  >
    {[
      { icon: "HeartSolid", color: "danger700" },
      { icon: "Eye", color: "info700" },
      { icon: "EditSolid", color: "warning700" },
      { icon: "Attachment", color: "success700" },
      { icon: "Play", color: "danger700" },
      { icon: "Download", color: "info700" },
    ].map((button, index) => (
      <Button
        border="1px solid"
        borderColor="gray200"
        h="2.5rem"
        w="2.5rem"
        bg="white"
        shadow="2"
        hoverShadow="4"
        rounded="circle"
        m={index !== 5 && { r: "14px" }}
      >
        <Icon name={button.icon} color={button.color} size="18px" />
      </Button>
    ))}
  </Div>
)

export default Buttons
