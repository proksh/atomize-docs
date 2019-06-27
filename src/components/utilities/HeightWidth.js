import React from "react";
import { Div, Text, Tag } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const paddingCode1 = `// With height of '48px' & width of '50%'
<Div
  h="3rem" w="50%"
  bg="success400"
/>

// With height of '128px' & width of '100%'
<Div
  h="8rem" w="100%"
  bg="danger300"
/>
`;

const HeightWidth = () => {
  return (
    <InfoCodeRow id="heightWidth" code={paddingCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Height & Width
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        The properties related to height & Width are accessabe as shown
      </Text>

      <Div h="3rem" w="50%" bg="success400" m={{ b: "1rem" }} />
      <Div h="8rem" w="100%" bg="danger300" />
    </InfoCodeRow>
  );
};

export default HeightWidth;
