import React from "react"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const displayCode1 = `// Inline-block
d="inline-block"

// Flex
d="flex"

// None on Mobile, Flex on Desktop
d={{ xs: "none", md: "flex" }}

// Block on Mobile, Flex on Desktop
d={{ xs: "block", md: "flex" }}`

const Display = () => {
  return (
    <InfoCodeSidebar id="display" code={displayCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Display property can be given by using <Tag>{"d={value}"}</Tag>
      </Text>

      <Div
        d="inline-block"
        m={{ b: "1rem" }}
        bg="gray300"
        p={{ x: "1rem", y: "0.5rem" }}
      >
        inline-block
      </Div>
      <Div
        d="flex"
        m={{ b: "1rem" }}
        bg="gray300"
        p={{ x: "1rem", y: "0.5rem" }}
      >
        flex
      </Div>
      <Div
        m={{ b: "1rem" }}
        d={{ xs: "none", md: "flex" }}
        bg="gray300"
        p={{ x: "1rem", y: "0.5rem" }}
      >
        none on mobile, flex on desktop
      </Div>
      <Div
        m={{ b: "1rem" }}
        d={{ xs: "block", md: "flex" }}
        bg="gray300"
        p={{ x: "1rem", y: "0.5rem" }}
      >
        block on mobile, flex on desktop
      </Div>
    </InfoCodeSidebar>
  )
}

export default Display
