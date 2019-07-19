import React from "react"
import { Div, Text, Tag, Row, Col } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// Contain
bgSize="contain"
bgRepeat="no-repeat"

// Cover
bgSize="cover"

// Auto
bgSize="auto"`

const BackgroundSize = () => {
  return (
    <InfoCodeSidebar code={backgroundCode} pt="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        bgPos can be specified along with bgImg as <Tag>{"bgPos={value}"}</Tag>
      </Text>
      <Div w="100%" overflow="hidden">
        <Row>
          {["contain", "cover", "auto"].map(value => (
            <Col key={value}>
              <Div
                bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
                bgPos="center"
                bgSize={value}
                bgRepeat="no-repeat"
                h="2.5rem"
                w="100%"
              />
            </Col>
          ))}
        </Row>
      </Div>
    </InfoCodeSidebar>
  )
}

export default BackgroundSize
