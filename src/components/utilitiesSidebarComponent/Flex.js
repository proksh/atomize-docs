import React from "react";
import { Div, Text, Tag, Icon } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const flexCode1 = `// Complex structure can be easily made with flex
<Div d="flex">
  <Div m={{ b: "2.5rem" }} h="5rem" d="flex">
    {[1, 2, 3, 4].map(index => (
      <Div
        key={index}
        h="2rem"
        w="2rem"
        m={{ r: "1rem" }}
        bg="gray600"
        d="flex"
        align="center"
        justify="center"
        textColor="white"
      >
        {index}
      </Div>
    ))}
  </Div>
  <Div m={{ b: "2.5rem" }} d="flex" flexDir="column">
    {[1, 2, 3, 4].map(index => (
      <Div
        key={index}
        h="2rem"
        w="2rem"
        m={{ b: "1rem" }}
        bg="gray400"
        d="flex"
        align="center"
        justify="center"
        textColor="white"
      >
        {index}
      </Div>
    ))}
  </Div>
</Div>
`;

const Flex = () => {
  return (
    <InfoCodeRow id="flex" code={flexCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Flex
      </Text>
      <Div m={{ b: "3rem" }} textColor="medium" textSize="body">
        <Text>
          Flex properties are accessable when display is flex. These properties
          are -
        </Text>
        <Text>
          <Icon
            name="Dot"
            size="10px"
            color="info800"
            m={{ r: "0.5rem", t: "0.25rem" }}
          />
          align is equivalent to align-items of css
        </Text>
        <Text>
          <Icon
            name="Dot"
            size="10px"
            color="info800"
            m={{ r: "0.5rem", t: "0.25rem" }}
          />
          justify is equivalent to justify-content of css
        </Text>
        <Text>
          <Icon
            name="Dot"
            size="10px"
            color="info800"
            m={{ r: "0.5rem", t: "0.25rem" }}
          />
          flexDir is equivalent to flex-direction of css
        </Text>
        <Text>
          <Icon
            name="Dot"
            size="10px"
            color="info800"
            m={{ r: "0.5rem", t: "0.25rem" }}
          />
          flexGrow is equivalent to flex-grow of css
        </Text>
        <Text>
          <Icon
            name="Dot"
            size="10px"
            color="info800"
            m={{ r: "0.5rem", t: "0.25rem" }}
          />
          flexWrap is equivalent to align-items of css
        </Text>
      </Div>

      <Div d="flex">
        <Div m={{ b: "2.5rem" }} h="5rem" d="flex">
          {[1, 2, 3, 4].map(index => (
            <Div
              key={index}
              h="2rem"
              w="2rem"
              m={{ r: "1rem" }}
              bg="gray600"
              d="flex"
              align="center"
              justify="center"
              textColor="white"
            >
              {index}
            </Div>
          ))}
        </Div>
        <Div m={{ b: "2.5rem" }} d="flex" flexDir="column">
          {[1, 2, 3, 4].map(index => (
            <Div
              key={index}
              key={index}
              h="2rem"
              w="2rem"
              m={{ b: "1rem" }}
              bg="gray400"
              d="flex"
              align="center"
              justify="center"
              textColor="white"
            >
              {index}
            </Div>
          ))}
        </Div>
      </Div>
    </InfoCodeRow>
  );
};

export default Flex;
