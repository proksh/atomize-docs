import React from "react"
import {
  Div,
  Text,
  Tag,
  Row,
  Col,
  ThemeProvider,
  DefaultTheme,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const theme = {
  ...DefaultTheme,
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      customSize: "25px",
    },
    height: {
      ...DefaultTheme.textSize.height,
      customSize: "34px",
    },
  },
}

const breakpointsCode1 = `// Providing a custom font size
import { Text, ThemeProvider, DefaultTheme } from "react-atomize";

const theme = {
  ...DefaultTheme,
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      customSize: "25px"
    },
    height: {
      ...DefaultTheme.textSize.height,
      customSize: "34px"
    }
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Text textSize="customSize">Custom Text Size</Text>
  </ThemeProvider>
  , mountNode
);`

const FontSize = () => {
  return (
    <>
      <InfoCodeRow id="fontSize" code={breakpointsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Font Size
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          The default theme font size present in atomize are <Tag>tiny</Tag>,{" "}
          <Tag>caption</Tag>, <Tag>body</Tag>, <Tag>paragraph</Tag>,{" "}
          <Tag>subheader</Tag>, <Tag>title</Tag>, <Tag>heading</Tag>,{" "}
          <Tag>display1</Tag>, <Tag>display2</Tag> & <Tag>display3</Tag>.
        </Text>

        <Div m={{ b: "5rem" }}>
          <FontRow size="tiny" />
          <FontRow size="caption" />
          <FontRow size="body" />
          <FontRow size="paragraph" />
          <FontRow size="subheader" />
          <FontRow size="title" />
          <FontRow size="heading" />
          <FontRow size="display1" />
          <FontRow size="display2" />
          <FontRow size="display3" />
        </Div>

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          To add or edit a font size, both the <Tag>size</Tag> value and its{" "}
          <Tag>lineheight</Tag> of the <Tag>textSize</Tag> has to provided to
          theme as shown.
        </Text>

        <ThemeProvider theme={theme}>
          <Text textSize="customSize">customSize</Text>
        </ThemeProvider>
      </InfoCodeRow>
    </>
  )
}

export default FontSize

const FontRow = ({ size }) => {
  return (
    <Div d="flex" align="flex-end">
      <Text w="6rem">{size}</Text>
      <Div textSize={size}>Typography</Div>
    </Div>
  )
}
