import _ from "lodash"
import React from "react"
import { Div, Text, Icon, Input, Row, Col, Container, Anchor } from "atomize"

const relatedLinks = [
  {
    name: "Privacy",
    link: "https://www.google.com",
    external: true,
  },
  {
    name: "Terms",
    link: "https://www.google.com",
    external: true,
  },
  {
    name: "My Books",
    link: "https://www.google.com",
    external: true,
  },
  {
    name: "Youtube",
    link: "https://www.google.com",
    external: true,
  },
]

const followLinks = [
  {
    name: "Twitter",
    link: "https://www.google.com",
    external: true,
  },
  {
    name: "Linkedin",
    link: "https://www.google.com",
    external: true,
  },
  {
    name: "Instagram",
    link: "https://www.google.com",
    external: true,
  },
]

const contactLinks = [
  {
    name: "9999 999 999",
    link: "tel:9999999999",
    external: false,
  },
  {
    name: "blog@gmail.com",
    link: "mailto:blog@gmail.com",
    external: false,
  },
]

class Footer extends React.Component {
  render() {
    return (
      <Div p={{ t: "5rem", b: "4rem" }} bg="white">
        <Container>
          <Row>
            <Col size={{ xs: 12, md: 4 }}>
              <Div m={{ b: "6rem" }}>
                <Text textSize="title" m={{ b: "3rem" }}>
                  Sign up to receive updates on new launches, events, and news.
                  Unsubscribe anytime.
                </Text>
                <Input
                  w="100%"
                  maxW="17rem"
                  placeholder="Email"
                  border={{ b: "1px solid" }}
                  borderColor="gray400"
                  rounded="0"
                  p="0"
                  m={{ b: "2rem" }}
                  focusBorderColor="black"
                  suffix={
                    <Icon
                      name="LongRight"
                      size="20px"
                      pos="absolute"
                      right="0"
                      top="50%"
                      transform="translateY(-50%)"
                    />
                  }
                />
              </Div>
            </Col>
            <Col size={{ xs: 6, md: 2 }} offset={{ md: 2 }}>
              <Div m={{ b: "4rem" }}>
                <Text
                  textColor="light"
                  textTransform="uppercase"
                  m={{ b: "1.5rem" }}
                >
                  Related
                </Text>
                {relatedLinks.map(link => (
                  <Anchor
                    href={link.link}
                    target={link.external && "_blanc"}
                    d="block"
                    textColor="black"
                    textWeight="400"
                    hoverTextColor="medium"
                    textSize="subheader"
                    m={{ b: "0.5rem" }}
                  >
                    {link.name}
                  </Anchor>
                ))}
              </Div>
            </Col>
            <Col size={{ xs: 6, md: 2 }}>
              <Div m={{ b: "4rem" }}>
                <Text
                  textColor="light"
                  textTransform="uppercase"
                  m={{ b: "1.5rem" }}
                >
                  Follow Us
                </Text>
                {followLinks.map(link => (
                  <Anchor
                    href={link.link}
                    target={link.external && "_blanc"}
                    d="block"
                    textColor="black"
                    textWeight="400"
                    hoverTextColor="medium"
                    textSize="subheader"
                    m={{ b: "0.5rem" }}
                  >
                    {link.name}
                  </Anchor>
                ))}
              </Div>
            </Col>
            <Col size={{ xs: 6, md: 2 }}>
              <Div m={{ b: "4rem" }}>
                <Text
                  textColor="light"
                  textTransform="uppercase"
                  m={{ b: "1.5rem" }}
                >
                  Contact
                </Text>
                {contactLinks.map(link => (
                  <Anchor
                    href={link.link}
                    target={link.external && "_blanc"}
                    d="block"
                    textColor="black"
                    textWeight="400"
                    hoverTextColor="medium"
                    textSize="subheader"
                    m={{ b: "0.5rem" }}
                  >
                    {link.name}
                  </Anchor>
                ))}
              </Div>
            </Col>
          </Row>
        </Container>
      </Div>
    )
  }
}

export default Footer
