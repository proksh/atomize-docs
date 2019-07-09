import React from "react"
import { Link } from "gatsby"

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
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const theme = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    colCount: 8,
    gutterWidth: 0,
  },
}

const rowColsCode1 = `// Basic Column Structure
import { Row, Col, Div } from "react-atomize";

ReactDOM.render(
  <Row>
    <Col size="5">
      <Div p="1rem" bg="warning500">
        This is 5 of 12
      </Div>
    </Col>
    <Col size="7">
      <Div p="1rem" bg="warning500">
        This is 7 of 12
      </Div>
    </Col>
  </Row>
  , mountNode
);`

const rowColsCode2 = `// Variable Width
import { Row, Col, Div } from "react-atomize";

ReactDOM.render(
  <Row>
    <Col size={{ xs: 12, lg: 3 }}>
      <Div p="1rem" bg="warning500">
        3 of 12
      </Div>
    </Col>
    <Col size={{ xs: "auto" }}>
      <Div p="1rem" bg="warning500">
        Variable width content
      </Div>
    </Col>
    <Col size={{ xs: 12, lg: 4 }}>
      <Div p="1rem" bg="warning500">
        4 of 12
      </Div>
    </Col>
  </Row>
  , mountNode
);`

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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Row>
      <Col size={{ xs: 8, lg: 3 }}>
        <Div p="1rem" bg="warning500">
          3 of 8
        </Div>
      </Col>
      <Col size={{ xs: 8, lg: 5 }}>
        <Div p="1rem" textColor="white" bg="info700">
          5 of 8
        </Div>
      </Col>
    </Row>
  </ThemeProvider>
  , mountNode
);`

class RowColDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: rowColsCode1,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const { selectedCode } = this.state
    return (
      <>
        <InfoCodeRow id="rowColDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Row & Col
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
            Our Grid system uses <Tag>{"<Row />"}</Tag> and{" "}
            <Tag>{"<Col />"}</Tag> to layout and align content. It’s built with
            flexbox and is fully responsive. You can{" "}
            <Link to="/docs/theme#containerGutterWidth">
              edit grid variables
            </Link>{" "}
            by using theme.
          </Text>

          <Div pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={rowColsCode1}
              selectedValue={selectedCode}
            />
            <Row>
              <Col size={5}>
                <Div p="1rem" bg="warning500">
                  This is 5 of 12
                </Div>
              </Col>
              <Col size={7}>
                <Div p="1rem" bg="warning500">
                  This is 7 of 12
                </Div>
              </Col>
            </Row>
          </Div>
          <Text textSize="subheader" textWeight="600" m={{ b: "1rem" }}>
            Variable width content
          </Text>
          <Div pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={rowColsCode2}
              selectedValue={selectedCode}
            />
            <Row>
              <Col size={{ xs: 12, lg: 3 }}>
                <Div p="1rem" bg="warning500">
                  3 of 12
                </Div>
              </Col>
              <Col size={{ xs: "auto" }}>
                <Div p="1rem" bg="warning500">
                  Variable width content
                </Div>
              </Col>
              <Col size={{ xs: 12, lg: 4 }}>
                <Div p="1rem" bg="warning500">
                  4 of 12
                </Div>
              </Col>
            </Row>
          </Div>
          <Text textSize="subheader" textWeight="600" m={{ b: "1rem" }}>
            Changing Grid Variables
          </Text>
          <Div pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={rowColsCode3}
              selectedValue={selectedCode}
            />
            <ThemeProvider theme={theme}>
              <Row>
                <Col size={{ xs: 8, lg: 3 }}>
                  <Div p="1rem" bg="warning500">
                    3 of 8
                  </Div>
                </Col>
                <Col size={{ xs: 8, lg: 5 }}>
                  <Div p="1rem" textColor="white" bg="info700">
                    5 of 8
                  </Div>
                </Col>
              </Row>
            </ThemeProvider>
          </Div>

          <Div m={{ b: "5rem" }}>
            <AvailableProps
              componentName="Row"
              defaultProps={{
                d: "flex",
                flexWrap: "wrap",
              }}
              available={[
                "align",
                "justify",
                "flexDir",
                "flexGrow",
                "flexWrap",
                "rounded",
                "bg",
                "hoverBg",
                "bgImg",
                "bgPos",
                "bgSize",
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
                "transition",
                "overflow",
                "cursor",
              ]}
            />
          </Div>

          <AvailableProps
            componentName="Container"
            defaultProps={{
              p: '{{ y: "0", x: `calc(${theme.grid.gutterWidth}/2)` }}',
            }}
            available={[
              "align",
              "justify",
              "flexDir",
              "flexWrap",
              "rounded",
              "bg",
              "hoverBg",
              "bgImg",
              "bgPos",
              "bgSize",
              "h",
              "minH",
              "maxH",
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
              "transition",
              "overflow",
              "cursor",
            ]}
          />
        </InfoCodeRow>
      </>
    )
  }
}

export default RowColDocs
