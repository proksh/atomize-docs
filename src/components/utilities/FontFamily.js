import React from "react"
import { Div, Icon, Text, Tag } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const textCode1 = `// Specifing the font of text
<Text textSize="display1" fontFamily="code" m={{ b: "4rem" }}>
   Code Font
</Text>
`

const FontFamily = () => {
  return (
    <>
      <InfoCodeRow id="fontFamily" code={textCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          FontFamily
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          There are three types of font family available by deafult -{" "}
          <Tag>primary</Tag>, <Tag>secondary</Tag> & <Tag>code</Tag>. This font
          family can be provided by <Tag>fontFamily</Tag> prop to the component.
        </Text>

        <Text textSize="display1" fontFamily="code" m={{ b: "4rem" }}>
          Code Font
        </Text>

        <Div d="flex" bg="info700" p="1rem" rounded="md">
          <Icon
            name="InfoSolid"
            size="16px"
            color="white"
            m={{ r: "0.75rem" }}
          />
          <Text textColor="white" textWeight="500">
            Font family can be edited or added by ThemeProvider as shown in
            theme setup.
          </Text>
        </Div>
      </InfoCodeRow>
    </>
  )
}

export default FontFamily
