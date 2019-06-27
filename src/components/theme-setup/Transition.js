import React from "react";
import { Div, Text, Tag, ThemeProvider, DefaultTheme } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const theme = {
  ...DefaultTheme,
  transition: "transform 0.8s linear"
};

const breakpointsCode1 = `// Changing the transition value
import { Div, Text, Tag, Row, Col, ThemeProvider, DefaultTheme } from "react-atomize";

const theme = {
  ...DefaultTheme,
  transition: "transform 0.8s linear"
};

<ThemeProvider theme={theme}>
  <Div
    h="3rem"
    w="3rem"
    m={{ b: "4rem" }}
    rounded="lg"
    bg="brand200"
    style={{
      transform: animate2
        ? "translateX(20rem)rotate(360deg)"
        : "translateX(0)rotate(0)"
    }}
    transition
  />
</ThemeProvider>
`;

class Transition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate1: false,
      animate2: false
    };

    this.toggleState = this.toggleState.bind(this);
  }

  componentDidMount() {
    setInterval(this.toggleState, 1000);
  }

  toggleState() {
    const { animate1, animate2 } = this.state;
    this.setState({ animate1: !animate1, animate2: !animate2 });
  }

  render() {
    const { animate1, animate2 } = this.state;

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
            transform: animate1
              ? "translateX(20rem)rotate(360deg)"
              : "translateX(0)rotate(0)"
          }}
          transition
        />

        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          You can edit this value as shown.
        </Text>

        <ThemeProvider theme={theme}>
          <Div
            h="3rem"
            w="3rem"
            m={{ b: "4rem" }}
            rounded="lg"
            bg="brand200"
            style={{
              transform: animate2
                ? "translateX(20rem)rotate(360deg)"
                : "translateX(0)rotate(0)"
            }}
            transition
          />
        </ThemeProvider>
      </InfoCodeRow>
    );
  }
}

export default Transition;
