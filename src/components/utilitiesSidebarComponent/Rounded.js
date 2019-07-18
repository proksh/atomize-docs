import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const borderRadiusCode1 = `// Rounded 0
rounded="0"

// Rounded extra small
rounded="xs"

// Rounded small
rounded="sm"

// Rounded medium
rounded="md"

// Rounded large
rounded="lg"

// Rounded extra large
rounded="xl"

// Rounded circle
rounded="circle"`

const borderRadiusCode2 = `// Rounded top left
rounded={{ tl: "circle"}}

// Rounded top left & bottom right
rounded={{ tl: "circle", br: "circle" }}

// Rounded medium
rounded={{ t: "circle" }}

// Responsive
rounded={{ t: { xs: "circle", md: 'xs'} }}`

const Rounded = () => {
  return (
    <>
      <InfoCodeSidebar
        id="borderRadius"
        pb="0"
        border={false}
        code={borderRadiusCode1}
      >
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Border Radius
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
          Border Radius can be defined by <Tag>{"rounded={value}"}</Tag> where
          value can be - '0', 'xs', 'sm', 'md', 'lg' or 'xl'. 'md' is the
          default border radius of buttons and other such elements. You can{" "}
          <Link to="/docs/react/theme#rounded">edit or add more rounded</Link> values
          by theme.
        </Text>

        <Row>
          {["0", "xs", "sm", "md", "lg", "xl", "circle"].map(value => (
            <Col>
              <Div h="2.5rem" bg="warning700" rounded={value} key={value} />
            </Col>
          ))}
        </Row>
      </InfoCodeSidebar>
      <InfoCodeSidebar pt="0" code={borderRadiusCode2}>
        <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
          Directional border Radius can also be given by passing an array to
          rounded of <Tag>{"t"}</Tag>, <Tag>{"b"}</Tag>, <Tag>{"r"}</Tag>,{" "}
          <Tag>{"l"}</Tag>, <Tag>{"tr"}</Tag>, <Tag>{"br"}</Tag>,{" "}
          <Tag>{"tl"}</Tag> & <Tag>{"tb"}</Tag>.
        </Text>

        <Row>
          <Col>
            <Div h="2.5rem" bg="warning700" rounded={{ tl: "circle" }} />
          </Col>
          <Col>
            <Div
              h="2.5rem"
              bg="warning700"
              rounded={{ tl: "circle", br: "circle" }}
            />
          </Col>
          <Col>
            <Div h="2.5rem" bg="warning700" rounded={{ t: "circle" }} />
          </Col>
          <Col>
            <Div h="2.5rem" bg="warning700" rounded={{ b: "circle" }} />
          </Col>
          <Col>
            <Div h="2.5rem" bg="warning700" rounded={{ r: "circle" }} />
          </Col>
          <Col>
            <Div h="2.5rem" bg="warning700" rounded={{ l: "circle" }} />
          </Col>
          <Col>
            <Div
              h="2.5rem"
              bg="warning700"
              rounded={{ bl: "circle", tr: "circle" }}
            />
          </Col>
        </Row>
      </InfoCodeSidebar>
    </>
  )
}

export default Rounded
