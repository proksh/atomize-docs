import React from "react"

import { Div } from "atomize"

const parallaxLevel = 200

export default class ParallaxImg extends React.Component {
  constructor(props) {
    super(props)

    this.backImg = React.createRef()
    this.container = React.createRef()
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
    const containerHeight = this.container.current.getBoundingClientRect()
      .height
    const thisImgRect = this.backImg.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const totalScrollHeight = windowHeight + 2 * containerHeight

    if (
      thisImgRect.top < windowHeight &&
      thisImgRect.top > -thisImgRect.height
    ) {
      const ratio = (thisImgRect.top - thisImgRect.height) / totalScrollHeight
      this.backImg.current.style.transform = `translateY(${-parallaxLevel *
        ratio}px)`
    }
  }

  render() {
    const { bgImg, p, ...rest } = this.props

    return (
      <Div
        bg="gray300"
        overflow="hidden"
        p={p}
        pos="relative"
        ref={this.container}
        {...rest}
      >
        <Div
          pos="absolute"
          top={`-${parallaxLevel / 2}px`}
          left="0"
          right="0"
          bottom="0"
          ref={this.backImg}
          bgImg={bgImg}
          bgSize="cover"
          bgPos="center"
        ></Div>
      </Div>
    )
  }
}

ParallaxImg.defaultProps = {
  p: { b: "133%" },
}
