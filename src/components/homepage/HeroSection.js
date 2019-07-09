import React from "react"
import { Link } from "gatsby"

import {
  Button,
  Container,
  Text,
  Div,
  Image,
  Icon,
  scrollTo,
} from "react-atomize"
import ReactWOW from "react-wow"

import circle from "../../images/hero-illustration/circle.png"
import circleBrush from "../../images/hero-illustration/circle-brush.svg"
import lineBrush from "../../images/hero-illustration/line-brush.svg"
import triangles from "../../images/hero-illustration/triangles.svg"
import follow from "../../images/hero-illustration/follow.svg"
import upload from "../../images/hero-illustration/upload.svg"
import john from "../../images/hero-illustration/john.svg"
import form from "../../images/hero-illustration/form.svg"
import notification from "../../images/hero-illustration/notification.svg"
import card from "../../images/hero-illustration/card.svg"
import cardImg from "../../images/hero-illustration/card-img.png"

class HeroSection extends React.Component {
  constructor(props) {
    super(props)

    this.notificationImg = React.createRef()
    this.johnImg = React.createRef()
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollAnimation)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollAnimation)
  }

  scrollAnimation = e => {
    const srcollPos = window.scrollY
    document.getElementById(
      "triangles"
    ).style.transform = `translateY(${srcollPos / 20}px)`

    e.isTrusted && requestAnimationFrame(this.scrollAnimation)
  }

  render() {
    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "9rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <ReactWOW animation="fadeInUp">
              <Text textAlign="center" textSize="display3" m={{ b: "1rem" }}>
                Design System for React JS
              </Text>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="0.1s">
              <Text
                maxW="38rem"
                textSize="subheader"
                textAlign="center"
                textColor="medium"
                m={{ b: "2.5rem" }}
              >
                UI design framework for React that helps designers & developers
                to collaborate, and create beautiful and consistent user
                interfaces for the web.
              </Text>
            </ReactWOW>

            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
            >
              <ReactWOW animation="fadeInUp" delay="0.2s">
                <Link to="/docs/intro">
                  <Button
                    h="3rem"
                    w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                    hoverBg="info600"
                    rounded="lg"
                    m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                  >
                    Get Started Now
                  </Button>
                </Link>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay="0.3s">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray200"
                  border="1px solid"
                  borderColor="gray500"
                  hoverBorderColor="gray600"
                  rounded="lg"
                  textColor="medium"
                  onClick={() => scrollTo("#features")}
                >
                  Know More
                </Button>
              </ReactWOW>
            </Div>
          </Container>
        </Div>
        <ReactWOW animation="fadeIn" delay="0.5s">
          <Div
            tag="section"
            w="100vw"
            p={{ t: { xs: "8rem", md: "8rem" } }}
            overflow="hidden"
          >
            <Container>
              <Div
                d="flex"
                justify="center"
                p={{ b: "10.5rem" }}
                border={{ b: "1px solid" }}
                borderColor="gray300"
              >
                <Div
                  minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                  bg="brandgray"
                  h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                  rounded="xl"
                  pos="relative"
                >
                  <Image
                    src={circle}
                    h="4.5rem"
                    w="4.5rem"
                    pos="absolute"
                    right={{ xs: "-1rem", lg: "-3rem" }}
                    top="-2rem"
                    zIndex="-1"
                    className="hero-from-down"
                  />
                  <Image
                    src={circleBrush}
                    h="2rem"
                    w="2rem"
                    pos="absolute"
                    right={{ xs: "-1.5rem", lg: "-4.5rem" }}
                    top="-4.75rem"
                    className="hero-from-down"
                  />
                  <Image
                    src={lineBrush}
                    w="2.5rem"
                    pos="absolute"
                    right={{ xs: "-1.5rem", lg: "-4.5rem" }}
                    top="-7.75rem"
                    className="hero-from-down"
                  />
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      d={{ xs: "none", lg: "block" }}
                      w="18rem"
                      pos="absolute"
                      left="-1.5rem"
                      top="6rem"
                      rounded="lg"
                      shadow="2"
                      className="hero-from-down"
                    >
                      <Image src={upload} m={{ b: "-0.5rem" }} />
                    </Div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      d={{ xs: "none", md: "block" }}
                      w="18rem"
                      pos="absolute"
                      left={{ md: "2rem", lg: "-1.5rem" }}
                      top={{ md: "12rem", lg: "13rem" }}
                      rounded="lg"
                      shadow="2"
                      className="hero-from-down"
                    >
                      <Image src={follow} m={{ b: "-0.5rem" }} />
                    </Div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      d={{ xs: "none", lg: "block" }}
                      w="18rem"
                      pos="absolute"
                      left="19rem"
                      top="-2rem"
                      rounded="lg"
                      shadow="5"
                      className="hero-from-down"
                    >
                      <Image src={card} m={{ b: "-0.5rem" }} />
                    </Div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      d={{ xs: "none", lg: "block" }}
                      pos="absolute"
                      w="18rem"
                      h="14rem"
                      rounded={{ t: "lg" }}
                      left="19rem"
                      top="-1.5rem"
                      bgImg={cardImg}
                      bgSize="cover"
                      bgPos="center"
                      className="hero-from-down"
                    ></Div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      d={{ xs: "none", md: "block" }}
                      pos="absolute"
                      w="18.5rem"
                      right={{ md: "2.5rem", lg: "1rem" }}
                      top={{ xs: "-1.5rem", md: "-2rem" }}
                      rounded="lg"
                      shadow="5"
                      className="hero-from-down"
                    >
                      <Image src={notification} m={{ b: "-0.5rem" }} />
                    </Div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      w={{ xs: "calc(100% - 2rem)", md: "18.5rem" }}
                      pos={{ xs: "static", md: "absolute" }}
                      m={{ xs: "1rem", md: "0" }}
                      right={{ md: "2.5rem", lg: "1rem" }}
                      top={{ md: "3.5rem", lg: "2.5rem" }}
                      rounded="lg"
                      shadow="2"
                      className="hero-from-down"
                    >
                      <Image src={form} m={{ b: "-0.5rem" }} />
                    </Div>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="0.5s">
                    <Div
                      w={{
                        xs: "calc(100% - 2rem)",
                        md: "18rem",
                        lg: "18.5rem",
                      }}
                      pos={{ xs: "static", md: "absolute" }}
                      m={{ xs: "1rem", md: "0" }}
                      left={{ md: "2rem", lg: "19rem" }}
                      bottom={{ lg: "-3rem" }}
                      top={{ md: "5.5rem", lg: "auto" }}
                      rounded="lg"
                      shadow="2"
                      className="hero-from-down"
                    >
                      <Image src={john} m={{ b: "-0.5rem" }} />
                    </Div>
                  </ReactWOW>

                  <ButtonIllustration
                    top="-3rem"
                    left="-2.25rem"
                    icon="Eye"
                    color="info"
                    rotate="-12"
                    shadow="5"
                  />
                  <ButtonIllustration
                    top="-2.75rem"
                    left="1.5rem"
                    icon="EditSolid"
                    color="warning"
                    rotate="-12"
                    shadow="3"
                  />
                  <ButtonIllustration
                    top="0.5rem"
                    left="-0.75rem"
                    icon="Attachment"
                    color="success"
                    rotate="-12"
                    shadow="2"
                  />
                  <ButtonIllustration
                    top="0.75rem"
                    left="3rem"
                    icon="Play"
                    color="danger"
                    rotate="8"
                    shadow="4"
                  />
                  <Image
                    src={triangles}
                    id="triangles"
                    w="10rem"
                    pos="absolute"
                    right="-2.5rem"
                    bottom="-3.5rem"
                  />
                </Div>
              </Div>
            </Container>
          </Div>
        </ReactWOW>
      </>
    )
  }
}

export default HeroSection

const ButtonIllustration = ({ top, left, icon, color, rotate, shadow }) => (
  <Button
    h="2.5rem"
    w="2.5rem"
    bg={`${color}700`}
    pos="absolute"
    left={left}
    top={top}
    transform={`rotate(${rotate})deg)`}
    rounded="circle"
    shadow={shadow}
    transition={false}
    className="hero-from-down"
  >
    <Icon name={icon} color="white" size="20px" />
  </Button>
)
