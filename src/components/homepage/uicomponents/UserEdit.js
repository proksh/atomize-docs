import React from "react"

import { Text, Div, Icon } from "atomize"

import boy from "../../../images/avatar/boy.png"

const UserEdit = ({ ...rest }) => (
  <Div
    align="center"
    border="1px solid"
    borderColor="gray200"
    justify="space-between"
    h="4.5rem"
    w={{
      xs: "calc(100% - 2rem)",
      md: "18rem",
      lg: "17rem",
    }}
    left={{ md: "2rem", lg: "21rem" }}
    top={{ md: "5.5rem", lg: "19.5rem" }}
    rounded="xl"
    bg="white"
    shadow="4"
    p="1rem"
    {...rest}
  >
    <Div d="flex">
      <Div
        h="2.5rem"
        w="2.5rem"
        m={{ r: "1rem" }}
        bgImg={boy}
        bgSize="cover"
        bgPos="center"
        rounded="circle"
      />
      <Div>
        <Text textWeight="500">John Doe</Text>
        <Text textSize="caption" textColor="light">
          UI/UX Designer
        </Text>
      </Div>
    </Div>
    <Icon
      name="Edit"
      color="black"
      hoverColor="info700"
      size="20px"
      cursor="pointer"
    />
  </Div>
)

UserEdit.defaultProps = {
  pos: { xs: "static", md: "absolute" },
  m: { xs: "1rem", md: "0" },
  d: { xs: "none", lg: "flex" },
}

export default UserEdit
