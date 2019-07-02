import React from "react"
import {
  Div,
  Text,
  Row,
  Col,
  Container,
  Anchor,
  Icon,
  Image,
  Button,
} from "react-atomize"

import logoProducthunt from "../../images/logo-producthunt.svg"

const Features = () => {
  return (
    <Div bg="brandgray">
      <Container>
        <Div
          p={{ y: "5rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
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
              justify="left"
              hoverBorderColor="gray800"
              rounded="lg"
              m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
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
              bg="transparent"
              hoverBg="gray200"
              border="1px solid"
              borderColor="danger700"
              hoverBorderColor="danger600"
              rounded="lg"
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
