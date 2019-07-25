import React from "react"
import { Link } from "gatsby"
import { Div, Text, Container, Anchor, Button, Icon } from "atomize"

import template from "../../images/template-preview.png"
import stroke from "../../images/elements/stroke.svg"
import box from "../../images/elements/box.svg"

const Features = () => {
  return (
    <Div bg={{ xs: "gray200", md: "white" }}>
      <Container>
        <Div
          p={{ y: "3.5rem", x: { xs: "0", md: "4rem" } }}
          bg="gray200"
          style={{ borderRadius: "40px" }}
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          justify="space-between"
        >
          <Div>
            <Text textSize="heading" textWeight="600" m={{ b: "0.5rem" }}>
              UI Templates are on their way 🚀
            </Text>
            <Text
              textSize="subheader"
              textColor="medium"
              m={{ b: { xs: "3rem", md: "0" } }}
            >
              Official UI templates build on Atomize React will be released very
              soon.
            </Text>
          </Div>
          <Div d="flex" align="flex-end">
            <Anchor href="https://forms.gle/NfQ3NA4hSittrNNLA" target="_blanc">
              <Button
                rounded="circle"
                shadow="1"
                hoverShadow="4"
                w="12rem"
                h="3rem"
                p={{ x: "1.5rem" }}
                justify="space-between"
                suffix={<Icon name="LongRight" size="20px" color="white" />}
              >
                Get notified
              </Button>
            </Anchor>
          </Div>
        </Div>
      </Container>
      {/* <Container>
        <Div
          p={{ y: "3rem", x: { xs: "0", md: "4rem" } }}
          bg="gray200"
          style={{ borderRadius: "40px" }}
        >
          <Row align="center">
            <Col size={{ xs: 12, md: 6, lg: 5 }}>
              <Div
                p={{
                  x: { md: "1rem", lg: "1.5rem" },
                  b: { xs: "3rem", md: "0" },
                }}
              >
                <Div d="flex" flexDir="column">
                  <Text
                    tag="h2"
                    maxW="14rem"
                    fontFamily="secondary"
                    textSize="display1"
                    textWeight="500"
                    m={{ b: "1rem" }}
                  >
                    Blogs Template for you
                  </Text>
                  <Text
                    textSize="subheader"
                    maxW="19rem"
                    textColor="medium"
                    m={{ b: "2rem" }}
                  >
                    You can purchase mobile friendly blogs ui template and get
                    started right away.
                  </Text>
                </Div>
                <Div d="flex" w="100%">
                  <Anchor>
                    <Button
                      h="3rem"
                      w="10rem"
                      bg="info700"
                      hoverBg="info600"
                      rounded="circle"
                      m={{ r: "1rem" }}
                    >
                      Buy Template
                    </Button>
                  </Anchor>
                  <Anchor
                    href="https://atomizecode.com/blogpreview/home"
                    target="_blanc"
                  >
                    <Button
                      h="3rem"
                      w="8rem"
                      bg="white"
                      border="1px solid"
                      borderColor="gray300"
                      hoverBorderColor="gray400"
                      rounded="circle"
                      textColor="black"
                    >
                      Preview
                    </Button>
                  </Anchor>
                </Div>
              </Div>
            </Col>
            <Col size={{ xs: 12, md: 6, lg: 7 }}>
              <Div
                pos="relative"
                bgImg={template}
                bgSize="cover"
                bgPos="center"
                p={{ b: "70%" }}
                bg="white"
                h="100%"
                style={{ borderRadius: "32px" }}
              >
                <Image
                  src={box}
                  pos="absolute"
                  right="-2rem"
                  bottom="0"
                  h="4rem"
                  w="4rem"
                />
                <Image
                  src={stroke}
                  pos="absolute"
                  right="-1rem"
                  top="2.5rem"
                  w="3.5rem"
                />
              </Div>
            </Col>
          </Row>
        </Div>
      </Container> */}
    </Div>
  )
}

export default Features
