import React from "react";
import { Div, Text, Tag, Row, Col } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const borderRadiusCode1 = `// Rounded values
<Row>
  <Col>
    <Div rounded="0" h="3rem" bg="brand700" />
  </Col>
  <Col>
    <Div rounded="xs" h="3rem" bg="brand700" />
  </Col>
  <Col>
    <Div rounded="sm" h="3rem" bg="brand700" />
  </Col>
  <Col>
    <Div rounded="md" h="3rem" bg="brand700" />
  </Col>
  <Col>
    <Div rounded="lg" h="3rem" bg="brand700" />
  </Col>
  <Col>
    <Div rounded="xl" h="3rem" bg="brand700" />
  </Col>
  <Col>
    <Div rounded="circle" h="3rem" bg="brand700" />
  </Col>
</Row>
`;

const borderRadiusCode2 = `// Directional Border Radius
<Row>
  <Col>
    <Div h="3rem" bg="brand700" rounded={{ tl: "circle" }} />
  </Col>
  <Col>
    <Div
      h="3rem"
      bg="brand700"
      rounded={{ tl: "circle", br: "circle" }}
    />
  </Col>
  <Col>
    <Div h="3rem" bg="brand700" rounded={{ t: "circle" }} />
  </Col>
  <Col>
    <Div h="3rem" bg="brand700" rounded={{ b: "circle" }} />
  </Col>
  <Col>
    <Div h="3rem" bg="brand700" rounded={{ r: "circle" }} />
  </Col>
  <Col>
    <Div h="3rem" bg="brand700" rounded={{ l: "circle" }} />
  </Col>
  <Col>
    <Div
      h="3rem"
      bg="brand700"
      rounded={{ bl: "circle", tr: "circle" }}
    />
  </Col>
</Row>`;

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
          value can be - '0', 'xs', 'sm', 'lg' or 'default'. Default is the
          default border radius of buttons and other such elements.
        </Text>

        <Row>
          <Col>
            <Div h="3rem" bg="brand700" rounded="0" />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded="xs" />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded="sm" />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded="md" />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded="lg" />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded="xl" />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded="circle" />
          </Col>
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
            <Div h="3rem" bg="brand700" rounded={{ tl: "circle" }} />
          </Col>
          <Col>
            <Div
              h="3rem"
              bg="brand700"
              rounded={{ tl: "circle", br: "circle" }}
            />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded={{ t: "circle" }} />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded={{ b: "circle" }} />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded={{ r: "circle" }} />
          </Col>
          <Col>
            <Div h="3rem" bg="brand700" rounded={{ l: "circle" }} />
          </Col>
          <Col>
            <Div
              h="3rem"
              bg="brand700"
              rounded={{ bl: "circle", tr: "circle" }}
            />
          </Col>
        </Row>
      </InfoCodeRow>
    </>
  );
};

export default BorderRadius;
