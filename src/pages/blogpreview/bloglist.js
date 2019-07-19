import React from "react"

import { Div, Text } from "atomize"
import Root from "../../components/layout"
import BlogLayout from "../../blog-components/layout"
import CategorySlider from "../../blog-components/homepage/CategorySlider"

const homepage = {
  crouselList: [
    {
      image:
        "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "The dress that makes the day",
      type: "Megean Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535556261192-f718879e7f2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "My wallet picks",
      type: "Megean Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562943306-e74835754fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "The eyewear style",
      type: "Megean Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551533257-bbd74dff1f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Brands to explore.",
      type: "Megean Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1538650638499-0d3326d76e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "What to buy for night wear",
      type: "Megean Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559056390-661e768c461f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Carry Bags you will love.",
      type: "Megean Fisher",
      link: "/blogpreview/blogread",
    },
  ],
}

export default () => (
  <Root>
    <BlogLayout>
      <Div p={{ x: { xs: "1.5rem", md: "2rem" }, t: "12rem", b: "1rem" }}>
        <Text fontFamily="secondary" textSize="display2" textAlign="center">
          Fashion Update
        </Text>
      </Div>
      <CategorySlider p={{ b: "133%" }} list={homepage.crouselList} />
    </BlogLayout>
  </Root>
)
