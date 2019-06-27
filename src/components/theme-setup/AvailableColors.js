import React from "react"
import { Div, Text, Anchor, scrollTo } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ColorList from "../common/ColorList"
import ColorDiv from "../common/ColorDiv"

const AvailableColors = () => {
  return (
    <>
      <InfoCodeRow id="availableColors">
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Available Colors
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
          The available colors come by default in atomize react are given below.
          The name of the color can be used for any color props in atomize. You
          can also{" "}
          <Anchor onClick={() => scrollTo("#addEditColors")}>
            edit or add your own colors
          </Anchor>{" "}
          to this pallette.
        </Text>

        <Div d="flex" m={{ b: "2.5rem" }}>
          <ColorDiv colorName="black" />
          <ColorDiv colorName="dark" />
          <ColorDiv colorName="light" />
          <ColorDiv colorName="disabled" />
          <ColorDiv colorName="white" />
          <ColorDiv colorName="transparent" />
        </Div>
        <ColorList colorName="brand" m={{ b: "2.5rem" }} />
        <ColorList colorName="black" m={{ b: "2.5rem" }} />
        <ColorList colorName="gray" m={{ b: "2.5rem" }} />
        <ColorList colorName="success" m={{ b: "2.5rem" }} />
        <ColorList colorName="info" m={{ b: "2.5rem" }} />
        <ColorList colorName="warning" m={{ b: "2.5rem" }} />
        <ColorList colorName="danger" m={{ b: "2.5rem" }} />
      </InfoCodeRow>
    </>
  )
}

export default AvailableColors
