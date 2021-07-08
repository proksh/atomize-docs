import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const paddingCode1 = `// Row
flexDir="row"

// Column
flexDir="column"

// Column in mobile, Row in large device
flexDir={{ xs: 'column', lg: 'row' }}`

const FlexDir = () => {
  return (
    <>
      <InfoCodeSidebar code={paddingCode1}>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Flex Direction is equivalent to <Tag>flex-direction</Tag>.
        </Text>
        <Div
          d="flex"
          flexDir={{ xs: "column", lg: "row" }}
          m={{ b: "1rem" }}
          bg="warning200"
        >
          <Div h="2rem" w="2rem" m="1rem" bg="warning700" />
          <Div h="2rem" w="2rem" m="1rem" bg="warning700" />
        </Div>
        <Text textColor="medium" textSize="body">
          Note: Align only works when display is <Tag>flex</Tag>
        </Text>
      </InfoCodeSidebar>
    </>
  )
}

export default FlexDir;
