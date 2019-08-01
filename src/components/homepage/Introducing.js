import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"

import intro1 from "../../images/icons/intro1.svg"
import intro2 from "../../images/icons/intro2.svg"
import intro3 from "../../images/icons/intro3.svg"
import intro4 from "../../images/icons/intro4.svg"

const list = [
  {
    icon: intro1,
    heading: "Flexible Grid",
    subheading: "Change grid variables or give decimal column size.",
    link: "/docs/react/theme#columnCount",
  },
  {
    icon: intro2,
    heading: "Style guide",
    subheading: "Update theme throughout the application easily.",
    link: "/docs/react/theme#availableColors",
  },

  {
    icon: intro3,
    heading: "Spacing",
    subheading: "A better and controlled way of update spacing.",
    link: "/docs/react/spacing",
  },

  {
    icon: intro4,
    heading: "Responsive",
    subheading: "Better control to make the app responsive.",
    link: "/docs/react/responsive",
  },
]

class Intoducing extends React.Component {
  render() {
    return (
      <Div tag="section" id="features" p={{ t: "8rem" }}>
        <Container>
          <Tag
            bg="black"
            textColor="white"
            h="2rem"
            p={{ x: "1rem" }}
            rounded="circle"
            m={{ b: "2rem" }}
          >
            Key features
          </Tag>
          <Text
            textSize="display1"
            textWeight="500"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            Why use Atomize React?
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="30rem"
            m={{ b: "3rem" }}
          >
            Atomize React helps you in building fully responsive websites and
            products that match your style.
          </Text>
          <Div
            p={{ b: "6rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              {list.map(item => (
                <Col size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                    <Div
                      border="1px solid"
                      borderColor="gray200"
                      h="100%"
                      d="flex"
                      flexDir="column"
                      p="2rem"
                      shadow="3"
                      rounded="xl"
                    >
                      <Div flexGrow="1">
                        <Image
                          src={item.icon}
                          m={{ t: "1rem", b: "2rem" }}
                          w="auto"
                          h="2rem"
                        />
                        <Text
                          textSize="title"
                          textWeight="500"
                          m={{ b: "1rem" }}
                        >
                          {item.heading}
                        </Text>
                        <Text
                          textSize="subheader"
                          textColor="medium"
                          m={{ b: "2rem" }}
                        >
                          {item.subheading}
                        </Text>
                      </Div>
                      <Link to={item.link}>
                        <Text
                          textColor="info700"
                          hoverTextColor="info800"
                          textWeight="500"
                        >
                          See How
                        </Text>
                      </Link>
                    </Div>
                  </Div>
                </Col>
              ))}
            </Row>
          </Div>
        </Container>
      </Div>
    )
  }
}

export default Intoducing
