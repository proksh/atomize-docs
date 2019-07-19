import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const positionCode1 = `// Responsive
pos={{ xs: 'fixed', lg: 'static' }}

// Static
pos="static"

// Relative
pos="relative"

// Absolute
pos="absolute"
top="0"
right="0"

// Fixed
pos="fixed"
top="50%"
left="5rem"`

const Position = () => {
  return (
    <InfoCodeSidebar id="position" code={positionCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
        Position of the elements can be given by <Tag>{"pos={value}"}</Tag>.
        top, left, right, bottom can also be given with appropriate pos.
      </Text>
      <Div m={{ b: "2.5rem" }} h="5rem" pos="relative" bg="warning300">
        <Div
          pos="absolute"
          bottom="0"
          right="0"
          h="2rem"
          w="2rem"
          bg="warning700"
        />
      </Div>
    </InfoCodeSidebar>
  )
}

export default Position
