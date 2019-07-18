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
  Tag,
} from "react-atomize"

import icon1 from "../../images/feature-icons/1.svg"
import icon2 from "../../images/feature-icons/2.svg"
import icon3 from "../../images/feature-icons/3.svg"
import icon4 from "../../images/feature-icons/4.svg"
import icon5 from "../../images/feature-icons/5.svg"
import icon6 from "../../images/feature-icons/6.svg"

const featuresList = [
  {
    icon: icon6,
    heading: "Responsive",
    subheading: "Build fully responsive structure easily.",
  },
  {
    icon: icon4,
    heading: "Components",
    subheading: "A large of components and still increasing with time.",
  },

  {
    icon: icon2,
    heading: "Styleguide",
    subheading: "Customizable style guide and quickly get started.",
  },

  {
    icon: icon1,
    heading: "Icons",
    subheading: "An inbuild Icon system for quicker development.",
  },
  {
    icon: icon3,
    heading: "Customisation",
    subheading: "Customize components easily with the props.",
  },
  {
    icon: icon5,
    heading: "Structure",
    subheading: "Build on the smallest of components to the large.",
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
    const scrollPos = window.scrollY
    // const offsetTop = document.getElementById("features").offsetTop
    // const limitTo = offsetTop + window.innerHeight

    // if (offsetTop < scrollPos && scrollPos < limitTo) {
    //   this.list.current.style.transform = `translateY(${scrollPos -
    //     offsetTop}px)`
    // }

    e.isTrusted && requestAnimationFrame(this.scrollAnimation)
  }

  render() {
    return (
      <Div tag="section" id="features">
        <Container>
          <Div
            p={{ t: "9.5rem", b: "5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              <Col size={{ xs: 12, md: 3 }} d={{ xs: "none", md: "block" }}>
                <Div
                  p={{ r: "1rem", t: { xs: "4rem", md: "0" } }}
                  pos="relative"
                >
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
              <Col size={{ xs: 12, md: 7 }} offset={{ xs: 0, md: 1 }}>
                <Div p={{ l: { lg: "1rem" } }}>
                  <Tag
                    bg="warning700"
                    textColor="white"
                    h="2rem"
                    p={{ x: "1rem" }}
                    rounded="circle"
                    m={{ b: "1rem" }}
                  >
                    Key features
                  </Tag>

                  <Text
                    tag="h2"
                    textSize="display2"
                    maxW={{ md: "29rem" }}
                    textWeight="500"
                    textAlign="left"
                    m={{ b: "3rem" }}
                  >
                    Build beautiful & consistant user interface.
                  </Text>
                  <Div>
                    <Row>
                      {featuresList.map((feature, index) => (
                        <Col size={4}>
                          <Div m={{ b: "3rem" }}>
                            <Image
                              src={feature.icon}
                              w="2.5rem"
                              maxW="2.5rem"
                              m={{
                                t: "0.25rem",
                                b: "1rem",
                              }}
                            />

                            <Div p={{ r: { md: "0.5rem" } }} maxW="14rem">
                              <Text
                                tag="h3"
                                textSize="subheader"
                                textAlign="left"
                                textWeight="500"
                              >
                                {feature.heading}
                              </Text>

                              <Text
                                textSize="body"
                                textAlign="left"
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
