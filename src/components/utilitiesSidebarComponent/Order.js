import React from "react"
import { Div, Text, Tag, Row, Col } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const code = `// responsive order
order={{ xs: 4, md: 1 }}

// values in order
order={1}
order={3}

// Above Example
<Div
    d="flex"
    justify="space-between"
    bg="gray300"
    p={{ x: "1rem", y: "2rem" }}
>
    <Div p="1rem" bg="info700" textColor="white" order={{ xs: 4, md: 1 }}>
        1
    </Div>
    <Div p="1rem" bg="info700" textColor="white" order={{ xs: 3, md: 4 }}>
        2
    </Div>
    <Div p="1rem" bg="info700" textColor="white" order={{ xs: 2, md: 3 }}>
        3
    </Div>
    <Div p="1rem" bg="info700" textColor="white" order={{ xs: 1, md: 2 }}>
        4
    </Div>
</Div>`

const Justify = () => {
  return (
    <InfoCodeSidebar code={code}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Flex Order can be given to change the sequence of the elements by{" "}
        <Tag>{"order={value}"}</Tag>.
      </Text>

      <Div
        d="flex"
        justify="space-between"
        m={{ b: "1rem" }}
        bg="gray300"
        p={{ x: "1rem", y: "2rem" }}
      >
        <Div p="1rem" bg="info700" textColor="white" order={{ xs: 4, md: 1 }}>
          1
        </Div>
        <Div p="1rem" bg="info700" textColor="white" order={{ xs: 3, md: 4 }}>
          2
        </Div>
        <Div p="1rem" bg="info700" textColor="white" order={{ xs: 2, md: 3 }}>
          3
        </Div>
        <Div p="1rem" bg="info700" textColor="white" order={{ xs: 1, md: 2 }}>
          4
        </Div>
      </Div>
      <Text textColor="medium" textSize="body">
        Note: order only works when display is <Tag>flex</Tag>
      </Text>
    </InfoCodeSidebar>
  )
}

export default Justify
