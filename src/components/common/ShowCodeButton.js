import React from "react"
import { Button } from "atomize"

const ShowCodeButton = ({ selectedValue, onClick, value }) => {
  return (
    <Button
      onClick={() => onClick(value)}
      pos="absolute"
      top="0"
      right="-2.5rem"
      p={{ x: "0.25rem" }}
      h="1.75rem"
      w="1.75rem"
      textSize="tiny"
      textColor={selectedValue === value ? "white" : "medium"}
      bg={selectedValue === value ? "info800" : "white"}
      hoverBg={!selectedValue && "gray500"}
      rounded="circle"
      shadow="3"
    >
      {"< >"}
    </Button>
  )
}

export default ShowCodeButton
