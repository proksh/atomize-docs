import React from "react"

import { Div, Text, Container } from "atomize"

export default class BlogPageHero extends React.Component {
  render() {
    return (
      <Div h="100vh" overflow="hidden">
        <Div
          zIndex="-1"
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          h="100vh"
          d="flex"
        >
          <Div
            pos="absolute"
            top="19rem"
            left="0"
            right="0"
            bottom="0"
            bg="gray300"
            h="100vh"
            bgImg="https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=2000"
            bgPos="center"
            bgSize="cover"
          ></Div>
          <Container>
            <Div p={{ t: "10rem" }} maxW="40rem">
              <Text
                pos="relative"
                textColor="medium"
                textSize="subheader"
                m={{ b: "0.5rem" }}
                fontFamily="secondary"
              >
                Fashion
              </Text>
              <Text
                pos="relative"
                textSize="display2"
                textWeight="700"
                fontFamily="secondary"
                m={{ b: "1.5rem" }}
              >
                Introducing Workload: your window into team.
              </Text>
              <Text pos="relative" textWeight="700">
                July 21,2019
              </Text>
            </Div>
          </Container>
        </Div>
      </Div>
    )
  }
}
// https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000
// https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=2000
