import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Col, Row } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// bg warning
bg="warning700"
hoverBg="warning700"

// bg info
bg="info700"
hoverBg="info700"

// bg red
bg="danger700"
hoverBg="danger700"

// bg success
bg="success700"
hoverBg="success700"`

const Background = () => {
  return (
    <InfoCodeSidebar
      id="background"
      border={false}
      code={backgroundCode}
      pb="0"
    >
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Background and Hover Background can be given by{" "}
        <Tag>{"bg={value}"}</Tag> and <Tag>{"hoverBg={value}"}</Tag>
        respectively where value can be any color from the theme. You can{" "}
        <Link to="/docs/theme#addEditColors">edit or add color</Link> using
        theme.
      </Text>

      <Div overflow="hidden" w="100%">
        <Row>
          <Col>
            <Div
              bg="warning700"
              hoverBg="warning800"
              h="3rem"
              m={{ b: "1rem" }}
            />
          </Col>
          <Col>
            <Div bg="info700" hoverBg="info800" h="3rem" m={{ b: "1rem" }} />
          </Col>
          <Col>
            <Div
              bg="danger700"
              hoverBg="danger800"
              h="3rem"
              m={{ b: "1rem" }}
            />
          </Col>
          <Col>
            <Div
              bg="success700"
              hoverBg="success800"
              h="3rem"
              m={{ b: "1rem" }}
            />
          </Col>
        </Row>
      </Div>
    </InfoCodeSidebar>
  )
}

export default Background
