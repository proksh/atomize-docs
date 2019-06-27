import React from "react"
import { Div, Text, Tag, Icon } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const Intro = () => {
  return (
    <>
      <InfoCodeRow>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Introduction
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Following the Atomize Design System specification, we developed a
          React UI library antd that contains a set of high quality components
          and demos for building rich, interactive user interfaces.
        </Text>
      </InfoCodeRow>
      <InfoCodeRow>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Features
        </Text>

        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            An enterprise-class UI design language for web applications.
          </Text>
        </Div>

        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            A set of high-quality React components out of the box.
          </Text>
        </Div>

        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            Written in TypeScript with complete defined types.
          </Text>
        </Div>

        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            The whole package of development and design resources and tools.
          </Text>
        </Div>
      </InfoCodeRow>
      <InfoCodeRow>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Environment Support
        </Text>
        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            Environment Support
          </Text>
        </Div>
        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            Modern browsers and Internet Explorer 9+ (with polyfills)
          </Text>
        </Div>
        <Div d="flex" m={{ b: "0.5rem" }}>
          <Icon
            name="Dot"
            size="14px"
            color="gray900"
            m={{ r: "0.25rem", t: "0.25rem" }}
          />
          <Text textColor="medium" textSize="body">
            Server-side Rendering.
          </Text>
        </Div>
      </InfoCodeRow>
    </>
  )
}

export default Intro
