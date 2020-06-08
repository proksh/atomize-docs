import React from "react"
import {
  Div,
  Text,
  Tag,
  Button,
  Icon,
  Input,
  Row,
  Col,
  Textarea,
} from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const inputDocsCode1 = `// Basic Input
import { Input } from "atomize";

const BasicInput = () => {
  return (
    <Input placeholder="Basic Input" />
  );
}
`

const inputDocsCode2 = `// Input Size
import { Input, Row, Col } from "atomize";

const InputSizes = () => {
  return (
    <Row>
      <Col>
        <Input placeholder="Small" h="2rem" />
      </Col>
      <Col>
        <Input placeholder="Medium" h="2.5rem" />
      </Col>
      <Col>
        <Input placeholder="Large" h="3rem" />
      </Col>
    </Row>
  );
}
`

const inputDocsCode3 = `// Input With Icon
import { Input, Icon } from "atomize";

const InputWithRightIcon = () => {
  return (
    <Input
      placeholder="Search"
      suffix={
        <Icon
          name="Search"
          size="20px"
          cursor="pointer"
          onClick={() => console.log("clicked")}
          pos="absolute"
          top="50%"
          right="1rem"
          transform="translateY(-50%)"
        />
      }
    />
  );
}
`

const inputDocsCode4 = `// Input With Right Button
import { Input, Icon } from "atomize";

const InputWithRightButton = () => {
  return (
    <Input
      placeholder="Search"
      suffix={
        <Button
          pos="absolute"
          onClick={() => console.log("clicked")}
          bg="info700"
          hoverBg="info800"
          w="3rem"
          top="0"
          right="0"
          rounded={{ r: "md" }}
        >
          <Icon
            name="Search"
            size="20px"
            color="white"
            cursor="pointer"
          />
        </Button>
      }
    />
  );
}
`

const inputDocsCode5 = `// Input With Right Button
import { Input, Icon } from "atomize";

const InputWithRightButton = () => {
  return (
    <Input
      placeholder="Search"
      suffix={
        <Button
          pos="absolute"
          onClick={() => console.log("clicked")}
          bg="info700"
          hoverBg="info800"
          top="0"
          right="0"
          rounded={{ r: "md" }}
        >
          Search
        </Button>
      }
    />
  );
}
`

const inputDocsCode6 = `// Input With Right Button
import { Input, Icon } from "atomize";

const InputWithRightButton = () => {
  return (
    <Input
      placeholder="User Name"
      p={{ x: "2.5rem" }}
      prefix={
        <Icon
          name="UserSolid"
          color="warning800"
          size="16px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />
      }
    />
  );
}
`

const inputDocsCode7 = `// Show Hide Password
import { Input, Button, Icon } from "atomize";

class InputPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }
  
  render() {
    const { showPassword } = this.state;

    return (
      <Input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        suffix={
          <Button
            pos="absolute"
            onClick={() => this.setState({ showPassword: !showPassword })}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={showPassword ? "EyeSolid" : "Eye"}
              color={showPassword ? "danger800" : "success800"}
              size="16px"
            />
          </Button>
        }
      />
    );
  }
}
`

const inputDocsCode8 = `// Loading on Search
import { Input, Button, Icon } from "atomize";

class SearchLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Input
        placeholder="Loading on Search"
        suffix={
          <Button
            pos="absolute"
            onClick={() => this.setState({ isLoading: !isLoading })}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={isLoading ? "Loading" : "Search"}
              color={isLoading ? "gray900" : "black"}
              size="16px"
            />
          </Button>
        }
      />
    );
  }
}
`

const inputDocsCode9 = `// Basic Textarea
import { Textarea } from "atomize";

class SearchLoading extends React.Component {
  render() {
    return (
      <Textarea placeholder="Basic Textarea" />
    );
  }
}
`

class InputDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      showPassword: false,
      selectedCode: inputDocsCode1,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const { isLoading, selectedCode, showPassword } = this.state

    return (
      <>
        <InfoCodeRow id="inputDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Input & Textarea
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            Any of the utility property can also be passed to Input. Input by
            default is of height <Tag>h="2.5rem"</Tag>, padding{" "}
            <Tag>
              p: {"{"} x: "0.75rem" {"}"},
            </Tag>{" "}
            and uses flex to align items center.
          </Text>
          <Div pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode1}
              selectedValue={selectedCode}
            />
            <Input placeholder="Basic Input" />
          </Div>
          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode2}
              selectedValue={selectedCode}
            />
            <Row>
              <Col>
                <Input placeholder="Small" h="2rem" />
              </Col>
              <Col>
                <Input placeholder="Medium" h="2.5rem" />
              </Col>
              <Col>
                <Input placeholder="Large" h="3rem" />
              </Col>
            </Row>
          </Div>
          <Div m={{ b: "1rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode3}
              selectedValue={selectedCode}
            />
            <Input
              placeholder="Search"
              suffix={
                <Icon
                  name="Search"
                  size="20px"
                  cursor="pointer"
                  onClick={() => console.log("clicked")}
                  pos="absolute"
                  top="50%"
                  right="1rem"
                  transform="translateY(-50%)"
                />
              }
            />
          </Div>
          <Div pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode4}
              selectedValue={selectedCode}
            />
            <Input
              placeholder="Search"
              suffix={
                <Button
                  pos="absolute"
                  onClick={() => console.log("clicked")}
                  bg="info700"
                  hoverBg="info800"
                  w="3rem"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                >
                  <Icon
                    name="Search"
                    size="20px"
                    color="white"
                    cursor="pointer"
                  />
                </Button>
              }
            />
          </Div>
          <Div pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode5}
              selectedValue={selectedCode}
            />
            <Input
              placeholder="Search"
              suffix={
                <Button
                  pos="absolute"
                  onClick={() => console.log("clicked")}
                  bg="info700"
                  hoverBg="info800"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                >
                  Search
                </Button>
              }
            />
          </Div>
          <Div pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode6}
              selectedValue={selectedCode}
            />
            <Input
              placeholder="User Name"
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="UserSolid"
                  color="warning800"
                  size="16px"
                  cursor="pointer"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
            />
          </Div>
          <Div pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode7}
              selectedValue={selectedCode}
            />
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              suffix={
                <Button
                  pos="absolute"
                  onClick={() => this.setState({ showPassword: !showPassword })}
                  bg="transparent"
                  w="3rem"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                >
                  <Icon
                    name={showPassword ? "EyeSolid" : "Eye"}
                    color={showPassword ? "success600" : "success800"}
                    size="16px"
                  />
                </Button>
              }
            />
          </Div>
          <Div pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode8}
              selectedValue={selectedCode}
            />
            <Input
              placeholder="Loading on Search"
              suffix={
                <Button
                  pos="absolute"
                  onClick={() => this.setState({ isLoading: !isLoading })}
                  bg="transparent"
                  w="3rem"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                >
                  <Icon
                    name={isLoading ? "Loading" : "Search"}
                    color={isLoading ? "gray900" : "black"}
                    size="16px"
                  />
                </Button>
              }
            />
          </Div>
          <Div pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={inputDocsCode9}
              selectedValue={selectedCode}
            />
            <Textarea placeholder="Basic Textarea" />
          </Div>

          <AvailableProps
            defaultProps={{
              d: "flex",
              p: '{ x: "0.75rem" }',
              textSize: "body",
              rounded: "md",
              border: "1px solid",
              borderColor: "gray500",
              h: "2.5rem",
              w: "100%",
              bg: "white",
              textColor: "dark",
              textWeight: "500",
              focusBorderColor: "gray700",
              transition: "true",
            }}
            available={[
              "isLoading",
              "prefix",
              "suffix",
              "p",
              "m",
              "d",
              "flexGrow",
              "order",
              "rounded",
              "bg",
              "bgSize",
              "bgPos",
              "bgRepeat",
              "hoverBg",
              "focusBg",
              "focusTextColor",
              "focusBorderColor",
              "focusShadow",
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
      </>
    )
  }
}

export default InputDocs
