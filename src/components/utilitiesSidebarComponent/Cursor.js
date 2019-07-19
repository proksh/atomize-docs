import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const cursorCode1 = `// not-allowed
cursor="not-allowed"

// pointer
cursor="pointer"

// crosshair
cursor="crosshair"`

const Cursor = () => {
  return (
    <InfoCodeSidebar id="cursor" code={cursorCode1}>
      <Text m={{ b: "3rem" }} textColor="medium" textSize="body">
        Cursor can be defined by <Tag>{"cursor={value}"}</Tag>
      </Text>
      <Div cursor="not-allowed" p={"1.5rem"} bg="gray400" m={{ b: "1rem" }}>
        not-allowed
      </Div>
      <Div cursor="pointer" p={"1.5rem"} bg="success400" m={{ b: "1rem" }}>
        pointer
      </Div>
      <Div cursor="crosshair" p={"1.5rem"} bg="warning400">
        crosshair
      </Div>
    </InfoCodeSidebar>
  )
}

export default Cursor
