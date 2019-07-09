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
} from "react-atomize"
import ReactWOW from "react-wow"

import spiral from "../../images/footer/spiral.svg"
import line from "../../images/footer/line.svg"
import circle from "../../images/footer/circle.png"

const footerLinks = {
  docs: [
    {
      name: "Installation",
      link: "/docs/setup",
    },
    {
      name: "Theme Setup",
      link: "/docs/theme",
    },
    {
      name: "Grid",
      link: "/docs/grid",
    },
    {
      name: "Atoms",
      link: "/docs/atoms",
    },
    {
      name: "Molecules",
      link: "/docs/molecules",
    },
    {
      name: "Functions",
      link: "/docs/functions",
    },
  ],
  atomize: [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Design",
      anchor: true,
      link: "http://www.atomizedesign.com/",
    },
    {
      name: "Development",
      link: "/docs/intro",
    },
    {
      name: "Github",
      anchor: true,
      link: "https://github.com/Proksh/atomize",
    },
  ],
  resources: [
    {
      name: "Sketch File",
      anchor: true,
      link: "https://gumroad.com/l/atomize",
    },
    {
      name: "Github",
      anchor: true,
      link: "https://github.com/Proksh/atomize",
    },
  ],
  about: [
    {
      name: "Introduction",
      link: "/docs/intro",
    },
    {
      name: "Showcase",
      link: "/docs/showcase",
    },
    {
      name: "Contributing",
      link: "/docs/contributing",
    },
  ],
  extras: [
    {
      name: "Blog",
      anchor: true,
      link: "/",
    },
    {
      name: "Product Hunt",
      anchor: true,
      link: "/",
    },
    {
      name: "Need Help?",
      anchor: true,
      link: "mailto:prokshh@gmail.com",
    },
    {
      name: "Give Feedback",
      anchor: true,
      link: "mailto:prokshh@gmail.com",
    },
  ],
}

const mediaLinks = [
  {
    icon: "Behance",
    link: "https://www.behance.net/prokshh90d1",
  },
  {
    icon: "Dribbble",
    link: "https://dribbble.com/proksh",
  },
  {
    icon: "Instagram",
    link: "https://www.instagram.com/prokshluthra/",
  },
  {
    icon: "Twitter",
    link: "https://twitter.com/proksh_luthra",
  },
  {
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/prokshluthra/",
  },
]

const Footer = () => {
  return (
    <Div
      tag="footer"
      p={{ t: { xs: "12rem", md: "7rem" }, b: { xs: "4rem", md: "5rem" } }}
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
        bottom={{ xs: "-7rem", md: "6rem" }}
        w={{ xs: "12rem", md: "16.5rem" }}
        zIndex="-1"
      />
      <Image
        src={line}
        pos="absolute"
        right="-6rem"
        bottom={{ xs: "-3rem", md: "2.5rem" }}
        w={{ xs: "11rem", md: "14.25rem" }}
        zIndex="-1"
      />

      <Container>
        <Div m={{ b: "12rem" }} d={{ xs: "none", md: "block" }}>
          <Row>
            {Object.keys(footerLinks).map((key, index) => {
              return (
                <Col
                  size={{ xs: 6, md: 2 }}
                  offset={{ xs: 0, md: index === 0 && 1 }}
                >
                  <Div
                    p={{ l: { md: "2.5rem" }, b: { xs: "1.5rem", md: "0" } }}
                    textColor="medium"
                  >
                    <ReactWOW animation="fadeInUp">
                      <Text
                        m={{ b: "1rem" }}
                        textColor="black"
                        textTransform="capitalize"
                        textWeight="500"
                      >
                        {key}
                      </Text>
                    </ReactWOW>
                    {footerLinks[key].map((link, i) => {
                      if (link.anchor) {
                        return (
                          <ReactWOW
                            animation="fadeInUp"
                            delay={`${0.1 * i + 0.2 * index}s`}
                            key={link.name}
                          >
                            <Anchor
                              m={{ b: "0.5rem" }}
                              textColor="medium"
                              hoverTextColor="info800"
                              d="block"
                              href={link.link}
                              target="_blanc"
                              textWeight="400"
                            >
                              {link.name}
                            </Anchor>
                          </ReactWOW>
                        )
                      } else {
                        return (
                          <Link to={link.link}>
                            <Text
                              m={{ b: "0.5rem" }}
                              textColor="medium"
                              hoverTextColor="info800"
                            >
                              {link.name}
                            </Text>
                          </Link>
                        )
                      }
                    })}
                  </Div>
                </Col>
              )
            })}
          </Row>
        </Div>
        <Div d="flex" align="center" justify="center" flexDir="column">
          <ReactWOW animation="fadeInUp">
            <Text textAlign="center" m={{ b: "1rem" }}>
              Designed & Developed by Proksh Luthra
            </Text>
          </ReactWOW>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blanc">
                <ReactWOW animation="fadeInUp" delay={`${index * 0.05}s`}>
                  <Icon
                    name={link.icon}
                    size="20px"
                    hoverColor="info800"
                    m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
                    cursor="pointer"
                  />
                </ReactWOW>
              </Anchor>
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Footer
