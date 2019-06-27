import React from "react";
import { Div, Text, Tag, Row, Col, Icon } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const addEditColorsCode1 = `// Creating a div
import { Div } from "react-atomize";

<Div
  bg="gray200"
  d="flex"
  align="center"
  p="1rem"
>
  This is the div
</Div>
`;

const DivDocs = () => {
  return (
    <>
      <InfoCodeRow id="divDocs" code={addEditColorsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Div
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          <Tag>{"<Div />"}</Tag> is equivalent to <Tag>{"<div />"}</Tag>.
        </Text>

        <Div bg="gray200" d="flex" align="center" p="1rem" m={{ b: "4rem" }}>
          This is the div
        </Div>

        <Div d="flex" bg="info700" p="1rem" rounded="md">
          <Icon
            name="InfoSolid"
            size="16px"
            color="white"
            m={{ r: "0.75rem" }}
          />
          <Text textColor="white" textWeight="500">
            Any Props from the utility can be passed to this component
          </Text>
        </Div>
      </InfoCodeRow>
    </>
  );
};

export default DivDocs;
