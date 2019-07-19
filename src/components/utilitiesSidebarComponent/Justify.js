import React from "react"
import { Div, Text, Tag, Row, Col } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const code = `// center
justify="center"

// flex-start
justify="flex-start"

// flex-end
justify="flex-end"

// space-between
justify="space-between"

// space-around
justify="space-around"

// space-around on mobile, center on large device
justify={{ xs: "space-around", lg: "center" }}
`

const Justify = () => {
  return (
    <InfoCodeSidebar code={code}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        It is equivalent to justify-content of css. justify property can be
        given by using <Tag>{"justify={value}"}</Tag>.
      </Text>

      <Div
        d="flex"
        justify="space-between"
        m={{ b: "1rem" }}
        bg="gray300"
        p={{ x: "1rem", y: "2rem" }}
      >
        <Div h="2rem" w="3rem" bg="info700" />
        <Div h="2rem" w="3rem" bg="info700" />
      </Div>
      <Text textColor="medium" textSize="body">
        Note: justify only works when display is <Tag>flex</Tag>
      </Text>
    </InfoCodeSidebar>
  )
}

export default Justify
