import React from "react"
import {
  Div,
  Text,
  Tag,
  Icon,
  Dropdown,
  DropdownMenu,
  Anchor,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const dropdownDocsCode1 = `// Basic Dropdown
import { Dropdown, DropdownMenu, Anchor } from "react-atomize";

const menuList = (
  <DropdownMenu>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </DropdownMenu>
);

class BasicDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  render() {
    const { showDropdown } = this.state;

    return (
      <Dropdown
        isOpen={showDropdown}
        onClick={() =>
          this.setState({ showDropdown: !showDropdown })
        }
        menu={menuList}
      >
        Click me
      </Dropdown>
    );
  }
}

export default BasicDropdown;`

const dropdownDocsCode2 = `// Hover Target Dropdown
import { Dropdown, DropdownMenu, Anchor } from "react-atomize";

const menuList = (
  <DropdownMenu>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </DropdownMenu>
);

class TargetHoverDropdown extends React.Component {
  render() {
    const { showDropdown } = this.state;

    return (
      <Dropdown targetHover menu={menuList}>
        Hover Me
      </Dropdown>
    );
  }
}

export default TargetHoverDropdown;`

const dropdownDocsCode3 = `// Small Size Dropdown
import { Dropdown, DropdownMenu, Anchor } from "react-atomize";

const menuList = (
  <DropdownMenu>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </DropdownMenu>
);

class SmallSizeDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  render() {
    const { showDropdown } = this.state;

    return (
      <Dropdown
        w="fit-content"
        isOpen={showDropdown}
        onClick={() =>
          this.setState({ showDropdown: !showDropdown })
        }
        menu={menuList}
      >
        Click me
      </Dropdown>
    );
  }
}

export default SmallSizeDropdown;`

const dropdownDocsCode4 = `// Loading Dropdown
import { Dropdown, DropdownMenu, Anchor } from "react-atomize";

const menuList = (
  <DropdownMenu>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </DropdownMenu>
);

class SmallSizeDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      isLoading: true,
    };
  }

  render() {
    const { showDropdown, isLoading } = this.state;

    return (
      <Dropdown
        isLoading={isLoading}
        isOpen={showDropdown}
        onClick={() =>
          this.setState({ showDropdown: !showDropdown })
        }
        menu={menuList}
      >
        Loading...
      </Dropdown>
    );
  }
}

export default SmallSizeDropdown;`

const dropdownDocsCode5 = `// Customized Dropdown
import { Dropdown, DropdownMenu, Anchor, Icon } from "react-atomize";

const menuList = (
  <DropdownMenu>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </DropdownMenu>
);

class CustomizedDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  render() {
    const { showDropdown } = this.state;

    return (
      <Dropdown
        isOpen={showDropdown}
        onClick={() =>
          this.setState({ showDropdown: !showDropdown })
        }
        menu={menuList}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        Customized Dropdown
      </Dropdown>
    );
  }
}

export default CustomizedDropdown;`

const dropdownDocsCode6 = `// Dropdown Directions
import { Dropdown, DropdownMenu, Anchor, Icon, Div } from "react-atomize";

const menuList = (
  <DropdownMenu w="max-content">
    {["Dropdown Option 1", "Dropdown Option 2", "Dropdown Option 3"].map(
      (name, index) => (
        <Anchor d="block" p={{ y: "0.25rem" }}>
          {name}
        </Anchor>
      )
    )}
  </DropdownMenu>
);

class DropdownDirections extends React.Component {
  render() {
    return (
      <Div d="flex" m={{ b: "1rem" }}>
        <Dropdown
          w="fit-content"
          m={{ r: "1rem" }}
          targetHover
          menu={menuList}
          direction="topleft"
          closeSuffix={
            <Icon
              name="UpArrow"
              size="18px"
              m={{ l: "1rem" }}
              color="medium"
            />
          }
        >
          topleft
        </Dropdown>
        <Dropdown
          w="fit-content"
          targetHover
          menu={menuList2}
          direction="topright"
          closeSuffix={
            <Icon
              name="UpArrow"
              size="18px"
              m={{ l: "1rem" }}
              color="medium"
            />
          }
        >
          topright
        </Dropdown>
      </Div>
    );
  }
}

export default DropdownDirections;`

const dropdownDocsCode7 = `// Dropdown Directions
import { Dropdown, DropdownMenu, Anchor, Icon, Div } from "react-atomize";

const menuList = (
  <DropdownMenu w="max-content">
    {["Dropdown Option 1", "Dropdown Option 2", "Dropdown Option 3"].map(
      (name, index) => (
        <Anchor d="block" p={{ y: "0.25rem" }}>
          {name}
        </Anchor>
      )
    )}
  </DropdownMenu>
);

class DropdownDirections extends React.Component {
  render() {
    return (
      <Div d="flex" m={{ b: "1rem" }}>
        <Dropdown
          w="fit-content"
          m={{ r: "1rem" }}
          targetHover
          menu={menuList2}
          direction="righttop"
          closeSuffix={
            <Icon
              name="RightArrow"
              size="18px"
              m={{ l: "1rem" }}
              color="medium"
            />
          }
        >
          righttop
        </Dropdown>
        <Dropdown
          w="fit-content"
          targetHover
          menu={menuList2}
          direction="lefttop"
          closeSuffix={
            <Icon
              name="LeftArrow"
              size="18px"
              m={{ r: "1rem" }}
              color="medium"
              order="-1"
            />
          }
        >
          lefttop
        </Dropdown>
      </Div>
    );
  }
}

export default DropdownDirections;`

const dropdownDocsCode8 = `// Dropdown Directions
import { Dropdown, DropdownMenu, Anchor, Icon, Div } from "react-atomize";

const menuList = (
  <DropdownMenu w="max-content">
    {["Dropdown Option 1", "Dropdown Option 2", "Dropdown Option 3"].map(
      (name, index) => (
        <Anchor d="block" p={{ y: "0.25rem" }}>
          {name}
        </Anchor>
      )
    )}
  </DropdownMenu>
);

class DropdownDirections extends React.Component {
  render() {
    return (
      <Div d="flex" m={{ b: "1rem" }}>
        <Dropdown
          w="fit-content"
          m={{ r: "1rem" }}
          targetHover
          menu={menuList2}
          direction="bottomright"
        >
          bottomright
        </Dropdown>
        <Dropdown
          w="fit-content"
          targetHover
          menu={menuList2}
          direction="bottomleft"
        >
          bottomleft
        </Dropdown>
      </Div>
    );
  }
}

export default DropdownDirections;`

class DropdownDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: dropdownDocsCode1,
      basicDropdownOpen: false,
      basicDropdownOpen2: false,
      basicDropdownOpen3: false,
      basicDropdownOpen4: false,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const {
      selectedCode,
      basicDropdownOpen,
      basicDropdownOpen2,
      basicDropdownOpen3,
      basicDropdownOpen4,
    } = this.state

    return (
      <>
        <InfoCodeRow id="dropdownDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Dropdown
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            If there are too many operations to display, you can wrap them in a
            Dropdown by using
            <Tag>Dropdown</Tag> & <Tag>DropdownMenu</Tag>. By clicking/hovering
            on the trigger, a dropdown menu should appear, which allows you to
            choose one option and execute relevant actions.
          </Text>

          {/* Basic Dropdown */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "0" }}
          >
            Basic Dropdown
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            Dropdown menu can be passed to <Tag>menu</Tag> of dropdown to give
            options inside a basic dropdown.
          </Text>

          <Div d="flex" pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode1}
              selectedValue={selectedCode}
            />
            <Dropdown
              isOpen={basicDropdownOpen}
              onClick={() =>
                this.setState({ basicDropdownOpen: !basicDropdownOpen })
              }
              menu={menuList}
            >
              Click me
            </Dropdown>
          </Div>

          {/* Hover Triggered */}
          <Text textColor="black" textSize="subheader" textWeight="500">
            On Hover
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            Dropdown menu can be passed to <Tag>targetHover</Tag> to change the
            trigger from click to hover
          </Text>

          <Div d="flex" pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode2}
              selectedValue={selectedCode}
            />
            <Dropdown targetHover menu={menuList}>
              Hover Me
            </Dropdown>
          </Div>

          <Div d="flex" m={{ b: "3rem" }}>
            <Icon
              name="InfoSolid"
              color="info700"
              size="16px"
              m={{ r: "0.5rem", t: "0.25rem" }}
            />
            <Text textColor="info700">
              Note that no focus effects and iconChange work on hover trigger
            </Text>
          </Div>

          {/* Button Size */}
          <Text textColor="black" textSize="subheader" textWeight="500">
            Small Size
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            Default <Tag>w</Tag> of dropdown is 100%, the w can be changed to
            either <Tag>fit-content</Tag> or some other value in <Tag>px</Tag>{" "}
            or <Tag>rem</Tag>.
          </Text>

          <Div d="flex" pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode3}
              selectedValue={selectedCode}
            />
            <Dropdown
              w="fit-content"
              isOpen={basicDropdownOpen2}
              onClick={() =>
                this.setState({ basicDropdownOpen2: !basicDropdownOpen2 })
              }
              menu={menuList}
            >
              Click me
            </Dropdown>
          </Div>

          {/* Dropdown Loading */}
          <Text textColor="black" textSize="subheader" textWeight="500">
            Loading Dropdown
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            <Tag>isLoading</Tag> can be passed to dropdown to replace the right
            icon with loading. Alternatively, a Loading icon can be passed to
            the the <Tag>prefix</Tag>, <Tag>activeSuffix</Tag> or{" "}
            <Tag>inactiveSuffix</Tag> of the dropdown.
          </Text>

          <Div d="flex" pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode4}
              selectedValue={selectedCode}
            />
            <Dropdown
              isLoading
              isOpen={basicDropdownOpen3}
              onClick={() =>
                this.setState({ basicDropdownOpen3: !basicDropdownOpen3 })
              }
              menu={menuList}
            >
              Loading...
            </Dropdown>
          </Div>

          {/* Custom Styling */}
          <Text textColor="black" textSize="subheader" textWeight="500">
            Custom Styling
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            Any of the utilies can be applied to the dropdown. In addition{" "}
            <Tag>openSuffix</Tag>, <Tag>closeSuffix</Tag>,{" "}
            <Tag>focusBorderColor</Tag> & <Tag>focusBg</Tag> can also be applied
            for Custom Styling.
          </Text>

          <Div d="flex" pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode5}
              selectedValue={selectedCode}
            />
            <Dropdown
              isOpen={basicDropdownOpen4}
              onClick={() =>
                this.setState({ basicDropdownOpen4: !basicDropdownOpen4 })
              }
              menu={menuList}
              bg="info100"
              focusBg="info200"
              borderColor="info600"
              focusBorderColor="info800"
              textColor="info800"
              textWeight="500"
              openSuffix={<Icon name="Up" color="info700" size="16px" />}
              closeSuffix={<Icon name="Down" color="info700" size="16px" />}
            >
              Customized Dropdown
            </Dropdown>
          </Div>

          {/* Dropdown Positions */}
          <Text textColor="black" textSize="subheader" textWeight="500">
            Dropdown Positions
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            <Tag>direction</Tag> for the menu can be specified which can have
            value <Tag>topleft</Tag>, <Tag>topleft</Tag>, <Tag>topright</Tag>,{" "}
            <Tag>righttop</Tag>, <Tag>bottomright</Tag> & <Tag>bottomleft</Tag>.
          </Text>

          <Div pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode6}
              selectedValue={selectedCode}
            />
            <Div d="flex" m={{ b: "1rem" }}>
              <Dropdown
                w="fit-content"
                m={{ r: "1rem" }}
                targetHover
                menu={menuList2}
                direction="topleft"
                closeSuffix={
                  <Icon
                    name="UpArrow"
                    size="18px"
                    m={{ l: "1rem" }}
                    color="medium"
                  />
                }
              >
                topleft
              </Dropdown>
              <Dropdown
                w="fit-content"
                targetHover
                menu={menuList2}
                direction="topright"
                closeSuffix={
                  <Icon
                    name="UpArrow"
                    size="18px"
                    m={{ l: "1rem" }}
                    color="medium"
                  />
                }
              >
                topright
              </Dropdown>
            </Div>
          </Div>
          <Div pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode7}
              selectedValue={selectedCode}
            />
            <Div d="flex" m={{ b: "1rem" }}>
              <Dropdown
                w="fit-content"
                m={{ r: "1rem" }}
                targetHover
                menu={menuList2}
                direction="righttop"
                closeSuffix={
                  <Icon
                    name="RightArrow"
                    size="18px"
                    m={{ l: "1rem" }}
                    color="medium"
                  />
                }
              >
                righttop
              </Dropdown>
              <Dropdown
                w="fit-content"
                targetHover
                menu={menuList2}
                direction="lefttop"
                closeSuffix={
                  <Icon
                    name="LeftArrow"
                    size="18px"
                    m={{ r: "1rem" }}
                    color="medium"
                    order="-1"
                  />
                }
              >
                lefttop
              </Dropdown>
            </Div>
          </Div>
          <Div pos="relative" m={{ b: "3rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={dropdownDocsCode8}
              selectedValue={selectedCode}
            />
            <Div d="flex" m={{ b: "1rem" }}>
              <Dropdown
                w="fit-content"
                m={{ r: "1rem" }}
                targetHover
                menu={menuList2}
                direction="bottomright"
              >
                bottomright
              </Dropdown>
              <Dropdown
                w="fit-content"
                targetHover
                menu={menuList2}
                direction="bottomleft"
              >
                bottomleft
              </Dropdown>
            </Div>
          </Div>

          <AvailableProps
            defaultProps={{
              isOpen: "false",
              isLoading: "false",
              targethover: "false",
              direction: "bottomleft",
              d: "flex",
              align: "center",
              textColor: "medium",
              textWeight: "500",
              justify: "space-between",
              p: '{ x: "0.75rem" }',
              h: "2.5rem",
              textSize: "body",
              rounded: "md",
              border: "1px solid",
              borderColor: "gray500",
              w: "100%",
              bg: "white",
              focusBg: "gray100",
              focusBorderColor: "gray800",
              cursor: "pointer",
              openSuffix:
                '<Icon name="UpArrow" size="18px" m={{ l: "1rem" }} color="medium" />',
              closeSuffix:
                '<Icon name="DownArrow" size="18px" m={{ l: "1rem" }} color="medium" />',
            }}
            available={[
              "isOpen",
              "menu",
              "targethover",
              "direction",
              "isLoading",
              "prefix",
              "openSuffix",
              "closeSuffix",
              "p",
              "m",
              "d",
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
              "focusBg",
              "focusBorderColor",
              "focusShadow",
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

export default DropdownDocs

const menuList = (
  <DropdownMenu>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </DropdownMenu>
)

const menuList2 = (
  <DropdownMenu w="max-content">
    {["Dropdown Option 1", "Dropdown Option 2", "Dropdown Option 3"].map(
      (name, index) => (
        <Anchor d="block" p={{ y: "0.25rem" }}>
          {name}
        </Anchor>
      )
    )}
  </DropdownMenu>
)
