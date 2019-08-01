import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { Div, Text, Row, Col, Container, Image, Icon, Button } from "atomize"
import styled, { keyframes } from "styled-components"
import codeTheme from "../common/codeTheme"
import ReactWOW from "react-wow"

// import craftImage from "../../images/craft.png"
import girl from "../../images/avatar/girl.png"

import FollowCard from "./uicomponents/FollowCard"
import UserEdit from "./uicomponents/UserEdit"

const translate = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
`

const Translate = styled.div`
  animation: ${translate} 6s linear infinite;
`

const TranslateContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 1rem;
  right: 1rem;
  overflow: hidden;
  zindex: 10;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media (min-width: 576px) {
    top: 50%;
    transform: translateY(-50%);
    left: auto;
    right: 0;
    width: 18rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2rem;
    background-image: linear-gradient(
      rgba(247, 245, 244, 1),
      rgba(247, 245, 244, 0)
    );
    filter: invert(1);
    z-index: 10;

    @media (min-width: 576px) {
      background-image: linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      filter: invert(0);
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2rem;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    z-index: 10;
  }
`

const Craft = () => {
  return (
    <Div
      w="100vw"
      p={{ y: "8rem" }}
      overflow="hidden"
      border={{ b: "1px solid" }}
      borderColor="gray300"
    >
      <Container>
        <Text
          tag="h2"
          textSize="display2"
          textAlign="center"
          fontFamily="secondary"
          textWeight="500"
          maxW="40rem"
          m={{ b: "6rem", x: "auto" }}
        >
          Code the perfect design for each project using Atomize.
        </Text>
        {/* <Row>
          <Col size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <Div p={{ y: "2rem" }}>
              <Row>
                {list.map((item, index) => (
                  <Col
                    key={index}
                    size={{ xs: 12, sm: 6, lg: 3 }}
                    d="flex"
                    align="center"
                    flexDir="column"
                  >
                    <Div
                      d="flex"
                      maxW="12rem"
                      flexDir="column"
                      align="center"
                      m={{ b: "2rem" }}
                    >
                      <Image src={item.image} w="4.5rem" m={{ b: "1rem" }} />
                      <Text
                        textAlign="center"
                        textSize="subheader"
                        textColor="medium"
                      >
                        {item.content}
                      </Text>
                    </Div>
                  </Col>
                ))}
              </Row>
            </Div>
          </Col>
        </Row> */}
        <Div d="flex" pos="relative" justify="center">
          <Div
            w="100%"
            m={{
              b: { xs: "70%", sm: "auto" },
              r: { xs: "0", md: "4rem" },
              l: "0",
            }}
          >
            <Div
              pos="relative"
              w="100%"
              bg="brandgray"
              p={{ b: { xs: "70%", md: "72%", lg: "53%" } }}
              overflow="hidden"
              style={{ filter: "invert(1)", borderRadius: "24px" }}
            >
              <Div
                pos="absolute"
                top="1rem"
                left="1rem"
                bottom="0"
                right="1rem"
                overflow="hidden"
              >
                <Highlight
                  {...defaultProps}
                  theme={{
                    ...codeTheme,
                    plain: { ...codeTheme.plain, backgroundColor: "#f7f5f4" },
                  }}
                  code={code}
                  language="jsx"
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </Div>
            </Div>
            <TranslateContainer>
              <Div pos="relative">
                <Translate>
                  <AnimatingBlock />
                </Translate>
                <Div pos="absolute" top="100%" left="0" right="0">
                  <Translate>
                    <AnimatingBlock />
                  </Translate>
                </Div>
                <Div
                  h="1rem"
                  pos="absolute"
                  bottom="0"
                  height="1rem"
                  left="0"
                  bg="white"
                  zIndex="10"
                  right="0"
                ></Div>
              </Div>
            </TranslateContainer>
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Craft

const AnimatingBlock = () => (
  <Div p={{ b: "1rem" }}>
    <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
      <Div
        border={{ b: "1px solid" }}
        borderColor="gray300"
        p={{ b: "0.75rem" }}
      >
        <Text textSize="title" textWeight="500">
          $1,410.16
        </Text>
        <Text textSize="caption" textColor="light">
          per month
        </Text>
      </Div>
      <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
        <Div>
          <Text textSize="caption" textColor="dark">
            Payment Card
          </Text>
          <Text textSize="caption" textColor="light">
            Component
          </Text>
        </Div>
        <Div>
          <Div d="flex" h="20px">
            {[1, 2, 3, 4, 5].map(num => (
              <Icon
                key={num}
                name="StarSolid"
                size="14px"
                color={num === 5 ? "gray400" : "info700"}
                m={{ r: "0.125rem" }}
              />
            ))}
          </Div>
          <Text textSize="caption" textColor="light">
            Rated 4.0/5
          </Text>
        </Div>
      </Div>
      <Button
        rounded="lg"
        bg="info700"
        hoverBg="info800"
        w="100%"
        textWeight="500"
      >
        Use this design system
      </Button>
    </Div>
    {/* <UserEdit d={{ xs: "none", xl: "flex" }} pos="static" m={{ b: "1rem" }} /> */}
    <FollowCard maxW="100%" pos="static" m={{ b: "1rem" }} />
    <Div
      p="1rem"
      bg="white"
      d="flex"
      shadow="2"
      align="center"
      rounded="xl"
      justify="space-between"
    >
      <Div d="flex" align="center">
        <Image
          src={girl}
          rounded="circle"
          h="2.5rem"
          w="2.5rem"
          m={{ r: "1rem" }}
        />
        <Text textWeight="500">Meagan Fisher</Text>
      </Div>
      <Icon name="Add" color="info700" size="20px" />
    </Div>
  </Div>
)

const code = `const PaymentCardBlock = () => (
  <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
    <Div
      border={{ b: "1px solid" }}
      borderColor="gray300"
      p={{ b: "0.75rem" }}
    >
      <Text textSize="title" textWeight="500">
        $1,410.16
      </Text>
      <Text textSize="caption" textColor="light">
        per month
      </Text>
    </Div>
    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
      <Div>
        <Text textSize="caption" textColor="dark">
          Payment Card
        </Text>
        <Text textSize="caption" textColor="light">
          Component
        </Text>
      </Div>
      <Div>
        <Div d="flex" h="20px">
          {[1, 2, 3, 4, 5].map(num => (
            <Icon
              key={num}
              name="StarSolid"
              size="14px"
              color={num === 5 ? "gray400" : "info700"}
              m={{ r: "0.125rem" }}
            />
          ))}
        </Div>
        <Text textSize="caption" textColor="light">
          Rated 4.0/5
        </Text>
      </Div>
    </Div>
    <Button
      rounded="lg"
      bg="info700"
      hoverBg="info800"
      w="100%"
      textWeight="500"
    >
      Use this design system
    </Button>
  </Div>
)
`
