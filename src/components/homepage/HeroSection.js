import React from "react"
import { Link } from "gatsby"

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize"

import boy from "../../images/avatar/boy.png"
import cardImg from "../../images/hero-illustration/card-img.png"
import FollowCard from "./uicomponents/FollowCard"
import UserEdit from "./uicomponents/UserEdit"

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
              <Anchor
                href="https://www.youtube.com/watch?v=1uEJT3_M1Y0"
                target="_blanc"
              >
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray200"
                  border="1px solid"
                  borderColor="gray400"
                  hoverBorderColor="gray600"
                  rounded="lg"
                  p={{ l: "0.5rem", r: "1rem" }}
                  textColor="medium"
                  prefix={
                    <Icon
                      name="Play"
                      size="18px"
                      m={{ r: "0.5rem" }}
                      color="black400"
                    />
                  }
                >
                  Watch Video
                </Button>
              </Anchor>
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
                bg="gray200"
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
                <FollowCard />

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
                  maxW="calc(100% - 2rem)"
                  pos={{ xs: "static", md: "absolute" }}
                  m={{ xs: "1rem", md: "0" }}
                  right={{ md: "2.5rem", lg: "1rem" }}
                  top={{ md: "3.5rem", lg: "3rem" }}
                  rounded="lg"
                  h={{ lg: "20rem" }}
                  bg="white"
                  shadow="2"
                  p={{ xs: "2rem", sm: "1.5rem" }}
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
                      Don't have an account yet? <Anchor>Create New</Anchor>
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
                      m={{ b: "2rem" }}
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
                <UserEdit />
              </Div>
            </Div>
          </Container>
        </Div>
      </>
    )
  }
}

export default HeroSection
