import React from "react";
import {
  Div,
  Text,
  Tag,
  Row,
  Col,
  Icon,
  Container,
  ThemeProvider,
  DefaultTheme
} from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const theme = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    colCount: 8,
    gutterWidth: 0
  }
};

const rowColsCode1 = `// Basic Column Structure
import { Row, Col, Div } from "react-atomize";

<Row>
  <Col size="5">
    <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
      This is 5 of 12
    </Div>
  </Col>
  <Col size="7">
    <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
      This is 7 of 12
    </Div>
  </Col>
</Row>
`;

const rowColsCode2 = `// Variable Width
import { Row, Col, Div } from "react-atomize";

<Row>
  <Col size={{ xs: 12, lg: 2 }}>
    <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
      2 of 12
    </Div>
  </Col>
  <Col size={{ xs: "auto" }}>
    <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
      Variable width content
    </Div>
  </Col>
  <Col size={{ xs: 12, lg: 5 }}>
    <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
      5 of 12
    </Div>
  </Col>
</Row>
`;

const rowColsCode3 = `// Changing to 8 column and gutter to 0
import { Div, Row, Col } from "react-atomize";

const theme = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    colCount: 8,
    gutterWidth: 0
  }
};

<ThemeProvider theme={theme}>
  <Row>
    <Col size={{ xs: 8, lg: 3 }}>
      <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
        3 of 8
      </Div>
    </Col>
    <Col size={{ xs: 8, lg: 5 }}>
      <Div p={{ x: "0.5rem", y: "1rem" }} bg="info500">
        5 of 8
      </Div>
    </Col>
  </Row>
</ThemeProvider>
`;

const RowColDocs = () => {
  return (
    <>
      <InfoCodeRow id="rowColDocs" code={rowColsCode1} pb={0} border={false}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Row & Col
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          Our Grid system uses <Tag>{"<Row />"}</Tag> and <Tag>{"<Col />"}</Tag>{" "}
          to layout and align content. It’s built with flexbox and is fully
          responsive.
        </Text>

        <Div>
          <Row>
            <Col size={5}>
              <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
                This is 5 of 12
              </Div>
            </Col>
            <Col size={7}>
              <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
                This is 7 of 12
              </Div>
            </Col>
          </Row>
        </Div>
      </InfoCodeRow>
      <InfoCodeRow code={rowColsCode2} pt={0} pb={0} border={false}>
        <Text textSize="subheader" textWeight="700" m={{ b: "1rem" }}>
          Variable width content
        </Text>
        <Div>
          <Row>
            <Col size={{ xs: 12, lg: 2 }}>
              <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
                2 of 12
              </Div>
            </Col>
            <Col size={{ xs: "auto" }}>
              <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
                Variable width content
              </Div>
            </Col>
            <Col size={{ xs: 12, lg: 5 }}>
              <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
                5 of 12
              </Div>
            </Col>
          </Row>
        </Div>
      </InfoCodeRow>
      <InfoCodeRow code={rowColsCode3} pt={0}>
        <Text textSize="subheader" textWeight="700" m={{ b: "1rem" }}>
          Changing Grid Variables
        </Text>
        <Div>
          <ThemeProvider theme={theme}>
            <Row>
              <Col size={{ xs: 8, lg: 3 }}>
                <Div p={{ x: "0.5rem", y: "1rem" }} bg="warning500">
                  3 of 8
                </Div>
              </Col>
              <Col size={{ xs: 8, lg: 5 }}>
                <Div p={{ x: "0.5rem", y: "1rem" }} bg="info500">
                  5 of 8
                </Div>
              </Col>
            </Row>
          </ThemeProvider>
        </Div>
      </InfoCodeRow>
    </>
  );
};

export default RowColDocs;
