import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMobileHeaderMenu: false,
      showProductHunt: true,
    }
  }

  toggleHeaderMenu = value => {
    this.setState({ showMobileHeaderMenu: value })

    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1)
    }, 400)
  }

  render() {
    const { showMobileHeaderMenu, showProductHunt } = this.state

    return (
      <>
        <ProductHuntBanner
          show={showProductHunt}
          close={() => this.setState({ showProductHunt: false })}
        />
        <Div
          tag="header"
          pos="fixed"
          top="0"
          transition
          left="0"
          right="0"
          zIndex="100"
          p={{ y: { xs: "1.5rem", md: "1rem" } }}
        >
          <Div
            pos="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="white"
            opacity="1"
            zIndex="-1"
            styele={{ WebkitFilter: "blur(2px)", filter: "blur(2px)" }}
          ></Div>
          <Container d="flex" align="center" justify="space-between">
            <Div cursor="pointer">
              <Image
                src={logo}
                alt="atomize design system logo"
                h="18px"
                w="auto"
              />
            </Div>

            {/* Icon For Mobile */}

            <Div
              d={{ xs: "flex", md: "none" }}
              flexDir="column"
              onClick={() => this.toggleHeaderMenu(!showMobileHeaderMenu)}
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
              onClick={() => this.toggleHeaderMenu(false)}
              bg={{ xs: "white", md: "transparent" }}
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
              opacity={{
                xs: showMobileHeaderMenu ? "1" : "0",
                md: "1",
              }}
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
                onClick={() => scrollTo("#features")}
              >
                Features
              </Anchor>

              <Anchor
                href="https://github.com/proksh/atomize"
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="500"
                textColor="medium"
                hoverTextColor="black"
                transition
              >
                Github
              </Anchor>

              <Anchor
                href="http://atomizedesign.com"
                target="_blank"
                m={{ r: "2.5rem", b: { xs: "4rem", md: "0" } }}
                textWeight="500"
                textColor="medium"
                hoverTextColor="black"
                transition
              >
                For Designers
              </Anchor>

              <Link to="/docs/react/intro">
                <Button
                  bg="gray300"
                  hoverBg="gray400"
                  textColor="medium"
                  w={{ xs: "100%", sm: "8.5rem" }}
                  rounded="lg"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  Documentation
                </Button>
              </Link>
            </Div>
          </Container>
        </Div>
      </>
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

const ProductHuntBanner = ({ show, close }) => (
  <>
    <Div
      d="flex"
      h={show ? { xs: "5.25rem", sm: "3.75rem" } : "0"}
      opacity={show ? "1" : "0"}
      overflow="hidden"
      flexWrap="wrap"
      justify="center"
      align="center"
      textColor="white"
      pos="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="110"
      textAlign="center"
      p="0.75rem"
      style={{ background: "#DA552F" }}
    >
      <Anchor
        href="https://www.producthunt.com/posts/atomize-react"
        target="_blank"
        d="flex"
        flexWrap="wrap"
        justify="center"
        align="center"
        textColor="white"
        hoverTextColor="white"
      >
        We are trending on{" "}
        <Image
          src={producthunt}
          h="2.25rem"
          w="auto"
          cursor="pointer"
          m={{ x: "0.5rem" }}
        />{" "}
        It will be a real help if you could support us 👉{" "}
      </Anchor>
      <Icon
        name="Cross"
        pos="absolute"
        right="1rem"
        top="50%"
        transform="translateY(-50%)"
        color="white"
        size="16px"
        onClick={close}
      />
    </Div>
  </>
)
