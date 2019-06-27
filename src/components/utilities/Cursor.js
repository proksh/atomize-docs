import React from "react";
import { Div, Text, Tag } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const cursorCode1 = `// Specifing different cursor to divs
<Div
  cursor="not-allowed"
  p={"1.5rem"}
  bg="gray400"
  m={{ b: "1rem" }}
>
  not-allowed
</Div>

<Div
  cursor="pointer"
  p={"1.5rem"}
  bg="success400"
  m={{ b: "1rem" }}
>
  pointer
</Div>

<Div
  cursor="crosshair"
  p={"1.5rem"}
  bg="warning400"
>
  crosshair
</Div>
`;

const Cursor = () => {
  return (
    <InfoCodeRow id="cursor" code={cursorCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Cursor
      </Text>
      <Text m={{ b: "3rem" }} textColor="medium" textSize="body">
        Cursor can be defined by <Tag>{"cursor={value}"}</Tag>
      </Text>
      <Div cursor="not-allowed" p={"1.5rem"} bg="gray400" m={{ b: "1rem" }}>
        not-allowed
      </Div>
      <Div cursor="pointer" p={"1.5rem"} bg="success400" m={{ b: "1rem" }}>
        pointer
      </Div>
      <Div cursor="crosshair" p={"1.5rem"} bg="warning400">
        crosshair
      </Div>
    </InfoCodeRow>
  );
};

export default Cursor;
