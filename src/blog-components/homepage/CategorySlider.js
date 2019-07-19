import React from "react"

import { Link } from "gatsby"
import { Div, Text, Icon } from "atomize"
import styled from "styled-components"
import ParallaxImg from "../common/ParallaxImg"
import { Navigation, Mousewheel, Scrollbar } from "swiper/dist/js/swiper.esm"
import Swiper from "react-id-swiper"

/**
 * Parameters for Slider
 */
const params = {
  modules: [Navigation, Mousewheel, Scrollbar],
  slidesPerView: "4.65",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    invert: false,
    forceToAxis: true,
  },
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
  },
  renderPrevButton: () => (
    <NavButtons className="swiper-button-prev">
      <Icon name="LeftArrow" color="black" />
    </NavButtons>
  ),
  renderNextButton: () => (
    <NavButtons className="swiper-button-next">
      <Icon name="RightArrow" color="black" />
    </NavButtons>
  ),
  spaceBetween: 16,
  breakpoints: {
    1200: {
      slidesPerView: 4.65,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1.26,
      spaceBetween: 16,
    },
  },
}

/**
 * Button style for slider
 */
const NavButtons = styled.div`
  background-image: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0 20px 30px -2px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 100rem;
  height: 2.5rem !important;
  width: 2.5rem !important;
  transition: all 0.4s ease-in-out;
  transform: translateY(-50%);

  &.swiper-button-disabled {
    opacity: 0 !important;
  }
`

export default class CategorySlider extends React.Component {
  render() {
    const { list, p } = this.props
    return (
      <Div bg="white" id="categories" p={{ y: "2rem" }}>
        <CustomSwiper p={{ b: "8rem" }}>
          <Swiper {...params}>
            {list.map((listItem, index) => (
              <div key={index}>
                <Link to={listItem.link}>
                  <ParallaxImg p={p} bgImg={listItem.image} />
                  <Text textColor="black" p={{ y: "0.5rem" }}>
                    {listItem.title}
                  </Text>
                  <Div h="1px" bg="gray400"></Div>
                  <Text textColor="light" p={{ y: "0.25rem" }}>
                    {listItem.type}
                  </Text>
                </Link>
              </div>
            ))}
          </Swiper>
        </CustomSwiper>
      </Div>
    )
  }
}

CategorySlider.defaultProps = {
  p: { b: "100%" },
}

const CustomSwiper = styled(Div)`
  .swiper-container {
    overflow: shown;
    padding: 0 1.5rem;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }
  }

  .swiper-scrollbar {
    display: none;
    width: calc(100% - 4rem) !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    height: 1px !important;
    border-radius: 0 !important;

    .swiper-scrollbar-drag {
      background: black;
    }
  }
`
