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
  grid: {
    ...DefaultTheme.grid,
    colCount: 9,
  },
}

// const containerGutterWidth1 = `// Default Container
// <Container>
//     //  Content Wrap inside a fixed width
// </Container>
// `;

const containerGutterWidth1 = `// Changing the Column Count through theme provider
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Row,
  Col } from "react-atomize";

const theme = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    containerWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "1156px"
    },
    gutterWidth: "12px",
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Container>
      <Row>
          <Col size={4} />
          <Col size={8} />
      </Row>
    </Container>
  </ThemeProvider>
  , mountNode
);`

const ContainerGutterWidth = () => {
  return (
    <>
      <InfoCodeRow id="containerGutterWidth" code={containerGutterWidth1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Container & Gutter Width
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "0.5rem" }}>
          Container has default width of <Tag>1200px</Tag>, <Tag>1156px</Tag>,{" "}
          <Tag>960px</Tag>, <Tag>720px</Tag> & <Tag>540px</Tag> on <Tag>xl</Tag>
          , <Tag>lg</Tag>, <Tag>md</Tag>, <Tag>sm</Tag> & <Tag>xs</Tag> devices,
          respectively.
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
          And gutterWidth is of <Tag>16px</Tag> by default.
        </Text>

        <Div m={{ b: "0.25rem" }}>
          <Div p={{ x: "2rem" }}>
            <Row>
              <Col size={8}>
                <Div
                  h="1rem"
                  border={{ r: "1px solid" }}
                  d="flex"
                  justify="flex-end"
                  align="center"
                  pos="relative"
                >
                  <Div
                    pos="absolute"
                    right="0"
                    top="50%"
                    w="1rem"
                    h="1px"
                    bg="black"
                  />
                  <Text textSize="caption" p={{ r: "1.5rem" }}>
                    Gutter Width
                  </Text>
                </Div>
              </Col>
              <Col size={4}>
                <Div h="1rem" border={{ l: "1px solid" }} />
              </Col>
            </Row>
          </Div>
        </Div>
        <Div bg="gray200">
          <Div p={{ x: "2rem" }}>
            <Row>
              <Col size={8}>
                <Div h="3rem" bg="warning400" />
              </Col>
              <Col size={4}>
                <Div h="3rem" bg="warning400" />
              </Col>
            </Row>
          </Div>
        </Div>
        <Div m={{ b: "6rem", t: "0.25rem" }}>
          <Div
            m={{ x: "2rem" }}
            border={{ r: "1px solid", l: "1px solid" }}
            h="1rem"
            pos="relative"
            d="flex"
            justify="center"
          >
            <Div
              bg="black"
              h="1px"
              pos="absolute"
              left="0"
              right="0"
              top="50%"
              zIndex="-1"
            />
            <Text textSize="caption" bg="white" p={{ x: "0.5rem" }}>
              Container Width
            </Text>
          </Div>
        </Div>

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Default Container Width and Gutter Width can be overwritten by using{" "}
          <Tag>ThemeProvider</Tag> & <Tag>DefaultTheme</Tag> as shown.
        </Text>

        {/* <ThemeProvider theme={theme}>
          <Div m={{ b: "4rem" }}>
            <Row>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <Col size={1}>
                  <Div bg="warning800" h="3rem" />
                </Col>
              ))}
            </Row>
          </Div>
        </ThemeProvider> */}
      </InfoCodeRow>
    </>
  )
}

export default ContainerGutterWidth
