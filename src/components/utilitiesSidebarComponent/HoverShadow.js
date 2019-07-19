import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// Responsive
hoverShadow={{ xs: '4', md: '3', lg: '1' }}

// Shadow 1
hoverShadow="1"

// Shadow 2
hoverShadow="2"

// Shadow 3
hoverShadow="3"

// Shadow 4
hoverShadow="4"

// Shadow 5
hoverShadow="5"`

const HoverShadow = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
        Hover Shadow can be changed through <Tag>{"hoverShadow={value}"}</Tag>.
        You can <Link to="/docs/react/theme#shadows">edit or add shadows</Link> by
        using theme.
      </Text>
      <Div p={{ b: "2.5rem" }} w="100%" overflow="hidden">
        <Row>
          {[1, 2, 3, 4, 5].map(index => (
            <Col key={index}>
              <Div
                h="3.5rem"
                bg="white"
                rounded="md"
                hoverShadow={index}
                border="1px solid"
                borderColor="gray300"
                d="flex"
                align="center"
                justify="center"
                textColor="medium"
              >
                {index}
              </Div>
            </Col>
          ))}
        </Row>
      </Div>
    </InfoCodeSidebar>
  )
}

export default HoverShadow
