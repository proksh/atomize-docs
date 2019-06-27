import React from "react";
import { Div, Text, Tag, Row, Col } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const displayCode1 = `// Inline-block
<Div
  d="inline-block"
  bg="gray300"
  p={{ x: "1rem", y: "0.5rem" }}
>
  inline-block
</Div>
`;

const Display = () => {
  return (
    <InfoCodeRow id="display" code={displayCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Display
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Display property can be given by using <Tag>{"d={value}"}</Tag>
      </Text>

      <Div d="inline-block" bg="gray300" p={{ x: "1rem", y: "0.5rem" }}>
        inline-block
      </Div>
    </InfoCodeRow>
  );
};

export default Display;
