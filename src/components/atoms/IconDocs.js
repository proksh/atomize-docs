import React from "react";
import { Div, Text, Tag, Row, Col, Icon, iconPaths } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const addEditColorsCode1 = `// Add Icon
import { Icon } from "react-atomize";

<Icon name="Add" color="black" size="20px" />
`;

const IconDocs = () => {
  return (
    <>
      <InfoCodeRow id="iconDocs" code={addEditColorsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Icons
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          <Tag>{"<Icon />"}</Tag> can be used to display any of the below icons.
          Icon accepts the props of <Tag>name</Tag>, <Tag>color</Tag> &{" "}
          <Tag>size</Tag> in adition to the available utility props.
        </Text>

        <Div d="flex" flexWrap="wrap">
          {Object.keys(iconPaths).map((key, index) => (
            <Div
              key={key}
              d="flex"
              m={{ r: index % 4 !== 3 && "1rem", b: "1rem" }}
              textSize="tiny"
              textAlign="center"
              w="6.5rem"
              flexDir="column"
              align="center"
              border="1px solid"
              borderColor="gray400"
              rounded="sm"
              p={{ y: "1rem" }}
              cursor="pointer"
              hoverBg="info200"
              hoverBorderColor="info700"
              transition
            >
              <Icon name={key} size="20px" m={{ b: "0.5rem" }} />
              {key}
            </Div>
          ))}
        </Div>
      </InfoCodeRow>
    </>
  );
};

export default IconDocs;
