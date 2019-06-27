import React from "react";
import { Div, Text, Tag } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const positionCode1 = `// Positioning relative and absolute
<Div
  pos="relative"
  m={{ b: "2.5rem" }}
  h="5rem"
  bg="warning300">
  <Div
    pos="absolute"
    bottom="0"
    right="0"
    h="2rem"
    w="2rem"
    bg="warning700"
  />
</Div>
`;

const Position = () => {
  return (
    <InfoCodeRow id="position" code={positionCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Position
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
        Position of the elements can be given by <Tag>{"pos={value}"}</Tag>.
        Top, Left, right, bottom can also be given with appropriate pos.
      </Text>
      <Div m={{ b: "2.5rem" }} h="5rem" pos="relative" bg="warning300">
        <Div
          pos="absolute"
          bottom="0"
          right="0"
          h="2rem"
          w="2rem"
          bg="warning700"
        />
      </Div>
    </InfoCodeRow>
  );
};

export default Position;
