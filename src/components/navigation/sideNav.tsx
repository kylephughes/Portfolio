import NextLink from "next/link"
import { Avatar, Flex, List, ListItem } from "@chakra-ui/react"
import { NavItems } from "./utils"

const SideNav = () => {
  return (
    <Flex
      backgroundColor="black"
      display={["none", "flex"]}
      height="100vh"
      width="200px"
      flexDirection="column"
      position="fixed"
    >
      <Flex justifyContent="center" mt={4}>
        <Avatar.Root size="2xl" style={{ height: "7em", width: "7em" }}>
          <Avatar.Image src="/avatar.png" />
          <Avatar.Fallback>KH</Avatar.Fallback>
        </Avatar.Root>
      </Flex>
      <List.Root
        color="white"
        fontSize="large"
        lineHeight={2.5}
        listStyleType="none"
        padding="8"
        width="100%"
      >
        {NavItems.map(nav => (
          <ListItem
            borderBottom="1px solid"
            borderColor="gray.700"
            key={nav.href}
          >
            <NextLink href={nav.href}>{nav.label}</NextLink>
          </ListItem>
        ))}
      </List.Root>
    </Flex>
  )
}

export default SideNav
