import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import AvailableProps from "../common/AvailableProps"

const addEditColorsCode1 = `// Creating a div
import { Div } from "atomize";

<Div
  bg="gray200"
  d="flex"
  align="center"
  p="1rem"
>
  This is the div
</Div>
`

const DivDocs = () => {
  return (
    <InfoCodeRow id="divDocs" code={addEditColorsCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Div
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
        <Tag>{"<Div />"}</Tag> is equivalent to <Tag>{"<div />"}</Tag>.
      </Text>

      <Div bg="gray200" d="flex" align="center" p="1rem" m={{ b: "2rem" }}>
        This is the div
      </Div>

      <AvailableProps
        defaultProps={{
          tag: "div",
        }}
        available={[
          "tag",
          "p",
          "m",
          "d",
          "align",
          "justify",
          "flexDir",
          "flexGrow",
          "flexWrap",
          "order",
          "rounded",
          "bg",
          "hoverBg",
          "bgImg",
          "bgPos",
          "bgSize",
          "bgRepeat",
          "h",
          "minH",
          "maxH",
          "w",
          "minW",
          "maxW",
          "border",
          "borderColor",
          "hoverBorderColor",
          "textSize",
          "textWeight",
          "textDecor",
          "textTransform",
          "textAlign",
          "textColor",
          "hoverTextColor",
          "fontFamily",
          "shadow",
          "hoverShadow",
          "position",
          "top",
          "left",
          "right",
          "bottom",
          "transform",
          "transformOrigin",
          "transition",
          "overflow",
          "cursor",
          "zIndex",
          "opacity",
        ]}
      />
    </InfoCodeRow>
  )
}

export default DivDocs
