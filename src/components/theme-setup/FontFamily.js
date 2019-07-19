import React from "react"
import { Text, Tag, ThemeProvider, DefaultTheme } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: "equity-text, serif",
  },
}

const breakpointsCode1 = `// Changing the secondary font
import { Text, ThemeProvider, DefaultTheme } from "atomize";

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: "equity-text, serif",
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Text fontFamily="secondary" textSize="heading">
      This is different font
    </Text>
  </ThemeProvider>
  , mountNode
);`

const FontFamily = () => {
  return (
    <>
      <InfoCodeRow id="fontfamily" code={breakpointsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Font Family
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          There are three type of font families by Default.
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
          <Text tag="span" textWeight="600" textColor="black">
            primary:
          </Text>{" "}
          -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica
          Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI
          Emoji","Segoe UI Symbol","Noto Color Emoji"
          <br />
          <Text tag="span" textWeight="600" textColor="black">
            secondary
          </Text>
          : serif
          <br />
          <Text tag="span" textWeight="600" textColor="black">
            code
          </Text>
          : "monospace"
          <br />
        </Text>

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          You can add or edit the font families of theme by using{" "}
          <Tag>fontFamily</Tag> in theme.
        </Text>

        <ThemeProvider theme={theme}>
          <Text fontFamily="primary" textSize="heading">
            This is different font
          </Text>
        </ThemeProvider>
      </InfoCodeRow>
    </>
  )
}

export default FontFamily
