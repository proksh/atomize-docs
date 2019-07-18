import React from "react"
import { Link } from "gatsby"

import {
  Button,
  Container,
  Text,
  Div,
  Image,
  Icon,
  Input,
  Anchor,
} from "react-atomize"

import girl from "../../images/avatar/girl.png"
import boy from "../../images/avatar/boy.png"
import circle from "../../images/hero-illustration/circle.png"
import circleBrush from "../../images/hero-illustration/circle-brush.svg"
import lineBrush from "../../images/hero-illustration/line-brush.svg"
import triangles from "../../images/hero-illustration/triangles.svg"
import follow from "../../images/hero-illustration/follow.svg"
import john from "../../images/hero-illustration/john.svg"
import form from "../../images/hero-illustration/form.svg"
import notification from "../../images/hero-illustration/notification.svg"
import card from "../../images/hero-illustration/card.svg"
import cardImg from "../../images/hero-illustration/card-img.png"

class HeroSection extends React.Component {
  render() {
    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "9rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              Design System for React JS
            </Text>
            <Text
              tag="h2"
              textWeight="400"
              maxW="36rem"
              textSize="subheader"
              textAlign="center"
              fontFamily="secondary"
              textColor="medium"
              m={{ b: "2.5rem" }}
            >
              Atomize React is a UI framework that helps developers collaborate
              with designers and build consistent user interfaces effortlessly.
            </Text>

            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
            >
              <Link to="/docs/react/intro">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="info700"
                  hoverBg="info600"
                  rounded="lg"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  Get Started Now
                </Button>
              </Link>
              <Link to="/docs/react/ui-templates">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray200"
                  border="1px solid"
                  borderColor="gray500"
                  hoverBorderColor="gray600"
                  rounded="lg"
                  textColor="medium"
                >
                  View Templates
                </Button>
              </Link>
            </Div>
          </Container>
        </Div>
        <Div
          tag="section"
          w="100vw"
          p={{ t: { xs: "3rem", md: "8rem" } }}
          overflow="hidden"
        >
          <Container>
            <Div
              d="flex"
              justify="center"
              p={{ b: "10.5rem" }}
              border={{ b: "1px solid" }}
              borderColor="gray300"
            >
              <Div
                minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                bg="brandgray"
                d="flex"
                align="center"
                flexDir="column"
                h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                rounded="xl"
                pos="relative"
              >
                {/* Button Components */}
                <Div
                  d="flex"
                  justify="center"
                  pos="absolute"
                  w={{ xs: "calc(100% - 2rem)", md: "auto" }}
                  m={{ xs: "1rem", md: "0" }}
                  pos={{ xs: "static", md: "absolute" }}
                  left={{ md: "2rem", lg: "-1.5rem" }}
                  top="2rem"
                >
                  {[
                    { icon: "HeartSolid", color: "danger700" },
                    { icon: "Eye", color: "info700" },
                    { icon: "EditSolid", color: "warning700" },
                    { icon: "Attachment", color: "success700" },
                    { icon: "Play", color: "danger700" },
                  ].map((button, index) => (
                    <Button
                      h="2.5rem"
                      w="2.5rem"
                      bg="white"
                      shadow="2"
                      hoverShadow="4"
                      rounded="circle"
                      m={index !== 4 && { r: "1rem" }}
                    >
                      <Icon
                        name={button.icon}
                        color={button.color}
                        size="18px"
                      />
                    </Button>
                  ))}
                </Div>

                {/* Follow Component */}
                <Div
                  d="flex"
                  flexDir="column"
                  h="17rem"
                  bg="white"
                  m={{ xs: "1rem", md: "0" }}
                  pos={{ xs: "static", md: "absolute" }}
                  left={{ md: "2rem", lg: "-1.5rem" }}
                  w={{ xs: "100%", md: "18rem" }}
                  maxW="18.5rem"
                  top="6rem"
                  rounded="lg"
                  shadow="2"
                  p={{ x: "1.5rem", b: "1.5rem", t: "2.5rem" }}
                >
                  <Div
                    flexGrow="1"
                    d="flex"
                    justify="center"
                    align="center"
                    flexDir="column"
                  >
                    <Div
                      h="3.5rem"
                      w="3.5rem"
                      bg="gray300"
                      rounded="circle"
                      pos="relative"
                      bgImg={girl}
                      bgSize="cover"
                      bgPos="center"
                      m={{ b: "1rem" }}
                    >
                      <Div
                        pos="absolute"
                        rounded="circle"
                        right="0.25rem"
                        bottom="0.25rem"
                        bg="white"
                        shadow="2"
                        h="0.5rem"
                        w="0.5rem"
                        p="1px"
                      >
                        <Div bg="success800" rounded="circle" h="6px" w="6px" />
                      </Div>
                    </Div>
                    <Text
                      textSize="subheader"
                      textWeight="500"
                      textAlign="center"
                    >
                      Meagan Fisher
                    </Text>
                    <Text
                      textSize="caption"
                      textColor="light"
                      m={{ b: "2.5rem" }}
                      textAlign="center"
                    >
                      Engineering Manager
                    </Text>
                  </Div>
                  <Div d="flex" w="100%">
                    <Button
                      bg="info700"
                      hoverBg="info800"
                      justify="space-between"
                      flexGrow="1"
                      maxW="calc(50% - 4px)"
                      rounded="circle"
                      m={{ r: "0.5rem" }}
                      suffix={<Icon name="Plus" size="18px" color="white" />}
                    >
                      Follow
                    </Button>
                    <Button
                      bg="white"
                      hoverBg="gray100"
                      border="1px solid"
                      borderColor="gray500"
                      textColor="medium"
                      justify="space-between"
                      flexGrow="1"
                      maxW="calc(50% - 4px)"
                      rounded="circle"
                      suffix={
                        <Icon name="Message" size="18px" color="black400" />
                      }
                    >
                      Message
                    </Button>
                  </Div>
                </Div>

                {/* Card Component */}
                <Div
                  d={{ xs: "none", lg: "block" }}
                  w="18rem"
                  pos="absolute"
                  left="19rem"
                  top="-2rem"
                  rounded="lg"
                  bg="white"
                  shadow="2"
                  overflow="hidden"
                >
                  <Div
                    bgImg={cardImg}
                    bgSize="cover"
                    bgPos="center"
                    p={{ b: "85%" }}
                  />
                  <Div p="1rem" d="flex" align="center" justify="space-between">
                    <Div d="flex" align="center">
                      <Div
                        h="1.5rem"
                        w="1.5rem"
                        bgImg={boy}
                        bgSize="cover"
                        bgPos="center"
                        m={{ r: "1rem" }}
                        rounded="circle"
                      ></Div>
                      <Text textWeight="500">Meagan Fisher</Text>
                    </Div>
                    <Icon
                      name="Heart"
                      color="black"
                      hoverColor="danger700"
                      size="18px"
                      cursor="pointer"
                    />
                  </Div>
                </Div>

                {/* Notification Component */}
                <Div
                  d={{ xs: "none", md: "flex" }}
                  align="center"
                  justify="space-between"
                  pos="absolute"
                  bg="white"
                  w="18.5rem"
                  right={{ md: "2.5rem", lg: "1rem" }}
                  top={{ xs: "-1.5rem", md: "-2rem" }}
                  rounded="lg"
                  shadow="2"
                  p="1rem"
                >
                  <Div d="flex" align="center">
                    <Icon
                      name="AlertSolid"
                      color="warning700"
                      size="18px"
                      m={{ r: "1rem" }}
                    />
                    <Text textWeight="500">Notification Message</Text>
                  </Div>
                  <Icon
                    name="Cross"
                    color="black"
                    size="18px"
                    cursor="pointer"
                  />
                </Div>

                {/* Form Component */}
                <Div
                  d="flex"
                  flexDir="column"
                  w={{ xs: "100%", md: "18.5rem" }}
                  maxW="18.5rem"
                  pos={{ xs: "static", md: "absolute" }}
                  m={{ xs: "1rem", md: "0" }}
                  right={{ md: "2.5rem", lg: "1rem" }}
                  top={{ md: "3.5rem", lg: "3rem" }}
                  rounded="lg"
                  h={{ lg: "20rem" }}
                  bg="white"
                  shadow="2"
                  p="1.5rem"
                >
                  <Div flexGrow="1">
                    <Text
                      textAlign="center"
                      textSize="title"
                      m={{ t: "0.5rem", b: "0.25rem" }}
                      textWeight="500"
                    >
                      Log into your account
                    </Text>
                    <Text
                      textColor="light"
                      textSize="caption"
                      m={{ b: "2rem" }}
                      textAlign="center"
                    >
                      Dont have an account yet? <Anchor>Create New</Anchor>
                    </Text>
                    <Input
                      type="email"
                      m={{ b: "1rem" }}
                      placeholder="johndoe@gmail.com"
                      rounded="lg"
                      borderColor="gray400"
                      focusBorderColor="info700"
                      suffix={
                        <Icon
                          pos="absolute"
                          name="Email"
                          color="light"
                          size="18px"
                          top="50%"
                          transform="translateY(-50%)"
                          right="1rem"
                        />
                      }
                    />
                    <Input
                      type="password"
                      m={{ b: "1rem" }}
                      placeholder="Password"
                      rounded="lg"
                      borderColor="gray400"
                      focusBorderColor="info700"
                      suffix={
                        <Icon
                          pos="absolute"
                          name="Eye"
                          color="light"
                          size="18px"
                          top="50%"
                          transform="translateY(-50%)"
                          right="1rem"
                        />
                      }
                    />
                  </Div>
                  <Button
                    rounded="lg"
                    bg="info200"
                    hoverBg="info300"
                    textColor="info700"
                  >
                    Login
                  </Button>
                </Div>

                {/* User Component */}
                <Div
                  d={{ xs: "none", lg: "flex" }}
                  align="center"
                  justify="space-between"
                  w={{
                    xs: "calc(100% - 2rem)",
                    md: "18rem",
                    lg: "18rem",
                  }}
                  pos={{ xs: "static", md: "absolute" }}
                  m={{ xs: "1rem", md: "0" }}
                  left={{ md: "2rem", lg: "19rem" }}
                  bottom={{ lg: "-3rem" }}
                  top={{ md: "5.5rem", lg: "auto" }}
                  rounded="lg"
                  bg="white"
                  shadow="2"
                  p="1rem"
                >
                  <Div d="flex">
                    <Div
                      h="2.5rem"
                      w="2.5rem"
                      m={{ r: "1rem" }}
                      bgImg={boy}
                      bgSize="cover"
                      bgPos="center"
                      rounded="circle"
                    />
                    <Div>
                      <Text textWeight="500">John Doe</Text>
                      <Text textSize="caption" textColor="light">
                        UI/UX Designer
                      </Text>
                    </Div>
                  </Div>
                  <Icon
                    name="Edit"
                    color="black"
                    hoverColor="info700"
                    size="20px"
                    cursor="pointer"
                  />
                </Div>
              </Div>
            </Div>
          </Container>
        </Div>
      </>
    )
  }
}

export default HeroSection
