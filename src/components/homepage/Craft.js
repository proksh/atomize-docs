import React from "react"
import { Div, Text, Row, Col, Container, Image } from "react-atomize"

import craftImage from "../../images/craft.png"

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
        <Image src={craftImage} />
      </Container>
      <Div m={{ t: "-20rem" }} bg="brandgray" h="40rem"></Div>
    </Div>
  )
}

export default Craft
