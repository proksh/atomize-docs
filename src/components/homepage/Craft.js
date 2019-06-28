import React from "react"
import { Div, Text, Row, Col, Container, Image } from "react-atomize"

// import craftImage from "../../images/craft.png"
import craft from "../../images/craft/craft.svg"
import circle from "../../images/craft/circle.png"
import strokes from "../../images/craft/strokes.svg"
import spiral from "../../images/craft/spiral.svg"
import circleBrush from "../../images/craft/circleBrush.svg"
import userimg from "../../images/craft/userimg.png"

const Craft = () => {
  return (
    <Div>
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
            <Image
              src={circle}
              pos="absolute"
              w="16.5rem"
              top="-6rem"
              right="-6rem"
            />
            <Image
              src={circleBrush}
              pos="absolute"
              w="5.5rem"
              top="1.5rem"
              right="-7.5rem"
            />
            <Image
              src={strokes}
              pos="absolute"
              w="6.5rem"
              top="-7rem"
              left="-7rem"
            />
            <Image src={craft} transform="scale(1.115)translateX(-1rem)" />
            <Image
              src={userimg}
              pos="absolute"
              w="3rem"
              top="2rem"
              left="3.75rem"
            />
            <Image
              src={spiral}
              pos="absolute"
              w="18rem"
              bottom="-1.5rem"
              left="-6rem"
            />
          </Div>
        </Div>
      </Container>
      <Div m={{ t: "-20rem" }} bg="brandgray" h="40rem"></Div>
    </Div>
  )
}

export default Craft
