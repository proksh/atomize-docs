import React from "react"
import { Div, Text, Tag, ThemeProvider, DefaultTheme } from "atomize"
import InfoCodeRow from "../common/InfoCodeRow"
import ColorList from "../common/ColorList"
import ColorDiv from "../common/ColorDiv"

const theme1 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand100: "#F9F8FC",
    brand200: "#F3F1FA",
    brand300: "#E9E6F6",
    brand400: "#D2CCEC",
    brand500: "#BCB3E2",
    brand600: "#9C8FD6",
    brand700: "#6F5CC3",
    brand800: "#553EB5",
    brand900: "#382683",
  },
}

const theme2 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    myColor: "#234423",
  },
}

const addEditColorsCode1 = `// Overwriting an existing color
import { ThemeProvider, DefaultTheme, Div, Text } from "atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand100: "#F9F8FC",
    brand200: "#F3F1FA",
    brand300: "#E9E6F6",
    brand400: "#D2CCEC",
    brand500: "#BCB3E2",
    brand600: "#9C8FD6",
    brand700: "#6F5CC3",
    brand800: "#553EB5",
    brand900: "#382683",
  }
};

const BrandColors = () => (
  <ThemeProvider theme={theme}>
      <Div d="flex">
        {["100", "200", "300", "400", "500", "600", "700", "800", "900"].map(
          shade => (
            <Div
              m={{ r: "1rem" }}
              w="2rem"
              d="flex"
              flexDir="column"
              align="center"
            >
              <Div
                bg={${"`brand${shade}`"}}
                rounded="circle"
                h="2rem"
                w="2rem"
                m={{ b: "0.5rem" }}
              />
              <Text
                textSize="tiny"
                textAlign="center"
                textWeight="500"
                textColor="medium"
              >
                brand
                <br />
                {shade}
              </Text>
            </Div>
          )
        )}
      </Div>
    </ThemeProvider>
)

ReactDOM.render(<BrandColors />, mountNode);`

const addEditColorsCode2 = `// Creating your own colors
import { ThemeProvider, DefaultTheme, Div } from "atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    myColor: '#234423',
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Div d="flex">
      <Div
        bg="myColor"
        m={{ r: "1rem" }}
        w="2rem"
        d="flex"
        flexDir="column"
        align="center"
      />
        <Div
          bg="myColor"
          rounded="circle"
          h="2rem"
          w="2rem"
          m={{ b: "0.5rem" }}
        />
        <Text
          textSize="tiny"
          textAlign="center"
          textWeight="500"
          textColor="medium"
        >
          myColor
        </Text>
      </Div>
    </Div>
  </ThemeProvider>
  , mountNode
);`

const AvailableColors = () => {
  return (
    <>
      <InfoCodeRow
        id="addEditColors"
        border={false}
        pb="0"
        code={addEditColorsCode1}
      >
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Add or Edit Colors
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          You can overwrite the existing color or add a new color to the theme
          using <Tag>ThemeProvider</Tag>
          {"  &  "}
          <Tag>DefaultTheme</Tag>. You can create your own brand color palette
          like -
        </Text>

        <ThemeProvider theme={theme1}>
          <ColorList colorName="brand" m={{ b: "2.5rem" }} />
        </ThemeProvider>
      </InfoCodeRow>

      <InfoCodeRow pt="0" code={addEditColorsCode2}>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          You can also add your own color name & it's value like -
        </Text>

        {/* <ColorList colorName="brand" m={{ b: "2.5rem" }} /> */}
        <ThemeProvider theme={theme2}>
          <Div d="flex">{<ColorDiv colorName={"myColor"} shade={``} />}</Div>
        </ThemeProvider>
      </InfoCodeRow>
    </>
  )
}

export default AvailableColors
