import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import AvailableProps from "../common/AvailableProps"

const addEditColorsCode1 = `// Creating a h1
import { Text } from "atomize";

<Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
  This is h1 of display1 size
</Text>
`

const TextDocs = () => {
  return (
    <InfoCodeRow id="textDocs" code={addEditColorsCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Text
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
        <Tag>{"<Text />"}</Tag> is by default equal to <Tag>{"<p>"}</Tag>. To
        change that tag <Tag>{"tag"}</Tag> props can be passed to the component.
      </Text>

      <Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
        This is h1 of display1 size
      </Text>

      <AvailableProps
        defaultProps={{
          tag: "p",
        }}
        available={[
          "tag",
          "p",
          "m",
          "d",
          "flexGrow",
          "order",
          "bg",
          "hoverBg",
          "h",
          "minH",
          "maxH",
          "w",
          "minW",
          "maxW",
          "textSize",
          "textWeight",
          "textDecor",
          "textTransform",
          "textAlign",
          "textColor",
          "hoverTextColor",
          "fontFamily",
          "position",
          "top",
          "left",
          "right",
          "bottom",
          "transition",
          "cursor",
        ]}
      />
    </InfoCodeRow>
  )
}

export default TextDocs
