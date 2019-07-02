import React from "react"
import { Div, Text, Row, Col, Container, Image } from "react-atomize"

// import craftImage from "../../images/craft.png"
import craft from "../../images/craft.png"
import circle from "../../images/craft/circle.png"
import strokes from "../../images/craft/strokes.svg"
import spiral from "../../images/craft/spiral.svg"
import circleBrush from "../../images/craft/circleBrush.svg"
import userimg from "../../images/craft/userimg.png"

import brand from "../../images/illustrations/1.svg"
import layout from "../../images/illustrations/2.svg"
import code from "../../images/illustrations/3.svg"

const list = [
  {
    image: brand,
    width: "5.5rem",
    top: "1.5rem",
    left: "1rem",
    content:
      "A lot of time is wasted tracking down updates and progress reports from your team",
  },
  {
    image: layout,
    width: "5rem",
    top: "1.75rem",
    left: "1.5rem",
    content:
      "A lot of time is wasted tracking down updates and progress reports from your team",
  },
  {
    image: code,
    width: "7.5rem",
    top: "2.25rem",
    left: "1rem",
    content:
      "A lot of time is wasted tracking down updates and progress reports from your team",
  },
]

const Craft = () => {
  return (
    <Div w="100vw" overflow="hidden">
      <Container>
        <Div d="flex" flexDir="column" align="center" p={{ t: "10rem" }}>
          <Text
            textSize="display2"
            textAlign="center"
            textWeight="500"
            maxW="32rem"
            m={{ b: "2rem" }}
          >
            Craft the perfect designs for each website, by using atomize.
          </Text>
          <Text
            textSize="subheader"
            textAlign="center"
            textColor="medium"
            maxW="32rem"
          >
            Plan and publish your content for Instagram, Facebook, Twitter,
            Pinterest, and LinkedIn, all from one simple dashboard.
          </Text>
        </Div>
        <Div d="flex" justify="center" p={{ t: "8rem" }}>
          <Div maxW="53rem" pos="relative">
            {/* <Image
              src={circle}
              pos="absolute"
              w="16.5rem"
              top="-6rem"
              right="-6rem"
            /> */}
            <Image
              src={circleBrush}
              pos="absolute"
              w="11.5rem"
              top={{ xs: "-9.5", md: "-5.5rem" }}
              right="-5rem"
            />
            <Image
              src={strokes}
              pos="absolute"
              w="6.5rem"
              top="-7rem"
              left="-6rem"
            />
            <Image
              src={craft}
              transform="scale(1.1)"
              pos="relative"
              zIndex={{ xs: "2", md: "0" }}
            />
            {/* <Image
              src={userimg}
              pos="absolute"
              w="3rem"
              top="2rem"
              left="3.75rem"
            /> */}
            <Image
              src={spiral}
              pos="absolute"
              w="18rem"
              bottom={{ xs: "-7.5rem", md: "-1.5rem" }}
              left={{ xs: "0", md: "-6rem" }}
            />
          </Div>
        </Div>
      </Container>
      <Div m={{ t: "-20rem" }} bg="brandgray" p={{ t: "30rem", b: "3rem" }}>
        <Container>
          <Div d="flex" flexDir="column" align="center">
            <Text
              textSize="heading"
              textWeight="500"
              textAlign="center"
              maxW="36rem"
              m={{ b: "6rem" }}
            >
              Don't let your design be frustrating to track, you'll waste effort
              repeating the work done before.
            </Text>
          </Div>

          <Row>
            <Col size={{ xs: 12, lg: 10 }} offset={{ xs: 0, lg: 1 }}>
              <Row>
                {list.map(item => (
                  <Col size={{ xs: 12, md: 4 }}>
                    <Div
                      d="flex"
                      align="center"
                      flexDir="column"
                      p={{ x: "1rem" }}
                      m={{ b: "4rem" }}
                    >
                      <Div
                        h="6rem"
                        w="6rem"
                        pos="relative"
                        rounded="circle"
                        bg="white"
                        m={{ b: "2rem" }}
                        shadow="5"
                      >
                        <Image
                          pos="absolute"
                          top={item.top}
                          left={item.left}
                          w={item.width}
                          src={item.image}
                        />
                      </Div>
                      <Text
                        textSize="subheader"
                        textColor="medium"
                        textAlign="center"
                        maxW="20rem"
                      >
                        {item.content}
                      </Text>
                    </Div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Div>
    </Div>
  )
}

export default Craft
