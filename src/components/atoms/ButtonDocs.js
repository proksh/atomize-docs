import React from "react"
import { Div, Text, Tag, Button, Icon } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const buttonDocsCode1 = `// Icon Buttons
import { Div, Button } from "atomize";

<Div d="flex">

  // Search Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="warning700"
    hoverBg="warning600"
    rounded="circle"
    m={{ r: "1rem" }}
    shadow="2"
    hoverShadow="4"
  >
    <Icon name="Search" size="20px" color="white" />
  </Button>

  // Bookmark Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="info700"
    hoverBg="info600"
    rounded="circle"
    m={{ r: "1rem" }}
    shadow="2"
    hoverShadow="4"
  >
    <Icon name="BookmarkSolid" size="20px" color="white" />
  </Button>

  // Delete Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="danger700"
    hoverBg="danger600"
    rounded="circle"
    m={{ r: "1rem" }}
    shadow="2"
    hoverShadow="4"
  >
    <Icon name="DeleteSolid" size="20px" color="white" />
  </Button>

  // Play Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="success700"
    hoverBg="success600"
    rounded="circle"
    m={{ r: "1rem" }}
    shadow="2"
    hoverShadow="4"
  >
    <Icon name="Play" size="20px" color="white" />
  </Button>

  // Heart Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="danger300"
    hoverBg="danger400"
    rounded="lg"
    m={{ r: "1rem" }}
  >
    <Icon name="HeartSolid" size="20px" color="danger700" />
  </Button>

  // Camera Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="info300"
    hoverBg="info400"
    rounded="lg"
    m={{ r: "1rem" }}
  >
    <Icon name="CameraSolid" size="20px" color="info700" />
  </Button>

  // Message Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="success300"
    hoverBg="success400"
    rounded="lg"
    m={{ r: "1rem" }}
  >
    <Icon name="MessageSolid" size="20px" color="success700" />
  </Button>

  // Attachment Button
  <Button
    h="2.5rem"
    w="2.5rem"
    bg="info300"
    hoverBg="info400"
    rounded="lg"
    m={{ r: "1rem" }}
  >
    <Icon name="Attachment" size="20px" color="info700" />
  </Button>
</Div>
`

const buttonDocsCode2 = `// Buttons Size
import { Div, Button } from "atomize";

<Div d="flex">
  <Button
    h="2rem"
    p={{ x: "0.75rem" }}
    textSize="caption"
    textColor="info700"
    hoverTextColor="info900"
    bg="white"
    hoverBg="info200"
    border="1px solid"
    borderColor="info700"
    hoverBorderColor="info900"
    m={{ r: "0.5rem" }}
  >
    XSmall
  </Button>
  <Button
    h="2.5rem"
    p={{ x: "1rem" }}
    textSize="body"
    textColor="info700"
    hoverTextColor="info900"
    bg="white"
    hoverBg="info200"
    border="1px solid"
    borderColor="info700"
    hoverBorderColor="info900"
    m={{ r: "0.5rem" }}
  >
    Small
  </Button>
  <Button
    h="3rem"
    p={{ x: "1.25rem" }}
    textSize="body"
    textColor="info700"
    hoverTextColor="info900"
    bg="white"
    hoverBg="info200"
    border="1px solid"
    borderColor="info700"
    hoverBorderColor="info900"
    m={{ r: "0.5rem" }}
  >
    Medium
  </Button>
  <Button
    h="3.5rem"
    p={{ x: "1.5rem" }}
    textSize="body"
    textColor="info700"
    hoverTextColor="info900"
    bg="white"
    hoverBg="info200"
    border="1px solid"
    borderColor="info700"
    hoverBorderColor="info900"
    m={{ r: "0.5rem" }}
  >
    Large
  </Button>
  <Button
    h="4rem"
    p={{ x: "1.75rem" }}
    textSize="body"
    textColor="info700"
    hoverTextColor="info900"
    bg="white"
    hoverBg="info200"
    border="1px solid"
    borderColor="info700"
    hoverBorderColor="info900"
  >
    XLarge
  </Button>
</Div>
`

const buttonDocsCode3 = `// Buttons With Icons
import { Div, Button, Icon } from "atomize";

<Div d="flex">
  <Button
    suffix={
      <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />
    }
    shadow="3"
    hoverShadow="4"
    m={{ r: "1rem" }}
  >
    Contact Us
  </Button>
  <Button
    prefix={
      <Icon
        name="EyeSolid"
        size="16px"
        color="white"
        m={{ r: "0.5rem" }}
      />
    }
    bg="warning700"
    hoverBg="warning800"
    rounded="circle"
    p={{ r: "1.5rem", l: "1rem" }}
    shadow="3"
    hoverShadow="4"
  >
    Preview
  </Button>
</Div>
`

const buttonDocsCode4 = `// Buttons Loading
import { Button, Icon } from "atomize";

class ButtonDocs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  render() {
    const { isLoading} = this.state;

    return (
      <Button
        onClick={() => this.setState({ isLoading: true })}
        disabled={isLoading}
        w="100%"
        prefix={
          <Icon
            name={isLoading ? "Loading" : "Search"}
            pos="absolute"
            top="50%"
            left="1rem"
            transform="translateY(-50%)"
            size="18px"
            color="white"
            m={{ r: "0.5rem" }}
          />
        }
        bg="warning700"
        hoverBg="warning800"
        rounded="xs"
        p={{ l: "3rem", r: "2rem" }}
        m={{ b: "2rem" }}
      >
        Loading & Disable on Click
      </Button>
    )
  }
}



`

class ButtonDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      selectedCode: buttonDocsCode1,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const { isLoading, selectedCode } = this.state

    return (
      <>
        <InfoCodeRow id="buttonDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Button
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            Any of the utility property can also be passed to Button. Button by
            default is of height <Tag>h="2.5rem"</Tag>, padding{" "}
            <Tag>
              p: {"{"} x: "1rem" {"}"}
            </Tag>{" "}
            and uses flex to align items center. In addition to these{" "}
            <Tag>loading</Tag> & <Tag>disabled</Tag> having booleon value can be
            passed to the button.
          </Text>
          {/* IconButton */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "1rem" }}
          >
            Icon Buttons
          </Text>

          <Div d="flex" pos="relative" m={{ b: "2rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={buttonDocsCode1}
              selectedValue={selectedCode}
            />
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="warning700"
              hoverBg="warning600"
              rounded="circle"
              m={{ r: "1rem" }}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="Search" size="20px" color="white" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="info700"
              hoverBg="info600"
              rounded="circle"
              m={{ r: "1rem" }}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="BookmarkSolid" size="20px" color="white" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="danger700"
              hoverBg="danger600"
              rounded="circle"
              m={{ r: "1rem" }}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="DeleteSolid" size="20px" color="white" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="success700"
              hoverBg="success600"
              rounded="circle"
              m={{ r: "1rem" }}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="Play" size="20px" color="white" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="danger300"
              hoverBg="danger400"
              rounded="lg"
              m={{ r: "1rem" }}
            >
              <Icon name="HeartSolid" size="20px" color="danger700" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="info300"
              hoverBg="info400"
              rounded="lg"
              m={{ r: "1rem" }}
            >
              <Icon name="CameraSolid" size="20px" color="info700" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="success300"
              hoverBg="success400"
              rounded="lg"
              m={{ r: "1rem" }}
            >
              <Icon name="MessageSolid" size="20px" color="success700" />
            </Button>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="info300"
              hoverBg="info400"
              rounded="lg"
              m={{ r: "1rem" }}
            >
              <Icon name="Attachment" size="20px" color="info700" />
            </Button>
          </Div>

          {/* Button Size */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "1rem" }}
          >
            Button Size
          </Text>
          <Div d="flex" pos="relative" m={{ b: "2rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={buttonDocsCode2}
              selectedValue={selectedCode}
            />
            <Button
              h="2rem"
              p={{ x: "0.75rem" }}
              textSize="caption"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
            >
              XSmall
            </Button>
            <Button
              h="2.5rem"
              p={{ x: "1rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
            >
              Small
            </Button>
            <Button
              h="3rem"
              p={{ x: "1.25rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
            >
              Medium
            </Button>
            <Button
              h="3.5rem"
              p={{ x: "1.5rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
            >
              Large
            </Button>
            <Button
              h="4rem"
              p={{ x: "1.75rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
            >
              XLarge
            </Button>
          </Div>

          {/* Button With Icon */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "1rem" }}
          >
            Button With Icon
          </Text>

          <Div d="flex" pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={buttonDocsCode3}
              selectedValue={selectedCode}
            />
            <Button
              suffix={
                <Icon
                  name="LongRight"
                  size="16px"
                  color="white"
                  m={{ l: "1rem" }}
                />
              }
              shadow="3"
              hoverShadow="4"
              m={{ r: "1rem" }}
            >
              Contact Us
            </Button>
            <Button
              prefix={
                <Icon
                  name="EyeSolid"
                  size="16px"
                  color="white"
                  m={{ r: "0.5rem" }}
                />
              }
              bg="warning700"
              hoverBg="warning800"
              rounded="circle"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
            >
              Preview
            </Button>
          </Div>

          {/* Button Loading */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "1rem" }}
          >
            Button Loading
          </Text>

          <Div pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={buttonDocsCode4}
              selectedValue={selectedCode}
            />
            <Button
              onClick={() => this.setState({ isLoading: true })}
              disabled={isLoading}
              w="100%"
              prefix={
                <Icon
                  name={isLoading ? "Loading" : "Search"}
                  pos="absolute"
                  top="50%"
                  left="1rem"
                  transform="translateY(-50%)"
                  size="18px"
                  color="white"
                  m={{ r: "0.5rem" }}
                />
              }
              bg="warning700"
              hoverBg="warning800"
              rounded="xs"
              p={{ l: "3rem", r: "2rem" }}
              m={{ b: "2rem" }}
            >
              Loading & Disable on Click
            </Button>
          </Div>

          <AvailableProps
            defaultProps={{
              isLoading: "false",
              d: "flex",
              justify: "center",
              align: "center",
              p: '{ x: "1rem" }',
              pos: "relative",
              rounded: "md",
              border: "none",
              h: "2.5rem",
              cursor: "pointer",
              bg: "black",
              textColor: "white",
              textSize: "body",
              textWeight: "500",
              fontFamily: "primary",
              transition: "true",
            }}
            available={[
              "isLoading",
              "disabled",
              "prefix",
              "suffix",
              "p",
              "m",
              "d",
              "align",
              "justify",
              "flexDir",
              "flexGrow",
              "flexWrap",
              "order",
              "rounded",
              "bg",
              "hoverBg",
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
        </InfoCodeRow>
      </>
    )
  }
}

export default ButtonDocs
