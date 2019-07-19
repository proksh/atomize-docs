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
  shadows: {
    ...DefaultTheme.shadows,
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)",
  },
}

const breakpointsCode1 = `// Adding Your Shadow
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Row,
  Col } from "atomize";

const theme = {
  ...DefaultTheme,
  shadows: {
    ...DefaultTheme.shadows,
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Div
      h="3.5rem"
      p={{ x: "1rem" }}
      shadow="new-shadow"
      rounded="lg"
      d="flex"
      align="center"
      justify="center"
      textColor="medium"
    >
      New Shadow
    </Div>
  </ThemeProvider>
  , mountNode
);`

const Shadows = () => {
  return (
    <>
      <InfoCodeRow id="shadows" code={breakpointsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Shadows
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          There are 5 values of shadows present in atomize in default theme -
          that are <Tag>1</Tag>,<Tag>2</Tag>, <Tag>3</Tag>, <Tag>4</Tag> &{" "}
          <Tag>5</Tag>.
        </Text>

        <Div m={{ b: "2.5rem" }}>
          <Row>
            {[1, 2, 3, 4, 5].map(index => (
              <Col key={index}>
                <Div
                  h="3.5rem"
                  bg="white"
                  rounded="lg"
                  shadow={index}
                  d="flex"
                  align="center"
                  justify="center"
                  textColor="medium"
                >
                  {index}
                </Div>
              </Col>
            ))}
          </Row>
        </Div>

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          More shadows can be added to the design system by adding them to the{" "}
          <Tag>shadows</Tag> inside theme.
        </Text>

        <ThemeProvider theme={theme}>
          <Div
            h="3.5rem"
            p={{ x: "1rem" }}
            shadow="new-shadow"
            rounded="lg"
            d="flex"
            align="center"
            justify="center"
            textColor="medium"
          >
            New Shadow
          </Div>
        </ThemeProvider>
      </InfoCodeRow>
    </>
  )
}

export default Shadows
