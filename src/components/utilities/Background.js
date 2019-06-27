import React from "react";
import { Div, Text, Tag, Icon } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const backgroundCode1 = `// With some background Color
<Div bg="warning700" h="3rem" m={{ b: "4rem" }} />
`;

const backgroundCode2 = `// With background Image
<Div
  bgImg="//images.ctfassets.net/g4teg9603zq4/6cg0T1KtyYCcgDQHoltkBO/fb75f7feea61868d9ab7a4b00c126d3f/home-hero.png"
  bgSize="cover"
  bgPos="center"
  h="5rem"
/>
`;

const Background = () => {
  return (
    <>
      <InfoCodeRow id="background" border={false} code={backgroundCode1} pb="0">
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Background
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Background and Hover Background can be given by{" "}
          <Tag>{"bg={value}"}</Tag> and <Tag>{"hoverBg={value}"}</Tag>{" "}
          respectively.
        </Text>

        <Div bg="warning700" h="3rem" m={{ b: "4rem" }} />
      </InfoCodeRow>

      <InfoCodeRow code={backgroundCode2} pt="0">
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          An image can also be given in the background by{" "}
          <Tag>{"bgImg={value}"}</Tag>, <Tag>{"bgSize={value}"}</Tag> &{" "}
          <Tag>{"bgPos={value}"}</Tag>
        </Text>

        <Div
          bgImg="//images.ctfassets.net/g4teg9603zq4/6cg0T1KtyYCcgDQHoltkBO/fb75f7feea61868d9ab7a4b00c126d3f/home-hero.png"
          bgSize="cover"
          bgPos="center"
          h="5rem"
        />
      </InfoCodeRow>
    </>
  );
};

export default Background;
