import React from "react"

import { Div, Text } from "atomize"

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props)

    this.backImg = React.createRef()
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    e.isTrusted && requestAnimationFrame(this.animateOnScroll)
  }

  animateOnScroll = () => {
    const scrollRatio = window.scrollY / window.innerHeight

    if (scrollRatio < 1) {
      this.backImg.current.style.transform = `translateY(${-scrollRatio *
        300}px)`
      this.backImg.current.style.filter = `grayscale(${scrollRatio})`
    }
  }

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
          bg="gray300"
          h="100vh"
          d="flex"
          align="flex-end"
          justify="center"
          p={{ x: "2rem", y: "4rem" }}
        >
          <Div
            ref={this.backImg}
            pos="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="gray300"
            h="100vh"
            bgImg="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=2000"
            bgPos="center"
            bgSize="cover"
          ></Div>
          <Text
            pos="relative"
            textSize="display1"
            textWeight="700"
            textAlign="center"
            maxW="30rem"
            textColor="white"
            fontFamily="secondary"
          >
            Your daily fashion updates
          </Text>
        </Div>
      </Div>
    )
  }
}
// https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000
// https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=2000
