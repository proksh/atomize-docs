import React from "react"
import {
  Div,
  Text,
  Tag,
  Row,
  Col,
  Icon,
  Container,
  ThemeProvider,
  DefaultTheme,
} from "react-atomize"

const featuresList = [
  {
    icon: "",
    heading: "Atomic Structure",
    subheading: "Build on the smallest of components to the large.",
  },
  {
    icon: "",
    heading: "Styleguide",
    subheading: "Customizable style guide for quickly getting you started",
  },
  {
    icon: "",
    heading: "Easy Responsive",
    subheading: "Build fully responsive structure easily.",
  },
  {
    icon: "",
    heading: "Growing Components",
    subheading: "A large of components and still increasing with time.",
  },
  {
    icon: "",
    heading: "Icon System",
    subheading: "An inbuild Icon system for quicker development",
  },
  {
    icon: "",
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
            <Col size={5}></Col>
            <Col size={6}>
              <Div d="flex" align="center" m={{ b: "2rem" }}>
                <Div bg="black" h="2px" w="1.5rem" m={{ r: "0.5rem" }}></Div>
                <Text
                  textSize="caption"
                  textColor="info700"
                  textTransform="uppercase"
                  textWeight="500"
                >
                  Features
                </Text>
              </Div>
              <Text
                textSize="display2"
                maxW="29rem"
                textWeight="500"
                m={{ b: "1rem" }}
              >
                Create beautiful & consistant user interface.
              </Text>
              <Text textColor="medium" m={{ b: "3.5rem" }}>
                Easily manage the theme colors and typography with Atomize React
              </Text>
              <Div>
                <Row>
                  {featuresList.map(feature => (
                    <Col size={6}>
                      <Div d="flex" m={{ b: "3rem" }}>
                        <Div
                          h="2.5rem"
                          minW="2.5rem"
                          bg="gray200"
                          m={{ r: "2rem", t: "0.5rem" }}
                        ></Div>
                        <Div p={{ r: "1rem" }}>
                          <Text textSize="subheader" textWeight="500">
                            {feature.heading}
                          </Text>
                          <Text textSize="body" textColor="medium">
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
