import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const borderCode2 = `// Info
borderColor="info700"
hoverBorderColor="info800"

// Warning
borderColor="warning700"
hoverBorderColor="warning800"

// Danger
borderColor="danger700"
hoverBorderColor="danger800"

// Success
borderColor="success700"
hoverBorderColor="success800"`

const BorderColor = () => {
  return (
    <InfoCodeSidebar code={borderCode2}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Color can be any value of color from the theme. You can{" "}
        <Link to="/docs/react/theme#addEditColors">edit or add more colors</Link>{" "}
        values by theme. Border Color can also be changed on hover by passing{" "}
        <Tag>{"hoverBorderColor={value}"}</Tag> to the component.
      </Text>

      <Div w="100%" overflow="hidden">
        <Row>
          {["info", "warning", "danger", "success"].map(value => (
            <Col key={value}>
              <Div
                h="3rem"
                border="2px solid"
                borderColor={`${value}700`}
                hoverBorderColor={`${value}800`}
                m={{ b: "1rem" }}
              />
            </Col>
          ))}
        </Row>
      </Div>
    </InfoCodeSidebar>
  )
}

export default BorderColor
