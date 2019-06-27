import React from "react";
import {
  Div,
  Text,
  Tag,
  Row,
  Col,
  Icon,
  Container,
  ThemeProvider,
  DefaultTheme
} from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const theme1 = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    },
    containerMaxWidth: {
      xs: "50px",
      sm: "80px",
      md: "100px",
      lg: "200px",
      xl: "300px"
    }
  }
};

const containerDocsCode1 = `// Container
import { Div, Container } from "react-atomize";

<Container>
  <Div bg="brand700" p={{ y: "2rem" }} d="flex" align="center" />
</Container>
`;

const containerDocsCode2 = `// Changing grid theme
import { Div, Container } from "react-atomize";

const theme1 = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    },
    containerMaxWidth: {
      xs: "50px",
      sm: "80px",
      md: "100px",
      lg: "200px",
      xl: "300px"
    }
  }
};

<ThemeProvider theme={theme1}>
  <Div m={{ b: "3rem" }}>
    <Container>
      <Div bg="brand700" p={{ y: "2rem" }} d="flex" align="center" />
    </Container>
  </Div>
</ThemeProvider>
`;

const ContainerDocs = () => {
  return (
    <>
      <InfoCodeRow
        id="containerDocs"
        code={containerDocsCode1}
        pb="0"
        border={false}
      >
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Container
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          Containers are the most basic element for using our default grid
          system. Container max-width changes at each breakpoint defined in the
          theme to the max-width defined in each breakpoint.
        </Text>

        <Div m={{ b: "3rem" }}>
          <Container>
            <Div bg="success400" p={{ y: "2rem" }} d="flex" align="center" />
          </Container>
        </Div>
      </InfoCodeRow>
      <InfoCodeRow code={containerDocsCode2} pt="0">
        <Text textSize="subheader" textWeight="700" m={{ b: "1rem" }}>
          Changing Grid Variables
        </Text>
        <ThemeProvider theme={theme1}>
          <Div m={{ b: "3rem" }}>
            <Container>
              <Div bg="success400" p={{ y: "2rem" }} d="flex" align="center" />
            </Container>
          </Div>
        </ThemeProvider>

        <Div d="flex" bg="info700" p="1rem" rounded="md">
          <Icon
            name="InfoSolid"
            size="16px"
            color="white"
            m={{ r: "0.75rem" }}
          />
          <Text textColor="white" textWeight="500">
            You cannot give padding and margin props to container
          </Text>
        </Div>
      </InfoCodeRow>
    </>
  );
};

export default ContainerDocs;
