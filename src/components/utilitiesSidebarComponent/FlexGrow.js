import React from "react"
import { Div, Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const paddingCode1 = `// Flex Grow
flexGrow="1"

// Responsive Flex Grow
flexGrow={{ xs: '1', sm: '4', md: '2', lg: '3', xl: '2' }}`

const FlexGrow = () => {
  return (
    <>
      <InfoCodeSidebar code={paddingCode1}>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          flexGrow is equivalent to <Tag>flex-grow</Tag>.
        </Text>
        <Div
          d="flex"
          flexDir={{ xs: "column", lg: "row" }}
          m={{ b: "1rem" }}
          bg="warning200"
          textColor="white"
        >
          <Div bg="info700" flexGrow="1" p={{ x: "0.5rem", y: "0.25rem" }}>
            flexGrow="1"
          </Div>
          <Div bg="warning700" flexGrow="2" p={{ x: "0.5rem", y: "0.25rem" }}>
            flexGrow="2"
          </Div>
        </Div>
        <Text textColor="medium" textSize="body">
          Note: flexGrow only works when display is <Tag>flex</Tag> of the outer
          component.
        </Text>
      </InfoCodeSidebar>
    </>
  )
}

export default FlexGrow
