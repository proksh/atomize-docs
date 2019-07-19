import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Anchor, Icon } from "atomize"

const footerLinks = {
  docs: [
    {
      name: "Installation",
      link: "/docs/react/setup",
    },
    {
      name: "Theme Setup",
      link: "/docs/react/theme",
    },
    {
      name: "Grid",
      link: "/docs/react/grid",
    },
    {
      name: "Atoms",
      link: "/docs/react/atoms",
    },
    {
      name: "Molecules",
      link: "/docs/react/molecules",
    },
    {
      name: "Functions",
      link: "/docs/react/functions",
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
      link: "/docs/react/intro",
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
      link: "/docs/react/intro",
    },
    {
      name: "Showcase",
      link: "/docs/react/showcase",
    },
    {
      name: "Contributing",
      link: "/docs/react/contributing",
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
                    <Text
                      m={{ b: "1rem" }}
                      textColor="black"
                      textTransform="capitalize"
                      textWeight="500"
                    >
                      {key}
                    </Text>
                    {footerLinks[key].map((link, i) => {
                      if (link.anchor) {
                        return (
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
          <Text
            tag="h2"
            textWeight="400"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            Designed & Developed by Proksh Luthra
          </Text>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blanc">
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="info800"
                  m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
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
