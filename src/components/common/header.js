import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Image, Container, Button, Anchor } from "react-atomize"
import logo from "../../images/logo.png"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMobileHeaderMenu: false,
    }
  }

  toggleHeaderMenu = () => {
    const { showMobileHeaderMenu } = this.state

    this.setState({ showMobileHeaderMenu: !showMobileHeaderMenu })
  }

  render() {
    const { siteTitle } = this.props
    const { showMobileHeaderMenu } = this.state

    return (
      <Div
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
            <Image src={logo} h="18px" w="auto" />
          </Div>

          {/* Icon For Mobile */}
          <Div
            d={{ xs: "flex", md: "none" }}
            flexDir="column"
            onClick={this.toggleHeaderMenu}
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
            align={{ xs: "strech", md: "center" }}
            flexDir={{ xs: "column", md: "row" }}
            pos={{ xs: "absolute", md: "static" }}
            p={{
              t: { xs: "6rem", md: "0" },
              b: { xs: "2rem", md: "0" },
              x: { xs: "1.5rem", md: "0" },
            }}
            top="0"
            left="0"
            right="0"
            zIndex={{ xs: "-1", md: "0" }}
            shadow={{ xs: "4", md: "0" }}
            transform={{
              xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
              md: "none",
            }}
            transition
          >
            <Anchor
              m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
              textWeight="500"
              textColor="medium"
              hoverTextColor="black"
              transition
            >
              Features
            </Anchor>
            <Anchor
              m={{ r: "2.5rem", b: { xs: "1rem", md: "0" } }}
              textWeight="500"
              textColor="medium"
              hoverTextColor="black"
              transition
            >
              Github
            </Anchor>
            <Link to="/docs/intro">
              <Button
                bg="info200"
                hoverBg="info300"
                textColor="info800"
                w={{ xs: "100%", sm: "8.5rem" }}
                m={{ t: { xs: "1rem", md: "0" } }}
                rounded="lg"
                style={{ letterSpacing: "-0.5px" }}
              >
                Documentation
              </Button>
            </Link>
          </Div>
        </Container>
      </Div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
