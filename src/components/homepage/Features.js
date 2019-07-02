import React from "react"
import {
  Div,
  Text,
  Row,
  Col,
  Container,
  Image,
  Checkbox,
  Icon,
  Button,
} from "react-atomize"

import icon1 from "../../images/feature-icons/1.svg"
import icon2 from "../../images/feature-icons/2.svg"
import icon3 from "../../images/feature-icons/3.svg"
import icon4 from "../../images/feature-icons/4.svg"
import icon5 from "../../images/feature-icons/5.svg"
import icon6 from "../../images/feature-icons/6.svg"
import stroke from "../../images/feature/stroke.svg"

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

class Features extends React.Component {
  constructor(props) {
    super(props)

    this.list = React.createRef()
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollAnimation)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollAnimation)
  }

  scrollAnimation = e => {
    const srcollPos = window.scrollY

    console.log(this.list)

    e.isTrusted && requestAnimationFrame(this.scrollAnimation)
  }

  render() {
    return (
      <Div tag="section">
        <Container>
          <Div
            p={{ t: "9.5rem", b: "8rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              <Col size={{ xs: 12, lg: 4 }} d={{ xs: "none", lg: "block" }}>
                <Div
                  p={{ r: "1rem", t: { xs: "4rem", md: "0" } }}
                  pos="relative"
                >
                  <Image
                    src={stroke}
                    pos="absolute"
                    top="0"
                    left="4rem"
                    w="18rem"
                  />
                  <Div
                    pos="absolute"
                    h="5rem"
                    w="5rem"
                    bg="danger200"
                    rounded="circle"
                    top="21rem"
                    left="12rem"
                  ></Div>
                  <Div
                    d="flex"
                    pos="absolute"
                    top="12rem"
                    left="0"
                    flexDir="column"
                    align="flex-end"
                  >
                    <Div
                      h="3rem"
                      w="10.5rem"
                      shadow="5"
                      bg="white"
                      d="flex"
                      justify="space-between"
                      align="center"
                      rounded="xl"
                      p={{ x: "1rem" }}
                      m={{ b: "2rem" }}
                    >
                      <Text textColor="medium">Add User</Text>
                      <Icon name="Add" size="20px" />
                    </Div>
                    <Div
                      w="10.5rem"
                      p={{ y: "1rem", l: "1rem", r: "0.5rem" }}
                      shadow="5"
                      bg="white"
                      rounded="xl"
                      m={{ b: "1.5rem" }}
                      ref={this.list}
                    >
                      {["John Doe", "Neo", "Json Mraz"].map(name => (
                        <Div
                          key={name}
                          d="flex"
                          justify="space-between"
                          align="center"
                        >
                          <Text textColor="medium">{name}</Text>
                          <Checkbox size="16px" checked={name === "John Doe"} />
                        </Div>
                      ))}
                    </Div>
                    <Button
                      h="2.5rem"
                      w="2.5rem"
                      bg="info700"
                      shadow="3"
                      rounded="circle"
                    >
                      <Icon name="Edit" size="20px" color="white" />
                    </Button>
                  </Div>
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
                  Easily manage the theme colors and typography with Atomize
                  React
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
}

export default Features
