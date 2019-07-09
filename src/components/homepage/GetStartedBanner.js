import React from "react"
import {
  Div,
  Text,
  Container,
  Anchor,
  Icon,
  Image,
  Button,
} from "react-atomize"

import logoProducthunt from "../../images/logo-producthunt.svg"

const Features = () => {
  return (
    <Div bg={{ xs: "gray200", md: "white" }}>
      <Container>
        <Div
          p={{ y: "5rem", x: { xs: "0", md: "1rem" } }}
          bg="gray200"
          style={{ borderRadius: "32px" }}
        >
          <Div d="flex" flexDir="column" align="center">
            <Text
              textSize="display1"
              textAlign="center"
              textWeight="500"
              maxW="26rem"
              m={{ b: "1rem" }}
            >
              We are still in beta.
            </Text>
            <Text
              textSize="subheader"
              textAlign="center"
              maxW="26rem"
              m={{ b: "2.5rem" }}
            >
              In case of any issue or suggestions, you can contact for support
              on{" "}
              <Anchor
                href="mailto:prokshh@gmail.com"
                textWeight="400"
                textColor="black"
                textDecor="underline"
              >
                prokshh@gmail.com
              </Anchor>
            </Text>
          </Div>
          <Div
            d="flex"
            w="100%"
            justify="center"
            flexDir={{ xs: "column", sm: "row" }}
          >
            <Button
              h="3rem"
              w={{ xs: "100%", sm: "14rem" }}
              p={{ l: "1rem", r: "2rem" }}
              bg="info700"
              hoverBg="info600"
              justify="left"
              rounded="lg"
              m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
              shadow="2"
              hoverShadow="4"
              suffix={
                <Icon
                  name="LongRight"
                  pos="absolute"
                  top="50%"
                  right="1rem"
                  color="white"
                  transform="translateY(-50%)"
                  size="18px"
                />
              }
            >
              Learn Atomize
            </Button>
            <Button
              h="3rem"
              w={{ xs: "100%", sm: "14rem" }}
              p={{ l: "1rem", r: "0rem" }}
              bg="white"
              rounded="lg"
              shadow="2"
              hoverShadow="4"
              textColor="danger700"
              prefix={
                <Image
                  src={logoProducthunt}
                  pos="absolute"
                  top="50%"
                  left="1rem"
                  transform="translateY(-50%)"
                  w="1rem"
                />
              }
            >
              Upvote on Producthunt
            </Button>
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Features
