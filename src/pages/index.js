import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  Container,
  Text,
  Div,
  Row,
  Col,
  Icon,
  Image,
} from "react-atomize"
import Header from "../components/common/header"
import circle from "../images/hero-illustration/circle.png"
import circleBrush from "../images/hero-illustration/circle-brush.svg"
import lineBrush from "../images/hero-illustration/line-brush.svg"
import triangles from "../images/hero-illustration/triangles.svg"
import Features from "../components/homepage/Features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    {/* <Div p={{ t: "9rem", b: "9.5rem" }}>
      <Container d="flex" flexDir="column" align="center">
        <Text textAlign="center" textSize="display3" m={{ b: "1rem" }}>
          Design System for React JS
        </Text>
        <Text
          maxW="39rem"
          textSize="subheader"
          textAlign="center"
          textColor="medium"
          m={{ b: "1.625rem" }}
        >
          Build on Styled Components, Atomize React helps designers and
          developers to collablorate and build beautifull and fully customizable
          UI for web.
        </Text>
        <Div d="flex">
          <Button
            h="3rem"
            w="11rem"
            bg="info700"
            hoverBg="info600"
            rounded="lg"
            hoverShadow="4"
            m={{ r: "1rem" }}
          >
            Get Started Now
          </Button>
          <Button
            h="3rem"
            w="11rem"
            bg="transparent"
            hoverBg="gray200"
            border="1px solid"
            borderColor="gray500"
            hoverBorderColor="gray600"
            rounded="lg"
            textColor="medium"
          >
            Know More
          </Button>
        </Div>
      </Container>
    </Div>
    <Div>
      <Container>
        <Div
          d="flex"
          justify="center"
          p={{ b: "10.5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Div w="59rem" bg="brandgray" h="20rem" rounded="xl" pos="relative">
            <ButtonIllustration
              top="-3rem"
              left="-2.25rem"
              icon="Eye"
              color="info"
              rotate="-12"
              shadow="5"
            />
            <ButtonIllustration
              top="-2.75rem"
              left="1.5rem"
              icon="EditSolid"
              color="warning"
              rotate="-12"
              shadow="3"
            />
            <ButtonIllustration
              top="0.5rem"
              left="-0.75rem"
              icon="Attachment"
              color="success"
              rotate="-12"
              shadow="2"
            />
            <ButtonIllustration
              top="0.75rem"
              left="3rem"
              icon="Play"
              color="danger"
              rotate="8"
              shadow="4"
            />
            <Image
              src={circle}
              h="4.5rem"
              w="4.5rem"
              pos="absolute"
              right="-3rem"
              top="-2rem"
              zIndex="-1"
            />
            <Image
              src={circleBrush}
              h="2rem"
              w="2rem"
              pos="absolute"
              right="-4.5rem"
              top="-4.75rem"
            />
            <Image
              src={lineBrush}
              w="3rem"
              pos="absolute"
              right="-4.5rem"
              top="-7.75rem"
            />
          </Div>
        </Div>
      </Container>
    </Div>
    <Features /> */}
  </Layout>
)

export default IndexPage

const ButtonIllustration = ({ top, left, icon, color, rotate, shadow }) => (
  <Button
    h="2.5rem"
    w="2.5rem"
    bg={`${color}700`}
    pos="absolute"
    left={left}
    top={top}
    transform={`rotate(${rotate}deg)`}
    rounded="circle"
    shadow={shadow}
  >
    <Icon name={icon} color="white" size="20px" />
  </Button>
)
