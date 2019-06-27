import React from "react";
import { Div, Text, Tag, Icon } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const addEditColorsCode1 = `// Creating a h1
import { Text } from "react-atomize";

<Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
  This is h1 of display1 size
</Text>
`;

const TextDocs = () => {
  return (
    <>
      <InfoCodeRow id="textDocs" code={addEditColorsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Text
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          <Tag>{"<Text />"}</Tag> is by default equal to <Tag>{"<p>"}</Tag>. To
          change that tag <Tag>{"tag"}</Tag> props can be passed to the
          component.
        </Text>

        <Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
          This is h1 of display1 size
        </Text>

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

export default TextDocs;
