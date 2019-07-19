import React from "react"
import { Link } from "gatsby"
import { Div, Container, Icon, Anchor, scrollTo, Image, Text } from "atomize"

import logo from "../../images/blog-logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.header = React.createRef()
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    e.isTrusted && requestAnimationFrame(this.animateOnScroll)
  }

  animateOnScroll = () => {
    if (window.scrollY > 20) {
      this.header.current.style.padding = "1.5rem 0"
    } else {
      this.header.current.style.padding = "2rem 0"
    }
  }

  render() {
    return (
      <Div
        ref={this.header}
        tag="header"
        p={{ y: "2rem" }}
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="10"
        bg="white"
        style={{ transition: "padding 0.1s linear" }}
      >
        <Container>
          <Div d="flex" align="center" justify="space-between">
            <Div d="flex" align="center">
              <Link to="/blogpreview/home">
                <Text
                  d="block"
                  textWeight="500"
                  m={{ r: "2rem" }}
                  textColor="black"
                >
                  Home
                </Text>
              </Link>
              <Link to={"/blogpreview/home"}>
                <Text
                  textWeight="500"
                  d={{ xs: "none", md: "block" }}
                  m={{ r: "2rem" }}
                  textColor="black"
                  hoverTextColor="black"
                  onClick={() => {
                    setTimeout(() => {
                      scrollTo("#categories", 100, 0)
                    }, 200)
                  }}
                >
                  Categories
                </Text>
              </Link>
            </Div>
            <Link to="/blogpreview/home">
              <Image
                src={logo}
                h="22px"
                w="auto"
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                cursor="pointer"
              />
            </Link>
            <Div d={{ xs: "none", md: "flex" }} align="center">
              <Anchor
                href="https://www.google.com"
                target="_blanc"
                d="block"
                m={{ r: "2rem" }}
                textColor="black"
                hoverTextColor="black"
              >
                Store
              </Anchor>
              <Anchor
                href="mailto:example@gmail.com"
                d="block"
                textColor="black"
                hoverTextColor="black"
              >
                Contact
              </Anchor>
            </Div>
            <Icon d={{ xs: "block", md: "none" }} name="Email" size="20px" />
          </Div>
        </Container>
      </Div>
    )
  }
}

export default Header
