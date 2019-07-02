import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const borderCode1 = `// 1px solid
border="1px solid"
borderColor="black"

// 2px solid
border="2px solid"
borderColor="black"

// 1px dashed
border="1px dashed"
borderColor="black"

// 2px dashed
border="2px dashed"
borderColor="black"`

const Border = () => {
  return (
    <InfoCodeSidebar code={borderCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Border can be defined by using 2 properties - i.e.,{" "}
        <Tag>{"border={value}"}</Tag> & <Tag>{"borderColor={value}"}</Tag>.
      </Text>

      <Div w="100%" overflow="hidden">
        <Row>
          {["1px solid", "2px solid", "1px dashed", "2px dashed"].map(value => (
            <Col key={value}>
              <Div
                h="3rem"
                border={value}
                borderColor="black"
                m={{ b: "1rem" }}
              />
            </Col>
          ))}
        </Row>
      </Div>
    </InfoCodeSidebar>
  )
}

export default Border
