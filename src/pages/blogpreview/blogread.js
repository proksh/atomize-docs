import React from "react"

import Root from "../../components/layout"
import BlogLayout from "../../blog-components/layout"
import BlogPageHero from "../../blog-components/blog-view/BlogPageHero"
import SocialBanner from "../../blog-components/blog-view/SocialBanner"
import TwoImages from "../../blog-components/blog-view/TwoImages"
import ContentSmall from "../../blog-components/blog-view/ContentSmall"
import FullImage from "../../blog-components/blog-view/FullImage"
import SmallImg from "../../blog-components/blog-view/SmallImg"
import ContentLarge from "../../blog-components/blog-view/ContentLarge"
import MoreReads from "../../blog-components/blog-view/MoreReads"
import { Text } from "atomize"

const blog = {
  heroSection: {
    type: "Style",
    heading: "5 ways to style our leather sneakers",
    by: "Jeremy Cai",
    date: "July 21, 2017",
    description:
      "Sophisticated, cute, and constructed by hand, the Fleur is a trusty and understated backpack that breaks in beautifully and will last you for years to come.",
    image: "",
  },
  socialBanner: {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  twoImages: {
    image1: {
      link:
        "https://images.unsplash.com/photo-1535556261192-f718879e7f2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      description: "Style with a light dress for summer adventures",
    },
    image2: {
      link:
        "https://images.unsplash.com/photo-1535981444082-2a5dc0548ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      description: "Internal compartments keep your essentials organized",
    },
  },
  fullImage: {
    image:
      "https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=2000",
    description: "Style with a light dress for summer adventures",
  },
  smallImg: {
    image:
      "https://images.unsplash.com/photo-1562102051-c1f36bd45eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    description: "Style with a light dress for summer adventures",
  },
  moreReads: [
    {
      image:
        "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Building things is the way to live.",
      type: "Megan Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "There is alot of world left.",
      type: "Megan Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515144225933-899dcb0ca32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Images can talk too.",
      type: "Megan Fisher",
      link: "/blogpreview/blogread",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519091830432-41608a52904e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Taste buds are calling.",
      type: "Megan Fisher",
      link: "/blogpreview/blogread",
    },
  ],
}

export default () => (
  <Root>
    <BlogLayout>
      <BlogPageHero data={blog.heroSection} />
      <SocialBanner data={blog.socialBanner} />
      <TwoImages data={blog.twoImages} />
      <ContentSmall
        data={
          <>
            <Text textSize="subheader" m={{ b: "2rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text textSize="subheader" m={{ b: "2rem" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </>
        }
      />
      <FullImage data={blog.fullImage} />
      <ContentSmall
        data={
          <>
            <Text textSize="subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </>
        }
      />
      <SmallImg data={blog.smallImg} />
      <ContentSmall
        data={
          <>
            <Text textSize="subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </>
        }
      />
      <ContentLarge
        data={
          <>
            <Text textSize="display1" fontFamily="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </>
        }
      />
      <MoreReads data={blog.moreReads} />
    </BlogLayout>
  </Root>
)
