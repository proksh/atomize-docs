import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const transformCode1 = `// Responsive Transform
transform={{ xs: 'translateY(50%)', md: 'translateY(0)' }}

// Translate
transform='translate(50%, 50%)'

// Scale
transform='scale(1.3, 1)'

// Skew
transform='skew(1.1, 1.5)'`

const Transform = () => {
  return (
    <InfoCodeSidebar code={transformCode1}>
      <Text m={{ b: "1rem" }} textColor="medium" textSize="body">
        Transform can be defined by <Tag>{"transform={value}"}</Tag>
      </Text>
      {/* <Div bg="warning700" p={{ y: "2rem" }}>
        <Div
          bg="info700"
          h="2rem"
          w="2rem"
          transform="translateY(50%)translateX(-1rem)scale(1.2)"
        />
      </Div> */}
    </InfoCodeSidebar>
  )
}

export default Transform
