import React from "react"
import { Div, Text } from "atomize"

const ColorDiv = ({ colorName, shade = "" }) => {
  return (
    <Div m={{ r: "1rem" }} w="2rem" d="flex" flexDir="column" align="center">
      <Div
        bg={`${colorName}${shade}`}
        rounded="circle"
        h="2rem"
        w="2rem"
        m={{ b: "0.5rem" }}
      />
      <Text
        textSize="tiny"
        textAlign="center"
        textWeight="500"
        textColor="medium"
      >
        {colorName}
        <br />
        {shade}
      </Text>
    </Div>
  )
}

export default ColorDiv
