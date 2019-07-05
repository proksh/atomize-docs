import React from "react"
import {
  Div,
  Text,
  Tag,
  Button,
  Modal,
  Icon,
  SideDrawer,
  DropdownMenu,
  Anchor,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const sidebarDocsCode1 = `// Basic Sidedrawer
import { Div, Button, SideDrawer, Icon, Text } from "react-atomize";

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showSideDrawer: true })}
        >
          Show Basic Sidedrawer
        </Button>
        <BasicSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;`

const sidebarDocsCode2 = `// Sized Sidedrawer
import { Div, Button, SideDrawer, Icon, Text } from "react-atomize";

const SizeSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", sm: "16rem" }}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({
              showSideDrawer: true,
            })
          }
        >
          Open 16rem width SideDrawer
        </Button>
        <SizeSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;`

const sidebarDocsCode3 = `// Sized Sidedrawer
import { Div, Button, SideDrawer, Icon, Text } from "react-atomize";

const SizeSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", sm: "24rem" }}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({
              showSideDrawer: true,
            })
          }
        >
          Open 24rem width SideDrawer
        </Button>
        <SizeSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;`

const sidebarDocsCode4 = `// Sized Sidedrawer
import { Div, Button, SideDrawer, Icon, Text } from "react-atomize";

const SizeSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "40rem" }}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({
              showSideDrawer: true,
            })
          }
        >
          Open 40rem width SideDrawer
        </Button>
        <SizeSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;`

class SideDrawerDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: sidebarDocsCode1,
      basicSideDrawerOpen: false,
      sizeSideDrawerOpen: false,
      currentSize: "24rem",
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const {
      selectedCode,
      basicSideDrawerOpen,
      sizeSideDrawerOpen,
      currentSize,
    } = this.state

    return (
      <InfoCodeRow id="sideDrawerDocs" code={selectedCode}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Sidedrawer
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
          If there are too many operations to display, you can wrap them in a{" "}
          <Tag>Dropdown</Tag>. By clicking/hovering on the trigger, a dropdown
          menu should appear, which allows you to choose one option and execute
          relevant actions.
        </Text>

        {/* IconButton */}
        <Text
          textColor="black"
          textSize="subheader"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Basic Sidedrawer
        </Text>
        <Text textColor="medium" m={{ b: "1rem" }}>
          A basic SideDrawer need to be passed <Tag>isOpen</Tag> &{" "}
          <Tag>onClose</Tag> to work.
        </Text>

        <Div d="flex" pos="relative" m={{ b: "2rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={sidebarDocsCode1}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() => this.setState({ basicSideDrawerOpen: true })}
          >
            Show Basic Sidedrawer
          </Button>
          <BasicSideDrawer
            isOpen={basicSideDrawerOpen}
            onClose={() => this.setState({ basicSideDrawerOpen: false })}
          />
        </Div>

        {/* Button Size */}
        <Text
          textColor="black"
          textSize="subheader"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Size
        </Text>
        <Text textColor="medium" m={{ b: "1rem" }}>
          SideDrawer size can be modified by passing the <Tag>w</Tag> props for
          the desired width.
        </Text>
        <Div d="flex" m={{ b: "2rem" }}>
          <Icon
            name="InfoSolid"
            color="info700"
            size="16px"
            m={{ r: "0.5rem", t: "0.25rem" }}
          />
          <Text textColor="info700">
            Note that you need to pass an array for responsive sidebar w.
          </Text>
        </Div>

        <Div d="flex" pos="relative" m={{ b: "1rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={sidebarDocsCode2}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({
                sizeSideDrawerOpen: true,
                currentSize: "16rem",
              })
            }
          >
            Open 16rem width SideDrawer
          </Button>
        </Div>
        <Div d="flex" pos="relative" m={{ b: "1rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={sidebarDocsCode3}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({
                sizeSideDrawerOpen: true,
                currentSize: "24rem",
              })
            }
          >
            Open 24rem width SideDrawer
          </Button>
        </Div>
        <Div d="flex" pos="relative" m={{ b: "2rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={sidebarDocsCode4}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({
                sizeSideDrawerOpen: true,
                currentSize: "40rem",
              })
            }
          >
            Open 40rem width SideDrawer
          </Button>
          <SizeSideDrawer
            w={currentSize}
            isOpen={sizeSideDrawerOpen}
            onClose={() => this.setState({ sizeSideDrawerOpen: false })}
          />
        </Div>
        <AvailableProps
          defaultProps={{
            isOpen: "false",
            pos: "relative",
            w: '{ xs: "100vw", sm: "24rem" }',
            bg: "white",
            p: "1.5rem",
          }}
          available={[
            "isOpen",
            "onClose",
            "onEntering",
            "onEnter",
            "onExiting",
            "onExit",
            "onExited",
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
    )
  }
}

export default SideDrawerDocs

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  )
}

const SizeSideDrawer = ({ isOpen, onClose, w }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", sm: w }}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  )
}
