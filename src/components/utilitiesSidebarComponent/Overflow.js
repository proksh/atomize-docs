import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const cursorCode1 = `// Directional
overflow="visible scroll"

// scroll
overflow="scroll"

// hidden
overflow="hidden"

// visible
overflow="visible"

// auto
overflow="auto"`

const Overflow = () => {
  return (
    <InfoCodeSidebar id="cursor" code={cursorCode1}>
      <Text m={{ b: "3rem" }} textColor="medium" textSize="body">
        Overflow can be defined by <Tag>{"overflow={value}"}</Tag>
      </Text>
    </InfoCodeSidebar>
  )
}

export default Overflow
