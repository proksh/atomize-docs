import React from "react"
import {
  Div,
  Text,
  Row,
  Col,
  Container,
  Image,
  Icon,
  Button,
  Tag,
} from "atomize"

import react from "../../images/react.svg"

import icon1 from "../../images/feature-icons/1.svg"
import icon2 from "../../images/feature-icons/2.svg"
import icon3 from "../../images/feature-icons/3.svg"
import icon4 from "../../images/feature-icons/4.svg"
import icon5 from "../../images/feature-icons/5.svg"
import icon6 from "../../images/feature-icons/6.svg"

const featuresList = [
  {
    icon: icon5,
    heading: "Atomic",
    subheading: "Based on Atomic Design Methodology.",
  },
  {
    icon: icon2,
    heading: "Theme Setup",
    subheading: "Auto updating colors and Styleguide.",
  },

  {
    icon: icon4,
    heading: "Components",
    subheading: "Ever-increasing list of components.",
  },

  {
    icon: icon6,
    heading: "Responsive",
    subheading: "Build fully responsive structures easily.",
  },

  {
    icon: icon3,
    heading: "Customisation",
    subheading: "Multiple customisations to suit your style.",
  },
  {
    icon: icon1,
    heading: "Icon System",
    subheading: "An inbuilt Icon system for faster development.",
  },
]

class Features extends React.Component {
  render() {
    return (
      <Div tag="section">
        <Container>
          <Div
            p={{ t: "9.5rem", b: "5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              <Col
                size={{ xs: 12, md: 5, lg: 4 }}
                d={{ xs: "none", md: "block" }}
              >
                <Div
                  pos="relative"
                  w="100%"
                  p={{ b: "100%" }}
                  m={{ t: "0rem" }}
                >
                  <Div
                    pos="absolute"
                    top="1rem"
                    left="1rem"
                    right="0"
                    bottom="0"
                    rounded="circle"
                    border="2px solid"
                    borderColor="black"
                    opacity="0.1"
                  ></Div>
                  <Div
                    pos="absolute"
                    top="3rem"
                    left="3rem"
                    right="2rem"
                    bottom="2rem"
                    rounded="circle"
                    border="2px solid"
                    borderColor="black"
                    opacity="0.2"
                  ></Div>
                  <Div
                    pos="absolute"
                    top="5rem"
                    left="5rem"
                    right="4rem"
                    bottom="4rem"
                    rounded="circle"
                    border="2px solid"
                    borderColor="black"
                    opacity="0.3"
                  ></Div>
                  <Div
                    pos="absolute"
                    top="7rem"
                    left="7rem"
                    right="6rem"
                    bottom="6rem"
                    rounded="circle"
                    border="2px solid"
                    borderColor="black"
                    opacity="0.4"
                  ></Div>
                  <Button
                    pos="absolute"
                    right="0"
                    bottom="4rem"
                    w="6rem"
                    rounded="lg"
                    bg="info700"
                    hoverBg="info600"
                    shadow="3"
                    hoverShadow="4"
                  >
                    Sign Up
                  </Button>
                  <Button
                    pos="absolute"
                    left="2rem"
                    top="7.5rem"
                    w="2.5rem"
                    rounded="circle"
                    bg="warning700"
                    hoverBg="warning600"
                    shadow="3"
                    hoverShadow="4"
                  >
                    <Icon name="Plus" color="white" size="18px" />
                  </Button>
                  <Icon
                    name="CBChecked"
                    pos="absolute"
                    left="5rem"
                    bottom="1rem"
                    color="danger700"
                  />
                  <Div
                    h="1.5rem"
                    w="2.5rem"
                    p="0.3rem"
                    pos="absolute"
                    top="3rem"
                    right="5rem"
                    rounded="circle"
                    bg="success700"
                    d="flex"
                    align="center"
                    justify="flex-end"
                    shadow="4"
                  >
                    <Div
                      h="0.9rem"
                      w="0.9rem"
                      rounded="circle"
                      bg="white"
                    ></Div>
                  </Div>
                  <Div
                    pos="absolute"
                    top="7rem"
                    left="7rem"
                    right="6rem"
                    bottom="6rem"
                    rounded="circle"
                    d="flex"
                    align="center"
                    justify="center"
                  >
                    <Image src={react} w="4rem" />
                  </Div>

                  {/* <Image
                    src={features}
                    pos="absolute"
                    top="0"
                    left="0"
                    w="100%"
                  /> */}
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 7 }} offset={{ xs: 0, md: 1 }}>
                <Div p={{ l: { lg: "1rem" } }}>
                  {/* <Tag
                    bg="black"
                    textColor="white"
                    h="2rem"
                    p={{ x: "1rem" }}
                    rounded="circle"
                    m={{ b: "2rem" }}
                  >
                    Key features
                  </Tag> */}

                  <Text
                    tag="h2"
                    maxW="32rem"
                    fontFamily="secondary"
                    textSize="display2"
                    textWeight="500"
                    textAlign="left"
                    m={{ b: "3rem" }}
                  >
                    Beautiful & consistant UI powered with{" "}
                    <span style={{ color: "#06d7ff" }}>React</span>.
                  </Text>
                  <Div>
                    <Row>
                      {featuresList.map((feature, index) => (
                        <Col size={{ xs: 6, lg: 4 }}>
                          <Div m={{ b: "3rem" }} maxW="11rem">
                            <Image
                              src={feature.icon}
                              w="2.5rem"
                              maxW="2.5rem"
                              m={{
                                b: "0.25rem",
                              }}
                            />

                            <Text
                              tag="h3"
                              textSize="subheader"
                              textWeight="500"
                              m={{ b: "0.25rem" }}
                            >
                              {feature.heading}
                            </Text>

                            <Text textSize="body" textColor="medium">
                              {feature.subheading}
                            </Text>
                          </Div>
                        </Col>
                      ))}
                    </Row>
                  </Div>
                </Div>
              </Col>
            </Row>
          </Div>
        </Container>
      </Div>
    )
  }
}

export default Features
