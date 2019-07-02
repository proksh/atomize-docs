import React from "react"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// Center
bgPos="center"

// Top
bgPos="top"

// Bottom
bgPos="bottom"

// in %
bgPos="50%, 10%"`

const BackgroundPosition = () => {
  return (
    <InfoCodeSidebar code={backgroundCode} pt="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        bgPos can be specified along with bgImg as <Tag>{"bgPos={value}"}</Tag>
      </Text>
      <Div w="100%" overflow="hidden">
        <Row>
          {["center", "top", "bottom", "50%, 10%"].map(value => (
            <Col key={value}>
              <Div
                bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
                bgPos={value}
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

export default BackgroundPosition
