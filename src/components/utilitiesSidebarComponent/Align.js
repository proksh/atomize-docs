import React from "react"
import { Div, Text, Tag, Row, Col } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const displayCode1 = `// center
align="center"

// flex-start
align="flex-start"

// flex-end
align="flex-end"

// space-between
align="space-between"

// space-around
align="space-around"

// space-around on mobile, center on large device
align={{ xs: "space-around", lg: "center" }}
`

const Align = () => {
  return (
    <InfoCodeSidebar code={displayCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        It is equivalent to align-items of css. Align property can be given by
        using <Tag>{"align={value}"}</Tag>.
      </Text>

      <Div
        d="flex"
        align="center"
        justify="space-around"
        m={{ b: "1rem" }}
        bg="gray300"
        p={{ x: "1rem", y: "2rem" }}
      >
        <Div h="2rem" w="3rem" bg="info700" />
        <Div h="4rem" w="3rem" bg="info700" />
        <Div h="3rem" w="3rem" bg="info700" />
      </Div>
      <Text textColor="medium" textSize="body">
        Note: Align only works when display is <Tag>flex</Tag>
      </Text>
    </InfoCodeSidebar>
  )
}

export default Align
