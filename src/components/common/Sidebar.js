import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import { Div, Text, scrollTo, Image, Input, Tag, Container } from "atomize"
import { Location } from "@reach/router"
import logo from "../../images/logo.svg"

const sidebarLinks = {
  upperLinks: {
    introduction: {
      text: "Introduction",
      page: "/docs/react/intro",
    },
    setup: {
      text: "Getting Started",
      page: "/docs/react/setup",
    },
    showcase: {
      text: "Showcase",
      page: "/docs/react/showcase",
    },
    contributing: {
      text: "Contributing",
      page: "/docs/react/contributing",
    },
  },
  lowerLinks: {
    responsive: {
      text: "Responsive",
      page: "/docs/react/responsive",
    },
    spacing: {
      text: "Spacing",
      page: "/docs/react/spacing",
    },
    themesetup: {
      text: "Theme Setup",
      page: "/docs/react/theme",
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
    gridcomponents: {
      text: "Grid",
      page: "/docs/react/grid",
      children: [
        { text: "Container", id: "containerDocs" },
        { text: "Row & Col", id: "rowColDocs" },
      ],
    },
    atoms: {
      text: "Atoms",
      page: "/docs/react/atoms",
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
      page: "/docs/react/molecules",
      children: [
        { text: "Dropdown", id: "dropdownDocs" },
        { text: "Modal", id: "modalDocs" },
        { text: "Sidedrawer", id: "sideDrawerDocs" },
        { text: "Notification", id: "notificationnDocs" },
      ],
    },
    functions: {
      text: "Functions",
      page: "/docs/react/functions",
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

    this.state = {
      showMobileHeaderMenu: false,
      query: "",
    }

    this.animateScrollPositionSidebar = this.animateScrollPositionSidebar.bind(
      this
    )
  }

  getFilteredList = () => {
    const { query } = this.state
    const filtered = {
      upperLinks: {},
      lowerLinks: {},
    }

    Object.keys(sidebarLinks.upperLinks).forEach(key => {
      if (
        key.indexOf(query) > -1 ||
        sidebarLinks.upperLinks[key].text.toLowerCase().indexOf(query) > -1
      ) {
        filtered.upperLinks[key] = sidebarLinks.upperLinks[key]
      }
    })

    Object.keys(sidebarLinks.lowerLinks).forEach(key => {
      if (
        key.toLowerCase().indexOf(query) > -1 ||
        sidebarLinks.lowerLinks[key].text.toLowerCase().indexOf(query) > -1
      ) {
        filtered.lowerLinks[key] = sidebarLinks.lowerLinks[key]
      } else {
        sidebarLinks.lowerLinks[key].children &&
          sidebarLinks.lowerLinks[key].children.forEach((item, index) => {
            if (item.text.toLowerCase().indexOf(query) > -1) {
              if (!filtered.lowerLinks[key]) {
                filtered.lowerLinks[key] = {
                  text: sidebarLinks.lowerLinks[key].text,
                  page: sidebarLinks.lowerLinks[key].page,
                  children: [],
                }
              }

              filtered.lowerLinks[key].children.push(
                sidebarLinks.lowerLinks[key].children[index]
              )
            }
          })
      }
    })

    return filtered
  }

  toggleHeaderMenu = () => {
    const { showMobileHeaderMenu } = this.state

    this.setState({ showMobileHeaderMenu: !showMobileHeaderMenu })
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
    const filteredList = this.getFilteredList()

    const { showMobileHeaderMenu, query } = this.state

    const upperLinks = filteredList.upperLinks
    const lowerLinks = filteredList.lowerLinks

    return (
      <Location>
        {locationProps => (
          <>
            <SidebarMobile
              showMobileHeaderMenu={showMobileHeaderMenu}
              toggleHeaderMenu={this.toggleHeaderMenu}
              upperLinks={upperLinks}
              lowerLinks={lowerLinks}
            />
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
                <Div
                  d="flex"
                  justify="space-between"
                  align="center"
                  m={{ b: "1rem" }}
                >
                  <Link to="/">
                    <Image src={logo} h="18px" w="auto" />
                  </Link>
                  <Tag m={{ t: "-0.25rem" }}>v1.0.9</Tag>
                </Div>
                <Input
                  bg="white"
                  borderColor="gray400"
                  type="search"
                  rounded="sm"
                  placeholder="Filter..."
                  textSize="caption"
                  h="2rem"
                  m={{ b: "2rem" }}
                  query={query}
                  onChange={e =>
                    this.setState({ query: e.target.value.toLowerCase() })
                  }
                />
                {!(Object.entries(upperLinks).length === 0) && (
                  <Text
                    textColor="light"
                    textSize="tiny"
                    textTransform="uppercase"
                    m={{ b: "1rem" }}
                  >
                    Get Started
                  </Text>
                )}

                {Object.keys(upperLinks).map(key => (
                  <Link to={upperLinks[key].page}>
                    <Text
                      key={key}
                      textColor={
                        locationProps.location.pathname.includes(
                          upperLinks[key].page
                        )
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
                <Div>
                  <Link to="/docs/react/ui-templates">
                    <Div
                      d="inline-flex"
                      textColor={
                        locationProps.location.pathname.includes(
                          "/docs/react/ui-templates"
                        )
                          ? "info700"
                          : "black"
                      }
                      hoverTextColor="info700"
                      textSize="body"
                      textWeight="600"
                      m={{ b: "0.5rem" }}
                      cursor="pointer"
                      align="center"
                    >
                      UI Templates
                      <Div
                        h="0.375rem"
                        w="0.375rem"
                        m={{ l: "0.75rem" }}
                        rounded="circle"
                        bg="success700"
                      ></Div>
                    </Div>
                  </Link>
                </Div>
              </Div>
              {!(Object.entries(lowerLinks).length === 0) && (
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
                            locationProps.location.pathname.includes(
                              lowerLinks[key].page
                            )
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
                      {(query != "" ||
                        locationProps.location.pathname.includes(
                          lowerLinks[key].page
                        )) && (
                        <SidebarCollapse
                          currentPage={locationProps.location.pathname.includes(
                            lowerLinks[key].page
                          )}
                          goToPage={lowerLinks[key].page}
                          links={lowerLinks[key].children}
                        />
                      )}
                    </Div>
                  ))}
                </Div>
              )}
            </Div>
          </>
        )}
      </Location>
    )
  }
}

class SidebarCollapse extends React.Component {
  onLinkClick = id => {
    const { currentPage, goToPage } = this.props

    if (currentPage) {
      scrollTo(`#${id}`, 50)
    } else {
      navigate(`${goToPage}#${id}`)
    }
  }
  render() {
    const { links } = this.props

    return (
      <Div p={links && { b: "1rem", l: "1rem", t: "0.5rem" }} pos="relative">
        {links &&
          links.map(link => (
            <Text
              key={link.id}
              textColor="medium"
              hoverTextColor="dark"
              textSize="caption"
              textWeight="500"
              onClick={() => this.onLinkClick(link.id)}
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
}
const SidebarMobile = ({
  showMobileHeaderMenu,
  toggleHeaderMenu,
  upperLinks,
  lowerLinks,
}) => (
  <Div
    d={{ xs: "block", md: "none" }}
    pos="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="100"
    p={{ y: { xs: "1.5rem", md: "1rem" } }}
    bg="white"
  >
    <Container d="flex" align="center" justify="space-between">
      <Div>
        <Link to="/">
          <Image src={logo} h="18px" w="auto" />
        </Link>
      </Div>

      {/* Icon For Mobile */}
      <Div
        d={{ xs: "flex", md: "none" }}
        flexDir="column"
        onClick={toggleHeaderMenu}
      >
        <Div
          h="2px"
          w="1rem"
          bg="black"
          rounded="lg"
          style={{
            transform: `translateY(${
              showMobileHeaderMenu ? "1" : "-2"
            }px)rotate(${showMobileHeaderMenu ? "135" : "0"}deg)`,
          }}
          transition
        ></Div>
        <Div
          h="2px"
          w="1rem"
          bg="black"
          rounded="lg"
          style={{
            transform: `translateY(${
              showMobileHeaderMenu ? "-1" : "2"
            }px)rotate(${showMobileHeaderMenu ? "45" : "0"}deg)`,
          }}
          transition
        ></Div>
      </Div>

      {/* Links for Desktop */}
      <Div
        d="flex"
        bg="white"
        h="100vh"
        overflow="auto"
        align="strech"
        flexDir="column"
        pos="absolute"
        onClick={() => toggleHeaderMenu(false)}
        p={{
          t: "6rem",
          b: "2rem",
          x: "1.5rem",
        }}
        top="0"
        left="0"
        right="0"
        zIndex="-1"
        shadow="4"
        opacity={showMobileHeaderMenu ? "1" : "0"}
        transform={`translateY(${showMobileHeaderMenu ? "0" : "-100%"})`}
        transition
      >
        <Text m={{ b: "0.5rem" }} textSize="caption" textColor="light">
          Get Started
        </Text>
        {Object.keys(upperLinks).map(key => (
          <Link to={upperLinks[key].page} key={key}>
            <Text
              m={{ b: "0.5rem" }}
              textWeight="500"
              textColor="black"
              transition
            >
              {upperLinks[key].text}
            </Text>
          </Link>
        ))}
        <Text
          m={{ b: "0.5rem", t: "2rem" }}
          textSize="caption"
          textColor="light"
        >
          Liberary
        </Text>
        {Object.keys(lowerLinks).map(key => (
          <Link to={lowerLinks[key].page} key={key}>
            <Text
              m={{ b: "0.5rem" }}
              textWeight="500"
              textColor="black"
              transition
            >
              {lowerLinks[key].text}
            </Text>
          </Link>
        ))}
      </Div>
    </Container>
  </Div>
)
