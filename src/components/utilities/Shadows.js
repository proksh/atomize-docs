import React from "react";
import { Div, Text, Tag, Row, Col, Icon } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const shadowCode1 = `// Shadow values 1,2,3,4,5
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
`;

const Shadows = () => {
  return (
    <InfoCodeRow id="shadows" code={shadowCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Shadows
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
        5 shadows are available through <Tag>{"shadow={value}"}</Tag>.Hover
        Shadow can be changed through <Tag>{"hoverShadow={value}"}</Tag>
      </Text>
      <Div m={{ b: "2.5rem" }}>
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
      <Div d="flex" bg="info700" p="1rem" rounded="md">
        <Icon name="InfoSolid" size="16px" color="white" m={{ r: "0.75rem" }} />
        <Text textColor="white" textWeight="500">
          More Shadows can be added or existing one can be modified from the
          themeVars in theme.
        </Text>
      </Div>
    </InfoCodeRow>
  );
};

export default Shadows;
