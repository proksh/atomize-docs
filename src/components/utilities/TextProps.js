import React from "react";
import { Text, Tag } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const textCode1 = `// Text properties
<Text
  textSize="display1"
  textAlign="center"
  textWeight="500"
  textColor="black"
  bg="gray300"
  m={{ b: "4rem" }}
>
  Centered Text
</Text>
`;

const textCode2 = `// With hover color change
<Text
  textSize="display1"
  textAlign="center"
  textWeight="500"
  textColor="white"
  hoverTextColor="danger700"
  bg="black"
>
  Hover Me
</Text>
`;

const TextProps = () => {
  return (
    <>
      <InfoCodeRow id="textprops" border={false} code={textCode1} pb="0">
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Text Props
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Text Color, Weight, Size & Align can be changed by{" "}
          <Tag>{"textColor={value}"}</Tag>, <Tag>{"textWeight={value}"}</Tag>,{" "}
          <Tag>{"textSize={value}"}</Tag> & <Tag>{"align={value}"}</Tag>{" "}
          respectively.
        </Text>

        <Text
          textSize="display1"
          textAlign="center"
          textWeight="500"
          textColor="black"
          bg="gray300"
          m={{ b: "4rem" }}
        >
          Centered Text
        </Text>
      </InfoCodeRow>

      <InfoCodeRow code={textCode2} pt="0">
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Text Color can be changed on Hover of that element by{" "}
          <Tag>{"hoverTextColor={value}"}</Tag>
        </Text>

        <Text
          textSize="display1"
          textAlign="center"
          textWeight="500"
          textColor="white"
          hoverTextColor="danger700"
          bg="black"
        >
          Hover Me
        </Text>
      </InfoCodeRow>
    </>
  );
};

export default TextProps;
