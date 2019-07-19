import React from "react"

import { Link } from "gatsby"
import { Div, Text } from "atomize"
import ParallaxImg from "../common/ParallaxImg"

export default class BlogListItem extends React.Component {
  constructor(props) {
    super(props)

    this.overlay = React.createRef()
  }
  enter = () => {
    this.overlay.current.style.opacity = "0.2"
  }

  exit = () => {
    this.overlay.current.style.opacity = "0"
  }
  render() {
    const { blog, index } = this.props
    return (
      <Link to={blog.link}>
        <Div
          onMouseEnter={this.enter}
          onMouseLeave={this.exit}
          p={{
            l:
              index % 2 === 0
                ? { xs: "0", md: "5rem" }
                : { xs: "0", md: "1rem" },
            r:
              index % 2 === 0
                ? { xs: "0", md: "1rem" }
                : { xs: "0", md: "5rem" },
          }}
          m={{ b: "3rem" }}
          transform={{ sm: index % 2 === 1 && "translateY(40%)" }}
        >
          <Div pos="relative">
            <ParallaxImg bgImg={blog.image} />
            <Div
              pos="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              p="2rem"
              transition
              d="flex"
              flexDir="column"
              align="center"
              justify="flex-end"
            >
              <Div
                ref={this.overlay}
                pos="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="white"
                opacity="0"
                transition
              />
              <Text
                pos="relative"
                textColor="black"
                textSize="heading"
                textAlign="center"
                textWeight="500"
                fontFamily="secondary"
                m={{ y: "1rem" }}
              >
                {blog.title}
              </Text>
              <Text
                pos="relative"
                textColor="black"
                textAlign="center"
                m={{ y: "0.5rem" }}
              >
                {blog.type}
              </Text>
            </Div>
          </Div>
        </Div>
      </Link>
    )
  }
}
