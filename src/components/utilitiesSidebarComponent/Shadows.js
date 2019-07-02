import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// Responsive
shadow={{ xs: '4', md: '3', lg: '1' }}

// Shadow 1
shadow="1"

// Shadow 2
shadow="2"

// Shadow 3
shadow="3"

// Shadow 4
shadow="4"

// Shadow 5
shadow="5"`

const Shadows = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
        5 shadows are available through <Tag>{"shadow={value}"}</Tag>.Hover
        Shadow can be changed through <Tag>{"hoverShadow={value}"}</Tag>. You
        can <Link to="/docs/theme#shadows">edit or add shadows</Link> by using
        theme.
      </Text>
      <Div p={{ b: "2.5rem" }} w="100%" overflow="hidden">
        <Row>
          {[1, 2, 3, 4, 5].map(index => (
            <Col key={index}>
              <Div
                h="3.5rem"
                bg="white"
                rounded="md"
                shadow={index}
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

export default Shadows
