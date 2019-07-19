import React from "react";
import { Div, Text, Tag, Row, Col, ThemeProvider, DefaultTheme } from "atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const theme = {
  ...DefaultTheme,
  grid: {
    ...DefaultTheme.grid,
    colCount: 9
  }
};

const breakpointsCode1 = `// Changing the Column Count through theme provider
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Row,
  Col } from "atomize";

const theme = {
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
  }
};

<ThemeProvider theme={theme}>
  <Container>
    <Row>
        <Col size={{ xs: 12, md: 4}} />
        <Col size={{ xs: 12, md: 8}} />
    </Row>
  </Container>
</ThemeProvider>
`;

const Breakpoints = () => {
  return (
    <>
      <InfoCodeRow id="breakpoints" code={breakpointsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Breakpoints
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Breakpoints are the device widths in px at which the device name
          changes for <Tag>lg</Tag>, <Tag>md</Tag>, <Tag>sm</Tag> &{" "}
          <Tag>xs</Tag>. By default these widths are <Tag>1200</Tag>,{" "}
          <Tag>992</Tag>, <Tag>768</Tag> & <Tag>576</Tag> respectively.
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          These default values can be modified by <Tag>ThemeProvider</Tag> as
          shown.
        </Text>
      </InfoCodeRow>
    </>
  );
};

export default Breakpoints;
