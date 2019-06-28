import React from "react"
import { Div, Text, Row, Col, Container, Image } from "react-atomize"

import icon1 from "../../images/feature-icons/1.svg"
import icon2 from "../../images/feature-icons/2.svg"
import icon3 from "../../images/feature-icons/3.svg"
import icon4 from "../../images/feature-icons/4.svg"
import icon5 from "../../images/feature-icons/5.svg"
import icon6 from "../../images/feature-icons/6.svg"
import featureImage from "../../images/features.svg"

const featuresList = [
  {
    icon: icon5,
    heading: "Atomic Structure",
    subheading: "Build on the smallest of components to the large.",
  },
  {
    icon: icon2,
    heading: "Styleguide",
    subheading: "Customizable style guide for quickly getting you started",
  },
  {
    icon: icon6,
    heading: "Easy Responsive",
    subheading: "Build fully responsive structure easily.",
  },
  {
    icon: icon4,
    heading: "Growing Components",
    subheading: "A large of components and still increasing with time.",
  },
  {
    icon: icon1,
    heading: "Icon System",
    subheading: "An inbuild Icon system for quicker development",
  },
  {
    icon: icon3,
    heading: "Customisation",
    subheading: "Customize components easily with the utilities props.",
  },
]

const Features = () => {
  return (
    <Div>
      <Container>
        <Div
          p={{ y: "9.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Row>
            <Col size={{ xs: 12, lg: 4 }} d={{ xs: "none", lg: "block" }}>
              <Div p={{ r: "1rem", t: { xs: "4rem", md: "0" } }}>
                <Image src={featureImage} />
              </Div>
            </Col>
            <Col size={{ xs: 12, lg: 6 }} offset={{ xs: 0, lg: 1 }}>
              <Div
                d="flex"
                align="center"
                justify={{ xs: "center", md: "flex-start" }}
                m={{ b: "2rem" }}
              >
                <Div
                  d={{ xs: "none", md: "block" }}
                  bg="black"
                  h="2px"
                  w="1.5rem"
                  m={{ r: "0.5rem" }}
                ></Div>
                <Text
                  textSize="caption"
                  textColor="info700"
                  textTransform="uppercase"
                  textWeight="500"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Features
                </Text>
              </Div>
              <Text
                textSize="display2"
                maxW={{ md: "29rem" }}
                textWeight="500"
                textAlign={{ xs: "center", md: "left" }}
                m={{ b: "1rem" }}
              >
                Create beautiful & consistant user interface.
              </Text>
              <Text
                textColor="medium"
                textAlign={{ xs: "center", md: "left" }}
                m={{ b: "3.5rem" }}
              >
                Easily manage the theme colors and typography with Atomize React
              </Text>
              <Div>
                <Row>
                  {featuresList.map(feature => (
                    <Col size={{ xs: 12, sm: 6 }}>
                      <Div
                        d="flex"
                        align="center"
                        flexDir={{ xs: "column", md: "row" }}
                        m={{ b: "3rem" }}
                      >
                        <Div
                          d="flex"
                          align="center"
                          justify="center"
                          h="2.5rem"
                          minW="2.5rem"
                          m={{ r: { md: "2rem" }, t: "0.5rem", b: "1rem" }}
                        >
                          <Image src={feature.icon} />
                        </Div>
                        <Div p={{ r: { md: "0.5rem" } }} maxW="14rem">
                          <Text
                            textSize="subheader"
                            textAlign={{ xs: "center", md: "left" }}
                            textWeight="500"
                          >
                            {feature.heading}
                          </Text>
                          <Text
                            textSize="body"
                            textAlign={{ xs: "center", md: "left" }}
                            textColor="medium"
                          >
                            {feature.subheading}
                          </Text>
                        </Div>
                      </Div>
                    </Col>
                  ))}
                </Row>
              </Div>
            </Col>
          </Row>
        </Div>
      </Container>
    </Div>
  )
}

export default Features
