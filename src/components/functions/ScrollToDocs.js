import React from "react"
import {
  Div,
  Text,
  Tag,
  Button,
  scrollTo,
  Row,
  Col,
  Icon,
  Container,
  ThemeProvider,
  DefaultTheme,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const scrollToDocsCode1 = `// scroll to target
import { Button, scrollTo } from "react-atomize";

const YellowButton = () => {
    return (
        <Button
            id="blueButton"
            onClick={() => scrollTo("#yellowButton")}
            bg="info700"
          >
            Scroll To Yellow Button
        </Button>
    )
}
`

const scrollToDocsCode2 = `// scroll To with offset and transition
import { Button, scrollTo } from "react-atomize";

const YellowButton = () => {
    return (
        <Button
            id="yellowButton"
            onClick={() => scrollTo("#blueButton", 100, 0, 800)}
            bg="warning700"
          >
            Scroll To Blue Button
        </Button>
    )
}
`

const ScrollToDocs = () => {
  return (
    <>
      <InfoCodeRow
        id="scrollToDocs"
        code={scrollToDocsCode1}
        pb="0"
        border={false}
      >
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Sroll To
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          <Tag>scrollTo</Tag> function can be used to scroll to certain section
          with transition. This fuction can recieve 4 arguememnts{" "}
          <Tag>targetQuery</Tag>, <Tag>offsetFromTop</Tag>, <Tag>nthQuerry</Tag>{" "}
          & <Tag>timeToReach</Tag>. Out of these <Tag>targetQuery</Tag> is
          cumpulsory, <Tag>offsetFromTop</Tag> is 0 by default,{" "}
          <Tag>nthQuerry</Tag> is 0 by default & <Tag>timeToReach</Tag> is 600.
        </Text>

        <Div m={{ b: "3rem" }} minH="70vh">
          <Button
            id="blueButton"
            onClick={() => scrollTo("#yellowButton")}
            bg="info700"
          >
            Scroll To Yellow Button
          </Button>
        </Div>
      </InfoCodeRow>
      <InfoCodeRow code={scrollToDocsCode2} pt="0">
        <Text textSize="subheader" textWeight="700" m={{ b: "1rem" }}>
          Scroll with offset and different duration
        </Text>
        <Div m={{ b: "3rem" }} minH="100vh">
          <Button
            id="yellowButton"
            onClick={() => scrollTo("#blueButton", 100, 0, 800)}
            bg="warning700"
          >
            Scroll To Blue Button
          </Button>
        </Div>
      </InfoCodeRow>
    </>
  )
}

export default ScrollToDocs
