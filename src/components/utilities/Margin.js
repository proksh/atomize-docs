import React from "react";
import { Div, Text, Tag } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const marginCode1 = `// With Single Value
m="3rem"

// With Responsive Values
m={{ xs: "3rem", md: "5rem" }}
`;

const marginCode2 = `// Directional margin
m={{ l: '2rem', r: '3rem', y: '5rem' }}

// Directional margin with responsive
m={{
    l: '2rem',
    r: { xs: '1rem', md: '3rem' },
    y: '5rem'
}}
`;

const Margin = () => {
  return (
    <>
      <InfoCodeRow id="margin" border={false} code={marginCode1} pb="0">
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Margin
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Margin can be given to any element by using{" "}
          <Tag m={{ x: "0.25rem" }}>{"m={value}"}</Tag>as props.
        </Text>

        <Div p="3rem" bg="warning200" m={{ b: "4rem" }}>
          <Div h="4rem" bg="warning400" />
        </Div>
      </InfoCodeRow>

      <InfoCodeRow code={marginCode2} pt="0">
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          An array with <Tag>l</Tag>,<Tag>r</Tag>,<Tag>t</Tag>,<Tag>b</Tag>,
          <Tag>x</Tag> & <Tag>y</Tag> can be given to have padding in left,
          right, top, bottom, horizontal & vertical directions respectively.
        </Text>

        <Div p="3rem" bg="warning200">
          <Div h="4rem" bg="warning400" />
        </Div>
      </InfoCodeRow>
    </>
  );
};

export default Margin;
