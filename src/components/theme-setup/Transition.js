import React from "react"
import { Div, Text, Tag, ThemeProvider } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const theme = {
  transition: {
    custom: "transform 0.8s linear",
  },
}

const breakpointsCode1 = `// Changing the transition value
import { Div, Text, Tag, Row, Col, ThemeProvider } from "atomize";

const theme = {
  transition: {
    custom: "transform 0.8s linear"
  },
};

componentDidMount() {
  setInterval(this.toggleState, 1000)
}

toggleState() {
  const { animate } = this.state
  this.setState({ animate: !animate })
}

class Transition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animate: false,
    }

    this.toggleState = this.toggleState.bind(this)
  }

  render() {
    cosnt { animate } = this.state;
    
    return(
      <ThemeProvider theme={theme}>
        <Div
          h="3rem"
          w="3rem"
          m={{ b: "4rem" }}
          rounded="lg"
          bg="brand200"
          style={{
            transform: animate
              ? "translateX(20rem)"
              : "translateX(0)"
          }}
          transition="custom"
        />
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<Transition />, mountNode);`

class Transition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animate1: false,
      animate2: false,
    }

    this.toggleState = this.toggleState.bind(this)
  }

  componentDidMount() {
    setInterval(this.toggleState, 1000)
  }

  toggleState() {
    const { animate1, animate2 } = this.state
    this.setState({ animate1: !animate1, animate2: !animate2 })
  }

  render() {
    const { animate1, animate2 } = this.state

    return (
      <InfoCodeRow id="transition" code={breakpointsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Transition
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Default value of transition is <Tag>all 0.4s ease-in-out</Tag>.
        </Text>

        <Div
          h="3rem"
          w="3rem"
          m={{ b: "4rem" }}
          rounded="lg"
          bg="brand200"
          style={{
            transform: animate1 ? "translateX(20rem)" : "translateX(0)",
          }}
          transition
        />

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          You can edit this default transition value by changing the{" "}
          <Tag>transition</Tag> in the theme as shown.
        </Text>

        <ThemeProvider theme={theme}>
          <Div
            h="3rem"
            w="3rem"
            m={{ b: "4rem" }}
            rounded="lg"
            bg="brand200"
            style={{
              transform: animate2 ? "translateX(20rem)" : "translateX(0)",
            }}
            transition="custom"
          />
        </ThemeProvider>
      </InfoCodeRow>
    )
  }
}

export default Transition
