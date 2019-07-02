import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const borderRadiusCode1 = `// Rounded values
<Row>
  {["0", "xs", "sm", "md", "lg", "xl"].map(value => (
    <Col>
      <Div h="3rem" bg="warning700" rounded={value} key={value} />
    </Col>
  ))}
</Row>
`

const borderRadiusCode2 = `// Directional Border Radius
<Row>
  <Col>
    <Div h="3rem" bg="warning700" rounded={{ tl: "circle" }} />
  </Col>
  <Col>
    <Div
      h="3rem"
      bg="warning700"
      rounded={{ tl: "circle", br: "circle" }}
    />
  </Col>
  <Col>
    <Div h="3rem" bg="warning700" rounded={{ t: "circle" }} />
  </Col>
  <Col>
    <Div h="3rem" bg="warning700" rounded={{ b: "circle" }} />
  </Col>
  <Col>
    <Div h="3rem" bg="warning700" rounded={{ r: "circle" }} />
  </Col>
  <Col>
    <Div h="3rem" bg="warning700" rounded={{ l: "circle" }} />
  </Col>
  <Col>
    <Div
      h="3rem"
      bg="warning700"
      rounded={{ bl: "circle", tr: "circle" }}
    />
  </Col>
</Row>`

const BorderRadius = () => {
  return (
    <>
      <InfoCodeRow
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
          <Link to="/docs/theme#rounded">edit or add more rounded</Link> values
          by theme.
        </Text>

        <Row>
          {["0", "xs", "sm", "md", "lg", "xl", "circle"].map(value => (
            <Col>
              <Div h="3rem" bg="warning700" rounded={value} key={value} />
            </Col>
          ))}
        </Row>
      </InfoCodeRow>
      <InfoCodeRow pt="0" code={borderRadiusCode2}>
        <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
          Directional border Radius can also be given by passing an array to
          rounded of <Tag>{"t"}</Tag>, <Tag>{"b"}</Tag>, <Tag>{"r"}</Tag>,{" "}
          <Tag>{"l"}</Tag>, <Tag>{"tr"}</Tag>, <Tag>{"br"}</Tag>,{" "}
          <Tag>{"tl"}</Tag> & <Tag>{"tb"}</Tag>.
        </Text>

        <Row>
          <Col>
            <Div h="3rem" bg="warning700" rounded={{ tl: "circle" }} />
          </Col>
          <Col>
            <Div
              h="3rem"
              bg="warning700"
              rounded={{ tl: "circle", br: "circle" }}
            />
          </Col>
          <Col>
            <Div h="3rem" bg="warning700" rounded={{ t: "circle" }} />
          </Col>
          <Col>
            <Div h="3rem" bg="warning700" rounded={{ b: "circle" }} />
          </Col>
          <Col>
            <Div h="3rem" bg="warning700" rounded={{ r: "circle" }} />
          </Col>
          <Col>
            <Div h="3rem" bg="warning700" rounded={{ l: "circle" }} />
          </Col>
          <Col>
            <Div
              h="3rem"
              bg="warning700"
              rounded={{ bl: "circle", tr: "circle" }}
            />
          </Col>
        </Row>
      </InfoCodeRow>
    </>
  )
}

export default BorderRadius
