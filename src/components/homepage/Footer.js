import React from "react"
import { Link } from "gatsby"
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

import spiral from "../../images/footer/spiral.svg"
import line from "../../images/footer/line.svg"
import circle from "../../images/footer/circle.png"

const footerLinks = {
  docs: [
    {
      name: "Introduction",
      link: "/",
    },
    {
      name: "Installation",
      link: "/",
    },
    {
      name: "Get Started",
      link: "/",
    },
    {
      name: "Theme Setup",
      link: "/",
    },
    {
      name: "Atoms",
      link: "/",
    },
    {
      name: "Molecules",
      link: "/",
    },
    {
      name: "Functions",
      link: "/",
    },
  ],
  atomize: [
    {
      name: "Features",
      link: "/",
    },
    {
      name: "Design",
      link: "/",
    },
    {
      name: "Development",
      link: "/",
    },
    {
      name: "Github",
      link: "/",
    },
  ],
  resources: [
    {
      name: "Sketch File",
      link: "/",
    },
    {
      name: "Github",
      link: "/",
    },
  ],
  about: [
    {
      name: "Introduction",
      link: "/",
    },
    {
      name: "Design System",
      link: "/",
    },
    {
      name: "Showcase",
      link: "/",
    },
    {
      name: "Contribution",
      link: "/",
    },
  ],
  extras: [
    {
      name: "Medium Blog",
      link: "/",
    },
    {
      name: "Product Hunt",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
    {
      name: "Need Help?",
      link: "/",
    },
    {
      name: "Give Feedback",
      link: "/",
    },
  ],
}

const mediaLinks = [
  {
    icon: "Behance",
    link: "/",
  },
  {
    icon: "Dribbble",
    link: "/",
  },
  {
    icon: "Instagram",
    link: "/",
  },
  {
    icon: "Twitter",
    link: "/",
  },
  {
    icon: "Linkedin",
    link: "/",
  },
]

const Footer = () => {
  return (
    <Div
      tag="footer"
      p={{ t: { xs: "9rem", md: "7.5rem" }, b: { xs: "12rem", md: "5rem" } }}
      pos="relative"
    >
      <Image
        src={spiral}
        pos="absolute"
        top="-3rem"
        left={{ xs: "-2rem", md: "-7rem" }}
        w={{ xs: "11rem", md: "18rem" }}
      />
      <Image
        src={circle}
        pos="absolute"
        right="-5rem"
        bottom={{ xs: "3rem", md: "6rem" }}
        w={{ xs: "12rem", md: "16.5rem" }}
        zIndex="-1"
      />
      <Image
        src={line}
        pos="absolute"
        right="-5rem"
        bottom={{ xs: "1.5rem", md: "2.5rem" }}
        w={{ xs: "11rem", md: "14.25rem" }}
        zIndex="-1"
      />

      <Container>
        <Div m={{ b: "15rem" }} d={{ xs: "none", md: "block" }}>
          <Row>
            {Object.keys(footerLinks).map((key, index) => {
              return (
                <Col
                  size={{ xs: 6, md: 2 }}
                  offset={{ xs: 0, md: index === 0 && 1 }}
                >
                  <Div
                    p={{ l: { md: "2.5rem" }, b: { xs: "1.5rem", md: "0" } }}
                  >
                    <Text
                      m={{ b: "1rem" }}
                      textTransform="capitalize"
                      textWeight="500"
                    >
                      {key}
                    </Text>
                    {footerLinks[key].map(link => (
                      <Link to={link.link}>
                        <Text
                          m={{ b: "0.5rem" }}
                          textColor="medium"
                          hoverTextColor="info800"
                        >
                          {link.name}
                        </Text>
                      </Link>
                    ))}
                  </Div>
                </Col>
              )
            })}
          </Row>
        </Div>
        <Div d="flex" align="center" justify="center" flexDir="column">
          <Text textAlign="center" m={{ b: "1rem" }}>
            Designed & Developed by Proksh Luthra
          </Text>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map(link => (
              <Anchor href={link.link}>
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="info800"
                  m={{ r: "0.5rem" }}
                  cursor="pointer"
                />
              </Anchor>
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Footer
