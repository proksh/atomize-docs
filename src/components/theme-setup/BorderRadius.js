import React from "react"
import {
  Div,
  Text,
  Tag,
  Row,
  Col,
  ThemeProvider,
  DefaultTheme,
} from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const theme = {
  ...DefaultTheme,
  rounded: {
    ...DefaultTheme.rounded,
    veryLarge: "18px",
  },
}

const breakpointsCode1 = `// Adding a custom border radius
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Row,
  Col } from "atomize";

const theme = {
  ...DefaultTheme,
  rounded: {
    ...DefaultTheme.rounded,
    veryLarge: "18px",
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Div
      rounded="veryLarge"
      h="3rem"
      bg="warning700"
      d="flex"
      align="center"
      justify="center"
      textColor="white"
    >
      Custom Radius
    </Div>
  </ThemeProvider>
  , mountNode
);`

const BorderRadius = () => {
  return (
    <>
      <InfoCodeRow id="rounded" code={breakpointsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Border Radius
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          By default border radius values available are <Tag>0</Tag>,{" "}
          <Tag>xs</Tag>, <Tag>sm</Tag>, <Tag>md</Tag>, <Tag>lg</Tag>,{" "}
          <Tag>xl</Tag> & <Tag>circle</Tag> having border radius of{" "}
          <Tag>0px</Tag>, <Tag>2px</Tag>, <Tag>4px</Tag>, <Tag>6px</Tag>,{" "}
          <Tag>8px</Tag>, <Tag>12px</Tag> & <Tag>1000rem</Tag> respectively.
        </Text>

        <Div m={{ b: "4rem" }}>
          <Row>
            {["0", "xs", "sm", "md", "lg", "xl", "circle"].map(radius => (
              <Col>
                <Div
                  h="3rem"
                  bg="warning700"
                  d="flex"
                  align="center"
                  justify="center"
                  textColor="white"
                  textWeight="500"
                  textSize="caption"
                  rounded={radius}
                >
                  {radius}
                </Div>
              </Col>
            ))}
          </Row>
        </Div>

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          You can customize the available or add your own border radius by
          providing <Tag>rounded</Tag> variable in the theme.
        </Text>

        <ThemeProvider theme={theme}>
          <Div
            rounded="veryLarge"
            h="3rem"
            bg="warning700"
            d="flex"
            textSize="500"
            align="center"
            justify="center"
            textColor="white"
          >
            Custom Radius
          </Div>
        </ThemeProvider>
      </InfoCodeRow>
    </>
  )
}

export default BorderRadius
