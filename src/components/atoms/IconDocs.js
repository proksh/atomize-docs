import React from "react"
import {
  Div,
  Text,
  Tag,
  Input,
  Icon,
  iconPaths,
  Notification,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import AvailableProps from "../common/AvailableProps"

const addEditColorsCode1 = `// Add Icon
import { Icon } from "react-atomize";

<Icon name="Add" color="black" size="20px" />`

class IconDocs extends React.Component {
  state = {
    query: "",
    copied: false,
  }

  getFilteredIcons = () => {
    const { query } = this.state
    const filtered = {}

    Object.keys(iconPaths).forEach(key => {
      if (key.indexOf(query) > -1) {
        filtered[key] = iconPaths[key]
      }
    })

    return filtered
  }

  copyUrlToClipboard = key => {
    const el = document.createElement("textarea")
    el.value = `<Icon name="${key}" size="20px" m={{ b: "0.5rem" }} />`
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }

    this.setState({ copied: true })
  }

  render() {
    const filteredIcon = this.getFilteredIcons()
    const { query, copied } = this.state

    return (
      <InfoCodeRow id="iconDocs" code={addEditColorsCode1}>
        <Notification
          textColor="success800"
          isOpen={copied}
          p={{ y: "0.5rem", x: "1rem" }}
          maxW="10rem"
          bg="success800"
          textColor="white"
          rounded="md"
          prefix={
            <Icon
              name="Success"
              color="white"
              m={{ r: "0.5rem" }}
              size="20px"
            />
          }
          onClose={() => this.setState({ copied: false })}
        >
          Icon copied
        </Notification>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Icons
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          <Tag>{"<Icon />"}</Tag> can be used to display any of the below icons.
          Icon accepts the props of <Tag>name</Tag>, <Tag>color</Tag> &{" "}
          <Tag>size</Tag> in adition to the available utility props.
        </Text>

        <Input
          h="2.5rem"
          w="100%"
          m={{ b: "1rem" }}
          placeholder="Filter (Ex: Add)"
          textSize="caption"
          query={query}
          onChange={e => this.setState({ query: e.target.value })}
        />

        <Div d="flex" flexWrap="wrap" m={{ b: "3rem" }}>
          {Object.keys(filteredIcon).map((key, index) => (
            <Div
              onClick={() => this.copyUrlToClipboard(key)}
              key={key}
              d="flex"
              m={{
                r: { xs: "0.25rem", md: index % 4 !== 3 ? "1rem" : "0" },
                b: { xs: "0.25rem", md: "1rem" },
              }}
              textSize="tiny"
              textAlign="center"
              w="6.5rem"
              flexDir="column"
              align="center"
              border="1px solid"
              borderColor="gray400"
              rounded="sm"
              p={{ y: "1rem" }}
              cursor="pointer"
              hoverBg="info200"
              hoverBorderColor="info700"
              transition
            >
              <Icon name={key} size="20px" m={{ b: "0.5rem" }} />
              {key}
            </Div>
          ))}
        </Div>

        <AvailableProps
          defaultProps={{
            color: "black",
            size: "24px",
          }}
          available={[
            "iconName",
            "color",
            "hoverColor",
            "size",
            "p",
            "m",
            "d",
            "position",
            "order",
            "top",
            "left",
            "right",
            "bottom",
            "cursor",
          ]}
        />
      </InfoCodeRow>
    )
  }
}

export default IconDocs
