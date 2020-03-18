import React from "react"
import { Div, Text, Tag, Icon, Anchor } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const tagDocsCode1 = `// Basic Tags
import { Div, Tag, Anchor, Icon } from "atomize";

const BasicTags = () => {
  return (
    <Div d="flex">
      <Tag m={{ r: "1rem", b: "1rem" }}>Tag 1</Tag>
      <Tag m={{ r: "1rem", b: "1rem" }}>Link</Tag>
      <Tag
        m={{ r: "1rem", b: "1rem" }}
        suffix={
          <Icon
            name="Cross"
            size="12px"
            m={{ l: "1rem" }}
            cursor="pointer"
          />
        }
      >
        Close
      </Tag>
      <Tag
        m={{ r: "1rem", b: "1rem" }}
        prefix={<Icon name="Edit" size="12px" m={{ r: "0.25rem" }} />}
      >
        Edit
      </Tag>
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
    </Div>
  );
}`

const tagDocsCode2 = `// Custom Border Tags
import { Div, Tag } from "atomize";

const CustomBorderTags = () => {
  return (
    <Div d="flex" flexWrap="wrap">
      {["info", "success", "danger", "gray", "warning", "brand"].map(
        name => (
          <Tag
            bg={${"`${name}100`"}}
            border="1px solid"
            borderColor={${"`${name}500`"}}
            textColor={${"`${name}800`"}}
            m={{ r: "0.5rem", b: "0.5rem" }}
          >
            CustomTag
          </Tag>
        )
      )}
    </Div>
  );
}`

const tagDocsCode3 = `// Custom Border Tags
import { Div, Tag } from "atomize";

const CustomBorderTags = () => {
  return (
    <Div d="flex" flexWrap="wrap">
      {["info", "success", "danger", "gray", "warning", "brand"].map(
        name => (
          <Tag
            bg={${"`${name}700`"}}
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="body"
          >
            Solid
          </Tag>
        )
      )}
    </Div>
  );
}`

class TagDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: tagDocsCode1,
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
        <InfoCodeRow id="tagDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Tags
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            Tag for categorizing or markup.
          </Text>
          <Div pos="relative" m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={tagDocsCode1}
              selectedValue={selectedCode}
            />
            <Div d="flex">
              <Tag m={{ r: "1rem", b: "1rem" }}>Tag 1</Tag>
              <Tag m={{ r: "1rem", b: "1rem" }}>Link</Tag>
              <Tag
                m={{ r: "1rem", b: "1rem" }}
                suffix={
                  <Icon
                    name="Cross"
                    size="12px"
                    m={{ l: "1rem" }}
                    cursor="pointer"
                  />
                }
              >
                Close
              </Tag>
              <Tag
                m={{ r: "1rem", b: "1rem" }}
                prefix={<Icon name="Edit" size="12px" m={{ r: "0.25rem" }} />}
              >
                Edit
              </Tag>
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
            </Div>
          </Div>
          <Div pos="relative" m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={tagDocsCode2}
              selectedValue={selectedCode}
            />
            <Text m={{ b: "1rem" }}>
              You can pass any utility props to define how the <Tag>Tag</Tag>{" "}
              should look like. Below are bordered custom tags.
            </Text>
            <Div d="flex" flexWrap="wrap">
              {["info", "success", "danger", "gray", "warning", "brand"].map(
                name => (
                  <Tag
                    key={name}
                    bg={`${name}100`}
                    border="1px solid"
                    borderColor={`${name}500`}
                    textColor={`${name}800`}
                    m={{ r: "0.5rem", b: "0.5rem" }}
                  >
                    CustomTag
                  </Tag>
                )
              )}
            </Div>
          </Div>
          <Div pos="relative" m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={tagDocsCode3}
              selectedValue={selectedCode}
            />
            <Text m={{ b: "1rem" }}>
              You can also change the padding, border radius and textSize of the
              Tags as shown below.
            </Text>
            <Div d="flex" flexWrap="wrap">
              {["info", "success", "danger", "gray", "warning", "brand"].map(
                name => (
                  <Tag
                    key={name}
                    bg={`${name}700`}
                    textColor="white"
                    rounded="circle"
                    p={{ x: "1rem", y: "0.25rem" }}
                    m={{ r: "0.5rem", b: "0.5rem" }}
                    textSize="body"
                  >
                    Solid
                  </Tag>
                )
              )}
            </Div>
          </Div>

          <AvailableProps
            defaultProps={{
              tag: "span",
              d: "inline-flex",
              align: "center",
              textAlign: "center",
              justify: "center",
              bg: "gray300",
              textWeight: "500",
              rounded: "sm",
              p: '{ x: "0.5rem", y: "0.125rem" }',
              textColor: "medium",
              textSize: "caption",
            }}
            available={[
              "tag",
              "prefix",
              "suffix",
              "p",
              "m",
              "d",
              "align",
              "justify",
              "flexDir",
              "flexGrow",
              "order",
              "flexWrap",
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

export default TagDocs
