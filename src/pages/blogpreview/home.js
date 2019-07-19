import React from "react"

import Layout from "../../components/layout"
import BlogLayout from "../../blog-components/layout"
import SEO from "../../components/seo"
import HeroSection from "../../blog-components/homepage/HeroSection"
import CategorySlider from "../../blog-components/homepage/CategorySlider"
import BlogList from "../../blog-components/homepage/BlogList"

const homepage = {
  crouselList: [
    {
      image:
        "https://images.unsplash.com/photo-1512068198541-4c4993e700e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Style says all the words.",
      type: "Fashion",
      link: "/blogpreview/bloglist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "There is alot of world left.",
      type: "Tavell",
      link: "/blogpreview/bloglist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515144225933-899dcb0ca32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Images can talk too.",
      type: "Photography",
      link: "/blogpreview/bloglist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519091830432-41608a52904e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Taste buds are calling.",
      type: "Food",
      link: "/blogpreview/bloglist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Building things is the way to live.",
      type: "Craft",
      link: "/blogpreview/bloglist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Tech is the new sexy.",
      type: "Tech",
      link: "/blogpreview/bloglist",
    },
  ],
  poppularBlogs: {
    title: "Popular Blogs",
    list: [
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
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Preview of the blog template" />
    <BlogLayout>
      <HeroSection />
      <CategorySlider list={homepage.crouselList} />
      <BlogList data={homepage.poppularBlogs} />
    </BlogLayout>
  </Layout>
)

export default IndexPage
