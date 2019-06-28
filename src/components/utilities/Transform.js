import React from "react"
import { Div, Text, Tag } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const transformCode1 = `// Transforming the inner Div
<Div bg="warning700" p={{ y: "2rem" }}>
  <Div
    transform="translateY(50%)translateX(-1rem)scale(1.2)"
    bg="info700"
    h="2rem"
    w="2rem"
  />
</Div>
`

const Transform = () => {
  return (
    <InfoCodeRow id="transform" code={transformCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Transform
      </Text>
      <Text m={{ b: "3rem" }} textColor="medium" textSize="body">
        Transform can be defined by <Tag>{"transform={value}"}</Tag>
      </Text>
      <Div bg="warning700" p={{ y: "2rem" }}>
        <Div
          bg="info700"
          h="2rem"
          w="2rem"
          transform="translateY(50%)translateX(-1rem)scale(1.2)"
        />
      </Div>
    </InfoCodeRow>
  )
}

export default Transform
