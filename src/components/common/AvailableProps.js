import React from "react"
import {
  Div,
  Row,
  Col,
  Anchor,
  Input,
  Icon,
  Text,
  SideDrawer,
} from "react-atomize"

import TagUtility from "../utilitiesSidebarComponent/TagUtility"
import IconName from "../utilitiesSidebarComponent/IconName"
import IconColor from "../utilitiesSidebarComponent/IconColor"
import IconHoverColor from "../utilitiesSidebarComponent/IconHoverColor"
import IconSize from "../utilitiesSidebarComponent/IconSize"
import Padding from "../utilitiesSidebarComponent/Padding"
import Margin from "../utilitiesSidebarComponent/Margin"
import Display from "../utilitiesSidebarComponent/Display"
import Align from "../utilitiesSidebarComponent/Align"
import Justify from "../utilitiesSidebarComponent/Justify"
import FlexDir from "../utilitiesSidebarComponent/FlexDir"
import FlexGrow from "../utilitiesSidebarComponent/FlexGrow"
import FlexWrap from "../utilitiesSidebarComponent/FlexWrap"
import Rounded from "../utilitiesSidebarComponent/Rounded"
import Background from "../utilitiesSidebarComponent/Background"
import BackgroundImage from "../utilitiesSidebarComponent/BackgroundImage"
import BackgroundPosition from "../utilitiesSidebarComponent/BackgroundPosition"
import BackgroundSize from "../utilitiesSidebarComponent/BackgroundSize"
import Height from "../utilitiesSidebarComponent/Height"
import MinHeight from "../utilitiesSidebarComponent/MinHeight"
import MaxHeight from "../utilitiesSidebarComponent/MaxHeight"
import Width from "../utilitiesSidebarComponent/Width"
import MinWidth from "../utilitiesSidebarComponent/MinWidth"
import MaxWidth from "../utilitiesSidebarComponent/MaxWidth"
import Border from "../utilitiesSidebarComponent/Border"
import BorderColor from "../utilitiesSidebarComponent/BorderColor"
import TextSize from "../utilitiesSidebarComponent/TextSize"
import TextWeight from "../utilitiesSidebarComponent/TextWeight"
import TextDecor from "../utilitiesSidebarComponent/TextDecor"
import TextAlign from "../utilitiesSidebarComponent/TextAlign"
import TextTransform from "../utilitiesSidebarComponent/TextTransform"
import TextColor from "../utilitiesSidebarComponent/TextColor"
import HoverTextColor from "../utilitiesSidebarComponent/HoverTextColor"
import FontFamily from "../utilitiesSidebarComponent/FontFamily"
import Shadows from "../utilitiesSidebarComponent/Shadows"
import HoverShadow from "../utilitiesSidebarComponent/HoverShadow"
import Position from "../utilitiesSidebarComponent/Position"
import Transform from "../utilitiesSidebarComponent/Transform"
import Transition from "../utilitiesSidebarComponent/Transition"
import Overflow from "../utilitiesSidebarComponent/Overflow"
import Cursor from "../utilitiesSidebarComponent/Cursor"
import Prefix from "../utilitiesSidebarComponent/Prefix"
import Suffix from "../utilitiesSidebarComponent/Suffix"
import FocusBg from "../utilitiesSidebarComponent/FocusBg"
import FocusBorderColor from "../utilitiesSidebarComponent/FocusBorderColor"
import FocusTextColor from "../utilitiesSidebarComponent/FocusTextColor"
import FocusShadow from "../utilitiesSidebarComponent/FocusShadow"
import IsOpen from "../utilitiesSidebarComponent/IsOpen"
import IsLoading from "../utilitiesSidebarComponent/IsLoading"
import ActiveColor from "../utilitiesSidebarComponent/ActiveColor"
import InactiveColor from "../utilitiesSidebarComponent/InactiveColor"
import Disabled from "../utilitiesSidebarComponent/Disabled"
import Undetermine from "../utilitiesSidebarComponent/Undetermine"
import ActiveShadow from "../utilitiesSidebarComponent/ActiveShadow"
import InactiveShadow from "../utilitiesSidebarComponent/InactiveShadow"
import OpenSuffix from "../utilitiesSidebarComponent/OpenSuffix"
import CloseSuffix from "../utilitiesSidebarComponent/CloseSuffix"
import DropdownMenuUtil from "../utilitiesSidebarComponent/DropdownMenuUtil"
import TargetHover from "../utilitiesSidebarComponent/TargetHover"
import Direction from "../utilitiesSidebarComponent/Direction"
import OnClose from "../utilitiesSidebarComponent/OnClose"
import OnEnter from "../utilitiesSidebarComponent/OnEnter"
import OnEntering from "../utilitiesSidebarComponent/OnEntering"
import OnExit from "../utilitiesSidebarComponent/OnExit"
import OnExiting from "../utilitiesSidebarComponent/OnExiting"
import OnExited from "../utilitiesSidebarComponent/OnExited"

const allProps = {
  tag: {
    name: "Tag",
    tag: "tag",
    component: <TagUtility />,
  },
  menu: {
    name: "Dropdown Menu",
    tag: "menu dropdown active",
    component: <DropdownMenuUtil />,
  },
  isOpen: {
    name: "Is Open",
    tag: "open show",
    component: <IsOpen />,
  },
  targethover: {
    name: "Target Hover",
    tag: "target hover open",
    component: <TargetHover />,
  },
  direction: {
    name: "Direction",
    tag: "direction position",
    component: <Direction />,
  },
  onClose: {
    name: "On Close",
    tag: "on close function",
    component: <OnClose />,
  },
  onEntering: {
    name: "On Entering",
    tag: "on entering function",
    component: <OnEntering />,
  },
  onEnter: {
    name: "On Enter",
    tag: "on enter function",
    component: <OnEnter />,
  },
  onExit: {
    name: "On Exit",
    tag: "on exit",
    component: <OnExit />,
  },
  onExiting: {
    name: "On Exiting",
    tag: "on exit",
    component: <OnExiting />,
  },
  onExited: {
    name: "On Exited",
    tag: "on exited",
    component: <OnExited />,
  },
  isLoading: {
    name: "Loading",
    tag: "loading",
    component: <IsLoading />,
  },
  isLoading: {
    name: "Loading",
    tag: "loading",
    component: <IsLoading />,
  },
  disabled: {
    name: "Disabled",
    tag: "disabled",
    component: <Disabled />,
  },
  undetermine: {
    name: "Undetermine",
    tag: "undetermine",
    component: <Undetermine />,
  },
  activeColor: {
    name: "Active Color",
    tag: "active color",
    component: <ActiveColor />,
  },
  inactiveColor: {
    name: "Inactive Color",
    tag: "inactive color",
    component: <InactiveColor />,
  },
  activeShadow: {
    name: "Active Shadow",
    tag: "active shadow",
    component: <ActiveShadow />,
  },
  inactiveShadow: {
    name: "Inactive Shadow",
    tag: "inactive shadow",
    component: <InactiveShadow />,
  },
  prefix: {
    name: "Prefix",
    tag: "prefix icon",
    component: <Prefix />,
  },
  suffix: {
    name: "Suffix",
    tag: "suffix icon",
    component: <Suffix />,
  },
  openSuffix: {
    name: "Open Suffix",
    tag: "active open suffix icon",
    component: <OpenSuffix />,
  },
  closeSuffix: {
    name: "Close Suffix",
    tag: "inactive close suffix icon",
    component: <CloseSuffix />,
  },
  name: {
    name: "Name",
    tag: "icon name",
    component: <IconName />,
  },
  color: {
    name: "Color",
    tag: "icon color",
    component: <IconColor />,
  },
  hoverColor: {
    name: "Color",
    tag: "icon hover color",
    component: <IconHoverColor />,
  },
  size: {
    name: "Size",
    tag: "icon size",
    component: <IconSize />,
  },
  p: {
    name: "Padding",
    tag: "padding",
    component: <Padding />,
  },
  m: {
    name: "Margin",
    tag: "margin",
    component: <Margin />,
  },
  d: {
    name: "Display",
    tag: "display",
    component: <Display />,
  },
  align: {
    name: "Align Items",
    tag: "flex align items",
    component: <Align />,
  },
  justify: {
    name: "Justify Content",
    tag: "flex justify content",
    component: <Justify />,
  },
  flexDir: {
    name: "Flex Direction",
    tag: "flex direction",
    component: <FlexDir />,
  },
  flexGrow: {
    name: "Flex Grow",
    tag: "flex grow",
    component: <FlexGrow />,
  },
  flexWrap: {
    name: "Flex Wrap",
    tag: "flex wrap",
    component: <FlexWrap />,
  },
  rounded: {
    name: "Rounded",
    tag: "rounded border radius",
    component: <Rounded />,
  },
  bg: {
    name: "Background",
    tag: "background",
    component: <Background />,
  },
  hoverBg: {
    name: "Hover Background",
    tag: "hover background",
    component: <Background />,
  },
  focusBg: {
    name: "Focus Background",
    tag: "focus background",
    component: <FocusBg />,
  },
  bgImg: {
    name: "Background Image",
    tag: "background image",
    component: <BackgroundImage />,
  },
  bgPos: {
    name: "Background Position",
    tag: "background position",
    component: <BackgroundPosition />,
  },
  bgSize: {
    name: "Background Size",
    tag: "background size",
    component: <BackgroundSize />,
  },
  h: {
    name: "Height",
    tag: "height",
    component: <Height />,
  },
  maxH: {
    name: "Max Height",
    tag: "maximum height",
    component: <MaxHeight />,
  },
  minH: {
    name: "Min Height",
    tag: "minimum height",
    component: <MinHeight />,
  },
  w: {
    name: "Width",
    tag: "width",
    component: <Width />,
  },
  maxW: {
    name: "Max Width",
    tag: "maximum width",
    component: <MaxWidth />,
  },
  minW: {
    name: "Min Width",
    tag: "minimum width",
    component: <MinWidth />,
  },
  border: {
    name: "Border",
    tag: "border",
    component: <Border />,
  },
  borderColor: {
    name: "Border Color",
    tag: "border color",
    component: <BorderColor />,
  },
  hoverBorderColor: {
    name: "Hover Border Color",
    tag: "hover border color",
    component: <BorderColor />,
  },
  focusBorderColor: {
    name: "Focus Border Color",
    tag: "focus border color",
    component: <FocusBorderColor />,
  },
  textSize: {
    name: "Text Size",
    tag: "text size font",
    component: <TextSize />,
  },
  textWeight: {
    name: "Text Weight",
    tag: "text weight font",
    component: <TextWeight />,
  },
  textDecor: {
    name: "Text Decoration",
    tag: "text decoration underline",
    component: <TextDecor />,
  },
  textTransform: {
    name: "Text Transform",
    tag: "text transform",
    component: <TextTransform />,
  },
  textAlign: {
    name: "Text Align",
    tag: "text align font",
    component: <TextAlign />,
  },
  textColor: {
    name: "Text Color",
    tag: "text color font",
    component: <TextColor />,
  },
  hoverTextColor: {
    name: "Hover Text Color",
    tag: "hover text color font",
    component: <HoverTextColor />,
  },
  focusTextColor: {
    name: "Focus Text Color",
    tag: "focus text color font",
    component: <FocusTextColor />,
  },
  fontFamily: {
    name: "Font Family",
    tag: "text font family",
    component: <FontFamily />,
  },
  shadow: {
    name: "Shadow",
    tag: "shadow",
    component: <Shadows />,
  },
  hoverShadow: {
    name: "Hover Shadow",
    tag: "hover shadow",
    component: <HoverShadow />,
  },
  focusShadow: {
    name: "Focus Shadow",
    tag: "focus shadow",
    component: <FocusShadow />,
  },
  position: {
    name: "Position",
    tag: "position",
    component: <Position />,
  },
  top: {
    name: "Top",
    tag: "top absolute fixed position",
    component: <Position />,
  },
  left: {
    name: "Left",
    tag: "left absolute fixed position",
    component: <Position />,
  },
  right: {
    name: "Right",
    tag: "right absolute fixed position",
    component: <Position />,
  },
  bottom: {
    name: "Bottom",
    tag: "bottom absolute fixed position",
    component: <Position />,
  },
  transform: {
    name: "Transform",
    tag: "transform",
    component: <Transform />,
  },
  transition: {
    name: "Transition",
    tag: "transition",
    component: <Transition />,
  },
  overflow: {
    name: "Overflow",
    tag: "overflow",
    component: <Overflow />,
  },
  cursor: {
    name: "Cursor",
    tag: "cursor",
    component: <Cursor />,
  },
}

class AvailableProps extends React.Component {
  state = {
    showFull: false,
    query: "",
    showDetail: false,
    selectedKey: null,
  }

  getFilteredProps = () => {
    const { available } = this.props
    const { query } = this.state
    const filtered = {}

    Object.keys(allProps).forEach(key => {
      // allProps[key].tag
      if (
        allProps[key].tag.indexOf(query) > -1 &&
        available.indexOf(key) > -1
      ) {
        filtered[key] = allProps[key]
      }
    })

    return filtered
  }

  render() {
    const { showFull, query, showDetail, selectedKey } = this.state

    const { defaultProps, componentName } = this.props
    const filteredProps = this.getFilteredProps()
    const filteredPropsCount = Object.keys(filteredProps).length

    return (
      <Div pos="relative" m={{ b: "2rem" }}>
        <SideDrawer
          p="2rem"
          w={{ xs: "100vw", md: "30vw" }}
          isOpen={showDetail}
          onClose={() => this.setState({ showDetail: false })}
        >
          <Div
            d="flex"
            align="center"
            p={{ b: "1rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
            justify="space-between"
          >
            <Text textWeight="500">
              {allProps[selectedKey] && allProps[selectedKey].name}
            </Text>
            <Icon
              name="Cross"
              size="18px"
              cursor="pointer"
              onClick={() => this.setState({ showDetail: false })}
            />
          </Div>
          {allProps[selectedKey] && allProps[selectedKey].component}
        </SideDrawer>
        <Div
          border={{ b: "1px solid" }}
          borderColor="gray400"
          p={{ y: "0.5rem" }}
        >
          <Row align="center">
            <Col size={4}>{componentName ? componentName : "Avail"} Props</Col>
            <Col size={4}>Default Value</Col>
            <Col size={4} d="flex" justify="flex-end">
              <Input
                h="2rem"
                w="100%"
                prefix={
                  <Icon
                    name="Search"
                    pos="absolute"
                    size="16px"
                    left="0.5rem"
                    top="50%"
                    transform="translateY(-50%)"
                  />
                }
                p={{ l: "2rem", r: "0.5rem" }}
                placeholder="Filter (Ex: flex)"
                textSize="caption"
                query={query}
                onChange={e => this.setState({ query: e.target.value })}
              />
            </Col>
          </Row>
        </Div>
        <Div maxH={showFull ? "auto" : "11.75rem"} overflow="hidden">
          {filteredPropsCount === 0 && (
            <Text
              textSize="caption"
              textColor="light"
              textAlign="center"
              p={{ y: "1rem" }}
            >
              Empty List
            </Text>
          )}
          {filteredPropsCount > 0 &&
            Object.keys(filteredProps).map(key => (
              <Div
                key={key}
                border={{ b: "1px solid" }}
                borderColor="gray300"
                p={{ y: "0.5rem" }}
                textSize="caption"
                hoverBg="gray100"
                onClick={() =>
                  this.setState({ showDetail: true, selectedKey: key })
                }
                transition
                cursor="pointer"
              >
                <Row>
                  <Col size={4}>{key}</Col>
                  <Col size={5}>
                    {(defaultProps && defaultProps[key]) || "-"}
                  </Col>
                  <Col size={3} d="flex" justify="flex-end">
                    <Anchor textAlign="right">View Detail</Anchor>
                    {/* <Icon name="LongRight" color="info700" size="16px" /> */}
                  </Col>
                </Row>
              </Div>
            ))}
        </Div>
        {filteredPropsCount > 5 && !showFull && (
          <Div
            pos="absolute"
            p={{ l: "0.5rem", r: "1rem", y: "0.25rem" }}
            d="flex"
            align="center"
            justify="center"
            bottom="-2.5rem"
            left="50%"
            transform="translateX(-50%)"
            border="1px solid"
            borderColor="gray400"
            rounded="circle"
            hoverShadow="4"
            textSize="caption"
            textWeight="500"
            textColor="light"
            cursor="pointer"
            transition
            onClick={() => this.setState({ showFull: !showFull })}
          >
            <Icon
              name={showFull ? "UpArrow" : "DownArrow"}
              size="20px"
              color="gray700"
              m={{ r: "0.25rem" }}
            />
            Show {showFull ? "Less" : "More"}
          </Div>
        )}
      </Div>
    )
  }
}

export default AvailableProps
