import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Anchor, Icon, Image } from "atomize"

import logoSketch from "../../images/logo-sketch.svg"
import logoReact from "../../images/logo-react.svg"

const DesignDevelopment = () => {
  return (
    <Div tag="section">
      <Container>
        <Div p={{ t: "7.5rem", b: "12rem" }}>
          <Div d="flex" flexDir="column" align="center">
            <Text
              tag="h2"
              fontFamily="secondary"
              textSize="display1"
              textAlign="center"
              textWeight="500"
              maxW="42rem"
              m={{ b: "4rem" }}
            >
              A combination of tools to design and develop modern applications
              at ease.
            </Text>
          </Div>
          <Div>
            <Row>
              <Col size={{ xs: 12, md: 6, lg: 4 }} offset={{ xs: 0, lg: 2 }}>
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  rounded="xl"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "0" } }}
                >
                  <Image
                    src={logoSketch}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    Design
                  </Text>

                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    Design your website by using Atomize for Sketch App.
                  </Text>
                  <Anchor
                    d="flex"
                    align="center"
                    href="http://www.atomizedesign.com/"
                    target="_blank"
                  >
                    Design Resource
                    <Icon
                      name="LongRight"
                      size="16px"
                      m={{ l: "1rem" }}
                      color="info700"
                    />
                  </Anchor>
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 4 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  bg="white"
                  rounded="xl"
                  p="2rem"
                >
                  <Image
                    src={logoReact}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    Development
                  </Text>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    Bring your designs to life with Atomize for React JS.
                  </Text>
                  <Link to="/docs/react/intro">
                    <Text
                      textWeight="500"
                      color="info700"
                      hoverColor="info800"
                      d="flex"
                      align="center"
                    >
                      Documentation
                      <Icon
                        name="LongRight"
                        size="16px"
                        m={{ l: "1rem" }}
                        color="info700"
                      />
                    </Text>
                  </Link>
                </Div>
              </Col>
            </Row>
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default DesignDevelopment
