"use client"
import { Flex } from "@chakra-ui/react"
import React from "react"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <Flex>
      <Sidebar />
      <Flex
        padding={["6", "12"]}
        marginLeft={[0, "200px"]}
        width={["100%", "calc(100% - 200px)"]}
        marginTop="50px"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
