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
  grid: {
    ...DefaultTheme.grid,
    colCount: 9,
  },
}

const columnCountCode1 = `// Default Column count of 12
import {
  Div,
  Row,
  Col } from "atomize";

ReactDOM.render(
  <Div m={{ b: "4rem" }}>
    <Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
        <Col size={1} key={index}>
          <Div bg="warning800" h="3rem" rounded="md" />
        </Col>
      ))}
    </Row>
  </Div>
  , mountNode
);`

const columnCountCode2 = `// Changing the Column Count through theme provider
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Row,
  Col } from "atomize";

const theme = {
  ...DefaultTheme,
  colCount: 9
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Div m={{ b: "4rem" }}>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
          <Col size={1} key={index}>
            <Div bg="warning800" h="3rem" rounded="md" />
          </Col>
        ))}
      </Row>
    </Div>
  </ThemeProvider>
  , mountNode
);`

const ColumnCount = () => {
  return (
    <>
      <InfoCodeRow
        id="columnCount"
        border={false}
        code={columnCountCode1}
        pb="0"
      >
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Column Count
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Atomize has <Tag>12</Tag> column grid structure by default. You can
          edit this by providing it in theme.
        </Text>

        <Div m={{ b: "4rem" }}>
          <Row>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
              <Col size={1} key={index}>
                <Div bg="warning800" h="3rem" rounded="sm" />
              </Col>
            ))}
          </Row>
        </Div>
      </InfoCodeRow>
      <InfoCodeRow code={columnCountCode2} pt="0">
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          You can change the column count by changing the <Tag>colCount</Tag> in
          theme using ThemeProvider.
        </Text>

        <ThemeProvider theme={theme}>
          <Div m={{ b: "4rem" }}>
            <Row>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
                <Col size={1} key={index}>
                  <Div bg="warning800" h="3rem" rounded="md" />
                </Col>
              ))}
            </Row>
          </Div>
        </ThemeProvider>
      </InfoCodeRow>
    </>
  )
}

export default ColumnCount
