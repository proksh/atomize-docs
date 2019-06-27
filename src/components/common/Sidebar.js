import React, { Component } from "react"
import { Link } from "gatsby"
import { Div, Text, scrollTo, Image, Input } from "react-atomize"
import { Location } from "@reach/router"
import logo from "../../images/logo.png"

const sidebarLinks = {
  upperLinks: {
    introduction: {
      text: "Introduction",
      page: "/docs/intro",
    },
    setup: {
      text: "Getting Started",
      page: "/docs/setup",
    },
    showcase: {
      text: "Showcase",
      page: "/docs/showcase",
    },
  },
  lowerLinks: {
    themesetup: {
      text: "Theme Setup",
      page: "/docs/theme",
      children: [
        { text: "Available Colors", id: "availableColors" },
        { text: "Add or Edit Colors", id: "addEditColors" },
        { text: "Column Count", id: "columnCount" },
        { text: "Container & Gutter Width", id: "containerGutterWidth" },
        { text: "Shadows", id: "shadows" },
        { text: "Border Radius", id: "rounded" },
        { text: "Font Size", id: "fontSize" },
        { text: "Font Family", id: "fontfamily" },
        { text: "Transition", id: "transition" },
      ],
    },
    utilities: {
      text: "Utilities",
      page: "/docs/utilities",
      children: [
        { text: "Responsive", id: "responsive" },
        { text: "Padding", id: "padding" },
        { text: "Margin", id: "margin" },
        { text: "Background", id: "background" },
        { text: "Text Props", id: "textprops" },
        { text: "Font Family", id: "fontFamily" },
        { text: "Height & Width", id: "heightWidth" },
        { text: "Border Radius", id: "borderRadius" },
        { text: "Border", id: "border" },
        { text: "Display", id: "display" },
        { text: "Shadows", id: "shadows" },
        { text: "Position", id: "position" },
        { text: "Flex", id: "flex" },
        { text: "Cursor", id: "cursor" },
        { text: "Transform", id: "transform" },
        { text: "Transition", id: "transition" },
      ],
    },
    gridcomponents: {
      text: "Grid Components",
      page: "/docs/grid",
      children: [
        { text: "Container", id: "containerDocs" },
        { text: "Row & Col", id: "rowColDocs" },
      ],
    },
    atoms: {
      text: "Atoms",
      page: "/docs/atoms",
      children: [
        { text: "Div", id: "divDocs" },
        { text: "Text", id: "textDocs" },
        { text: "Icon", id: "iconDocs" },
        { text: "Button", id: "buttonDocs" },
        { text: "Input & Textarea", id: "inputDocs" },
        { text: "Checkbox", id: "checkboxDocs" },
        { text: "Radio", id: "radioboxDocs" },
        { text: "Switch", id: "switchDocs" },
        { text: "Image", id: "imageDocs" },
        { text: "Tag", id: "tagDocs" },
        { text: "Anchor", id: "anchorDocs" },
        { text: "Collapse", id: "collapseDocs" },
      ],
    },
    molecules: {
      text: "Molecules",
      page: "/docs/molecules",
      children: [
        { text: "Dropdown", id: "dropdownDocs" },
        { text: "Modal", id: "modalDocs" },
        { text: "Sidedrawer", id: "sidedrawerDocs" },
        { text: "Notification", id: "notificationDocs" },
      ],
    },
    functions: {
      text: "Functions",
      page: "/docs/functions",
      children: [
        { text: "scrollTo", id: "scrollToDocs" },
        { text: "currentDevice", id: "currentDeviceDocs" },
      ],
    },
  },
}

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.animateScrollPositionSidebar = this.animateScrollPositionSidebar.bind(
      this
    )
  }
  componentDidMount() {
    window.addEventListener("scroll", this.animateScrollPositionSidebar)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.animateScrollPositionSidebar)
  }

  animateScrollPositionSidebar(e) {
    if (!document.querySelector("#pageContent")) return
    if (!document.querySelector("#sidebarScrollDistance")) return
    const scrollPos = window.scrollY

    const collectionPageBoundaries = document
      .querySelector("#pageContent")
      .getBoundingClientRect()
    const height = collectionPageBoundaries.height - window.innerHeight

    // change position of scroll in sidebar
    document.querySelector(
      "#sidebarScrollDistance"
    ).style.transform = `scaleY(${scrollPos / height})`

    e.isTrusted && requestAnimationFrame(this.animateScrollPositionSidebar)
  }

  render() {
    const upperLinks = sidebarLinks.upperLinks
    const lowerLinks = sidebarLinks.lowerLinks

    return (
      <Location>
        {locationProps => (
          <Div
            bg="gray100"
            pos="fixed"
            top="0"
            left="0"
            w="16rem"
            h="100vh"
            transform={{ xs: "translateX(-100%)", md: "translateX(0)" }}
            overflow="scroll"
            zIndex="1"
          >
            <Div p={{ x: "2rem", t: "3rem" }}>
              <Link to="/">
                <Image src={logo} h="18px" w="auto" m={{ b: "3rem" }} />
              </Link>
              <Input
                borderColor="gray400"
                type="search"
                placeholder="Filter..."
                textSize="caption"
                h="2rem"
                m={{ b: "2rem" }}
              />
              <Text
                textColor="light"
                textSize="tiny"
                textTransform="uppercase"
                m={{ b: "1rem" }}
              >
                Get Started
              </Text>
              {Object.keys(upperLinks).map(key => (
                <Link to={upperLinks[key].page}>
                  <Text
                    key={key}
                    textColor={
                      locationProps.location.pathname === upperLinks[key].page
                        ? "info700"
                        : "black"
                    }
                    textSize="body"
                    hoverTextColor="info700"
                    textWeight="600"
                    m={{ b: "0.5rem" }}
                    cursor="pointer"
                  >
                    {upperLinks[key].text}
                  </Text>
                </Link>
              ))}
            </Div>
            <Div p="2rem">
              <Text
                textColor="light"
                textSize="tiny"
                textTransform="uppercase"
                m={{ b: "1rem" }}
              >
                Library
              </Text>
              {Object.keys(lowerLinks).map(key => (
                <Div key={key}>
                  <Link to={lowerLinks[key].page}>
                    <Text
                      textColor={
                        locationProps.location.pathname === lowerLinks[key].page
                          ? "info700"
                          : "black"
                      }
                      textSize="body"
                      hoverTextColor="info700"
                      textWeight="600"
                      m={{ b: "0.5rem" }}
                      cursor="pointer"
                    >
                      {lowerLinks[key].text}
                    </Text>
                  </Link>
                  {locationProps.location.pathname === lowerLinks[key].page && (
                    <SidebarCollapse links={lowerLinks[key].children} />
                  )}
                </Div>
              ))}
            </Div>
          </Div>
        )}
      </Location>
    )
  }
}

const SidebarCollapse = ({ isOpen, links }) => {
  return (
    <Div p={{ b: "1rem", l: "1rem", t: "0.5rem" }} pos="relative">
      {links.map(link => (
        <Text
          key={link.id}
          textColor="medium"
          hoverTextColor="dark"
          textSize="caption"
          textWeight="500"
          onClick={() => scrollTo(`#${link.id}`, 50)}
          m={{ b: "0.5rem" }}
          cursor="pointer"
        >
          {link.text}
        </Text>
      ))}
      <Div
        pos="absolute"
        left="0"
        w="1px"
        top="0.75rem"
        bottom="1.75rem"
        bg="gray600"
      >
        <Div
          id="sidebarScrollDistance"
          w="100%"
          h="100%"
          bg="black"
          transformOrigin="top"
          transform="scaleY(0)"
        />
      </Div>
    </Div>
  )
}
