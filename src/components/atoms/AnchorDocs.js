import React from "react"
import { Div, Text, Tag, Button, Icon, Anchor } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const anchorDocsCode1 = `// Basic Links
import { Div, Tag, Anchor, Icon } from "atomize";

const BasicLinks = () => {
  return (
    <>
        <Anchor
            href="https://www.google.com"
            target="_blank"
            d="block"
            m={{ b: "1rem" }}
        >
            This is the link
        </Anchor>
        <Anchor
            href="https://www.google.com"
            target="_blank"
            textDecor="underline"
            d="block"
        >
            This is the underlined link
        </Anchor>
    </>
  );
}`

const anchorDocsCode2 = `// Link Wrapping Tag and button
import { Div, Anchor, Tag, Button } from "atomize";

const WrappingLinks = () => {
  return (
    <Div d="flex" flexWrap="wrap">
        <Anchor href="https://www.google.com" target="_blank">
            <Tag
                hoverBg="info200"
                m={{ r: "1rem", b: "1rem" }}
                prefix={<Icon name="Link" size="12px" m={{ r: "0.25rem" }} />}
                cursor="pointer"
            >
                Link
            </Tag>
        </Anchor>
        <Anchor href="https://www.google.com" target="_blank">
            <Button
                bg="info700"
                hoverBg="info600"
                m={{ r: "1rem", b: "1rem" }}
                suffix={
                <Icon
                    name="LongRight"
                    size="20px"
                    color="white"
                    m={{ l: "1rem" }}
                />
                }
                cursor="pointer"
                rounded="md"
            >
                Button
            </Button>
        </Anchor>
    </Div>
  );
}`

class AnchorDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: anchorDocsCode1,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const { selectedCode } = this.state

    return (
      <InfoCodeRow id="anchorDocs" code={selectedCode}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Anchor
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
          <Tag>{"<Anchor/>"}</Tag> is equilant to <Tag>{"<a/>"}</Tag> and can be
          passed most of the utilities as props. Underline is removed by
          default. You can pass <Tag>{'textDecor="underline"'}</Tag> to get that
          underlined link.
        </Text>
        <Div pos="relative" m={{ b: "4rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={anchorDocsCode1}
            selectedValue={selectedCode}
          />
          <Anchor
            href="https://www.google.com"
            target="_blank"
            d="block"
            m={{ b: "1rem" }}
          >
            This is the link
          </Anchor>
          <Anchor
            href="https://www.google.com"
            target="_blank"
            textDecor="underline"
            d="block"
          >
            This is the underlined link
          </Anchor>
        </Div>
        <Div pos="relative" m={{ b: "4rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={anchorDocsCode2}
            selectedValue={selectedCode}
          />
          <Text m={{ b: "1rem" }}>
            You can also wrap any div, tag or button inside an anchor.
          </Text>
          <Div d="flex" flexWrap="wrap">
            <Anchor href="https://www.google.com" target="_blank">
              <Tag
                hoverBg="info200"
                m={{ r: "1rem", b: "1rem" }}
                prefix={<Icon name="Link" size="12px" m={{ r: "0.25rem" }} />}
                cursor="pointer"
              >
                Link
              </Tag>
            </Anchor>
            <Anchor href="https://www.google.com" target="_blank">
              <Button
                bg="info700"
                hoverBg="info600"
                m={{ r: "1rem", b: "1rem" }}
                suffix={
                  <Icon
                    name="LongRight"
                    size="20px"
                    color="white"
                    m={{ l: "1rem" }}
                  />
                }
                cursor="pointer"
                rounded="md"
              >
                Button
              </Button>
            </Anchor>
          </Div>
        </Div>

        <AvailableProps
          defaultProps={{
            hoverTextColor: "info800",
            textWeight: "500",
            textDecor: "none",
            textColor: "info700",
            cursor: "pointer",
          }}
          available={[
            "p",
            "m",
            "d",
            "bg",
            "hoverBg",
            "h",
            "order",
            "minH",
            "maxH",
            "w",
            "minW",
            "maxW",
            "textSize",
            "textWeight",
            "textDecor",
            "textTransform",
            "textAlign",
            "textColor",
            "hoverTextColor",
            "fontFamily",
            "position",
            "top",
            "left",
            "right",
            "bottom",
            "transition",
            "cursor",
          ]}
        />
      </InfoCodeRow>
    )
  }
}

export default AnchorDocs
