import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Image, Container, Button, Text } from "react-atomize"
import logo from "../../images/logo.png"

const Header = ({ siteTitle }) => (
  <Div
    pos="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="100"
    p={{ y: "1rem" }}
    bg="white"
  >
    <Container d="flex" align="center" justify="space-between">
      <Div>
        <Image src={logo} h="18px" w="auto" />
      </Div>
      <Div d="flex" align="center">
        <Text m={{ r: "2rem" }} textWeight="500" textColor="medium">
          Features
        </Text>
        <Text m={{ r: "2.5rem" }} textWeight="500" textColor="medium">
          Github
        </Text>
        <Link to="/docs/intro">
          <Button
            bg="info200"
            textColor="info800"
            w="8.5rem"
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
